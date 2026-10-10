---
title: "安装"
author: "aehrea"
id: installation
description: 如何在 Windows、Linux 和 macOS 上安装 Mapping Tools。
keywords:
  - docs
  - mapping tools
  - install
---

Mapping Tools 提供适用于 **Windows、Linux 和 macOS** 的原生桌面版本。请在[下载页面](/download)或 [GitHub Releases](https://github.com/OliBomby/Mapping_Tools/releases/latest)中下载适合你处理器的版本。

所有软件包均为独立版本，已包含 .NET 10 运行时。

## 选择软件包

- **Windows**：使用安装程序或便携 ZIP 包。大多数系统请选择 x64；32 位 Windows 请选 x86。
- **Linux**：x64 或 ARM64 系统可使用 AppImage 或便携 ZIP 包。
- **macOS**：下载适用于 Intel（x64）或 Apple 芯片（ARM64）的便携 ZIP 包，解压后打开 **Mapping Tools.app**。

## 各平台的编辑器集成

谱面文件工具适用于所有桌面版本。部分实时编辑器功能取决于操作系统和集成方式：

- **Geometry Dashboard** 和 **Editor Reader** 内存集成需要 Windows。
- 在 Linux 和 macOS 上，当前谱面的发现功能默认使用本地 **Gosumemory/Tosu** API，地址为 `127.0.0.1:24050`。请启动兼容的 API，以使用 **Open current beatmap**。这些平台默认关闭实时编辑器状态读取和自动重新载入编辑器功能。
- 你也可以随时通过 **File > Open beatmap** 手动选择谱面。

使用 osu! lazer 时，请采用其 **File > Edit externally** 工作流程。请参阅 [lazer 指南](/docs/guides/use-mt-in-lazer)。

## 设置 {#setup}

安装 Mapping Tools 后，点击左上角按钮打开导航菜单，然后前往 **Preferences** 进行配置。

最需要设置的字段如下：

- **osu! folder**：包含 _osu!_ 的文件夹路径。
- **Songs folder**：包含所有谱面的文件夹路径。通常此文件夹位于 _osu!_ 文件夹内。
- **osu! config user file**：osu! 用户配置文件的路径。通常位于 _osu!_ 文件夹内，文件名为 `osu.[username].cfg`。

:::note

如果你使用 osu!stable，请确认这些路径正确，否则 Mapping Tools 可能无法正常工作。

:::
