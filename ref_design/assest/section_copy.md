# Step 3.5 Air 主页分章节技术报告文案（占位）

> 说明：以下为结构化占位文案，用于在无最终宣传材料时完成页面排版与信息密度控制。
> 后续替换时保持段落数量与层级结构。

## Head（页头 Abstract）

<en>

Step3.5-Turbo: Frontier-level reasoning. Turbo-charged efficiency.

Step3.5-Turbo is a production-grade reasoning engine built to decouple elite intelligence from heavy compute. With a sparse MoE design (11B active parameters) and an ultra-efficient 3:1 SWA strategy (512 window), it cuts attention cost for low-latency, cost-effective long-context inference—purpose-built for autonomous agents in real-world workflows.

Highlights

- 11B active parameters (sparse MoE) for high intelligence density

- 3:1 SWA (window 512) to drastically reduce attention complexity

- Competitive math: AIME 2025 95.9, HMMT (Feb 2025) 97.1 (our evals)

- Agentic performance: τ²-Bench 87.5 (our evals)

- Real-world robustness: SWE-bench Verified 72.1, Terminal-bench 2.0 43.0 (our evals)

</en>

<zh>

Step3.5-Turbo: 前沿级推理能力，涡轮级推理效率。

Step3.5-Turbo 是一款面向生产的推理引擎，目标是在不堆算力的前提下提供顶级智能。通过稀疏 MoE 架构（11B 激活参数）与高效 3:1 SWA 策略（窗口 512），显著降低注意力开销，实现低延迟、低成本的长上下文推理，为复杂自主 Agent 工作流而生。

核心亮点

- 11B 激活参数（稀疏 MoE），更高“智能密度”

- 3:1 SWA（窗口 512），大幅降低注意力复杂度与推理成本

- 竞赛数学：AIME 2025 95.9、HMMT（2025 年 2 月）97.1（基于我们的评测）

- Agent 工作流：τ²-Bench 87.5（基于我们的评测）

- 工业级任务：SWE-bench Verified 72.1、Terminal-bench 2.0 43.0（基于我们的评测）

</zh>

View Benchmarks

## BMK（Benchmark）

评测采用“知识、代码、数学、推理、SWE、深度研究”六个维度，以横向对比方式呈现多个同行模型的分数差异。每个维度均显示原始分数与归一化结果，便于跨任务分析。

对比表格强调统计口径一致性：同一数据集版本、统一评测脚本、固定温度与采样参数。对于包含多子项的维度（如 SWE / deep-research），采用加权平均聚合，避免单一子项主导结果。

在展示形式上，BMK 以“单表格紧凑排版”为核心，优先使用清晰的列对齐与轻量注释，降低读者对上下文切换的认知成本。

| Benchmark | Step3.5 Air | GLM-4.7 | MiniMax M2.1 | MiMo V2 Flash | Kimi K2 Thinking | DeepSeek V3.2 | Gemini 3.0 Pro | Claude Sonnet 4.5 | GPT-5 High | GPT-5.1 High |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **#Activated params** | 11B | 32B | 10B | 15B | 32B | 37B | - | - | - | - |
| **#Total params** | 196B | 355B | 230B | 309B | 1T | 671B | - | - | - | - |
| **REASONING** | | | | | | | | | | |
| MMLU-Pro | 83.3 | 84.3 | 88.0 | 84.9 | 84.6 | 85.0 | **90.1** | 88.2 | 87.5 | 87.0 |
| GPQA-Diamond | 81.7 | 85.7 | 83.0 | 83.7 | 84.5 | 82.4 | **91.9** | 83.4 | 85.7 | 88.1 |
| HLE | 17.3 | 24.8 | - | 22.1 | 23.9 | 25.1 | **37.5** | 13.7 | 26.3 | 25.7 |
| HLE (w/ Tools) | - | 42.8 | - | - | 44.9 | 40.8 | **45.8** | 32.0 | 35.2 | 42.7 |
| AIME 2025 | 94.8 | 95.7 | 83.0 | 94.1 | 94.5 | 93.1 | 95.0 | 87.0 | 94.6 | 94.0 |
| HMMT Feb. 2025 | 95.1 | 97.1 | - | 84.4 | 89.4 | 92.5 | **97.5** | 79.2 | 88.3 | 96.3 |
| HMMT Nov. 2025 | 96.2 | 93.5 | - | - | 89.2 | 90.2 | 93.3 | 81.7 | 89.2 | - |
| IMOAnswerBench | - | 82.0 | - | - | 78.6 | 78.3 | **83.3** | 65.8 | 76.0 | - |
| LiveCodeBench-v6 | 84.4 | 84.9 | 81.0 | 80.6 | 83.1 | 83.3 | **90.7** | 64.0 | 87.0 | 87.0 |
| **CODE AGENT** | | | | | | | | | | |
| SWE-bench Verified | 72.1 | 73.8 | 74.0 | 73.4 | 71.3 | 73.1 | 76.2 | **77.2** | 74.9 | 76.3 |
| SWE-bench Multilingual | 60.2 | 66.7 | 72.5 | 71.7 | 61.1 | **70.2** | - | 68.0 | 55.3 | - |
| Terminal Bench Hard | - | 33.3 | - | 30.5 | 30.6 | 35.4 | 39.0 | 33.3 | 30.5 | **43.0** |
| Terminal Bench 2.0 | 43.0 | 41.0 | 47.9 | 38.5 | 35.7 | 46.4 | **54.2** | 42.8 | 35.2 | 47.6 |
| **GENERAL AGENT** | | | | | | | | | | |
| BrowseComp | 54 | 52.0 | 47.4 | 45.4 | - | 51.4 | - | 24.1 | **54.9** | 50.8 |
| BrowseComp (w/ Context)| 67 | 67.5 | 62.0 | 58.3 | 60.2 | **67.6** | 59.2 | - | - | - |
| BrowseComp-ZH | 57.9 | 66.6 | - | - | 62.3 | 65.0 | - | 42.4 | 63.0 | - |
| xbench| 80 | 66.6 | - | - | 62.3 | 65.0 | - | 42.4 | 63.0 | - |
| $\tau^2$-Bench | 87.5 | 87.4 | - | 80.3 | 74.3 | 85.3 | **90.7** | 87.2 | 82.4 | 82.7 |
| $\tau^2$-Bench Telecom | - | - | 87.0 | - | - | - | - | - | - | - |


## Showcase（AgentOS + Expert Models）

Showcase 聚焦在 AgentOS 的协作范式：Step 3.5 Air 作为 host-agent 对任务进行分解与路由，并联动多个 expert-model 完成检索、规划、编码、验证与呈现。

典型流程为：host-agent 先建立任务图（Task Graph），再为每个子任务分配与四类场景对应的专家能力（图像创作/语音控制/GUI 操作/深度研究）。在执行阶段，host-agent 汇总证据链并进行一致性校验，最终输出结构化结果。

通过 tab 切换展示多个任务，每个 tab 内部为可交互演示区，用于模拟真实交互闭环。Showcase 具体分为以下四类，每类包含 2-3 个可视化样例卡片：

（1）图像创作  
样例 A：多轮指令生成品牌 KV，从“风格参考 + 文案 + 版式限制”生成初稿并自动做 3 版变体。  
样例 B：同一场景在不同质感（玻璃/金属/纸张）间切换，保持构图与主体一致。  
样例 C：基于产品规格表自动生成信息图，输出可编辑图层描述。

（2）语音控制  
样例 A：语音口令触发“检索 → 汇总 → 回答”，并生成可追溯的要点清单。  
样例 B：语音指令驱动桌面应用完成“打开项目 → 运行脚本 → 展示结果”。  
样例 C：多说话人对话摘要，自动分离发言人并输出任务清单。

（3）GUI 操作  
样例 A：在浏览器中完成“登录 → 表单填写 → 下载报告”的 GUI 自动化演示。  
样例 B：跨应用拖拽与截图标注，自动生成操作教程与步骤说明。  
样例 C：识别复杂 UI 并完成批量配置（如多项参数设置）。

（4）深度研究  
样例 A：跨文档研究，自动构建“问题 → 证据 → 结论”链路。  
样例 B：技术路线比较，输出对比矩阵与风险评估。  
样例 C：对外公开资料的来源追溯与引用整理，形成摘要与引用列表。

## 技术创新 1（Innovation Module 1）

模块名称建议：Adaptive Expert Routing（自适应专家路由）。该模块的核心目标是基于任务表征与执行反馈，动态选择专家模型并调整调用顺序，以降低成本并提高稳定性。

给定任务表征向量 \(z\)，路由权重可表示为：\(\pi = \mathrm{softmax}(Wz + b)\)。每次调用后使用质量评估信号 \(r\) 更新权重，使系统趋向最优专家组合。图表建议：路由权重随迭代变化曲线、不同专家贡献度堆叠图。

为避免过拟合单一专家，路由策略引入探索项与置信度门控，保证在分布外任务上仍具备可恢复的探索能力。

## 末尾（体验入口 / 未来计划 / 局限性）

体验入口：提供“申请接入 / 联系合作 / 了解更多”的 CTA，强调合规与试用流程。

未来计划：扩展更长上下文支持、完善多模态输入、提升端侧推理效率、发布更完整训练与评测报告。

局限性：在极端长链推理、跨域知识迁移与强对抗式场景仍存在不足；工程侧在多工具协作与长时间运行稳定性方面持续优化中。
