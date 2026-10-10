---
title: "Pattern Gallery"
author: "OliBomby"
id: pattern-gallery
description: 從 osu! 譜面匯入與匯出圖樣，並建立可與朋友分享的圖樣收藏。
keywords:
  - docs
  - mapping tools
  - pattern gallery
---

Pattern Gallery 可讓你從 osu! 譜面匯入與匯出圖樣，並建立可分享的圖樣收藏。你可以用它快速將任意打擊物件排列或譜面片段搬到其他譜面。

## 工具說明

Pattern Gallery 可用於：

* 從 osu! 譜面匯入與匯出圖樣，將任意一組打擊物件移至其他譜面。
* 建立可與朋友分享的圖樣收藏。
* 使用底部按鈕新增或移除圖樣。
* 選取一或多個圖樣並按執行按鈕匯出至已選取譜面，也可以對圖樣按兩下匯出。
* 使用匯出選項，在匯出時進一步處理圖樣。
* 透過 **Project** 選單儲存、載入、重新命名、匯入及匯出圖樣收藏。

## 使用方式

1. 在 Mapping Tools 中開啟 Pattern Gallery。
2. 使用匯入選項將圖樣加入收藏。
3. 從圖庫中選取圖樣。
4. 按執行按鈕，將圖樣匯出至已選取譜面。

## 功能與設定

此工具提供以下功能：

* **圖樣管理**：新增、移除、重新命名圖樣，並將圖樣整理成收藏。
* **匯入選項**：從不同來源匯入圖樣，例如已選取物件、譜面檔案或圖樣代碼。
* **匯出選項**：設定圖樣匯出時的縮放、旋轉與篩選方式。

## 匯出選項

匯出圖樣時，可以調整以下選項：

* **Export Offset**：指定放置圖樣的時間。可選擇圖樣原本的時間、自訂時間或目前的編輯器時間。
  * **Custom export offset**：在自訂時間模式下，指定圖樣的放置時間。
* **Deletion margin**：刪除原始譜面部分內容時，在圖樣前後保留的額外時間（毫秒）。
* **Parting distance**：將圖樣拆成較小區塊所需間隔的最小拍數。
* **Beat divisors**：以逗號分隔輸入任意數量的拍點細分，例如：`1/4, 1/12, 1/7, 4/5, 0.13435622499`。
* **Custom Scale**：指定倍率，調整圖樣大小。
* **Custom Rotate**：指定角度，讓圖樣順時針旋轉。
* **Pattern Overwrite Mode**：決定如何處理圖樣與目標譜面中重疊的物件。可選模式如下：
  * **NoOverwrite**：保留譜面中所有現有物件，直接新增圖樣。
  * **PartitionedOverwrite**：只在圖樣較密集的區段移除原譜面物件。
  * **CompleteOverwrite**：移除圖樣起點至終點之間原譜面的所有物件。
* **Timing Overwrite Mode**：決定如何合併原譜面與圖樣的時間設定。
* **Include hitsounds**：匯出圖樣時間點中的打擊音效效果。
* **Include kiai**：匯出圖樣中的 kiai 設定。
* **Scale to new circle size**：縮放圖樣，讓物件間距相對於圓圈大小維持不變。
* **Scale to new timing**：依據新時間設定縮放圖樣的時間，讓物件間的拍數維持不變。如果時間設定中有未對齊的紅線，可能會出現錯誤的吸附結果。如果存在 0 BPM 或無限 BPM 紅線，請勿使用此選項。
* **Snap to new timing**：使用指定的拍點細分，將圖樣物件對齊至新時間設定。
* **Manualify stacks**：手動堆疊圖樣物件。
* **Fix global SV**：調整圖樣中的綠線 SV，以符合新譜面的全域 SV，讓滑條在新譜面中維持相同 SV。
* **Fix BPM SV**：調整圖樣中的綠線 SV，以符合新譜面的 BPM，讓滑條在新譜面中維持相同 SV。如果使用 **Scale to new timing**，建議停用此功能。
* **Fix colourhax**：調整色彩跳轉，讓圖樣物件與原譜面的色彩索引保持相同。
* **Fix slider tick rate**：提高圖樣的 BPM，讓圖樣中的滑條刻度速率維持不變。

## 圖樣操作選單

在圖庫中的圖樣上按一下滑鼠右鍵，即可開啟操作選單：

* **Properties**：查看圖樣名稱、建立時間、上次使用時間與使用次數等詳細資訊。
* **Delete**：刪除已選取的圖樣。按住 Shift 可略過確認對話方塊。
* **Open in File Explorer**：在檔案總管中開啟已選取圖樣的來源檔案。
* **Group**：圖樣分組選項。

## 匯入選項

按一下匯入按鈕，即可從不同來源匯入圖樣。

* **Import Selected**：將目前在編輯器中選取的打擊物件製作成圖樣。
  * **Name**：圖樣名稱。
* **Import from .osu File**：從磁碟上的 `.osu` 檔案匯入圖樣。
  * **Name**：圖樣名稱。
  * **Pattern file path**：要匯入之圖樣檔案的路徑。
  * **Filter**：篩選 `.osu` 檔案。
  * **Start Time**：圖樣在 `.osu` 檔案中的起始時間。
  * **End Time**：圖樣在 `.osu` 檔案中的結束時間。
* **Import from Code**：從代碼匯入圖樣，適合分享網路上的圖樣。
  * **Name**：圖樣名稱。
  * **Hit Objects**：打擊物件代碼。
  * **Timing Points**：時間點代碼。
  * **Global SV**：設定圖樣打擊物件的全域滑條速度。
  * **Game Mode**：指定圖樣適用的遊戲模式。

## Project 選單

Pattern Gallery 中的 **Project** 選單可用於：

* 儲存圖樣收藏。
* 載入圖樣收藏。
* 重新命名圖樣收藏。
* 匯入圖樣收藏。
* 匯出圖樣收藏。
