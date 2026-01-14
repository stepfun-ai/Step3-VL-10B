## logo 素材

所有模型的 logo  从 /home/dengwenjin/projects/test_cc/step_mainpage/ref_design/assest/llm_logos 获取；

## 整体风格适配

你需要结合 /home/dengwenjin/projects/test_cc/step_mainpage/step3p5_air_0110 的页面主题与风格，用h5+css+js来作图；

## teaser 

我需要画一个 total avg score vs Activated params 的 teaser 作为首图，其中对于 Gemini/claude/gpt 这些闭源模型，仅呈现 score 来说明performance水位(但需要以横向虚线的方式连通到纵坐标轴，来方便用户直观感知水位概念)；
最终的图中，需要体现 step 3.5 air 的优势(frontier performance yet tiny size)；每个模型用面积大小来表示 activate params，同时带上对应 logo；对于闭源模型，用同一个特殊几何形状+logo呈现；
开源模型和闭源模型分别用不同几何形状，以示区分；

存储在：/home/dengwenjin/projects/test_cc/step_mainpage/step3p5_air_teaser_chart/

## 柱状图对比

分别为 Reasoning / Code Agent / General Agent 画3个柱状图，整体构成一个组件；
其中每个图横坐标是 activate params，纵坐标是对应分组的 avg score;
对于有 acticate params 的开源模型，整体分布在图中左边部分，按照 params从小到大排序；图中右边部分则是 Gemini/claude/gpt 这些闭源模型;
每个柱状图上方柱子外部是 avg score 数值，柱子上方内部是 logo；
不要太拥挤，不行就改变子图布局方式；

存储在：/home/dengwenjin/projects/test_cc/step_mainpage/step3p5_air_bar_chart/