---
title: "Pattern Gallery"
author: "OliBomby"
id: pattern-gallery
description: 从 osu! 谱面导入和导出模式，并创建可与好友分享的模式合集。
keywords:
  - docs
  - mapping tools
  - pattern gallery
---

Pattern Gallery 可以从 osu! 谱面导入和导出模式，并创建可供分享的模式合集。使用它可以快速在不同谱面之间移动任意一组打击物件或谱面片段。

## 工具说明

Pattern Gallery 可以让你：

* 从 osu! 谱面导入和导出模式，以便在谱面之间移动任意一组打击物件。
* 创建可与好友分享的模式合集。
* 使用底部的按钮添加或移除模式。
* 选择一个或多个模式并点击运行按钮，或双击某个模式，将其导出到已选谱面。
* 在导出时使用导出选项进一步处理模式。
* 通过 **Project** 菜单保存、载入、重命名、导入和导出模式合集。

## 使用方法

1. 在 Mapping Tools 中打开 Pattern Gallery。
2. 使用导入选项将模式添加到合集中。
3. 从画廊中选择一个模式。
4. 点击运行按钮，将模式导出到已选谱面。

## 功能和设置

此工具提供以下功能：

* **模式管理：** 添加、移除、重命名模式，并将其整理到合集里。
* **导入选项：** 从各种来源导入模式，例如已选物件、谱面文件或模式代码。
* **导出选项：** 设置模式导出方式，例如缩放、旋转和筛选。

## 导出选项

导出模式时，可以调整以下选项：

* **Export Offset：** 设置模式的放置时间。可以使用模式的原始时间、自定义时间或当前编辑器时间。
  * **Custom export offset：** 在自定义偏移模式下，指定模式的放置时间。
* **Deletion margin：** 删除原谱面片段时，在模式周围额外扩展的时间，单位为毫秒。
* **Parting distance：** 将模式拆分为更小部分所需间隙的最小拍数。
* **Beat divisors：** 输入任意数量的节拍细分，用逗号分隔。例如：1/4、1/12、1/7、4/5、0.13435622499。
* **Custom Scale：** 指定缩放比例以更改模式大小。
* **Custom Rotate：** 指定顺时针旋转的角度。
* **Pattern Overwrite Mode：** 决定如何处理模式与目标谱面中重叠的物件，可选模式如下：
  * **NoOverwrite：** 保留谱面中所有现有物件，添加模式时不移除任何物件。
  * **PartitionedOverwrite：** 仅在模式的密集部分移除原谱面物件。
  * **CompleteOverwrite：** 移除模式起始时间到结束时间之间的所有原谱面物件。
* **Timing Overwrite Mode：** 决定如何合并原谱面和模式的时间设置。
* **Include hitsounds：** 导出模式时间点中的打击音效果。
* **Include kiai：** 导出模式中的激气效果。
* **Scale to new circle size：** 缩放模式，使物件之间相对于圆圈大小的距离保持不变。
* **Scale to new timing：** 根据新时间缩放模式，使物件之间的拍数保持不变。如果时间设置中存在未对齐的红线，可能会出现错误的节拍对齐。如果有 BPM 为 0 或无穷大的红线，请勿使用此选项。
* **Snap to new timing：** 使用指定的节拍细分，将模式中的物件吸附到新时间。
* **Manualify stacks：** 手动堆叠模式中的物件。
* **Fix global SV：** 调整模式中的绿色时间点 SV，使其符合新的全局 SV，从而保持滑条在新谱面中的 SV 不变。
* **Fix BPM SV：** 调整模式中的绿色时间点 SV，使其符合新的 BPM，从而保持滑条在新谱面中的 SV 不变。如果使用了 **Scale to new timing**，建议禁用此功能。
* **Fix colourhax：** 调整颜色跳转，使模式中物件的颜色索引与原谱面保持一致。
* **Fix slider tick rate：** 调整模式中的 BPM，使模式中的滑条打击点频率保持不变。

## 模式快捷菜单

在画廊中的模式上点击右键，即可打开快捷菜单并使用以下选项：

* **Properties：** 查看模式的更多信息，例如名称、创建时间、上次使用时间和使用次数。
* **Delete：** 删除所选模式。按住 Shift 可跳过确认对话框。
* **Open in File Explorer：** 在文件资源管理器中打开所选模式的源文件。
* **Group：** 整理模式的选项。

## 导入选项

点击导入按钮，可以从各种来源导入模式。

* **Import Selected：** 根据编辑器中当前选中的打击物件创建模式。
  * **Name：** 模式名称。
* **Import from .osu File：** 从本地 `.osu` 文件导入模式。
  * **Name：** 模式名称。
  * **Pattern file path：** 要导入的模式文件路径。
  * **Filter：** 筛选 `.osu` 文件内容。
  * **Start Time：** 模式在 `.osu` 文件中的起始时间。
  * **End Time：** 模式在 `.osu` 文件中的结束时间。
* **Import from Code：** 从代码导入模式，适合在线分享模式时使用。
  * **Name：** 模式名称。
  * **Hit Objects：** 打击物件代码。
  * **Timing Points：** 时间点代码。
  * **Global SV：** 设置模式中打击物件的全局滑条速度。
  * **Game Mode：** 为特定游戏模式创建模式。

## Project 菜单

Pattern Gallery 中的 **Project** 菜单可以让你：

* 保存模式合集。
* 载入模式合集。
* 重命名模式合集。
* 导入模式合集。
* 导出模式合集。
