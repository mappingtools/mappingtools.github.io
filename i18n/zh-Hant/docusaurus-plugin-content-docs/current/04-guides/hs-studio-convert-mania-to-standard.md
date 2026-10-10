---
title: "將 mania 打擊音效轉換為 standard 打擊音效"
author: "OliBomby"
id: convert-mania-to-standard-hs
description: 如何使用 Hitsound Studio 將 osu!mania 打擊音效轉換為 osu!standard 打擊音效。
keywords:
  - docs
  - mapping tools
  - hitsound studio
  - hitsounds
  - convert hs
---

osu!mania 可以在同一個刻度上放置多個音符。這讓 osu!mania 的打擊音效設計更有彈性，因為你可以同時使用多種音效組或自訂樣本。然而，這也使得從 osu!mania 複製打擊音效到 osu!standard 更困難，因為 osu!standard 在每個刻度上最多只能放置一個音符。Hitsound Studio 能將 osu!mania 的打擊音效轉換為 osu!standard，開啟更多打擊音效設計的可能性。

## 步驟 1：設定 Hitsound Studio {#1}

在 Mapping Tools 中開啟 Hitsound Studio。點選 **Project** 選單，再按 **New project**。如果不想遺失 Hitsound Studio 目前的設定，請先使用 **Save project** 儲存。

## 步驟 2：匯入打擊音效圖層 {#2}

按一下視窗右下角的加號按鈕，開啟匯入視窗。前往 **Import hitsounds** 索引標籤，匯入譜面中的所有打擊音效。在 **Source beatmap** 選取要轉換打擊音效的 osu!mania 譜面。並勾選 **Detect duplicate samples** 與 **Remove duplicate hitsounds**；如果譜面使用故事板樣本補上部分缺少的打擊音效，也請勾選 **Include storyboarded samples**。按一下 **Accept** 匯入打擊音效後，Hitsound Studio 中就會出現打擊音效圖層清單。

## 步驟 3：設定 {#3}

視窗底部還有兩個項目要設定：**Base beatmap** 與 **Default sample**。在 Base beatmap 選取要轉換的譜面，工具會使用該譜面的中繼資料、時間設定與音量。

Default sample 有多種選擇，請依個人偏好設定。當打擊音效圖層未定義 hitnormal 音效時，會使用預設樣本；osu!standard 一定需要播放 hitnormal 音效。你可以將此欄位留白，選取 Soft sample set，並輸入 `-1` 音量。

## 步驟 4：匯出 {#4}

按一下視窗右下角的執行按鈕，開啟匯出選項對話方塊。請確認 **Export mode** 與 **Export gamemode** 都設為 **Standard**。你也可以將 **Sample file format** 與 **Mixed sample file format** 設為 **Vorbis (.ogg)**，把所有樣本轉成 `.ogg` 以節省檔案空間。按一下 **Accept** 開始匯出打擊音效。

Hitsound Studio 匯出完成後，匯出資料夾中會有一個 `.osu` 檔案，內含 osu!standard 打擊音效難度，以及打擊音效所需的多個音訊檔案。接著你可以將這些檔案複製到 osu!standard 譜面組，並使用 Hitsound Copier 從打擊音效難度複製打擊音效。
