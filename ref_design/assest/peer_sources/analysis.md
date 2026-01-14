# 同行主页 HTML/CSS/JS 抓取与结构要点（自动抓取 + 结构扫描）

说明：以下内容基于本地抓取的 `page.html` + 下载的 CSS/JS 资产做结构扫描与关键点提取。原始文件均保存在对应目录中，可继续做更深入的代码阅读。

## GLM 4.5（z.ai/blog/glm-4.5）
- 抓取状态：成功
- HTML：`ref_design/assest/peer_sources/z.ai-blog-glm-4.5/page.html`
- CSS：`ref_design/assest/peer_sources/z.ai-blog-glm-4.5/css/438914ea7d1862ee.css`
- JS：`ref_design/assest/peer_sources/z.ai-blog-glm-4.5/js/`（共 7 个 chunk）
- 关键技术栈与结构
  - Next.js（`/_next/static/...` 资源）
  - Tailwind v4.1.18（CSS 头部标识，典型 utility class）
  - 主要 DOM 使用 `div` + utility class，语义标签较少
- 可借鉴的结构/交互线索
  - Demo/Showcase 分页式结构：`next-button` + 内嵌进度条（`absolute left-0 top-0 h-full bg-blue-400`，宽度 1/6）
  - 卡片化内容块：`bg-white rounded-lg shadow-xl overflow-hidden` + 外层 `bg-gray-50`
  - 图片预加载：大量 `link rel="preload" as="image"`
- 设计暗示
  - 技术报告 + demo 轮播/分页结构
  - 视觉由 Tailwind utility 堆叠完成，组件可模块化抽取

## Kimi K2（moonshotai.github.io/Kimi-K2/）
- 抓取状态：成功（SPA 壳）
- HTML：`ref_design/assest/peer_sources/moonshotai.github.io-Kimi-K2/page.html`
- CSS：`ref_design/assest/peer_sources/moonshotai.github.io-Kimi-K2/css/index-LguKddU7.css`
- JS：`ref_design/assest/peer_sources/moonshotai.github.io-Kimi-K2/js/index-C-2eqP6Y.js`
- 关键技术栈与结构
  - SPA，仅有 `<div id="app"></div>` 容器
  - 主逻辑在 module JS bundle 中
- CSS 设计要点（变量 + 字体）
  - `:root` 颜色 tokens（示例：`--Colors-KMBlue`, `--Bg-Primary` 等）
  - 字体：`Geist Sans`
- 设计暗示
  - 全站强设计 tokens 管理（颜色、背景、状态色）
  - 适合抽离为 CSS variables + 主题系统

## OpenAI GPT-5.2（openai.com/zh-Hans-CN/index/introducing-gpt-5-2/）
- 抓取状态：失败（403 Forbidden / Cloudflare）
- HTML：未抓取成功（目录已保留：`ref_design/assest/peer_sources/openai.com-zh-Hans-CN-index-introducing-gpt-5-2/`）
- 备注
  - 需要浏览器带 Cookie/反爬验证后再抓取
  - 若允许，可用手动导出 HTML 或提供访问后的 HTML 文件补充分析

## Claude Opus 4.5（anthropic.com/news/claude-opus-4-5）
- 抓取状态：成功
- HTML：`ref_design/assest/peer_sources/www.anthropic.com-news-claude-opus-4-5/page.html`
- CSS：`ref_design/assest/peer_sources/www.anthropic.com-news-claude-opus-4-5/css/`（5 个）
- JS：`ref_design/assest/peer_sources/www.anthropic.com-news-claude-opus-4-5/js/`（30 个 chunk）
- 关键技术栈与结构
  - Next.js（`/_next/static/...`）
  - CSS Modules（类名形如 `PostDetail-module-scss-module__...`）
  - 多字体体系：`anthropicSans / anthropicSerif / copernicus / styrene / tiempos / jetbrainsmono`
- 可借鉴的结构/排版
  - `<main id="main-content">` + `<article>` 语义结构
  - Hero：`PostDetail...__hero` + `__header` + `__illustrationHeroWrapper`
  - 正文：`Body-module...__reading-column` + `data-theme="ivory"`（主题切换）
  - 全局网格变量：`--column-count`, `--gutter-x`, `--header-nav-height`
- 设计暗示
  - “发布稿 + 技术报告”混合风格
  - 可复用“主题色 + 多字体 + 阅读列”体系

## Gemini Pro（deepmind.google/models/gemini/pro/）
- 抓取状态：成功
- HTML：`ref_design/assest/peer_sources/deepmind.google-models-gemini-pro/page.html`
- CSS：`ref_design/assest/peer_sources/deepmind.google-models-gemini-pro/css/site.2adcd4d262a9d0351cb6.css`
- JS：`ref_design/assest/peer_sources/deepmind.google-models-gemini-pro/js/site-dc657ebc6d678703ec4d.js`
- 关键技术栈与结构
  - 传统多 section 模板化布局，语义清晰
  - `section` IDs：`intro / jump-links / capabilities / products / hands-on / performance / benchmarks / model-information`
  - `jump-links` 区使用 `glue-jumplinks` 组件（滚动锚点导航）
  - 多个 carousel：`section--carousel`, `js-carousel`, `carousel__pagination`, `js-carousel__button--prev/next` + `aria-controls` 关联
  - 网格：`grid`, `grid__inner`, `grid__column--span-12`
- CSS 设计要点
  - 主题变量：`--theme-surface-*`, `--theme-primary-*`, `--theme-outline-*`
  - 适合复用为“技术/产品型”主题系统
- 设计暗示
  - 模块化能力区 + Hands-on 卡片轮播 + Benchmark 区
  - 可映射到“showcase tabs + carousel”方案

## 下载目录总览
- 根目录：`ref_design/assest/peer_sources/`
- 每个站点：`<site>/page.html` + `css/` + `js/`
- 详情列表：`ref_design/assest/peer_sources/fetch_report.json`
