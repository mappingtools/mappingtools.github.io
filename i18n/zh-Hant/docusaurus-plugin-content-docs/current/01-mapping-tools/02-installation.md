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

## 功能相容性 {#editor-integration-by-platform}

✅ 支援　❌ 不支援。部分支援的功能可能需要依照下方說明進行設定。

<div className="feature-compatibility">

| 作業系統 | osu! 客戶端 | 讀取／寫入譜面 | 取得目前譜面 | 讀取編輯器即時狀態 | 自動重新載入 | 全域快速鍵 | Geometry Dashboard 覆蓋顯示 |
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

- **osu! stable**：在 Windows 上，偵測目前譜面與讀取編輯器即時狀態會使用記憶體整合，自動重新載入則會模擬按鍵。在 Linux 和 macOS 上，請透過 Wine 執行 stable，並在 `127.0.0.1:24050` 啟動相容的 **Gosumemory/Tosu** API，才能取得目前譜面。請在 Preferences 中設定 **Songs folder**。
- **osu! lazer**：使用 **File > Edit externally** 開啟譜面檔案供外部編輯。Mapping Tools 會自動偵測外部編輯中的譜面，在此表中視同取得目前譜面。完成編輯後，請在 lazer 中使用 **Finish editing and import changes** 套用修改。詳情請參閱 [lazer 指南](/docs/guides/use-mt-in-lazer)。
- **osu! unstable**：在 Preferences 中選取 **MTIPC**，即可取得目前譜面、讀取編輯器即時狀態並重新載入編輯器。這些功能需要客戶端的 MTIPC 伺服器。在 Linux 和 macOS 上，讀取編輯器即時狀態與重新載入編輯器預設為停用。
- **全域快速鍵**：Linux 上需要使用 X11，或提供全域快速鍵桌面入口服務的桌面環境。在 macOS 上，請允許系統要求的鍵盤存取權限。

你也可以隨時透過 **File > Open beatmap** 直接選取譜面。

## 設定 {#setup}

安裝 Mapping Tools 後，按一下左上角按鈕開啟導覽選單，再前往 **Preferences** 進行設定。

最重要的欄位如下：

- **osu! folder**：_osu!_ 所在資料夾的路徑。
- **Songs folder**：存放所有譜面的資料夾路徑，通常位於 _osu!_ 資料夾內。
- **osu! config user file**：osu! 使用者設定檔的路徑，通常位於 _osu!_ 資料夾內，檔名為 `osu.[username].cfg`。

:::note

如果你使用 osu!stable，請確認這些欄位設定正確，否則 Mapping Tools 可能無法正常運作。

:::
