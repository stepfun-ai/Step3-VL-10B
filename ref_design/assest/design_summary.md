# 参考主页设计要点（HTML/CSS/JS 方案）

## 抓取结果索引
- 同行主页 HTML/CSS/JS 原始文件已下载至：`ref_design/assest/peer_sources/`
- 结构扫描与关键点汇总：`ref_design/assest/peer_sources/analysis.md`

## 核心诉求映射（step3.5-air）
- 基调：技术风格、理性、可信（偏“技术报告 + 产品发布”语气）
- 内容形态：精简版技术报告 + 大量可扩展的 showcase 区域
- 重点表达：模型技术特色、指标与友商对比、端云结合的复合案例
- showcase 类别：math / 竞赛 code / 前端代码渲染 / 端云结合（图像、语音、GUI、深研）

## 参考主页的结构要点（可直接借鉴的版式/组件思路）

### GLM（z.ai/blog/glm-4.5）
- 长文技术报告式版式：明确的章节分块、模型亮点 + 数据 + demo 演示混排
- Demo 展示区明显：多页示例滑动/分页式结构（如 “Next (1/6)”），适合大量 showcase 堆叠
- 强数据导向：基准评测/对比表格穿插在叙事段落中
- 视觉：标题密度高、层级清晰，图表/插图穿插

### GPT-5.2（openai.com 介绍页）
- “长文报告 + 目录结构”：显式目录与长篇章节结构，适合技术报告风格
- 内容组织严谨：概览 → 能力 → 评测 → 应用 → 安全与限制
- 以“系统性论述 + 数据支撑”的方式增强可信度

### Claude Opus 4.5（anthropic.com/news）
- 新闻稿/发布会式叙事：重点段落 + 引述/引用式排版
- 可信背书感：引用式段落、图像/媒体增强
- 更“品牌感”的排版结构：留白、图像、语气稍柔和

### Gemini Pro（deepmind.google/models/gemini/pro）
- 产品化 Landing Page 风格：模块化组件很适合“能力/案例/对比”分区
- 多交互模块：Hands-on 区的滑动内容与左右切换按钮，视频/截图卡片并排
- CTA 位置明确：Google AI Studio / Gemini API 等模块可复用为“接入/试用”入口
- 适合大量 showcase：通过 tabs + cards 组合呈现不同能力场景

### Kimi K2（moonshotai.github.io/Kimi-K2/）
- 页面为 JS 渲染型 SPA，文本抓取不到可读结构
- 需要进一步从 JS bundle 或实际浏览器渲染中确认布局

## 建议信息架构（结合核心诉求）

### 页面结构（HTML section 级别）
1) Hero（模型名称 + 价值主张 + CTA）
2) 技术特色概览（3~5 个核心能力卡片）
3) 指标与对比（表格 + 图表）
4) Showcase 总览（tab 切换）
   - math / code / front-end render / multi-model agent
5) 端云结合专栏（多模型协同案例）
6) 精简技术报告（关键结论 + 方法摘要）
7) 部署/调用方式（API / SDK / Demo）
8) 安全与限制
9) FAQ + Footer

### HTML 结构建议（骨架）
- `header` + `nav`（支持 sticky + 目录/锚点）
- `main`
  - `section#hero`
  - `section#highlights`
  - `section#benchmarks`
  - `section#showcase`
  - `section#multimodal`
  - `section#tech-report`
  - `section#deploy`
  - `section#safety`
  - `section#faq`
- `footer`

## 组件与交互（JS 方案）
- Sticky Nav + ScrollSpy（滚动高亮当前章节）
- Tabs（showcase 分类切换，适配 math/code/front-end/multimodal）
- Carousel/Slider（demo 轮播，类似 GLM 示例页展示方式）
- 比较表格：固定首列 + 行 hover
- 图表懒加载 + Lightbox 放大查看
- 代码块/渲染结果的“并排对照”切换

## CSS 设计方案（技术风）
- 颜色：深色/冷色背景 + 高亮科技色（青/蓝/青绿）
- 排版：大标题 + 紧凑小标题 + 数据数字突出
- 网格：12 栅格 + 卡片式模块；大段落采用长文阅读节奏
- 分隔：使用细线、渐变分割线或浅层背景块区分章节
- 强调：重要数字用大号数字字体或半单宽字体

## 资产与目录建议
- `ref_design/assest/`
  - `design_summary.md`（当前文件）
  - `wireframe/`（结构草图）
  - `components/`（tabs / cards / tables）
  - `charts/`（指标图示）
  - `media/`（showcase 示例图）
