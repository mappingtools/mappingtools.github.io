---
title: "将 osu!mania 打击音转换为 osu!standard 打击音"
author: "OliBomby"
id: convert-mania-to-standard-hs
description: 如何使用 Hitsound Studio 将 osu!mania 打击音转换为 osu!standard 打击音。
keywords:
  - docs
  - mapping tools
  - hitsound studio
  - hitsounds
  - convert hs
---

osu!mania 支持在同一刻度上放置多个音符。因此，制作 osu!mania 打击音时有更大的自由度，可以同时使用多个采样组或自定义采样。但这也让从 osu!mania 向 osu!standard 复制打击音变得更困难，因为 osu!standard 每个刻度最多只能放置一个音符。Hitsound Studio 可以将 osu!mania 的打击音转换为 osu!standard 打击音，拓展打击音制作的可能性。

## 第 1 步：设置 Hitsound Studio {#1}

在 Mapping Tools 中打开 Hitsound Studio。点击 **Project** 菜单，再点击 **New project**。如果不想丢失当前 Hitsound Studio 配置，请先使用 **Save project** 保存。

## 第 2 步：导入打击音层 {#2}

点击窗口右下角的加号按钮，打开导入窗口。前往 **Import hitsounds** 标签页，从谱面中导入所有打击音。在 **Source beatmap** 中选择含有要转换的 osu!mania 打击音的谱面。勾选 **Detect duplicate samples** 和 **Remove duplicate hitsounds**；如果谱面使用故事板采样补充部分打击音，还要勾选 **Include storyboarded samples**。然后点击 **Accept** 导入打击音，你应该会在 Hitsound Studio 中看到打击音层列表。

## 第 3 步：配置 {#3}

底部还有两项需要配置：**Base beatmap** 和 **Default sample**。在 Base beatmap 中选择要转换的谱面；转换时会使用这张基础谱面的元数据、时间设置和音量。

Default sample 有多个选项，可按喜好选择。如果打击音层中没有定义 hitnormal 音效，就会使用默认采样；osu!standard 始终需要播放 hitnormal 音效。你可以将其留空，选择 Soft 采样组，并输入 `-1` 作为音量。

## 第 4 步：导出 {#4}

点击窗口右下角的运行按钮，打开导出选项对话框。确保 **Export mode** 和 **Export gamemode** 都设为 **Standard**。你也可以将 **Sample file format** 和 **Mixed sample file format** 改为 **Vorbis (.ogg)**，把所有采样转换为 `.ogg`，以节省文件空间。然后点击 **Accept** 开始导出打击音。

Hitsound Studio 导出完毕后，会显示包含 `.osu` 文件和多个音频文件的导出文件夹。`.osu` 文件包含 osu!standard 打击音难度，音频文件则是这些打击音所需的素材。你可以将所有文件复制到 osu!standard 谱面集，并使用 Hitsound Copier 从打击音难度中复制打击音。
