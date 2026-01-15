// const i18n = {
//     zh: {
//         'nav.abstract': 'Abstract',
//         'nav.benchmark': 'Benchmark',
//         'nav.showcase': 'Showcase',
//         'nav.method': 'Method',
//         'hero.subtitle': '前沿级推理能力，涡轮级推理效率',
//         'metric.params': '参数量',
//         'metric.context': '上下文',
//         'metric.tokens': '训练 Token',
//         'section.abstract': 'Abstract',
//         'section.contrib': '核心亮点',
//         'section.benchmark': 'Benchmark',
//         'section.showcase': 'Showcase',
//         'section.method': '技术创新',
//         'abstract.p1': '<strong class="highlight-brand">Step3.5-Turbo</strong> 是一款面向生产的推理引擎，目标是在不堆算力的前提下提供顶级智能。通过<em>稀疏 MoE 架构</em>（11B 激活参数）与高效 <em>3:1 SWA 策略</em>（窗口 512），显著降低注意力开销，实现低延迟、低成本的长上下文推理，为复杂自主 Agent 工作流而生。',
//         'abstract.p2': '',
//         'abstract.p3': '',
//         'contrib.1': '11B 激活参数（稀疏 MoE），更高"智能密度"',
//         'contrib.2': '3:1 SWA（窗口 512），大幅降低注意力复杂度与推理成本',
//         'contrib.3': '竞赛数学：AIME 2025 95.9、HMMT（2025 年 2 月）97.1',
//         'contrib.4': 'Agent 工作流：τ²-Bench 87.5',
//         'contrib.5': '工业级任务：SWE-bench Verified 72.1、Terminal-bench 2.0 43.0',
//         'cite.label': 'How to cite',
//         'cite.copy': '复制 BibTeX',
//         'bmk.intro': '评测采用"<em>推理、代码、Agent</em>"三个核心维度，以横向对比方式呈现多个同行模型的分数差异。对比表格强调<em>统计口径一致性</em>：同一数据集版本、统一评测脚本、固定温度与采样参数。',
//         'bmk.t1.title': 'Table 1: 知识与推理',
//         'bmk.t2.title': 'Table 2: 数学',
//         'bmk.t3.title': 'Table 3: 代码与 SWE',
//         'bmk.t4.title': 'Table 4: Agent 与工具使用',
//         'bmk.note': '注：绿色高亮表示该指标最优，蓝色高亮表示 Step3.5 Air 在开源模型中领先。统计口径保持一致。',
//         'table.model': '模型',
//         'showcase.intro': 'Showcase 聚焦在 <em>AgentOS</em> 的协作范式：Step 3.5 Air 作为 <em>host-agent</em> 对任务进行分解与路由，并联动多个 <em>expert-model</em> 完成检索、规划、编码、验证与呈现。',
//         'showcase.cat1': '2.1 图像创作',
//         'showcase.cat2': '2.2 语音控制',
//         'showcase.cat3': '2.3 GUI 操作',
//         'showcase.cat4': '2.4 深度研究',
//         'demo.image.a.user': '生成品牌 KV，风格参考：简约科技感，文案"Step into the Future"，版式要求：横版 16:9',
//         'demo.image.a.result': '已生成 3 版品牌 KV 变体，包含不同构图与配色方案。',
//         'demo.image.b.user': '将这个场景分别渲染为玻璃、金属、纸张三种质感，保持构图一致',
//         'demo.image.b.result': '已生成 3 种质感变体，构图与主体保持一致。',
//         'demo.image.c.user': '根据这份产品规格表自动生成信息图',
//         'demo.image.c.result': '信息图已生成，支持导出为 SVG/PNG 格式。',
//         'demo.voice.a.user': '"帮我查一下最近的 AI 芯片行业动态，整理成要点清单"',
//         'demo.voice.a.result': '已整理 5 条要点清单，每条均附来源链接。',
//         'demo.voice.b.user': '"打开项目 demo-app，运行测试脚本，展示结果"',
//         'demo.voice.b.result': '测试完成，24 个用例全部通过。',
//         'demo.voice.c.user': '这是一段会议录音，帮我分离发言人并整理任务清单',
//         'demo.voice.c.result': '会议摘要已生成，包含 3 位发言人与 8 项任务。',
//         'demo.gui.a.user': '在浏览器中完成：登录后台 → 填写报表 → 下载 PDF 报告',
//         'demo.gui.a.result': 'GUI 自动化完成，报告已下载，耗时 8 秒。',
//         'demo.gui.b.user': '录制我接下来的操作，自动生成操作教程文档',
//         'demo.gui.b.result': '教程文档已生成，包含 12 步操作说明。',
//         'demo.gui.c.user': '识别这个配置界面，批量设置所有参数为推荐值',
//         'demo.gui.c.result': '批量配置完成，18 个参数已设置为推荐值。',
//         'demo.research.a.user': '阅读这 5 篇论文，构建"问题 → 证据 → 结论"的研究链路',
//         'demo.research.a.result': '研究链路已构建，包含 3 条完整证据链。',
//         'demo.research.b.user': '比较 RAG、Fine-tuning、Prompt Engineering 三种技术路线的优劣',
//         'demo.research.b.result': '技术对比完成，包含对比矩阵与场景推荐。',
//         'demo.research.c.user': '整理这个主题的公开资料，追溯来源并生成引用列表',
//         'demo.research.c.result': '资料整理完成，包含 28 条规范引用。',
//         'method.intro': '模块名称：<em>Adaptive Expert Routing</em>（自适应专家路由）。该模块的核心目标是基于<em>任务表征</em>与<em>执行反馈</em>，动态选择专家模型并调整调用顺序，以<em>降低成本</em>并<em>提高稳定性</em>。',
//         'method.formula.title': '3.1 路由权重计算',
//         'method.formula.desc': '给定任务表征向量 \\(z\\)，路由权重可表示为：',
//         'method.formula.update': '每次调用后使用质量评估信号 \\(r\\) 更新权重，使系统趋向最优专家组合：',
//         'method.explore.title': '3.2 探索与置信度门控',
//         'method.explore.p1': '为避免过拟合单一专家，路由策略引入探索项与置信度门控，保证在分布外任务上仍具备可恢复的探索能力。',
//         'method.explore.p2': '实现方式：当路由置信度低于阈值 \\(\\tau\\) 时，系统启用并行多专家调用，并动态调整后续路由。',
//         'method.chart.caption': 'Figure 1: 路由权重随训练迭代的演化曲线',
//         'footer.cta.title': '开始体验',
//         'footer.cta.desc': '申请接入、联系合作或了解更多合规与试用流程。',
//         'footer.cta.apply': '申请接入',
//         'footer.cta.contact': '联系我们',
//         'footer.roadmap.title': '未来计划',
//         'footer.roadmap.r1': '扩展更长上下文支持（256K+）',
//         'footer.roadmap.r2': '完善多模态输入能力',
//         'footer.roadmap.r3': '提升端侧推理效率',
//         'footer.roadmap.r4': '发布更完整训练与评测报告',
//         'footer.limits.title': '局限性',
//         'footer.limits.l1': '极端长链推理仍有不足',
//         'footer.limits.l2': '跨域知识迁移需优化',
//         'footer.limits.l3': '强对抗式场景表现待提升',
//         'footer.limits.l4': '多工具协作与长时间运行稳定性持续优化中'
//     },
//     en: {
//         'nav.abstract': 'Abstract',
//         'nav.benchmark': 'Benchmark',
//         'nav.showcase': 'Showcase',
//         'nav.method': 'Method',
//         'hero.subtitle': 'Frontier-level reasoning. Turbo-charged efficiency.',
//         'metric.params': 'Parameters',
//         'metric.context': 'Context',
//         'metric.tokens': 'Training Tokens',
//         'section.abstract': 'Abstract',
//         'section.contrib': 'Highlights',
//         'section.benchmark': 'Benchmark',
//         'section.showcase': 'Showcase',
//         'section.method': 'Technical Innovation',
//         'abstract.p1': '<strong class="highlight-brand">Step3.5-Turbo</strong> is a production-grade reasoning engine built to decouple elite intelligence from heavy compute. With a <em>sparse MoE design</em> (11B active parameters) and an ultra-efficient <em>3:1 SWA strategy</em> (512 window), it cuts attention cost for low-latency, cost-effective long-context inference—purpose-built for autonomous agents in real-world workflows.',
//         'abstract.p2': '',
//         'abstract.p3': '',
//         'contrib.1': '11B active parameters (sparse MoE) for high intelligence density',
//         'contrib.2': '3:1 SWA (window 512) to drastically reduce attention complexity',
//         'contrib.3': 'Competitive math: AIME 2025 95.9, HMMT (Feb 2025) 97.1',
//         'contrib.4': 'Agentic performance: τ²-Bench 87.5',
//         'contrib.5': 'Real-world robustness: SWE-bench Verified 72.1, Terminal-bench 2.0 43.0',
//         'cite.label': 'How to cite',
//         'cite.copy': 'Copy BibTeX',
//         'bmk.intro': 'Evaluation uses three core dimensions: <em>Reasoning, Code, and Agent</em>, presenting score differences across peer models in a horizontal comparison. Tables emphasize <em>statistical consistency</em>: same dataset version, unified evaluation scripts, fixed temperature and sampling parameters.',
//         'bmk.t1.title': 'Table 1: Knowledge & Reasoning',
//         'bmk.t2.title': 'Table 2: Math',
//         'bmk.t3.title': 'Table 3: Code & SWE',
//         'bmk.t4.title': 'Table 4: Agent & Tool Use',
//         'bmk.note': 'Note: Green highlight indicates best score, blue highlight indicates Step3.5 Air leads among open-source models. Consistent statistical standards.',
//         'table.model': 'Model',
//         'showcase.intro': 'Showcase focuses on <em>AgentOS</em> collaboration paradigm: Step 3.5 Air as <em>host-agent</em> decomposes and routes tasks, coordinating multiple <em>expert-models</em> for retrieval, planning, coding, verification, and presentation.',
//         'showcase.cat1': '2.1 Image Creation',
//         'showcase.cat2': '2.2 Voice Control',
//         'showcase.cat3': '2.3 GUI Operations',
//         'showcase.cat4': '2.4 Deep Research',
//         'demo.image.a.user': 'Generate brand KV, style reference: minimalist tech, copy "Step into the Future", format: 16:9 landscape',
//         'demo.image.a.result': 'Generated 3 brand KV variants with different compositions and color schemes.',
//         'demo.image.b.user': 'Render this scene in glass, metal, and paper textures while maintaining composition',
//         'demo.image.b.result': 'Generated 3 texture variants with consistent composition and subject.',
//         'demo.image.c.user': 'Auto-generate infographic from this product spec sheet',
//         'demo.image.c.result': 'Infographic generated, exportable as SVG/PNG.',
//         'demo.voice.a.user': '"Search recent AI chip industry news and compile key points"',
//         'demo.voice.a.result': 'Compiled 5 key points with source links.',
//         'demo.voice.b.user': '"Open project demo-app, run test script, show results"',
//         'demo.voice.b.result': 'Tests complete, all 24 cases passed.',
//         'demo.voice.c.user': 'This is a meeting recording, separate speakers and compile task list',
//         'demo.voice.c.result': 'Meeting summary generated with 3 speakers and 8 tasks.',
//         'demo.gui.a.user': 'Complete in browser: Login → Fill report form → Download PDF',
//         'demo.gui.a.result': 'GUI automation complete, report downloaded in 8 seconds.',
//         'demo.gui.b.user': 'Record my next actions and auto-generate tutorial documentation',
//         'demo.gui.b.result': 'Tutorial generated with 12 steps.',
//         'demo.gui.c.user': 'Identify this config interface and batch-set all parameters to recommended values',
//         'demo.gui.c.result': 'Batch configuration complete, 18 parameters set.',
//         'demo.research.a.user': 'Read these 5 papers and build "Question → Evidence → Conclusion" research paths',
//         'demo.research.a.result': 'Research paths built with 3 complete evidence chains.',
//         'demo.research.b.user': 'Compare RAG, Fine-tuning, and Prompt Engineering technical approaches',
//         'demo.research.b.result': 'Comparison complete with matrix and scenario recommendations.',
//         'demo.research.c.user': 'Organize public materials on this topic, trace sources and generate citation list',
//         'demo.research.c.result': 'Materials organized with 28 formatted citations.',
//         'method.intro': 'Module: <em>Adaptive Expert Routing</em>. Core goal is dynamically selecting expert models and adjusting call order based on <em>task representation</em> and <em>execution feedback</em>, <em>reducing cost</em> and <em>improving stability</em>.',
//         'method.formula.title': '3.1 Routing Weight Calculation',
//         'method.formula.desc': 'Given task representation vector \\(z\\), routing weights can be expressed as:',
//         'method.formula.update': 'After each call, use quality signal \\(r\\) to update weights toward optimal expert combination:',
//         'method.explore.title': '3.2 Exploration & Confidence Gating',
//         'method.explore.p1': 'To avoid overfitting to single experts, routing strategy includes exploration terms and confidence gating, ensuring recoverable exploration on out-of-distribution tasks.',
//         'method.explore.p2': 'Implementation: When routing confidence falls below threshold \\(\\tau\\), system enables parallel multi-expert calls and dynamically adjusts subsequent routing.',
//         'method.chart.caption': 'Figure 1: Routing weight evolution over training iterations.',
//         'footer.cta.title': 'Get Started',
//         'footer.cta.desc': 'Apply for access, contact for collaboration, or learn about compliance and trial process.',
//         'footer.cta.apply': 'Apply for Access',
//         'footer.cta.contact': 'Contact Us',
//         'footer.roadmap.title': 'Roadmap',
//         'footer.roadmap.r1': 'Extend context length support (256K+)',
//         'footer.roadmap.r2': 'Enhance multimodal input capabilities',
//         'footer.roadmap.r3': 'Improve edge inference efficiency',
//         'footer.roadmap.r4': 'Release comprehensive training and evaluation report',
//         'footer.limits.title': 'Limitations',
//         'footer.limits.l1': 'Extreme long-chain reasoning still limited',
//         'footer.limits.l2': 'Cross-domain knowledge transfer needs optimization',
//         'footer.limits.l3': 'Adversarial scenario performance needs improvement',
//         'footer.limits.l4': 'Multi-tool collaboration and long-running stability being optimized'
//     }
// };

const i18n = {
    zh: {
        'nav.abstract': 'Abstract',
        'nav.benchmark': 'Benchmark',
        'nav.showcase': 'Showcase',
        'nav.method': 'Method',
        'hero.subtitle': 'Step into the Future',
        'metric.params': '参数量',
        'metric.context': '上下文',
        'metric.tokens': '训练 Token',
        'section.abstract': 'Abstract',
        'section.contrib': 'Contributions',
        'section.benchmark': 'Benchmark',
        'section.showcase': 'Showcase',
        'section.method': 'Method',
        'abstract.p1': '<strong>Step3-VL-10B</strong> 是一款轻量级开源基础模型，旨在重新定义<em>紧凑高效</em>与<em>前沿多模态智能</em>之间的权衡。尽管仅有 <strong>10B 参数</strong>，Step3-VL-10B 在<em>视觉感知</em>、<em>复杂推理</em>和<em>人类对齐</em>方面表现卓越。',
        'abstract.p2': '该模型在 10B 规模以下的模型中始终表现最优，并能媲美甚至超越规模大 <em>10×–20×</em> 的开源模型（如 GLM-4.6V 106B-A12B、Qwen3-VL-Thinking 235B-A22B）以及顶级闭源旗舰模型（如 Gemini 2.5 Pro、Seed-1.5-VL）。',
        'abstract.p3': 'Step3-VL-10B 的成功源于两大核心设计：<em>高质量多模态语料库的统一预训练</em>（1.2T tokens）与<em>规模化多模态强化学习</em>（超过 1,400 次 RL 迭代），并引入 <em>Parallel Coordinated Reasoning (PaCoRe)</em> 实现并行视觉探索的证据聚合。',
        'contrib.1': '开源基础模型与指令微调版本，支持完整微调与自定义部署',
        'contrib.2': 'STEM 推理、视觉感知、GUI & OCR、空间理解等多项能力',
        'contrib.3': '在 AIME 2025 达到 94.43%，MathVision 达到 75.95%（PaCoRe 模式）',
        'cite.label': 'How to cite',
        'cite.copy': '复制 BibTeX',
        'bmk.intro': '评测采用"<em>STEM 推理、识别、OCR & 文档、GUI Grounding、空间理解、代码</em>"等核心维度，以横向对比方式呈现多个同行模型的分数差异。',
        'bmk.t1.title': 'Table 1: 知识与推理',
        'bmk.t2.title': 'Table 2: 数学',
        'bmk.t3.title': 'Table 3: 代码与 SWE',
        'bmk.t4.title': 'Table 4: Agent 与工具使用',
        'bmk.note': '注：绿色高亮表示该指标最优，蓝色高亮表示 Step3.5 Air 在开源模型中领先。统计口径保持一致。',
        'bmk.note.detail': '注：<strong>SeRe</strong> (Sequential Reasoning) 使用最大 64K tokens；<strong>PaCoRe</strong> (Parallel Coordinated Reasoning) 聚合 16 个并行 rollouts，最大 128K tokens。测试采用: temperature=1, top_p=1, top_k=0。',
        'table.model': '模型',
        'showcase.intro': 'Showcase 通过真实案例展示 Step3-VL-10B 的多模态推理能力：Case 1 聚焦莫尔斯电码表格解析，其他案例覆盖GUI感知与视觉识别和推理。',
        'showcase.cat1': '2.1 莫尔斯推理',
        'showcase.cat2': '2.2 GUI 感知',
        'showcase.cat3': '2.3 视觉识别',
        'showcase.cat4': '2.4 图推理',
        'demo.image.a.user': '根据表格推导"STEPFUN"的莫尔斯编码',
        'demo.image.a.result': '已生成 3 版品牌 KV 变体，包含不同构图与配色方案。',
        'demo.image.b.user': '将这个场景分别渲染为玻璃、金属、纸张三种质感，保持构图一致',
        'demo.image.b.result': '已生成 3 种质感变体，构图与主体保持一致。',
        'demo.image.c.user': '根据这份产品规格表自动生成信息图',
        'demo.image.c.result': '信息图已生成，支持导出为 SVG/PNG 格式。',
        'demo.voice.a.user': '"帮我查一下最近的 AI 芯片行业动态，整理成要点清单"',
        'demo.voice.a.result': '已整理 5 条要点清单，每条均附来源链接。',
        'demo.voice.b.user': '"打开项目 demo-app，运行测试脚本，展示结果"',
        'demo.voice.b.result': '测试完成，24 个用例全部通过。',
        'demo.voice.c.user': '这是一段会议录音，帮我分离发言人并整理任务清单',
        'demo.voice.c.result': '会议摘要已生成，包含 3 位发言人与 8 项任务。',
        'demo.gui.a.user': '在浏览器中完成：登录后台 → 填写报表 → 下载 PDF 报告',
        'demo.gui.a.result': 'GUI 自动化完成，报告已下载，耗时 8 秒。',
        'demo.gui.b.user': '录制我接下来的操作，自动生成操作教程文档',
        'demo.gui.b.result': '教程文档已生成，包含 12 步操作说明。',
        'demo.gui.c.user': '识别这个配置界面，批量设置所有参数为推荐值',
        'demo.gui.c.result': '批量配置完成，18 个参数已设置为推荐值。',
        'demo.research.a.user': '阅读这 5 篇论文，构建"问题 → 证据 → 结论"的研究链路',
        'demo.research.a.result': '研究链路已构建，包含 3 条完整证据链。',
        'demo.research.b.user': '比较 RAG、Fine-tuning、Prompt Engineering 三种技术路线的优劣',
        'demo.research.b.result': '技术对比完成，包含对比矩阵与场景推荐。',
        'demo.research.c.user': '整理这个主题的公开资料，追溯来源并生成引用列表',
        'demo.research.c.result': '资料整理完成，包含 28 条规范引用。',
        'method.arch.title': '架构',
        'method.arch.encoder': '视觉编码器：PE-lang（Language-Optimized Perception Encoder），1.8B 参数。',
        'method.arch.decoder': '解码器：Qwen3-8B。',
        'method.arch.projector': '投影层：两个连续的 stride-2 层（实现 16× 空间下采样）。',
        'method.arch.resolution': '分辨率：多裁剪策略，由 728×728 全局视图与多个 504×504 局部裁剪组成。',

        'method.train.title': '训练流程',
        'method.train.pretrain': '<strong>预训练：</strong> 单阶段、全参数解冻策略，使用 AdamW 优化器（总计：1.2T tokens，370K iterations）。',
        'method.train.pretrain.p1': '阶段 1：900B tokens。',
        'method.train.pretrain.p2': '阶段 2：300B tokens。',

        'method.train.sft': '<strong>监督微调（SFT）：</strong> 两阶段方案（总计：约 226B tokens）。',
        'method.train.sft.s1': '阶段 1：文本与多模态比例 9:1（约 190B tokens）。',
        'method.train.sft.s2': '阶段 2：文本与多模态比例 1:1（约 36B tokens）。',

        'method.train.rl': '<strong>强化学习：</strong> 总计 &gt;1,400 次迭代。',
        'method.train.rl.rlvr': 'RLVR：600 次迭代（任务：数学、几何、物理、感知、grounding）。',
        'method.train.rl.rlhf': 'RLHF：300 次迭代（任务：开放式生成）。',
        'method.train.rl.pacore': 'PaCoRe Training：500 次迭代。',
        'footer.cta.title': '开始体验',
        'footer.cta.desc': '申请接入、联系合作或了解更多合规与试用流程。',
        'footer.cta.apply': '申请接入',
        'footer.cta.contact': '联系我们',
        'footer.roadmap.title': '未来计划',
        'footer.roadmap.r1': '扩展更长上下文支持（256K+）',
        'footer.roadmap.r2': '完善多模态输入能力',
        'footer.roadmap.r3': '提升端侧推理效率',
        'footer.roadmap.r4': '发布更完整训练与评测报告',
        'footer.limits.title': '局限性',
        'footer.limits.l1': '极端长链推理仍有不足',
        'footer.limits.l2': '跨域知识迁移需优化',
        'footer.limits.l3': '强对抗式场景表现待提升',
        'footer.limits.l4': '多工具协作与长时间运行稳定性持续优化中'
    },
    en: {
        'nav.abstract': 'Abstract',
        'nav.benchmark': 'Benchmark',
        'nav.showcase': 'Showcase',
        'nav.method': 'Method',
        'hero.subtitle': 'Step into the Future',
        'metric.params': 'Parameters',
        'metric.context': 'Context',
        'metric.tokens': 'Training Tokens',
        'section.abstract': 'Abstract',
        'section.contrib': 'Contributions',
        'section.benchmark': 'Benchmark',
        'section.showcase': 'Showcase',
        'section.method': 'Method',
        'abstract.p1': '<strong>Step3-VL-10B</strong> is a lightweight open-source foundation model designed to redefine the trade-off between <em>compact efficiency</em> and <em>frontier multimodal intelligence</em>. Despite its <strong>10B parameter footprint</strong>, Step3-VL-10B excels in <em>visual perception</em>, <em>complex reasoning</em>, and <em>human-centric alignment</em>.',
        'abstract.p2': 'It consistently outperforms models under the 10B scale and rivals or surpasses significantly larger open-weights models (<em>10×–20× its size</em>), such as GLM-4.6V (106B-A12B), Qwen3-VL-Thinking (235B-A22B), and top-tier proprietary flagships like Gemini 2.5 Pro and Seed-1.5-VL.',
        'abstract.p3': 'Step3-VL-10B\'s success is driven by two key strategic designs: <em>Unified Pre-training on High-Quality Multimodal Corpus</em> (1.2T tokens) and <em>Scaled Multimodal Reinforcement Learning</em> (over 1,400 RL iterations), along with <em>Parallel Coordinated Reasoning (PaCoRe)</em> for aggregating evidence from parallel visual exploration.',
        'contrib.1': 'Open-source base model and instruction-tuned version, supporting full fine-tuning and custom deployment',
        'contrib.2': 'STEM reasoning, visual perception, GUI & OCR, spatial understanding capabilities',
        'contrib.3': 'Achieves 94.43% on AIME 2025 and 75.95% on MathVision (PaCoRe mode)',
        'cite.label': 'How to cite',
        'cite.copy': 'Copy BibTeX',
        'bmk.intro': 'Evaluation uses core dimensions including <em>STEM Reasoning, Recognition, OCR & Document, GUI Grounding, Spatial Understanding, and Code</em>, presenting score differences across peer models in a horizontal comparison.',
        'bmk.t1.title': 'Table 1: Knowledge & Reasoning',
        'bmk.t2.title': 'Table 2: Math',
        'bmk.t3.title': 'Table 3: Code & SWE',
        'bmk.t4.title': 'Table 4: Agent & Tool Use',
        'bmk.note': 'Note: Green highlight indicates best score, blue highlight indicates Step3.5 Air leads among open-source models. Consistent statistical standards.',
        'bmk.note.detail': 'Note: <strong>SeRe</strong> (Sequential Reasoning) uses a maximum of 64K tokens; <strong>PaCoRe</strong> (Parallel Coordinated Reasoning) aggregates 16 parallel rollouts with a maximum of 128K tokens. Testing settings: temperature=1, top_p=1, top_k=0.',
        'table.model': 'Model',
        'showcase.intro': 'Showcase highlights real cases powered by Step3-VL-10B: Case 1 walks through Morse-code reasoning from a table, followed by GUI perception, visual recognition, and graph reasoning.',
        'showcase.cat1': '2.1 Morse Reasoning',
        'showcase.cat2': '2.2 GUI Perception',
        'showcase.cat3': '2.3 Visual Recognition',
        'showcase.cat4': '2.4 Graph Reasoning',
        'demo.image.a.user': 'Generate brand KV, style reference: minimalist tech, copy "Step into the Future", format: 16:9 landscape',
        'demo.image.a.result': 'Generated 3 brand KV variants with different compositions and color schemes.',
        'demo.image.b.user': 'Render this scene in glass, metal, and paper textures while maintaining composition',
        'demo.image.b.result': 'Generated 3 texture variants with consistent composition and subject.',
        'demo.image.c.user': 'Auto-generate infographic from this product spec sheet',
        'demo.image.c.result': 'Infographic generated, exportable as SVG/PNG.',
        'demo.voice.a.user': '"Search recent AI chip industry news and compile key points"',
        'demo.voice.a.result': 'Compiled 5 key points with source links.',
        'demo.voice.b.user': '"Open project demo-app, run test script, show results"',
        'demo.voice.b.result': 'Tests complete, all 24 cases passed.',
        'demo.voice.c.user': 'This is a meeting recording, separate speakers and compile task list',
        'demo.voice.c.result': 'Meeting summary generated with 3 speakers and 8 tasks.',
        'demo.gui.a.user': 'Complete in browser: Login → Fill report form → Download PDF',
        'demo.gui.a.result': 'GUI automation complete, report downloaded in 8 seconds.',
        'demo.gui.b.user': 'Record my next actions and auto-generate tutorial documentation',
        'demo.gui.b.result': 'Tutorial generated with 12 steps.',
        'demo.gui.c.user': 'Identify this config interface and batch-set all parameters to recommended values',
        'demo.gui.c.result': 'Batch configuration complete, 18 parameters set.',
        'demo.research.a.user': 'Read these 5 papers and build "Question → Evidence → Conclusion" research paths',
        'demo.research.a.result': 'Research paths built with 3 complete evidence chains.',
        'demo.research.b.user': 'Compare RAG, Fine-tuning, and Prompt Engineering technical approaches',
        'demo.research.b.result': 'Comparison complete with matrix and scenario recommendations.',
        'demo.research.c.user': 'Organize public materials on this topic, trace sources and generate citation list',
        'demo.research.c.result': 'Materials organized with 28 formatted citations.',
        'method.arch.title': 'Architecture',
        'method.arch.encoder': 'Visual Encoder: PE-lang (Language-Optimized Perception Encoder), 1.8B parameters.',
        'method.arch.decoder': 'Decoder: Qwen3-8B.',
        'method.arch.projector': 'Projector: Two consecutive stride-2 layers (resulting in 16× spatial downsampling).',
        'method.arch.resolution': 'Resolution: Multi-crop strategy consisting of a 728×728 global view and multiple 504×504 local crops.',

        'method.train.title': 'Training Pipeline',
        'method.train.pretrain': '<strong>Pre-training:</strong> Single-stage, fully unfrozen strategy using AdamW optimizer (Total: 1.2T tokens, 370K iterations).',
        'method.train.pretrain.p1': 'Phase 1: 900B tokens.',
        'method.train.pretrain.p2': 'Phase 2: 300B tokens.',

        'method.train.sft': '<strong>Supervised Finetuning (SFT):</strong> Two-stage approach (Total: ~226B tokens).',
        'method.train.sft.s1': 'Stage 1: 9:1 text-to-multimodal ratio (~190B tokens).',
        'method.train.sft.s2': 'Stage 2: 1:1 text-to-multimodal ratio (~36B tokens).',

        'method.train.rl': '<strong>Reinforcement Learning:</strong> Total &gt;1,400 iterations.',
        'method.train.rl.rlvr': 'RLVR: 600 iterations (Tasks: mathematics, geometry, physics, perception, grounding).',
        'method.train.rl.rlhf': 'RLHF: 300 iterations (Task: open-ended generation).',
        'method.train.rl.pacore': 'PaCoRe Training: 500 iterations.',
        'footer.cta.title': 'Get Started',
        'footer.cta.desc': 'Apply for access, contact for collaboration, or learn about compliance and trial process.',
        'footer.cta.apply': 'Apply for Access',
        'footer.cta.contact': 'Contact Us',
        'footer.roadmap.title': 'Roadmap',
        'footer.roadmap.r1': 'Extend context length support (256K+)',
        'footer.roadmap.r2': 'Enhance multimodal input capabilities',
        'footer.roadmap.r3': 'Improve edge inference efficiency',
        'footer.roadmap.r4': 'Release comprehensive training and evaluation report',
        'footer.limits.title': 'Limitations',
        'footer.limits.l1': 'Extreme long-chain reasoning still limited',
        'footer.limits.l2': 'Cross-domain knowledge transfer needs optimization',
        'footer.limits.l3': 'Adversarial scenario performance needs improvement',
        'footer.limits.l4': 'Multi-tool collaboration and long-running stability being optimized'
    }
};


let currentLang = 'zh';
let currentTheme = 'a';

function toggleTheme() {
    currentTheme = currentTheme === 'a' ? 'b' : 'a';
    document.body.className = `theme-${currentTheme}`;
    document.getElementById('theme-label').textContent = currentTheme === 'a' ? '🌙' : '☀️';
    localStorage.setItem('theme', currentTheme);
    updateThemeLogos();
}

function updateThemeLogos() {
    const isDark = currentTheme === 'b';
    const darkLogoModels = ['GLM-4.7', 'Kimi K2'];

    // Update teaser chart logos
    document.querySelectorAll('.teaser-point-square img, .teaser-logo-circle img').forEach(img => {
        const alt = img.alt;
        if (darkLogoModels.includes(alt)) {
            const model = teaserOpenSourceModels.find(m => m.name === alt);
            if (model && model.darkLogo) {
                img.src = logoBasePath + (isDark ? model.darkLogo : model.logo);
            }
        }
    });

    // Update bar chart logos
    document.querySelectorAll('.bar-logo').forEach(img => {
        const alt = img.alt;
        if (darkLogoModels.includes(alt)) {
            const model = barOpenSourceModels.find(m => m.name === alt);
            if (model && model.darkLogo) {
                img.src = logoBasePath + (isDark ? model.darkLogo : model.logo);
            }
        }
    });
}

function toggleLang() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    document.getElementById('lang-label').textContent = currentLang === 'zh' ? 'EN' : '中文';
    updateTexts();
    localStorage.setItem('lang', currentLang);
    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise();
    }
}

function updateTexts() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLang][key]) {
            el.innerHTML = i18n[currentLang][key];
        }
    });
    adjustCarouselHeight();
}

function copyBibtex() {
    const bibtex = `@misc{step35air2026,
    title={Step 3.5 Air: Technical Brief},
    author={StepFun Team},
    year={2026},
    url={https://stepfun.com/step35air}
}`;
    navigator.clipboard.writeText(bibtex).then(() => {
        alert('BibTeX copied to clipboard');
    });
}

const carouselItems = document.querySelectorAll('.carousel-item');
const carouselNavBtns = document.querySelectorAll('.carousel-nav-btn');
const carouselDots = document.querySelectorAll('.carousel-dot');
const carouselTotal = carouselItems.length;
let carouselCurrent = 0;
const carouselWrapper = document.querySelector('.carousel-wrapper');
let carouselResizeObserver = null;
let carouselHeightAnimationFrame = null;
let carouselHeightTarget = null;

function getVisibleCarouselItems() {
    return Array.from(document.querySelectorAll('.carousel-item')).filter(item =>
        ['-1', '0', '1'].includes(item.dataset.pos)
    );
}

function animateCarouselHeight(nextHeight) {
    if (!carouselWrapper || !nextHeight) return;

    if (typeof requestAnimationFrame !== 'function') {
        carouselWrapper.style.height = `${nextHeight}px`;
        return;
    }

    carouselHeightTarget = nextHeight;

    const step = () => {
        const computed = getComputedStyle(carouselWrapper);
        const currentHeight = parseFloat(computed.height) || carouselWrapper.offsetHeight || nextHeight;
        const diff = carouselHeightTarget - currentHeight;

        if (Math.abs(diff) <= 0.5) {
            carouselWrapper.style.height = `${carouselHeightTarget}px`;
            carouselHeightAnimationFrame = null;
            return;
        }

        const delta = diff * 0.05;
        carouselWrapper.style.height = `${currentHeight + delta}px`;
        carouselHeightAnimationFrame = requestAnimationFrame(step);
    };

    if (!carouselHeightAnimationFrame) {
        carouselHeightAnimationFrame = requestAnimationFrame(step);
    }
}

function adjustCarouselHeight() {
    if (!carouselWrapper) return;
    const trackedItems = getVisibleCarouselItems();
    if (!trackedItems.length) return;
    const nextHeight = trackedItems.reduce((max, item) => Math.max(max, item.offsetHeight), 0);
    animateCarouselHeight(nextHeight);
}

function observeVisibleCarouselItems() {
    if (typeof ResizeObserver === 'undefined') return;
    if (!carouselResizeObserver) {
        carouselResizeObserver = new ResizeObserver(() => adjustCarouselHeight());
    }
    carouselResizeObserver.disconnect();
    const trackedItems = getVisibleCarouselItems();
    trackedItems.forEach(item => carouselResizeObserver.observe(item));
}

function updateCarousel(index) {
    carouselCurrent = index;
    carouselItems.forEach((item, i) => {
        let pos = i - carouselCurrent;
        if (pos < -1) pos = pos + carouselTotal;
        if (pos > 2) pos = pos - carouselTotal;
        if (pos === -2 && carouselTotal === 4) pos = pos + carouselTotal;
        item.dataset.pos = pos;
    });
    carouselNavBtns.forEach((btn, i) => btn.classList.toggle('active', i === carouselCurrent));
    carouselDots.forEach((dot, i) => dot.classList.toggle('active', i === carouselCurrent));
    adjustCarouselHeight();
    observeVisibleCarouselItems();
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.body.className = `theme-${currentTheme}`;
        document.getElementById('theme-label').textContent = currentTheme === 'a' ? '🌙' : '☀️';
    }

    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
        currentLang = savedLang;
    }
    document.getElementById('lang-label').textContent = currentLang === 'zh' ? 'EN' : '中文';
    updateTexts();
    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise();
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    carouselNavBtns.forEach(btn => {
        btn.addEventListener('click', () => updateCarousel(parseInt(btn.dataset.index)));
    });

    carouselDots.forEach(dot => {
        dot.addEventListener('click', () => updateCarousel(parseInt(dot.dataset.index)));
    });

    carouselItems.forEach(item => {
        item.addEventListener('click', () => {
            const idx = parseInt(item.dataset.index);
            if (idx !== carouselCurrent) updateCarousel(idx);
        });
    });

    document.getElementById('carousel-prev-btn').addEventListener('click', () => {
        updateCarousel((carouselCurrent - 1 + carouselTotal) % carouselTotal);
    });

    document.getElementById('carousel-next-btn').addEventListener('click', () => {
        updateCarousel((carouselCurrent + 1) % carouselTotal);
    });

    document.querySelectorAll('.carousel-item').forEach(item => {
        item.querySelectorAll('.carousel-sample-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = btn.dataset.sample;
                item.querySelectorAll('.carousel-sample-btn').forEach(b => b.classList.remove('active'));
                item.querySelectorAll('.carousel-demo-content').forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                item.querySelector(`.carousel-demo-content[data-id="${id}"]`).classList.add('active');
                adjustCarouselHeight();
            });
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') updateCarousel((carouselCurrent - 1 + carouselTotal) % carouselTotal);
        if (e.key === 'ArrowRight') updateCarousel((carouselCurrent + 1) % carouselTotal);
    });

    adjustCarouselHeight();
    observeVisibleCarouselItems();
    window.addEventListener('resize', adjustCarouselHeight);
});

function togglePanel() {
    const body = document.getElementById('control-body');
    const toggle = document.querySelector('.control-toggle');
    body.classList.toggle('collapsed');
    toggle.textContent = body.classList.contains('collapsed') ? '+' : '−';
}

// Default style values
const defaultStyles = {
    'content-width': { value: 860, unit: 'px' },
    'font-size': { value: 17, unit: 'px' },
    'section-gap': { value: 40, unit: 'px' },
    'radius': { value: 20, unit: 'px' },
    'accent-h': { value: 218, unit: '' },
    'accent-s': { value: 80, unit: '%' },
    'accent-l': { value: 46, unit: '%' },
    'card-opacity': { value: 1, unit: '' },
    'shadow-strength': { value: 0.08, unit: '' },
    'gloss-intensity': { value: 0.7, unit: '' },
    'texture-opacity': { value: 0.03, unit: '' }
};

// Unified style update function
function updateStyle(property, value, unit) {
    const cssVar = '--' + property;
    const displayValue = unit ? value + unit : value;

    // Update CSS variable
    document.documentElement.style.setProperty(cssVar, displayValue);

    // Update display value
    const valueEl = document.getElementById(property + '-value');
    if (valueEl) {
        valueEl.textContent = displayValue;
    }

    // Sync related properties
    syncRelatedStyles(property, value);
}

// Sync related CSS properties when main property changes
function syncRelatedStyles(property, value) {
    // When accent hue changes, update all accent-related variables
    if (property === 'accent-h' || property === 'accent-s' || property === 'accent-l') {
        const h = document.getElementById('accent-h-input')?.value || 218;
        const s = document.getElementById('accent-s-input')?.value || 80;
        const l = document.getElementById('accent-l-input')?.value || 46;

        // Update computed accent colors
        const accent = `hsl(${h}, ${s}%, ${l}%)`;
        const accentLight = `hsla(${h}, ${s}%, ${l}%, 0.1)`;
        const accentDeep = `hsl(${h}, 85%, ${Math.max(l - 14, 20)}%)`;
        const accentSoft = `hsl(${h}, ${Math.max(s - 20, 40)}%, ${Math.min(l + 12, 70)}%)`;

        document.documentElement.style.setProperty('--accent', accent);
        document.documentElement.style.setProperty('--accent-light', accentLight);
        document.documentElement.style.setProperty('--accent-deep', accentDeep);
        document.documentElement.style.setProperty('--accent-soft', accentSoft);
    }

    // When shadow strength changes, update shadow variable
    if (property === 'shadow-strength') {
        const strength = parseFloat(value);
        const shadow = `0 2px 8px rgba(30, 80, 180, ${strength}), 0 8px 32px rgba(30, 80, 180, ${strength * 1.25})`;
        document.documentElement.style.setProperty('--shadow', shadow);
    }
}

// Presets for quick style switching
const stylePresets = {
    classic: {
        'accent-h': 218, 'accent-s': 80, 'accent-l': 46,
        'gloss-intensity': 0.7, 'texture-opacity': 0.03,
        'radius': 20, 'shadow-strength': 0.08, 'card-opacity': 1
    },
    bright: {
        'accent-h': 210, 'accent-s': 90, 'accent-l': 52,
        'gloss-intensity': 0.8, 'texture-opacity': 0.02,
        'radius': 22, 'shadow-strength': 0.1, 'card-opacity': 1
    },
    deep: {
        'accent-h': 225, 'accent-s': 75, 'accent-l': 35,
        'gloss-intensity': 0.6, 'texture-opacity': 0.04,
        'radius': 16, 'shadow-strength': 0.12, 'card-opacity': 0.95
    },
    soft: {
        'accent-h': 200, 'accent-s': 55, 'accent-l': 55,
        'gloss-intensity': 0.85, 'texture-opacity': 0.02,
        'radius': 24, 'shadow-strength': 0.06, 'card-opacity': 1
    }
};

function applyPreset(presetName) {
    const preset = stylePresets[presetName];
    if (!preset) return;

    // Apply each preset value
    Object.entries(preset).forEach(([property, value]) => {
        const def = defaultStyles[property];
        const unit = def ? def.unit : '';

        // Update CSS variable
        updateStyle(property, value, unit);

        // Update input element
        const inputEl = document.getElementById(property + '-input');
        if (inputEl) {
            inputEl.value = value;
        }
    });

    // Update preset button states
    document.querySelectorAll('.control-preset-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

function resetAllStyles() {
    Object.entries(defaultStyles).forEach(([property, config]) => {
        // Update CSS variable
        updateStyle(property, config.value, config.unit);

        // Update input element
        const inputEl = document.getElementById(property + '-input');
        if (inputEl) {
            inputEl.value = config.value;
        }
    });

    // Reset preset buttons
    document.querySelectorAll('.control-preset-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === 0);
    });
}

function copyAllParams() {
    const params = {};
    Object.entries(defaultStyles).forEach(([property, config]) => {
        const inputEl = document.getElementById(property + '-input');
        if (inputEl) {
            params[property] = inputEl.value + config.unit;
        }
    });

    const cssText = Object.entries(params)
        .map(([prop, val]) => `--${prop}: ${val};`)
        .join('\n');

    const text = `/* Step3.5-Turbo Style Variables */\n:root {\n${cssText.split('\n').map(l => '    ' + l).join('\n')}\n}`;

    navigator.clipboard.writeText(text).then(() => {
        alert('CSS Variables copied to clipboard!');
    });
}

(function initTypewriter() {
    const typedEl = document.getElementById('typed-text');
    const cursorEl = document.querySelector('.typed-cursor');
    if (!typedEl) return;

    const fullText = 'Compact Yet Frontier Multimodal Intelligence';
    const typeSpeed = 60;
    const deleteSpeed = 30;
    const pauseAfterType = 4000;
    const pauseAfterDelete = 800;

    let charIndex = 0;
    let isDeleting = false;

    function type() {
        if (!isDeleting) {
            if (charIndex <= fullText.length) {
                typedEl.textContent = fullText.substring(0, charIndex);
                charIndex++;
                setTimeout(type, typeSpeed);
            } else {
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, pauseAfterType);
            }
        } else {
            if (charIndex > 0) {
                charIndex--;
                typedEl.textContent = fullText.substring(0, charIndex);
                setTimeout(type, deleteSpeed);
            } else {
                isDeleting = false;
                setTimeout(type, pauseAfterDelete);
            }
        }
    }

    setTimeout(type, 500);
})();


const logoBasePath = './ref_design/assest/llm_logos/';

// Scores calculated as average of: MMMU, MathVision, MathVista, MMBench_EN, MMBench_CN
const teaserOpenSourceModels = [
    { name: 'Step3-VL-10B (SeRe)', params: 10, score: 83.30, logo: 'stepfun-color-logo.svg', highlight: true },
    { name: 'Step3-VL-10B (PaCoRe)', params: 10, score: 85.18, logo: 'stepfun-color-logo.svg', highlight: true, pacore: true },
    { name: 'MiMo-VL-RL (7B)', params: 7, score: 77.87, logo: 'mimo-logo.svg' },
    { name: 'InternVL-3.5 (8B)', params: 8, score: 74.99, logo: 'internlm-color.svg' },
    { name: 'GLM-4.6V-Flash (9B)', params: 9, score: 77.73, logo: 'glm-logo.svg' },
    { name: 'Qwen3-VL-Thinking (8B)', params: 8, score: 78.39, logo: 'qwen-color-logo.svg' }
];

const teaserClosedSourceModels = [
    { name: 'Gemini 2.5 Pro', score: 85.48, logo: 'gemini-color-logo.svg', color: 'hsl(210, 70%, 65%)' },
    { name: 'Seed-1.5-VL', score: 83.46, logo: 'seed-logo.svg', color: 'hsl(35, 70%, 60%)' },
    { name: 'Qwen3-VL (235B-A22B)', score: 84.08, logo: 'qwen-color-logo.svg', color: 'hsl(200, 60%, 55%)' },
    { name: 'GLM-4.6V (106B-A12B)', score: 81.37, logo: 'glm-logo.svg', color: 'hsl(180, 50%, 50%)' }
];

const teaserChartConfig = {
    yMin: 74,
    yMax: 86,
    yTicks: [74, 76, 78, 80, 82, 84, 86],
    xMin: 6,
    xMax: 12
};

function initTeaserChart() {
    renderTeaserYAxis();
    renderTeaserXAxis();
    renderTeaserGridLines();
    renderTeaserClosedSourceRefLines();
    renderTeaserDataPoints();
}

function renderTeaserYAxis() {
    const container = document.getElementById('teaserYTicks');
    if (!container) return;
    const ticks = [...teaserChartConfig.yTicks].reverse();
    ticks.forEach(val => {
        const tick = document.createElement('div');
        tick.className = 'teaser-axis-tick';
        tick.textContent = val;
        container.appendChild(tick);
    });
}

function renderTeaserXAxis() {
    const container = document.getElementById('teaserXTicks');
    if (!container) return;
    // const xTicks = [10, 15, 20, 25, 30, 35, 40];
    // const xTicks = [5, 7, 9, 11, 13];
    const xTicks = [6, 8, 10, 12];

    xTicks.forEach(val => {
        const tick = document.createElement('div');
        tick.className = 'teaser-axis-tick';
        tick.textContent = val === 12 ? '100B+' : val + 'B';
        tick.style.position = 'absolute';
        const xPct = ((val - teaserChartConfig.xMin) / (teaserChartConfig.xMax - teaserChartConfig.xMin)) * 100;
        tick.style.left = xPct + '%';
        tick.style.transform = 'translateX(-50%)';
        container.appendChild(tick);
    });
}

function renderTeaserGridLines() {
    const container = document.getElementById('teaserGridLines');
    if (!container) return;
    teaserChartConfig.yTicks.forEach(val => {
        const line = document.createElement('div');
        line.className = 'teaser-grid-line horizontal';
        const pct = ((val - teaserChartConfig.yMin) / (teaserChartConfig.yMax - teaserChartConfig.yMin)) * 100;
        line.style.bottom = pct + '%';
        container.appendChild(line);
    });
}

function renderTeaserClosedSourceRefLines() {
    const container = document.getElementById('teaserClosedRefLines');
    if (!container) return;

    teaserClosedSourceModels.forEach((model) => {
        let yPct = ((model.score - teaserChartConfig.yMin) / (teaserChartConfig.yMax - teaserChartConfig.yMin)) * 100;

        // Adjust Qwen3-VL position slightly upward to avoid overlap with Seed
        if (model.name === 'Qwen3-VL (235B-A22B)') {
            yPct += 3.5; // Move up slightly
        }

        const lineGroup = document.createElement('div');
        lineGroup.className = 'teaser-closed-ref-group';
        lineGroup.style.bottom = yPct + '%';

        const line = document.createElement('div');
        line.className = 'teaser-closed-ref-line';
        line.style.borderTopColor = model.color;
        lineGroup.appendChild(line);

        const modelCard = document.createElement('div');
        modelCard.className = 'teaser-closed-model-card';
        modelCard.style.cursor = 'pointer';

        const logoCircle = document.createElement('div');
        logoCircle.className = 'teaser-logo-circle';
        logoCircle.style.borderColor = model.color;

        if (model.logo) {
            const img = document.createElement('img');
            img.src = logoBasePath + model.logo;
            img.alt = model.name;
            img.onerror = function() {
                this.style.display = 'none';
                const init = document.createElement('span');
                init.className = 'teaser-circle-initial';
                init.textContent = model.name.charAt(0);
                init.style.color = model.color;
                logoCircle.appendChild(init);
            };
            logoCircle.appendChild(img);
        }

        const modelName = document.createElement('span');
        modelName.className = 'teaser-closed-name';
        modelName.style.color = model.color;
        modelName.textContent = model.name;

        const score = document.createElement('span');
        score.className = 'teaser-closed-score';
        score.style.color = model.color;
        score.textContent = model.score.toFixed(1);

        const tooltip = document.createElement('div');
        tooltip.className = 'teaser-closed-tooltip';
        tooltip.innerHTML = `
            <div class="teaser-tooltip-name">${model.name}</div>
            <div class="teaser-tooltip-stats">
                <div class="teaser-tooltip-stat">
                    <span class="teaser-tooltip-stat-label">Type</span>
                    <span class="teaser-tooltip-stat-value">Flagship Model</span>
                </div>
                <div class="teaser-tooltip-stat">
                    <span class="teaser-tooltip-stat-label">Avg Score</span>
                    <span class="teaser-tooltip-stat-value">${model.score.toFixed(1)}</span>
                </div>
            </div>
        `;

        modelCard.appendChild(logoCircle);
        modelCard.appendChild(modelName);
        modelCard.appendChild(score);
        modelCard.appendChild(tooltip);
        lineGroup.appendChild(modelCard);

        container.appendChild(lineGroup);
    });
}

function renderTeaserDataPoints() {
    const container = document.getElementById('teaserDataPoints');
    if (!container) return;

    teaserOpenSourceModels.forEach((model) => {
        const point = document.createElement('div');
        let className = 'teaser-data-point';
        if (model.highlight) className += ' highlight';
        if (model.pacore) className += ' pacore';
        point.className = className;

        let xPct = ((model.params - teaserChartConfig.xMin) / (teaserChartConfig.xMax - teaserChartConfig.xMin)) * 100;
        const yPct = ((model.score - teaserChartConfig.yMin) / (teaserChartConfig.yMax - teaserChartConfig.yMin)) * 100;

        // Slightly offset PaCoRe point to avoid overlap with SeRe
        if (model.pacore) {
            xPct += 0.5; // Shift right slightly
        }

        point.style.left = xPct + '%';
        point.style.bottom = yPct + '%';

        const square = document.createElement('div');
        square.className = 'teaser-point-square';

        if (model.logo) {
            const img = document.createElement('img');
            img.src = logoBasePath + model.logo;
            img.alt = model.name;
            img.onerror = function() {
                this.style.display = 'none';
                const initial = document.createElement('span');
                initial.className = 'teaser-point-initial';
                initial.textContent = model.name.charAt(0);
                square.appendChild(initial);
            };
            square.appendChild(img);
        }

        if (model.highlight) {
            const scoreLabel = document.createElement('div');
            scoreLabel.className = 'teaser-point-score';
            if (model.pacore) {
                scoreLabel.className += ' pacore-score';
            } else {
                scoreLabel.className += ' sere-score';
            }
            scoreLabel.textContent = model.score.toFixed(1);
            point.appendChild(scoreLabel);
        }

        // 开源模型不显示 tooltip（包括 SeRe 和 PaCoRe）
        // 只有闭源模型显示 tooltip

        point.appendChild(square);
        container.appendChild(point);
    });
}



const barOpenSourceModels = [
    { name: 'MiMo-VL-RL', shortName: 'MiMo', params: 7, logo: 'mimo-logo.svg' },
    { name: 'Qwen3-VL-Thinking', shortName: 'Qwen3', params: 8, logo: 'qwen-color-logo.svg' },
    { name: 'InternVL-3.5', shortName: 'IVL', params: 8, logo: 'internlm-color.svg' },
    { name: 'GLM-4.6V-Flash', shortName: 'GLM', params: 9, logo: 'glm-logo.svg' },
    { name: 'Step3-VL-10B (SeRe)', shortName: 'SeRe', params: 10, logo: 'stepfun-color-logo.svg', highlight: true },
    { name: 'Step3-VL-10B (PaCoRe)', shortName: 'PaCoRe', params: 10, logo: 'stepfun-color-logo.svg', pacore: true }
];

const barClosedSourceModels = [
    { name: 'Gemini 2.5 Pro', shortName: 'Gemini', logo: 'gemini-color-logo.svg' },
    { name: 'Seed-1.5-VL', shortName: 'Seed', logo: 'seed-logo.svg' },
    { name: 'GLM-4.6V (106B-A12B)', shortName: 'GLM-L', logo: 'glm-logo.svg' },
    { name: 'Qwen3-VL-Thinking (235B-A22B)', shortName: 'Qwen235', logo: 'qwen-color-logo.svg' }
];

const barCategoryData = {
    mmmu: {
        yMin: 60, yMax: 90,
        scores: {
            'Qwen3-VL-Thinking': 73.53,
            'InternVL-3.5': 71.69,
            'GLM-4.6V-Flash': 71.17,
            'Step3-VL-10B (SeRe)': 78.11,
            'Step3-VL-10B (PaCoRe)': 80.11,
            'Gemini 2.5 Pro': 83.89,
            'Seed-1.5-VL': 79.11,
            'GLM-4.6V (106B-A12B)': 75.20,
            'Qwen3-VL-Thinking (235B-A22B)': 78.70
        }
    },
    mathVista: {
        yMin: 70, yMax: 90,
        scores: {
            'MiMo-VL-RL': 79.86,
            'Qwen3-VL-Thinking': 78.50,
            'GLM-4.6V-Flash': 82.85,
            'Step3-VL-10B (SeRe)': 83.97,
            'Step3-VL-10B (PaCoRe)': 85.50,
            'Gemini 2.5 Pro': 83.88,
            'Seed-1.5-VL': 85.60,
            'GLM-4.6V (106B-A12B)': 83.51,
            'Qwen3-VL-Thinking (235B-A22B)': 85.10
        }
    },
    mathVision: {
        yMin: 50, yMax: 80,
        scores: {
            'MiMo-VL-RL': 59.65,
            'Qwen3-VL-Thinking': 59.60,
            'GLM-4.6V-Flash': 54.05,
            'Step3-VL-10B (SeRe)': 70.81,
            'Step3-VL-10B (PaCoRe)': 75.95,
            'Gemini 2.5 Pro': 73.30,
            'Seed-1.5-VL': 68.70,
            'GLM-4.6V (106B-A12B)': 63.50,
            'Qwen3-VL-Thinking (235B-A22B)': 72.10
        }
    },
    mmbench: {
        yMin: 84, yMax: 96,
        scores: {
            'MiMo-VL-RL': 89.35,
            'Qwen3-VL-Thinking': 90.15,
            'GLM-4.6V-Flash': 90.30,
            'Step3-VL-10B (SeRe)': 91.80,
            'Step3-VL-10B (PaCoRe)': 92.17,
            'Gemini 2.5 Pro': 93.16,
            'Seed-1.5-VL': 91.94,
            'GLM-4.6V (106B-A12B)': 92.32,
            'Qwen3-VL-Thinking (235B-A22B)': 92.25
        }
    },
    aime2025: {
        yMin: 30, yMax: 100,
        scores: {
            'MiMo-VL-RL': 66.51,
            'Qwen3-VL-Thinking': 62.92,
            'InternVL-3.5': 62.50,
            'Step3-VL-10B (SeRe)': 87.66,
            'Step3-VL-10B (PaCoRe)': 94.43,
            'Gemini 2.5 Pro': 83.96,
            'Seed-1.5-VL': 64.06,
            'GLM-4.6V (106B-A12B)': 71.88,
            'Qwen3-VL-Thinking (235B-A22B)': 83.59
        }
    },
    multiChallenge: {
        yMin: 35, yMax: 65,
        scores: {
            'MiMo-VL-RL': 44.69,
            'Qwen3-VL-Thinking': 49.82,
            'InternVL-3.5': 37.73,
            'GLM-4.6V-Flash': 42.49,
            'Step3-VL-10B (SeRe)': 62.64,
            'Gemini 2.5 Pro': 60.44,
            'Seed-1.5-VL': 46.15,
            'GLM-4.6V (106B-A12B)': 43.96,
            'Qwen3-VL-Thinking (235B-A22B)': 62.64
        }
    }
};

function initBarCharts() {
    renderBarChart('mmmu', 'mmmuYAxis', 'mmmuPlot');
    renderBarChart('mathVista', 'mathVistaYAxis', 'mathVistaPlot');
    renderBarChart('mathVision', 'mathVisionYAxis', 'mathVisionPlot');
    renderBarChart('mmbench', 'mmbenchYAxis', 'mmbenchPlot');
    renderBarChart('aime2025', 'aime2025YAxis', 'aime2025Plot');
    renderBarChart('multiChallenge', 'multiChallengeYAxis', 'multiChallengePlot');
}

function renderBarChart(category, yAxisId, plotId) {
    const data = barCategoryData[category];
    const yAxisEl = document.getElementById(yAxisId);
    const plotEl = document.getElementById(plotId);

    if (!yAxisEl || !plotEl) return;

    const ticks = [data.yMax, Math.round((data.yMax + data.yMin) / 2), data.yMin];
    ticks.forEach(val => {
        const tick = document.createElement('div');
        tick.className = 'bar-y-tick';
        tick.textContent = val;
        yAxisEl.appendChild(tick);
    });

    const sortedOpen = [...barOpenSourceModels].sort((a, b) => a.params - b.params);

    sortedOpen.forEach(model => {
        const score = data.scores[model.name];
        if (score === undefined) return;
        const barType = model.pacore ? 'pacore' : 'open';
        renderBar(plotEl, model, score, data, barType);
    });

    const divider = document.createElement('div');
    divider.className = 'bar-section-divider';
    plotEl.appendChild(divider);

    barClosedSourceModels.forEach(model => {
        const score = data.scores[model.name];
        if (score === undefined) return;
        renderBar(plotEl, model, score, data, 'closed');
    });
}

function renderBar(container, model, score, data, type) {
    const group = document.createElement('div');
    group.className = 'bar-group';

    const wrapper = document.createElement('div');
    wrapper.className = 'bar-wrapper';

    const heightPct = ((score - data.yMin) / (data.yMax - data.yMin)) * 100;
    const clampedHeight = Math.max(heightPct, 8);

    const bar = document.createElement('div');
    bar.className = 'bar ' + type + (model.highlight ? ' bar-highlight' : '');
    bar.style.height = clampedHeight + '%';

    if (model.logo) {
        const img = document.createElement('img');
        img.className = 'bar-logo';
        img.src = logoBasePath + model.logo;
        img.alt = model.name;
        img.onerror = function() {
            this.style.display = 'none';
            const init = document.createElement('span');
            init.className = 'bar-initial';
            init.textContent = model.shortName.charAt(0);
            bar.appendChild(init);
        };
        bar.appendChild(img);
    } else {
        const init = document.createElement('span');
        init.className = 'bar-initial';
        init.textContent = model.shortName.charAt(0);
        bar.appendChild(init);
    }

    const scoreLabel = document.createElement('div');
    scoreLabel.className = 'bar-score';
    scoreLabel.textContent = score.toFixed(1);
    bar.appendChild(scoreLabel);

    const tooltip = document.createElement('div');
    tooltip.className = 'bar-tooltip';
    tooltip.innerHTML = `
        <div class="bar-tooltip-title">${model.name}</div>
        <div class="bar-tooltip-detail">Score: <span>${score.toFixed(1)}</span></div>
        ${model.params ? `<div class="bar-tooltip-detail">Params: <span>${model.params}B</span></div>` : ''}
    `;

    wrapper.style.setProperty('--bar-height', clampedHeight + '%');
    wrapper.appendChild(bar);
    wrapper.appendChild(tooltip);
    group.appendChild(wrapper);

    const label = document.createElement('div');
    label.className = 'bar-label';
    label.textContent = model.params ? model.params + 'B' : model.shortName;
    group.appendChild(label);

    container.appendChild(group);
}

document.addEventListener('DOMContentLoaded', function() {
    initTeaserChart();
    initBarCharts();
    // Update logos for dark theme if needed
    updateThemeLogos();
});
