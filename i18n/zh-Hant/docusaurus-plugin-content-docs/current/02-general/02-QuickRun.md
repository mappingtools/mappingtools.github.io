---
title: "QuickRun"
author: "OliBomby"
id: quickrun
description: QuickRun 的完整說明。
keywords:
  - docs
  - mapping tools
  - quickrun
  - smartquickrun
  - quickundo
---

QuickRun 能大幅加快使用 Mapping Tools 的速度。只要按下快速鍵，就能執行工具並自動重新載入編輯器，整個操作只需按一次按鈕。

你可以在 **Preferences** 中啟用 QuickRun。

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="QuickRun 範例圖片"
  sources={{
    light: useBaseUrl('./img/quickrun_example_light.png'),
    dark: useBaseUrl('./img/quickrun_example_dark.png'),
  }}
/>
```

## 設定 {#setup}

若要啟用 QuickRun，請前往 **Preferences**，並在 **QuickRun hotkey** 欄位指定快速鍵。按下該快速鍵後，Mapping Tools 就會執行目前開啟的工具。

`Alt+M` 是不會與 osu! 編輯器標準快速鍵衝突的好選擇。

若啟用 **Auto reload after QuickRun**，工具完成工作後，Mapping Tools 會自動傳送指令給 osu! 用戶端並重新載入編輯器。這樣你就不必手動重新載入。

:::info
請記住，使用 QuickRun 執行工具時，**一律會使用編輯器目前開啟的譜面**，而不是 Mapping Tools 中選取的譜面。
:::

## SmartQuickRun {#smartquickrun}

勾選 QuickRun 快速鍵欄位右側的方塊，即可啟用 **SmartQuickRun**。這項功能會依照你在編輯器中選取的物件數量，執行不同工具。

SmartQuickRun 可以區分以下三種情況：

- **None**：未選取任何打擊物件。`N=0`
- **Single**：剛好選取一個打擊物件。`N=1`
- **Multiple**：選取一個以上的打擊物件。`N>1`

## QuickUndo {#quickundo}

**QuickUndo** 是一組快速鍵，可將最近的備份載入編輯器，藉此復原上一次工具執行的結果。它也支援與 QuickRun 相同的**自動重新載入**功能。建議搭配 QuickRun 使用 QuickUndo。

`Ctrl+Shift+Z` 是 QuickUndo 的好選擇。
