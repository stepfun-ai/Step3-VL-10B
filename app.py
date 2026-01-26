import asyncio
import json
import jinja2
import copy
from fastapi import FastAPI
from fastapi.responses import StreamingResponse, FileResponse
from pydantic import BaseModel

# 引入 pacore 的工具
from pacore.utils import async_chat_completion

app = FastAPI()

# --- 配置区域 ---
API_BASE = "http://localhost:22002/v1/chat/completions"
MODEL_NAME = "./Step3-VL-10B"

class QueryRequest(BaseModel):
    prompt: str
    image: str | None = None  # 新增：接收 Base64 图片字符串
    use_pacore: bool = True
    parallel_num: int = 3


def parse_answer(response: str) -> str:
    """提取 </think> 之后的内容"""
    boa_string = r"</think>"
    boa_splits = response.split(boa_string)
    if len(boa_splits) > 1:
        return boa_splits[-1]
    return response


def format_controller_prompt(original_prompt: str, ref_responses: list[str]) -> str:
    """构建协同 Prompt (纯文本部分)"""
    controller_prompt_text = """\
You are given a problem and a list of reference responses. Your job is to analyze these references and provide your own response.

Original Problem:
{{ original_prompt }}

Reference Responses:
{% for response in ref_responses %}
Reference {{ loop.index }}:
{{ response }}
{% endfor %}

Now, based on the original problem and reference responses above, please provide your own comprehensive solution.
"""
    template = jinja2.Template(controller_prompt_text)
    return template.render(original_prompt=original_prompt, ref_responses=ref_responses)


async def pacore_stream_generator(user_prompt: str, image_data: str | None, use_pacore: bool = True,
                                  parallel_num: int = 3):
    """
    支持多模态的 PaCoRe 生成器
    """
    # 1. 构造初始 User Message 内容
    if image_data:
        # VL 格式: 文本 + 图片
        user_content = [
            {"type": "text", "text": user_prompt},
            {"type": "image_url", "image_url": {"url": image_data}}
        ]
    else:
        # 纯文本格式
        user_content = user_prompt

    messages = [{"role": "user", "content": user_content}]
    all_rounds_responses = []

    # 轮次配置
    if use_pacore:
        current_rounds_config = [parallel_num, 1]
    else:
        current_rounds_config = [1]

    # --- 循环开始 ---
    for round_idx, num_calls in enumerate(current_rounds_config):
        is_last_round = (round_idx == len(current_rounds_config) - 1)

        yield json.dumps({
            "type": "round_start",
            "round_index": round_idx,
            "total_calls": num_calls,
            "is_final": is_last_round
        }) + "\n"

        # 2. 准备当前轮次的 Messages
        if round_idx == 0:
            # 第一轮：直接使用包含图片(如果有)的初始消息
            current_messages = messages
        else:
            # 第二轮(Synthesis)：构造包含总结指令 + 原始图片 的消息
            prev_answers = [
                parse_answer(r["content"])
                for r in all_rounds_responses[-1]
                if r.get("content")
            ]

            # 生成纯文本的指令部分
            synthesis_text = format_controller_prompt(user_prompt, prev_answers)

            current_messages = copy.deepcopy(messages)

            # 关键修改：在 Synthesis 阶段也要保留图片！
            if image_data:
                # 重新构造 content，把新的指令文本和原来的图片组合
                current_messages[-1]["content"] = [
                    {"type": "text", "text": synthesis_text},
                    {"type": "image_url", "image_url": {"url": image_data}}
                ]
            else:
                current_messages[-1]["content"] = synthesis_text

            yield json.dumps({
                "type": "log",
                "message": f"正在结合视觉信息，根据上一轮的 {len(prev_answers)} 个想法进行协同综合..."
            }) + "\n"

        # 3. 并行调用 API
        tasks = [
            asyncio.create_task(async_chat_completion(
                messages=current_messages,
                model=MODEL_NAME,
                api_base=API_BASE,
                max_tokens=2048,
                temperature=1.0,
                top_p=1.0
            ))
            for _ in range(num_calls)
        ]

        round_results = []

        for future in asyncio.as_completed(tasks):
            try:
                resp = await future
                choice = resp.get("choices", [{}])[0]

                raw_content = choice.get("message", {}).get("content", "") or choice.get("text", "")
                reasoning = choice.get("message", {}).get("reasoning_content", "")
                content = raw_content

                # CoT 解析逻辑
                if not reasoning:
                    if "</think>" in raw_content:
                        parts = raw_content.split("</think>")
                        content = parts[-1].strip()
                        reasoning = "</think>".join(parts[:-1]).strip().replace("<think>", "").strip()
                    elif "<think>" in raw_content:
                        parts = raw_content.split("<think>")
                        if len(parts) > 1:
                            content = parts[0].strip()
                            reasoning = parts[1].strip()

                result_obj = {"content": content, "reasoning_content": reasoning}
                round_results.append(result_obj)

                yield json.dumps({
                    "type": "trajectory",
                    "round_index": round_idx,
                    "content": content,
                    "reasoning": reasoning
                }) + "\n"

            except Exception as e:
                print(f"Error: {e}")
                yield json.dumps({"type": "error", "message": str(e)}) + "\n"

        all_rounds_responses.append(round_results)

    yield json.dumps({"type": "done"}) + "\n"


@app.post("/chat")
async def chat_endpoint(request: QueryRequest):
    return StreamingResponse(
        pacore_stream_generator(
            request.prompt,
            request.image,
            request.use_pacore,
            request.parallel_num
        ),
        media_type="application/x-ndjson"
    )


@app.get("/")
async def serve_frontend():
    return FileResponse("templates/index.html")


if __name__ == "__main__":
    import uvicorn

    print("Starting PaCoRe VL Backend...")
    uvicorn.run(app, host="0.0.0.0", port=5000)
