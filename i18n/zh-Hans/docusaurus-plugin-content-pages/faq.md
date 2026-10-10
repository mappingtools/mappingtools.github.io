---
title: FAQ
author: OliBomby, aehrea
---

# FAQ

## 为什么我的谱面没有任何变化？

检查应用程序顶部蓝色栏中的 **Selected Map**，确保已设置正确的谱面路径。

运行工具后，还要记得**不保存并重新载入编辑器**。如果在编辑器中保存谱面，就会覆盖旧版本的 `.osu` 文件，从而撤销工具所做的更改。在编辑器中按 `Ctrl+L`，然后按 `Enter`，即可快速重新载入谱面。

## 运行工具时出现错误：“Could not find part of the path” 或 “Empty path name is not legal”。

将鼠标光标悬停在**窗口顶部的谱面名称**上，即可查看完整路径。确认该路径确实存在，并检查 Songs 文件夹的位置。如果 Songs 文件夹不在默认的 AppData 位置，请在 **Preferences** 中设置正确的 Songs 文件夹路径。

## 在特定谱面上运行任何工具都会报错，但其他谱面没有问题。

你尝试编辑的谱面可能使用了旧版且不受支持的文件格式，也可能已损坏。你可以在编辑器中打开并保存该谱面，这会强制 osu! 将其更新为与 Mapping Tools 兼容的最新文件格式。

## 工具损坏了我的谱面，该怎么办？

Mapping Tools 每次更改谱面时都会保存备份。前往 **About > Open backup folder** 即可找到备份。你也可以通过 **File > Load backup** 将备份载入当前谱面，或使用在 **Preferences** 中启用的 QuickUndo 快捷键。

## “Open Current Beatmap” 无效，或无法获取已选打击物件。

这些功能依赖于读取 osu! 客户端的内存。内存读取有时会意外停止，此时通常重启 osu! 或重启电脑即可解决。其他可能原因和解决方法：

- 防火墙或杀毒软件拦截了 Mapping Tools：禁用杀毒软件或为 Mapping Tools 添加例外，然后重试。
- Mapping Tools 不是最新版本：有时需要更新 Mapping Tools，才能适配 osu! 的变更。
- osu! 不是最新版本：退出私人服务器并将 osu! 更新到最新版本。
- osu! 更新后再次更改了内存偏移量：请通知我，以便修复此问题。
- 在 Windows 7 或更早版本中使用 Mapping Tools：确保已安装 .NET Framework 4.5.1 或更高版本。
- 在 Windows 以外的操作系统上使用 Mapping Tools：请参阅[安装指南](/docs/mapping-tools/installation)。

## 如何在不复制打击音的情况下静音滑条尾音？

如果只想静音滑条尾音，可以将 **Copy hitsounds from** 字段留空，并在 **Copy hitsounds to** 字段中添加要静音尾音的谱面。这样不会复制任何打击音，但仍会静音滑条尾音。

如果你在静音滑条尾音的同时复制打击音，工具会使用来源谱面中的物件作为参考，因此不会静音你已添加打击音的位置的滑条尾音。这就是为什么滑条尾音静音功能属于 Hitsound Copier，而不是独立工具。

## 启动 Mapping Tools 时提示我安装 .NET，但我已经安装了。

当前版本的 Mapping Tools 以 .NET 10 为目标，且以独立版本的形式打包，因此不应要求单独安装 .NET。

如果仍然看到 .NET 提示，请确认你启动的是最新版本的 Mapping Tools，并从网站重新下载后安装。

## Mapping Tools 能在 lazer 中使用吗？

可以，Mapping Tools 的大部分功能都能在 lazer 中使用。详情请参阅[指南](/docs/guides/use-mt-in-lazer)。

## 我的问题不在此列表中，或我发现了一个错误。

可以在 [Discord](https://discord.gg/YfjKN2yjQV) 的 `mt-techsupport` 频道提问、直接在 Discord 上联系我（`olibomby`），或在 [GitHub](https://github.com/OliBomby/Mapping_Tools/issues) 上创建 issue。
