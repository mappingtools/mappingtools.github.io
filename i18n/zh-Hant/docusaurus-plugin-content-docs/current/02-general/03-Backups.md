---
title: "備份"
author: "OliBomby"
id: backups
description: Mapping Tools 備份的完整說明。
keywords:
  - docs
  - mapping tools
  - backups
---

Mapping Tools 會將譜面備份儲存在設定的備份資料夾中。你可以透過 **About > Open backups folder** 開啟該資料夾，或在 **Preferences** 中變更位置。

若已設定即時讀取編輯器狀態，備份可以包含編輯器中最新的未儲存狀態。否則，Mapping Tools 會備份目前可從磁碟讀取的譜面檔案。

## 自動備份 {#automatic-backups}

啟用後，Mapping Tools 會在工具修改譜面前建立備份，讓你需要復原工具操作時有可還原的版本。你可以在 **Preferences** 中設定備份資料夾與保留數量上限。達到上限時，系統會移除最舊的備份。

## 定期備份 {#periodic-backups}

啟用後，只要能讀取編輯器的即時狀態，Mapping Tools 就會定期備份目前的譜面。若譜面自上次備份後沒有變更，系統便會略過此次備份。定期備份的檔名會包含 `PB`。

## 手動備份 {#manual-backups}

使用 **File** 選單即可建立已選取譜面的備份，或將備份載入其中。手動備份的檔名會包含 `UB`。**QuickUndo** 會將最新的非定期備份還原至 osu! 目前開啟的譜面。
