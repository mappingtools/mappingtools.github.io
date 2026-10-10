---
title: "Geometry Dashboard"
author: "OliBomby"
id: geometry-dashboard
---

Geometry Dashboard 是一款功能强大的工具，可在 osu! 编辑器上方叠加与几何相关的虚拟物件，让你将物件吸附到这些虚拟点、线和圆上。借助它可以创建几何上精确的图案，而这些图案用其他方式制作会困难得多，甚至无法实现。

:::note 平台支持

Geometry Dashboard 当前仅支持 Windows，因为其实时编辑器叠加层依赖 Windows 专属集成。

:::

:::tip

此工具需要在 Mapping Tools 的 Preferences 中指定用户配置文件。

:::

## 核心概念

Geometry Dashboard 的工作流程如下：

1. **读取 osu! 编辑器的当前状态。** 包括当前可见的打击物件、编辑器时间和编辑器窗口位置。
2. **根据这些打击物件生成虚拟物件。** 通过一组可配置的生成器，从打击物件生成虚拟点、线和圆。
3. **在 osu! 编辑器上方的叠加层中显示虚拟物件。** 这样你就能看到生成的几何图形，并将光标吸附到它们上面。

## 用户界面

Geometry Dashboard 窗口分为以下几个部分：

* **Search：** 搜索栏，用于筛选生成器列表，方便查找。
* **Toggle Buttons：** 用于切换各项功能。
  * Select All
  * Lock All
  * Usability All
* **Savestates Button：** 打开 [Savestates 窗口](#savestates)。
* **Preferences Button：** 打开 [Preferences 窗口](#preferences)。
* **Generators List：** 显示可用生成器，以及用于启用、禁用生成器或配置其参数的选项。

## 虚拟几何图形

虚拟几何图形是此工具的核心。它们并非编辑器中的真实打击物件，而是供光标悬停的点，帮助你在创作谱面时精确放置物件。

### 虚拟几何图形的状态

虚拟几何图形具有若干独特状态，你可以分别启用或禁用：

* **Selected：** 激活此物件，使它可以参与生成新物件。将光标悬停在虚拟物件上时，可通过选择快捷键切换其选中状态。选中物件会以不同颜色显示，边缘也会发光。
* **Locked：** 锁定物件可防止其生成器或作为来源的物件消失后，物件也随之消失。这有助于保护不能误删的几何图形。锁定的虚拟几何图形会显示为灰色。
* **Usable：** 启用后，生成器可以使用此虚拟几何图形来生成其他几何图形。禁用后，生成器会忽略它，不会据此生成任何物件。不可用的虚拟物件会以较暗的亮度显示。
* **Relevancy：** 介于 0 到 1 之间的值，用于表示此几何图形的相关性。值越高，显示越不透明。

## 生成器

生成器是 Geometry Dashboard 的核心，负责根据打击物件和其他虚拟物件创建虚拟物件。

### 生成器的一般工作流程

生成器按以下方式工作：

1. **选择输入：** 每个生成器都有一组*依赖项*（必需的输入类型）和*输入谓词*。输入谓词会定义虚拟物件要满足哪些额外规则，才能供此生成器使用。Geometry Dashboard 会扫描前面的层，寻找符合依赖项并满足输入谓词的物件。这些规则可以要求物件处于选中状态或达到指定的相关性值等。
2. **生成几何图形：** 对于每种可能的已选输入物件组合，生成器会调用生成方法来创建新的虚拟物件。生成方法接收已选输入物件作为参数，并返回一个或多个新虚拟物件。
3. **分层：** 每一组新虚拟物件都会放入新的层。你可以在 Preferences 的 *Inception Level* 中设置层数。较低层的虚拟物件会影响下一层更复杂的虚拟物件。
4. **更新：** 每当发生需要重新计算的更改时，第一层中的物件会根据 *Update Mode* 偏好设置重新生成，随后依次更新第二层、第三层等。

为了避免生成过多不需要的物件，生成器会检查同一层中彼此足够接近的两个物件，并将其合并、累加相关性。你可以在 Preferences 中更改合并两个物件所需的距离。

### 生成器列表

以下是 Geometry Dashboard 中所有可用生成器的列表：

* **Basic Generators：** 直接从打击物件创建虚拟物件的生成器。所有生成物件的时间位置都设为来源物件的平均时间。
  * **Points on Circles and Slider Heads：** 在圆圈和滑条的起始位置生成虚拟点。
  * **Points on Slider Ends：** 在滑条末端生成虚拟点。
  * **Points on Slider Anchors：** 在滑条的锚点（红色和白色）处生成虚拟点。
  * **Points on Last Anchors：** 在滑条最后一个曲线点处生成虚拟点。
  * **Lines on Linear Sliders：** 如果滑条类型是 Linear，则从 Pos 到 Curve Point 生成虚拟线。时间和相关性与来源滑条相同。
  * **Points on Blanket Centers：** 在圆形滑条的中心生成虚拟点。时间和相关性与来源滑条相同。
  * **Circles on 3-Point Sliders：** 根据滑条锚点创建圆形，用于 blanket/perfect 曲线。时间和相关性与来源滑条相同。
  * **Points on Slider Paths：** 沿滑条路径生成多个虚拟点。使用 Point Density 设置可更改点的数量。此生成器需要进行额外计算。
* **Intermediate Generators：** 需要 Basic Generators 才能工作的生成器，可用于构造形状或制作参考线。
  * **Tangent Circles on Circle：** 生成与第一个输入圆恰好相交于一点的虚拟圆。
  * **Circles by Two Points：** 接收一对虚拟点，并生成一对以每个点为圆心、两点间距为半径的虚拟圆。
  * **Equilateral Triangle from Two Points：** 接收一对虚拟点，并在两侧各生成一个虚拟点，构成两个等边三角形。
  * **Equilateral Triangle from Two Points (Type II)：** 与常规三角形生成器相同，但三角形的定位方式不同。
  * **Square from Two Points：** 接收一对虚拟点，并在两侧各生成一个虚拟点，构成一个正方形。
  * **Square from Two Points (Type II)：** 接收一对虚拟点，并在两侧各生成一对虚拟点，共构成两个正方形。
  * **Line by Two Points：** 接收一对虚拟点，并生成连接两点的虚拟线。
  * **Average of Two Points：** 接收两个虚拟点，并根据两点的平均位置计算虚拟点。
  * **Average of Three Points：** 接收三个虚拟点，并根据三点的平均位置计算虚拟点。
  * **Scale & Rotate around a Fixed Point：** 围绕固定虚拟点旋转和缩放任意虚拟物件。你可以配置角度、缩放比例以及选择固定点的额外规则。
  * **Parallel Lines：** 接收一条线和一个点，并经过此点生成一条与该线平行的虚拟线。
  * **Perpendicular Lines：** 接收一条线和一个点，并经过此点生成一条与该线垂直的虚拟线。
  * **Bisector of Angles：** 接收一对虚拟线，并在两线交点处生成其夹角的角平分线。
  * **Bisector of Two Points：** 接收一对虚拟点，并生成这两点的垂直平分线。
  * **Tangent Lines on Circle：** 接收一个虚拟圆和一个点，并生成经过该点、与圆相切的虚拟线。
* **Advanced Generators：** 更为专业的生成器，需要额外配置，适用于高级递归图案制作。
  * **Intersection Points：** 接收一对虚拟线或圆，并在它们的交点处生成虚拟点。此生成器与其他几何生成方法搭配时尤其有用。*注意：*计算交点的开销很大。如果编辑器中同时显示多个复杂图形，性能可能会明显下降，请谨慎使用。
  * **Successor of 2 Points：** 接收两个虚拟点，并沿相同速度计算下一个虚拟点。搭配 "Points on Slider Paths" 使用时，可更准确地预测曲线。
  * **Successor of 3 Points：** 接收三个虚拟点，并根据相同的角度和速度变化计算下一个虚拟点。
  * **Successor of 3 Points Reversed：** 接收三个虚拟点，并根据相同的速度变化和相反的角度计算下一个虚拟点。
  * **Successor of 4 Points：** 接收四个虚拟点，并根据相同的角度、角度变化、速度变化和速度变化量变化计算下一个虚拟点。
  * **Scale & Rotate around a Fixed Point：** 围绕固定虚拟点旋转和缩放任意虚拟物件。你可以配置角度、缩放比例以及选择固定点的额外规则。
  * **Reflection across a Line：** 沿一条虚拟线镜像任意虚拟物件，此虚拟线即对称轴。

## 生成器选项

每个生成器都提供一组可配置选项，用于控制其行为：

* **Active：** 控制生成器是否启用。禁用时不会创建任何虚拟物件。
* **Sequential：** 使生成器仅将按时间顺序排列的物件作为输入。启用时，只会生成时间上相邻的虚拟物件对。这可以大幅减少生成的几何图形数量，避免画面杂乱。
* **Deep：** 指示生成器检查上方的所有适用层，而不只是紧邻的上一层。
* **Relevancy Ratio：** 此生成器创建的虚拟物件的基础相关性，范围为 0 到 1。生成物件的实际相关性可能随其他输入的 Relevancy Ratio 而变化。
* **Generates Inheritable：** 启用时，生成的物件可供后续生成器使用；禁用时，后续生成器不能使用这些物件。
* **Input Selection Collection：** 一组规则，用于筛选此生成器接收的虚拟物件类型。详情请参阅[输入选择](#input-selection-in-detail)。

### 专用生成器设置

部分高级生成器具有额外选项：

* **Circle from Single Point：**
  * *Radius：* 圆的缩放比例。
* **Points on Slider Paths：**
  * *Points Density：* 每 osu! 像素滑条路径生成的点数。
* **Scale & Rotate around a Fixed Point：**
  * *Angle：* 旋转角度，以度为单位。
  * *Scalar：* 均匀缩放的比例。
  * *Origin Input Selection：* 设置用作旋转原点的虚拟物件必须满足的额外规则。
  * *Other Input Selection：* 设置要围绕原点镜像的物件必须满足的额外规则。
* **Reflection across a Line：**
  * *Axis Input Selection：* 设置用作此生成器镜像轴的虚拟物件必须满足的额外规则。
  * *Other Input Selection：* 设置要沿镜像轴镜像的物件必须满足的额外规则。

### 输入选择详解 {#input-selection-in-detail}

输入选择是控制生成器对哪些虚拟物件进行计算的主要机制。每个生成器都会定义必需的输入类型（例如点、线），你可以使用输入谓词，根据物件的属性进一步筛选。若输入选择配置不正确，生成器可能会创建过多无关虚拟物件，或无法创建所需的物件。

一组选择谓词由多个选择谓词组成。只要满足其中一个选择谓词，虚拟物件就符合输入条件。

将鼠标悬停在 Input Selection 上时，点击加号即可添加新的选择谓词。随后会显示一系列设置，进一步筛选生成虚拟几何图形时使用的输入：

* **Need Selected：** 启用后，生成器只会使用已选中的虚拟物件。已选物件也会优先响应光标悬停，因此你可以更精确地控制生成结果。
* **Need Locked：** 启用后，生成器只会使用已锁定的物件。如果物件未锁定，生成器会完全忽略它。当你希望锁定某些物件并用指定生成器处理它们时，此选项很有用。
* **Need Generated By This：** 检查虚拟物件是否均由此生成器生成。正确配置后，可将生成范围限制为你需要的几何图形。
* **Need Generated Not By This：** 相反的筛选条件，只会使用非此生成器生成的虚拟物件。
* **Min Relevancy：** 要求用作输入的物件达到最低相关性。相关性范围为 0 到 1；设为 0 时不作限制。

## Preferences

Geometry Dashboard 的 Preferences 窗口可让你自定义工具行为和外观：

* **Hotkeys：**
  * **Snap Key：** 按住此键可让光标吸附到虚拟物件。
  * **Select Key：** 按住此键可选中虚拟物件。
  * **Lock Key：** 按住此键可锁定虚拟物件。
  * **Usability Key：** 按住此键可切换虚拟物件的可用状态。
  * **Refresh Key：** 用于立即刷新根层打击物件列表的按键。
* **Offset：** 相对于编辑器屏幕偏移所有虚拟物件。可用于修正缩放或定位问题。
  * **Left：** 编辑器左边缘的偏移量。
  * **Top：** 编辑器上边缘的偏移量。
  * **Right：** 编辑器右边缘的偏移量。
  * **Bottom：** 编辑器下边缘的偏移量。
* **Complexity：** 要生成的递归层数，可用于缓解性能问题。
  * **Inception Level：** 基于基础打击物件生成的层数。
* **Downkey：** 切换显示哪些虚拟物件。
  * **Everything：** 显示所有虚拟物件，包括打击物件及其父级和子级。
  * **Parents and parents of parents：** 显示要吸附的物件的所有祖先。
  * **Direct parents：** 仅显示要吸附的物件的直接父级。
  * **Children and children of children：** 显示要吸附的物件的所有后代。
  * **Direct children：** 仅显示要吸附的物件的直接子级。
* **Upkey：** 未按下 Snap Key 时切换显示哪些虚拟物件。
  * **All visible：** 根据 Selection 选项的配置显示所有打击物件。
  * **Nothing：** 未按下 Snap Key 时隐藏所有物件。
* **Selection：** 切换哪些打击物件会用于生成虚拟物件。
  * **All visible：** 包含所有可用的打击物件。
  * **Visible or selected：** 默认使用所有可见打击物件；如果有选中的打击物件，则改用所有已选物件。
  * **Selected only：** 仅使用编辑器中已选中的打击物件。
* **Updating：** 切换何时更新虚拟物件。
  * **Any change：** 每当发生更改时更新。
  * **Time change：** 编辑器时间改变时更新。此选项会降低响应速度，但有助于提升性能。
  * **osu! activated：** 当前 osu! 窗口获得焦点时更新。
  * **Hotkey down：** 按下刷新快捷键时更新。
* **Behavior：** Geometry Dashboard 的其他行为设置。
  * **Minimal diff：** 虚拟物件需要接近到什么程度才会合并。
  * **Keep running：** 即使打开其他工具，也让 Geometry Dashboard 保持运行。
  * **See playfield：** 在编辑器上叠加显示游戏区域边界。
  * **Debug：** 在编辑器上叠加显示编辑器边界。如果启用此选项后仍看不到编辑器，说明编辑器位于 Geometry Dashboard 的检测范围之外。

### 虚拟几何图形选项

你可以自定义编辑器中每种虚拟物件的颜色、不透明度、粗细和虚线样式，以提升可读性。

* **Color：** 边框颜色。也可以从颜色选择器复制颜色（点击 HEX 值即可复制）。
* **Opacity：** 物件的透明程度。
* **Thickness：** 构成物件轮廓的线条粗细。
* **Dash：** 轮廓使用虚线还是实线。

## Savestates

Savestates 类似快捷键配置档。你可以快速切换配置档，而不必手动更改每个生成器和 Preferences 中的设置。也可以为某个配置档指定快捷键，进一步加快切换速度。

点击加号图标创建新的 savestate，然后为其命名并指定快捷键。点击保存或载入按钮即可保存当前设置，或修改设置。
