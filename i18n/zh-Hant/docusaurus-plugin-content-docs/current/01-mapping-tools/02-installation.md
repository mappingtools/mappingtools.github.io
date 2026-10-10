---
title: "安裝"
author: "aehrea"
id: installation
description: 如何在 Windows、Linux 和 macOS 上安裝 Mapping Tools。
keywords:
  - docs
  - mapping tools
  - install
---

Mapping Tools 提供 **Windows、Linux 和 macOS** 原生桌面版本。請從[下載頁面](/download)或 [GitHub 發行版本](https://github.com/OliBomby/Mapping_Tools/releases/latest)下載適用於你處理器的版本。

所有套件皆為自包含版本，並附有 .NET 10 執行環境。

## 選擇套件

- **Windows**：使用安裝程式或免安裝 ZIP。大多數系統請選 x64；x86 適用於 32 位元 Windows。
- **Linux**：x64 或 ARM64 可使用 AppImage 或免安裝 ZIP。
- **macOS**：下載適用於 Intel（x64）或 Apple silicon（ARM64）的免安裝 ZIP，解壓縮後開啟 **Mapping Tools.app**。

## 各平台的編輯器整合

桌面版本皆可使用譜面檔案工具。部分即時編輯器功能則取決於作業系統與整合方式：

- **Geometry Dashboard** 和 **Editor Reader** 記憶體整合功能需要 Windows。
- 在 Linux 和 macOS 上，目前的譜面偵測預設使用本機 **Gosumemory/Tosu** API，網址為 `127.0.0.1:24050`。啟動相容的 API 後，即可使用 **Open current beatmap**。這些平台預設會停用即時編輯器狀態讀取與自動重新載入編輯器。
- 你也可以隨時透過 **File > Open beatmap** 直接選取譜面。

使用 osu! lazer 時，請採用其 **File > Edit externally** 工作流程。詳情請參閱 [lazer 指南](/docs/guides/use-mt-in-lazer)。

## 設定 {#setup}

安裝 Mapping Tools 後，按一下左上角按鈕開啟導覽選單，再前往 **Preferences** 進行設定。

最重要的欄位如下：

- **osu! folder**：_osu!_ 所在資料夾的路徑。
- **Songs folder**：存放所有譜面的資料夾路徑，通常位於 _osu!_ 資料夾內。
- **osu! config user file**：osu! 使用者設定檔的路徑，通常位於 _osu!_ 資料夾內，檔名為 `osu.[username].cfg`。

:::note

如果你使用 osu!stable，請確認這些欄位設定正確，否則 Mapping Tools 可能無法正常運作。

:::
