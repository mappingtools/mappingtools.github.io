---
title: "QuickRun"
author: "OliBomby"
id: quickrun
description: QuickRun 的完整说明。
keywords:
  - docs
  - mapping tools
  - quickrun
  - smartquickrun
  - quickundo
---

QuickRun 可以显著加快使用 Mapping Tools 的速度。按下快捷键即可运行工具，并自动重新载入编辑器，让你只需按一次按键就能完成整个工具操作流程。

你可以在 **Preferences** 中启用 QuickRun。

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="QuickRun example image"
  sources={{
    light: useBaseUrl('./img/quickrun_example_light.png'),
    dark: useBaseUrl('./img/quickrun_example_dark.png'),
  }}
/>
```

## 设置 {#setup}

要启用 QuickRun，请前往 **Preferences**，为 **QuickRun hotkey** 字段指定快捷键。之后按下此快捷键，即可运行 Mapping Tools 当前打开的工具。

`Alt+M` 是不错的选择，因为它不会与 osu! 编辑器的标准快捷键冲突。

如果启用了 **Auto reload after QuickRun**，工具完成工作后，Mapping Tools 会自动向 osu! 客户端发送命令以重新载入编辑器。这样你就不必手动重新载入。

:::info

请记住，使用 QuickRun 运行工具时，**它始终会处理编辑器当前打开的谱面**，而不是 Mapping Tools 中选中的谱面。

:::

## SmartQuickRun {#smartquickrun}

勾选 QuickRun hotkey 字段右侧的方框，即可启用 **SmartQuickRun**。此功能会根据你在编辑器中选中的物件数量，决定要运行哪个工具。

SmartQuickRun 会区分以下三种情况：

- **None**：未选中打击物件。`N=0`
- **Single**：恰好选中一个打击物件。`N=1`
- **Multiple**：选中多个打击物件。`N>1`

## QuickUndo {#quickundo}

**QuickUndo** 是一个快捷键，用于将最近的备份载入编辑器，从而撤销上一次工具运行。它也支持与 QuickRun 相同的**自动重新载入**功能。建议搭配 QuickRun 使用 QuickUndo。

`Ctrl+Shift+Z` 是 QuickUndo 的不错选择。
