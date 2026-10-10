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

[osu! lazer](https://github.com/ppy/osu) 的譜面編輯流程與 osu! stable 不同。Mapping Tools 可編輯任一用戶端的譜面檔案。在 lazer 中，請使用外部編輯流程，並留意部分功能有所限制。

## 如何在 osu! lazer 中使用 Mapping Tools

在 osu! lazer 編輯器中，點選 **File > Edit externally**。系統會建立暫存資料夾，並將目前編輯的譜面組所有檔案放入其中。Mapping Tools 會自動偵測這個資料夾，並將它設為已選取譜面。使用 Mapping Tools 完成編輯後，按一下 **Finish editing and import changes**，osu! lazer 就會匯入變更。

![File > Edit externally](assets/osu_TAqF8oqGPr.png)

## 相容性

Mapping Tools 並非所有功能都能在 osu! lazer 中使用。本節列出各項功能的相容性。

任何使用 Editor Reader 的功能都無法在 osu! lazer 中使用。如果你只打算使用 osu! lazer，建議前往 **Preferences** 停用 Editor Reader。

### 一般功能
- :x: **Open current beatmap** 相關功能無法使用。
- :x: **Current editor time** 相關功能無法使用。
- :x: **Selected hit objects** 相關功能無法使用。
- :white_check_mark: **Generate backup** 可使用。
- :white_check_mark: **Load backup** 可使用。
- :white_check_mark: 支援含有多種線段類型的 **Slider paths**。

### 工具
- :x: **Geometry Dashboard** 無法使用，因為它依賴 Editor Reader。
- :white_check_mark: **Hitsound Copier** 可使用。
- :large_orange_diamond: **Hitsound Studio** 可使用，但移除暫存資料夾後，匯入樣本與譜面的參照會失效。
- :white_check_mark: **Pattern Gallery** 可使用。
- :white_check_mark: **Property Transformer** 可使用。
- :white_check_mark: **Sliderator** 可使用，但在 lazer 編輯器中會非常卡頓。
- :white_check_mark: **Tumour Generator 2** 可使用。
- :large_orange_diamond: **Auto-fail Detector** 可使用，但 lazer 沒有 auto-fail。
- :white_check_mark: **Combo Colour Studio** 可使用。
- :white_check_mark: **Hitsound Preview Helper** 可使用。
- :white_check_mark: **Map Cleaner** 可使用。
- :white_check_mark: **Mapset Merger** 可使用。
- :white_check_mark: **Metadata Manager** 可使用。
- :white_check_mark: **Rhythm Guide** 可使用。
- :white_check_mark: **Slider Completionator** 可使用。
- :white_check_mark: **Slider Merger** 可使用。
- :large_orange_diamond: **Slider Picturator** 可使用，但 lazer 不會顯示圖片滑條。
- :white_check_mark: **Timing Copier** 可使用。
- :white_check_mark: **Timing Helper** 可使用。

## 關於 lazer 相容性的提醒

osu! lazer 持續開發中，其檔案格式與用戶端都可能變更，導致 Mapping Tools 無法正常運作。如果你在 lazer 中遇到此清單未列出的問題，請使用 **About > Report an issue** 回報。
