---
title: "Sliderator"
author: "OliBomby"
id: sliderator
---

Sliderator 能建立滑條或連打，並在途中改變速度。

開始使用時，先使用左上角的控制項匯入滑條，再以滑鼠右鍵編輯圖表。

:::caution 不可上架

Sliderator 建立的滑條被視為不可上架。詳情請參閱[這篇 Reddit 貼文](https://www.reddit.com/r/osugame/comments/xnmcuq/acceldecel_sliders_made_with_mapping_tool_is_now/?utm_source=share&utm_medium=web2x&context=3)。

:::

## 匯入滑條 {#importing}

使用 Sliderator 前，必須按一下左上角的 **Import sliders** 按鈕，匯入一或多個滑條。匯入方式有三種：

- **Selected**：匯入目前在 osu! 編輯器中選取的滑條。
- **Bookmarked**：匯入已選取譜面中有書籤的滑條。
- **Time**：匯入已選取譜面中與你輸入的時間碼相符的滑條。時間碼格式與你在編輯器中複製物件並貼到文字欄位時相同，例如：`00:56:823 (1,2,1,2) -`

匯入多個滑條後，可以使用左右按鈕切換。按住 Shift 再點擊按鈕，則會先快速調整目前滑條的速度，再切換到下一個滑條。

選取滑條時，會自動設定 **Beat length**、**BPM** 與 **Global SV** 數值。

## 圖表 {#graph}

圖表是 Sliderator 最重要的部分，用來定義滑條球隨時間移動的方式。

X 軸代表滑條整段持續時間的**時間**，持續時間由 **Beat length** 欄位設定。圖表下方的滑桿可變更 X 軸線條的拍點細分。

Y 軸有兩種模式，按一下圖表下方的綠色按鈕即可切換：

- **X** 是位置模式。Y 軸代表滑條上的位置，你可以精確指定滑條球在各時間點的位置。
- **V** 是速度模式。Y 軸代表滑條速度倍率，範圍介於正負 **SV limit** 之間。

![Sliderator 圖表](./assets/sliderator_graph.png)

### 編輯圖表 {#editing-graph}

你可以透過控制點與插值編輯圖表。

在圖表任意位置按一下滑鼠**右鍵**即可新增控制點。在控制點上按右鍵會開啟操作選單，可刪除控制點或變更插值方式。對控制點使用 **Shift+右鍵**可立即移除。按住滑鼠**左鍵**拖曳控制點即可移動。拖曳背景或滾動滑鼠滾輪即可平移或縮放畫面。

每個插值區段的中央都有較小的控制點。上下拖曳此控制點可變更插值形狀；在控制點上按**右鍵**可重設它。

以下快速鍵可協助你拖曳控制點：

- **Shift**：限制為水平移動。
- **Ctrl**：限制為垂直移動。
- **Alt**：停用吸附。

### 其他圖表控制項 {#graph-controls}

本節說明與圖表相關的其他控制項。

- **Beat length**：滑條的拍數長度，也會影響圖表寬度。
- **BPM**：滑條運作時的每分鐘拍數。數值應與匯出滑條位置的 BPM 相同。
- **Global SV**：譜面的滑條倍率。數值應與已選取譜面的滑條倍率相同。
- **SV limit**：圖表中的最高 SV，也會影響速度模式下的圖表高度。預設值為 10，因為繼承時間點允許的最高 SV 為 10。
- **Scale to completion**：垂直縮放所有控制點，讓滑條球沿滑條移動的最遠距離符合指定的完成度。
- **Reset graph**：將圖表重設為預設狀態。
- **Show red anchors**：在位置模式下，於圖表中以紅色水平線顯示滑條的紅色錨點位置。
- **Show graph anchors**：在滑條預覽中顯示圖表控制點的位置。
- **Expected segment count**：估算目前設定需要多少滑條錨點。低於 10000 通常不會讓遊戲太卡。

## 匯出選項 {#export-options}

執行 Sliderator 時，系統會在匯出時間將調速後的滑條匯出至已選取譜面。你可以選擇直接新增滑條，或使用 **Override** 覆寫譜面中的現有物件。

勾選 **Export as stream instead** 後，Sliderator 不會匯出滑條，而會匯出依照滑條速度與持續時間排列的圓圈連打。此選項會使用圖表的拍點細分設定，決定每拍放置多少個圓圈。

你可以手動為調速後的滑條指定 **New SV**。此 SV 應接近圖表使用的最高速度。通常自動設定的數值已足夠，但有時稍微降低數值能減少錨點數量，又不會影響滑條品質。

**Minimum tumour length** 可大幅減少結果滑條中的錨點數量。Sliderator 會使用不可見的 tumour 減慢滑條球，因此提高最小 tumour 長度會產生較大的 tumour，減少所需的 tumour 數量。缺點是 tumour 越大，滑條球移動就越不平順。

**Delegate SV to BPM** 會讓 Sliderator 使用 BPM 設定新的 SV，解除繼承時間點 10 倍 SV 的限制。啟用後也能使用 **Remove slider ticks**，以 SV 為 `NaN` 的繼承時間點移除滑條刻度。
