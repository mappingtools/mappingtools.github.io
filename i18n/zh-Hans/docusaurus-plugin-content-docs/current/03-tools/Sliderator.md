---
title: "Sliderator"
author: "OliBomby"
id: sliderator
---

Sliderator 可以创建中途变速的滑条或连打串。

首先使用左上角的控件导入滑条，然后用鼠标右键编辑图表。

:::caution 无法参与排名

Sliderator 创建的滑条无法参与排名。详情请参阅[此 Reddit 帖子](https://www.reddit.com/r/osugame/comments/xnmcuq/acceldecel_sliders_made_with_mapping_tool_is_now/?utm_source=share&utm_medium=web2x&context=3)。

:::

## 导入滑条 {#importing}

使用 Sliderator 前，先点击左上角的 **Import sliders** 按钮导入一个或多个滑条。导入方式有三种：

- **Selected**：导入你当前在 osu! 编辑器中选中的滑条。
- **Bookmarked**：导入已选谱面中添加了书签的滑条。
- **Time**：按照你在旁边方框中输入的时间代码导入已选谱面中的滑条。时间代码格式与在编辑器中复制物件并粘贴到文本字段时的格式相同，例如：`00:56:823 (1,2,1,2) -`

如果导入了多个滑条，可以使用左右按钮在它们之间切换。按住 Shift 再点击这些按钮，会先快速调整当前滑条的速度，然后切换到下一条。

选择滑条后，会自动设置 **Beat length**、**BPM** 和 **Global SV**。

## 图表 {#graph}

图表是 Sliderator 最重要的部分，用于定义滑条球随时间的移动。

X 轴表示**时间**，覆盖滑条的整个持续时间。持续时间由 **Beat length** 字段定义。
你可以使用图表下方的滑块，修改 X 轴刻度的节拍细分。

Y 轴有两种模式，可通过图表下方的绿色按钮切换：

- **X** 是位置模式。此时 Y 轴表示沿滑条的距离，你可以精确指定滑条球在各个时间点的位置。
- **V** 是速度模式。此时 Y 轴表示滑条速度倍率，范围为正负 **SV limit** 之间。

![Sliderator 图表](./assets/sliderator_graph.png)

### 编辑图表 {#editing-graph}

你可以使用控制点和插值来编辑图表。

要添加控制点，请在图表任意位置点击**右键**。在控制点上点击右键会打开快捷菜单，你可以在其中删除控制点或更改其插值方式。在控制点上使用 **Shift+右键**可立即移除该点。点击控制点并**按住左键**即可拖动。按住鼠标左键拖动背景或滚动滚轮，可以平移和缩放视图。

每段插值的中间都有较小的控制点。上下拖动此控制点可以更改插值形状。点击该点的**右键**可以重置它。

拖动控制点时还可以使用以下快捷键：

- **Shift**：限制为水平移动。
- **Ctrl**：限制为垂直移动。
- **Alt**：禁用吸附。

### 其他图表控制项 {#graph-controls}

本节介绍与图表相关的其他控制项：

- **Beat length**：滑条的拍数，也会影响图表的宽度。
- **BPM**：滑条运行时的每分钟拍数。应与导出滑条位置的 BPM 相同。
- **Global SV**：谱面的滑条倍率。应与已选谱面的滑条倍率相同。
- **SV limit**：图表中允许的最大 SV，也会影响速度模式下图表的高度。默认值为 10，因为这是继承时间点允许的最大 SV。
- **Scale to completion**：垂直缩放所有控制点，使滑条球沿滑条移动到指定完成度。
- **Reset graph**：将图表重置为默认状态。
- **Show red anchors**：在位置模式下，将滑条红色锚点的位置显示为图表中的红色水平线。
- **Show graph anchors**：在滑条预览中显示图表控制点的位置。
- **Expected segment count**：估算当前配置所需的滑条锚点数量。少于 10000 时，游戏通常不会明显卡顿。

## 导出选项 {#export-options}

运行 Sliderator 会在导出时间将调整速度后的滑条导出到已选谱面。你可以选择直接添加到谱面，也可以勾选 **Override**，替换谱面中对应位置的现有物件。

勾选 **Export as stream instead** 后，Sliderator 会导出跟随滑条速度和时长的一串圆圈，而不是滑条。此选项会使用图表的节拍细分决定每拍生成多少个圆圈。

你可以手动设置调整后滑条的 **New SV**。此值应接近图表中使用的最大速度。自动值通常足够合适；有时可以稍微调低，以减少锚点，同时不影响滑条质量。

**Minimum tumour length** 可以显著减少结果滑条中的锚点数。Sliderator 会用隐形瘤来减慢滑条球，因此增大最小瘤长度后，生成的瘤会更大、数量更少。缺点是瘤越大，滑条球的移动越不平滑。

**Delegate SV to BPM** 会让 Sliderator 使用 BPM 设置新的 SV。这可以解除继承时间点 10 倍 SV 的限制，也让你可以启用 **Remove slider ticks** 选项；此选项会使用 SV 为 `NaN` 的继承时间点移除滑条打击点。
