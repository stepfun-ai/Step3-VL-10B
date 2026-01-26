import time
import uuid
import aiohttp
import json
import copy
import random
from loguru import logger
from typing import Optional
from pathlib import Path
import asyncio


def load(path: str, mode=None, **kwargs):
    if path.endswith(".json") or mode == "json":
        with open(path, "r") as f:
            data = json.load(f, **kwargs)
    elif path.endswith(".jsonl") or mode == "jsonl":
        with open(path, "r") as f:
            data = [json.loads(t, **kwargs) for t in f.readlines()]
    else:
        raise ValueError(f"Unsupported file extension: {path}")
    return data


def generate_request_id() -> str:
    t = time.localtime()
    return f"pacore-{t.tm_year}-{t.tm_mon:02d}-{t.tm_mday:02d}-{t.tm_hour:02d}-{t.tm_min:02d}-{t.tm_sec:02d}-{uuid.uuid4()}"


async def post_runtime_data(url: str, payload: dict, headers: dict) -> dict:
    """Post request and return JSON response (non-streaming)."""
    timeout = aiohttp.ClientTimeout(total=3000)
    async with aiohttp.ClientSession(timeout=timeout, connector=aiohttp.TCPConnector(keepalive_timeout=0)) as session:
        async with session.post(url, json=payload, headers=headers, ssl=False) as resp:
            if resp.status != 200:
                raise aiohttp.ClientResponseError(
                    resp.request_info, resp.history,
                    status=resp.status, message=await resp.text()
                )
            result = await resp.json()
            # Normalize response
            if "choices" in result and len(result["choices"]) > 0:
                for choice in result["choices"]:
                    if "text" not in choice and "message" in choice:
                        choice["text"] = choice["message"].get("content", "")
            return result


async def post_streaming_data(url: str, payload: dict, headers: dict) -> dict:
    """
    Post request with streaming response handling.
    Collects all SSE chunks and returns complete response.
    """
    payload = copy.deepcopy(payload)
    payload["stream"] = True

    # Streaming timeout config
    timeout = aiohttp.ClientTimeout(
        total=7200,
        connect=60,
        sock_connect=20,
        sock_read=1000,
    )

    async with aiohttp.ClientSession(timeout=timeout, connector=aiohttp.TCPConnector(keepalive_timeout=0)) as session:
        async with session.post(url, json=payload, headers=headers, ssl=False) as resp:
            if resp.status != 200:
                raise aiohttp.ClientResponseError(
                    resp.request_info, resp.history,
                    status=resp.status, message=await resp.text()
                )

            # Initialize response structure
            final_response = {}
            full_content = ""
            full_reasoning_content = ""
            current_choice = {}

            async for line in resp.content:
                if not line:
                    continue
                line = line.decode().strip()
                if not line.startswith("data: "):
                    continue
                line = line[6:].strip()
                if line == "[DONE]":
                    break

                try:
                    piece = json.loads(line)
                except json.JSONDecodeError:
                    continue

                # Initialize from first chunk
                if not final_response:
                    final_response = {k: v for k, v in piece.items() if k != "choices"}
                    final_response["choices"] = [{
                        "index": 0,
                        "message": {"role": "", "content": ""},
                        "finish_reason": None,
                    }]

                if not piece.get("choices"):
                    if "error" in piece:
                        raise aiohttp.ClientResponseError(
                            resp.request_info, resp.history,
                            status=piece["error"].get("code", 500),
                            message=piece["error"].get("message", "Unknown error")
                        )
                    continue

                choice = piece["choices"][0]
                current_choice.update(choice)
                delta = choice.get("delta", {})

                if "role" in delta:
                    final_response["choices"][0]["message"]["role"] = delta["role"]
                if "content" in delta:
                    full_content += delta.get("content") or ""
                if "reasoning_content" in delta:
                    full_reasoning_content += delta.get("reasoning_content") or ""
                if "usage" in piece and piece["usage"]:
                    final_response["usage"] = piece["usage"]

            # Assemble final response
            if final_response and "choices" in final_response:
                final_choice = final_response["choices"][0]
                final_choice["message"]["content"] = full_content
                final_choice["message"]["reasoning_content"] = full_reasoning_content
                final_choice["finish_reason"] = current_choice.get("finish_reason")
                final_choice["text"] = full_content

            return final_response


async def async_chat_completion(
    messages: list[dict],
    model: str,
    api_base: str,
    max_tokens: Optional[int] = None,
    temperature: float = 1.0,
    top_p: float = 1.0,
    timeout_seconds: float = 7200,
    retry_times: int = 5,
    stream: bool = False,
) -> dict:
    """Make async chat completion API call with retry."""
    payload = {
        "model": model,
        "messages": messages,
        "temperature": temperature,
        "top_p": top_p,
    }
    if max_tokens is not None:
        payload["max_tokens"] = max_tokens

    for attempt in range(retry_times):
        headers = {"Content-Type": "application/json", "X-Request-ID": generate_request_id()}
        try:
            if stream:
                return await post_streaming_data(api_base, payload, headers)
            else:
                return await post_runtime_data(api_base, payload, headers)
        except aiohttp.ClientResponseError as e:
            logger.warning(f"[{headers['X-Request-ID']}] API error {e.status}: {str(e.message)[:200]}")
            if e.status in [503, 502, 500]:
                await asyncio.sleep(random.uniform(5, 20))
            elif e.status in [400, 413] and ("reduce the length" in str(e.message) or "too large" in str(e.message)):
                if "max_tokens" in payload:
                    payload.pop("max_tokens")
                else:
                    return {"choices": [{"text": str(e.message), "finish_reason": "length"}]}
            else:
                await asyncio.sleep(random.uniform(1, 5))
        except aiohttp.ClientError as e:
            logger.warning(f"Request failed (attempt {attempt + 1}): {e}")
            await asyncio.sleep(random.uniform(5, 20))
        except Exception as e:
            logger.warning(f"Request failed (attempt {attempt + 1}): {e}")
            if "TimeoutError" in type(e).__name__:
                continue
            await asyncio.sleep(random.uniform(2, 10))

    return {"choices": [{"text": "", "finish_reason": "error"}]}

def save_jsonl(data: list[dict], path: str):
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w") as f:
        for item in data:
            f.write(json.dumps(item, ensure_ascii=False) + "\n")