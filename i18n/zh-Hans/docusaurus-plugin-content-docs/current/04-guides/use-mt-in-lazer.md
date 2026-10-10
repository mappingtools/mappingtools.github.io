---
title: "在 osu! lazer 中使用 Mapping Tools"
author: "OliBomby"
id: use-mt-in-lazer
description: 如何在 osu! lazer 中使用 Mapping Tools。
keywords:
  - docs
  - mapping tools
  - lazer
  - compatibility
---

[osu! lazer](https://github.com/ppy/osu) 的谱面编辑流程与 osu! stable 不同。Mapping Tools 可以编辑任一客户端的谱面文件。在 lazer 中，请使用其外部编辑工作流程，并留意部分功能受到的限制。

## 在 osu! lazer 中使用 Mapping Tools

在 osu! lazer 编辑器中，点击 **File > Edit externally**。程序会创建一个临时文件夹，包含当前正在编辑的谱面集中的所有文件。Mapping Tools 会自动检测此文件夹，并将其中的谱面设为已选谱面。在 Mapping Tools 中编辑完成后，点击 **Finish editing and import changes**，osu! lazer 就会导入更改。

![File > Edit externally](assets/osu_TAqF8oqGPr.png)

## 兼容性

Mapping Tools 并非所有功能都能在 osu! lazer 中使用。本节会说明各项功能的兼容情况。

任何使用 Editor Reader 的功能都无法在 osu! lazer 中使用。如果你只使用 osu! lazer，建议前往 **Preferences** 并禁用 Editor Reader。

### 常规功能

- :x: **Open current beatmap** 相关功能均不可用。
- :x: **Current editor time** 相关功能均不可用。
- :x: **Selected hit objects** 相关功能均不可用。
- :white_check_mark: **Generate backup** 可用。
- :white_check_mark: **Load backup** 可用。
- :white_check_mark: 完全支持含有多个曲线段类型的 **Slider paths**。

### 工具

- :x: **Geometry Dashboard** 不可用。它依赖 Editor Reader。
- :white_check_mark: **Hitsound Copier** 可用。
- :large_orange_diamond: **Hitsound Studio** 可用，但临时文件夹删除后，对已导入采样和谱面的引用会失效。
- :white_check_mark: **Pattern Gallery** 可用。
- :white_check_mark: **Property Transformer** 可用。
- :white_check_mark: **Sliderator** 可用，但在 lazer 编辑器中运行非常卡顿。
- :white_check_mark: **Tumour Generator 2** 可用。
- :large_orange_diamond: **Auto-fail Detector** 可用，但 lazer 中不存在自动失败。
- :white_check_mark: **Combo Colour Studio** 可用。
- :white_check_mark: **Hitsound Preview Helper** 可用。
- :white_check_mark: **Map Cleaner** 可用。
- :white_check_mark: **Mapset Merger** 可用。
- :white_check_mark: **Metadata Manager** 可用。
- :white_check_mark: **Rhythm Guide** 可用。
- :white_check_mark: **Slider Completionator** 可用。
- :white_check_mark: **Slider Merger** 可用。
- :large_orange_diamond: **Slider Picturator** 可用，但 lazer 中不会显示图片滑条。
- :white_check_mark: **Timing Copier** 可用。
- :white_check_mark: **Timing Helper** 可用。

## 注意 osu! lazer 的兼容性变动

osu! lazer 仍在积极开发中，其文件格式和客户端可能发生变化，从而导致 Mapping Tools 无法正常工作。
如果你在 lazer 中遇到此列表未提及的问题，请通过 **About > Report an issue** 提交问题。
