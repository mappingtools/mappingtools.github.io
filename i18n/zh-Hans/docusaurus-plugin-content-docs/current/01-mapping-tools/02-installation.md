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

## 功能兼容性 {#editor-integration-by-platform}

✅ 支持 · ❌ 不支持。使用某些功能可能需要按照下方说明进行设置。

<div className="feature-compatibility">

| 操作系统 | osu! 客户端 | 读取/写入谱面 | 获取当前谱面 | 读取实时编辑器状态 | 自动重新载入 | 全局快捷键 | Geometry Dashboard 覆盖层 |
| --- | --- | :---: | :---: | :---: | :---: | :---: | :---: |
| Windows | stable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Windows | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Windows | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Linux | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| macOS | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |

</div>

- **osu! stable**：Windows 和 Linux（Wine）通过**内存读取**获取当前谱面。请在 Preferences 中将 **Songs folder** 设置为操作系统本地文件系统中的路径。实时编辑器状态读取和自动重新载入仅在 Windows 上可用。macOS 不支持原生内存读取。
- **osu! lazer**：使用 **File > Edit externally** 使谱面文件可供外部编辑。Mapping Tools 会自动检测通过外部编辑打开的谱面，在本表中这也算作获取当前谱面。编辑完成后，在 lazer 中使用 **Finish editing and import changes** 应用修改。请参阅 [lazer 指南](/docs/guides/use-mt-in-lazer)。
- **osu! unstable**：在 Preferences 中选择 **MTIPC**，以获取当前谱面、读取实时编辑器状态并重新载入编辑器。这些功能需要客户端的 MTIPC 服务器。在 Linux 和 macOS 上，实时编辑器状态读取和编辑器重新载入默认关闭。
- **全局快捷键**：在 Linux 上，支持情况取决于使用的是 X11 还是提供全局快捷键门户的桌面环境。在 macOS 上，请允许系统请求的键盘访问权限。

你也可以随时通过 **File > Open beatmap** 直接选择谱面。

## 设置 {#setup}

安装 Mapping Tools 后，点击左上角按钮打开导航菜单，然后前往 **Preferences** 进行配置。

最需要设置的字段如下：

- **osu! folder**：包含 _osu!_ 的文件夹路径。
- **Songs folder**：包含所有谱面的文件夹路径。通常此文件夹位于 _osu!_ 文件夹内。
- **osu! config user file**：osu! 用户配置文件的路径。通常位于 _osu!_ 文件夹内，文件名为 `osu.[username].cfg`。

:::note

如果你使用 osu!stable，请确认这些路径正确，否则 Mapping Tools 可能无法正常工作。

:::
