---
title: "Geometry Dashboard"
author: "OliBomby"
id: geometry-dashboard
---

Geometry Dashboard 會在 osu! 編輯器上疊加與幾何相關的虛擬物件，讓你將物件吸附至這些虛擬點、線與圓。如此一來，就能建立完美的幾何圖樣，否則可能很難甚至無法做到。

:::note 平台支援

Geometry Dashboard 目前需要 Windows，因為即時編輯器覆疊功能依賴 Windows 專用整合。

:::

:::tip
此工具需要 Mapping Tools Preferences 中指定使用者設定檔。
:::

## 核心概念

Geometry Dashboard 的運作流程如下：

1. **讀取 osu! 編輯器目前的狀態。** 包含目前可見的打擊物件、編輯器時間與編輯器視窗位置。
2. **根據這些打擊物件產生虛擬物件。** 可設定多種產生器，從打擊物件建立虛擬點、線與圓。
3. **在 osu! 編輯器上方的覆疊畫面中顯示虛擬物件。** 你可以在覆疊中檢視產生的幾何圖形，並將游標吸附到這些圖形上。

## 使用者介面

Geometry Dashboard 視窗分為以下區域：

* **Search**：搜尋列，可篩選產生器清單，方便尋找項目。
* **切換按鈕**：切換不同功能。
  * Select All
  * Lock All
  * Usability All
* **Savestates 按鈕**：開啟[儲存狀態視窗](#savestates)。
* **Preferences 按鈕**：開啟[偏好設定視窗](#preferences)。
* **Generators List**：顯示可用的產生器，並提供啟用、停用及設定參數的選項。

## 虛擬幾何

虛擬幾何是此工具的核心。這些圖形不是編輯器中的真實打擊物件，而是可以讓游標懸停其上的點，供製圖時精確定位。

### 虛擬幾何狀態

虛擬幾何有幾種特殊狀態，可以個別開啟或關閉：

* **Selected**：啟用此物件，讓它可用於建立新物件。你可以將游標停在虛擬物件上，再使用選取快速鍵切換其選取狀態。選取後會以不同顏色與發光邊框醒目顯示。
* **Locked**：鎖定物件可避免產生器或作為來源的物件消失時，該物件也跟著消失。這有助於避免不小心刪掉重要幾何。鎖定的虛擬幾何會顯示為灰色。
* **Usable**：啟用後，產生器可使用此虛擬幾何來建立更多幾何。停用後，產生器會忽略此物件，且不會以它為基礎產生物件。不可使用的虛擬物件會以較暗的亮度顯示。
* **Relevancy**：介於 0 到 1 的數值，代表此幾何的關聯程度。數值越高，顯示越不透明。

## 產生器

產生器是 Geometry Dashboard 的核心，負責從打擊物件與其他虛擬物件建立新的虛擬物件。

### 一般產生器流程

產生器的運作方式如下：

1. **選取輸入物件：**每個產生器都有一組*相依項目*（所需的輸入類型）與*輸入條件*。輸入條件定義虛擬物件必須符合哪些額外規則才能供產生器使用。Geometry Dashboard 會掃描前面的圖層，尋找符合相依項目與輸入條件的物件。條件可以設定物件是否必須已選取，或是否必須具有指定的關聯程度。
2. **產生幾何：**對每一種可能的已選取輸入組合，產生器會使用其產生方法建立新的虛擬物件。產生方法會將已選取物件做為參數，並回傳一或多個新虛擬物件。
3. **分層：**每一批新虛擬物件都會放在新圖層。可在 Preferences 中設定圖層數量的 **Inception Level**。較低圖層中的虛擬物件會影響下一個更複雜圖層中所建立的虛擬物件。
4. **更新：**每當發生需要重新計算的變更時，系統會依據 **Update Mode** 偏好設定重新產生第一層物件，再依序更新第二層、第三層等更複雜的圖層。

為避免產生過多不需要的物件，系統會合併同一圖層中彼此距離足夠近的物件，並加總其關聯程度。你可以在 Preferences 中設定合併物件所需的接近程度。

### 產生器清單

以下是 Geometry Dashboard 中所有可用的產生器：

* **Basic Generators：**直接從打擊物件建立虛擬物件。所有產生器的時間位置都設為來源物件的平均時間。
  * **Points on Circles and Slider Heads**：在圓圈與滑條起點建立虛擬點。
  * **Points on Slider Ends**：在滑條最末端建立虛擬點。
  * **Points on Slider Anchors**：在滑條錨點（紅色與白色）建立虛擬點。
  * **Points on Last Anchors**：在滑條曲線的最後一個點建立虛擬點。
  * **Lines on Linear Sliders**：若滑條為線性，則從 Pos 到 Curve Point 建立虛擬線。時間與關聯程度沿用來源滑條。
  * **Points on Blanket Centers**：在圓形滑條中心建立虛擬點。時間與關聯程度沿用來源滑條。
  * **Circles on 3-Point Sliders**：根據滑條錨點建立圓形，以形成 Blanket 曲線或完美曲線。時間與關聯程度沿用來源滑條。
  * **Points on Slider Paths**：在滑條路徑上建立許多虛擬點。調整 Point Density 設定可變更點的數量。此產生器需要額外計算。
* **Intermediate Generators：**需要 Basic Generators 才能運作，可用於建立形狀或參考線。
  * **Tangent Circles on Circle**：建立與第一個輸入圓恰好相交於一點的虛擬圓。
  * **Circles by Two Points**：取得一對虛擬點，並以兩點為圓心建立兩個虛擬圓，半徑等於兩點間距。
  * **Equilateral Triangle from Two Points**：取得一對虛擬點，並在兩側各建立一點，形成兩個正三角形。
  * **Equilateral Triangle from Two Points (Type II)**：與一般三角形產生器相同，但三角形的定位方式不同。
  * **Square from Two Points**：取得一對虛擬點，並在兩側各建立一點，形成一個正方形。
  * **Square from Two Points (Type II)**：取得一對虛擬點，並在兩側各建立一對點，形成兩個正方形。
  * **Line by Two Points**：取得一對虛擬點，建立連接兩點的虛擬線。
  * **Average of Two Points**：取得兩個虛擬點，並計算兩點的平均位置以建立虛擬點。
  * **Average of Three Points**：取得三個虛擬點，並計算三點的平均位置以建立虛擬點。
  * **Scale & Rotate around a Fixed Point**：以固定虛擬點為中心旋轉及縮放任意虛擬物件。你可以設定角度、倍率，以及選取固定點的其他規則。
  * **Parallel Lines**：取得一條線與一個點，建立通過該點且與原線平行的虛擬線。
  * **Perpendicular Lines**：取得一條線與一個點，建立通過該點且與原線垂直的虛擬線。
  * **Bisector of Angles**：取得兩條虛擬線，並在兩線交點建立其夾角的角平分線。
  * **Bisector of Two Points**：取得一對虛擬點，建立兩點的垂直平分線。
  * **Tangent Lines on Circle**：取得一個虛擬圓與一個點，建立通過該點並沿圓兩側延伸的虛擬切線。
* **Advanced Generators：**需要更多設定的專用產生器，可用於進階遞迴圖樣。
  * **Intersection Points**：取得一對虛擬線或圓，並在每個交點建立虛擬點。此產生器搭配其他幾何產生方式相當實用。*注意：*計算交點的成本很高，若編輯器中同時啟用多個複雜圖形，效能可能明顯降低，使用時請留意。
  * **Successor of 2 Points**：取得兩個虛擬點，並以相同速度計算下一個虛擬點。搭配 **Points on Slider Paths** 可更精確地預測曲線。
  * **Successor of 3 Points**：取得三個虛擬點，並以相同角度與速度變化計算下一個虛擬點。
  * **Successor of 3 Points Reversed**：取得三個虛擬點，並以相同速度變化及相反角度計算下一個虛擬點。
  * **Successor of 4 Points**：取得四個虛擬點，並以相同角度、角度變化、速度變化及速度變化幅度計算下一個虛擬點。
  * **Scale & Rotate around a Fixed Point**：以固定虛擬點為中心旋轉及縮放任意虛擬物件。你可以設定角度、倍率，以及選取固定點的其他規則。
  * **Reflection across a Line**：以虛擬線為對稱軸，鏡射任意虛擬物件。

## 產生器選項

每個產生器都有一組可設定的選項，用來控制其行為：

* **Active**：啟用或停用產生器。停用後便不會建立任何虛擬物件。
* **Sequential**：只將依時間順序相鄰的物件做為輸入。啟用後，只會產生時間上連續的虛擬物件組合。這能大幅減少幾何圖形數量，避免畫面雜亂。
* **Deep**：不只檢查上一層，也會檢查所有符合條件的較早圖層。
* **Relevancy Ratio**：此產生器建立虛擬物件的基本關聯程度，範圍為 0 到 1。實際關聯程度可能受其他輸入物件的 Relevancy Ratio 影響。
* **Generates Inheritable**：啟用時，產生的物件可供其他產生器使用；停用時，其他產生器無法使用這些物件。
* **Input Selection Collection**：設定此產生器可使用哪些虛擬物件做為輸入。詳情請參閱[輸入選取設定](#input-selection-in-detail)。

### 特殊產生器設定

部分進階產生器提供特殊選項：

* **Circle from Single Point**：
  * *Radius*：圓的縮放倍率。
* **Points on Slider Paths**：
  * *Points Density*：每 osu! 像素滑條路徑會產生多少個點。
* **Scale & Rotate around a Fixed Point**：
  * *Angle*：旋轉角度（度）。
  * *Scalar*：等比例縮放倍率。
  * *Origin Input Selection*：設定虛擬物件需符合哪些額外條件，才能做為旋轉原點。
  * *Other Input Selection*：設定要以原點為中心鏡射的物件需符合哪些額外條件。
* **Reflection across a Line**：
  * *Axis Input Selection*：設定虛擬物件需符合哪些額外條件，才能做為此產生器的對稱軸。
  * *Other Input Selection*：設定要以軸線為中心鏡射的物件需符合哪些額外條件。

### 輸入選取設定詳解 {#input-selection-in-detail}

輸入選取是控制產生器會將哪些虛擬物件納入計算的主要機制。每個產生器都會指定所需的輸入類型（例如點或線），你可以使用輸入條件，依照物件的屬性進一步篩選。若未妥善設定輸入選取，產生器可能會建立太多不相關的虛擬物件，或無法建立必要物件。

一組選取條件由多個選取述詞組成。只要符合其中一個選取述詞，虛擬物件就能做為輸入。

將游標移至 Input Selection 上方，再按加號即可新增選取述詞。接著會顯示更多設定，以進一步篩選可產生幾何圖形的物件：

* **Need Selected**：啟用後，產生器只會使用已選取的虛擬物件做為輸入。已選取物件也會優先供游標懸停選取，讓你精確控制建立結果。
* **Need Locked**：啟用後，產生器只會使用已鎖定的物件來建立幾何。如果物件未鎖定，產生器就完全不會辨識它。當你想使用某些產生器，同時鎖定其他物件時，這項設定很實用。
* **Need Generated By This**：只使用由此產生器建立的虛擬物件。設定正確時，可將幾何產生範圍縮小至所需的圖形。
* **Need Generated Not By This**：與上一個篩選條件相反，只使用不是由此產生器建立的虛擬物件。
* **Min Relevancy**：要求做為輸入的物件至少具有指定關聯程度。關聯程度介於 0 到 1；設為 0 即停用此條件。

## 偏好設定 {#preferences}

Geometry Dashboard Preferences 視窗可自訂工具的行為與外觀：

* **Hotkeys**：
  * **Snap Key**：按住此按鍵即可將游標吸附至虛擬物件。
  * **Select Key**：按住此按鍵即可選取虛擬物件。
  * **Lock Key**：按住此按鍵即可鎖定虛擬物件。
  * **Usability Key**：按住此按鍵即可切換虛擬物件的可用狀態。
  * **Refresh Key**：立即更新根圖層打擊物件清單的按鍵。
* **Offset**：相對於編輯器畫面偏移所有虛擬物件，可用於修正縮放或位置問題。
  * **Left**：編輯器左邊緣的偏移量。
  * **Top**：編輯器上邊緣的偏移量。
  * **Right**：編輯器右邊緣的偏移量。
  * **Bottom**：編輯器下邊緣的偏移量。
* **Complexity**：遞迴產生的圖層數量，可用於降低效能負擔。
  * **Inception Level**：根據基礎打擊物件產生的圖層數量。
* **Downkey**：切換要顯示的虛擬物件。
  * **Everything**：顯示所有虛擬物件，包括打擊物件、子物件與父物件。
  * **Parents and parents of parents**：顯示吸附目標的所有祖先物件。
  * **Direct parents**：只顯示吸附目標的直接父物件。
  * **Children and children of children**：顯示吸附目標的所有後代物件。
  * **Direct children**：只顯示吸附目標的直接子物件。
* **Upkey**：未按下 Snap Key 時，切換要顯示的虛擬物件。
  * **All visible**：依據 Selection 設定顯示所有打擊物件。
  * **Nothing**：未按下 Snap Key 時隱藏所有物件。
* **Selection**：設定哪些打擊物件會用來產生虛擬物件。
  * **All visible**：包含所有可用的打擊物件。
  * **Visible or selected**：若沒有選取的打擊物件，使用所有可見物件；否則只使用所有已選取物件。
  * **Selected only**：只使用編輯器中已選取的打擊物件。
* **Updating**：設定何時更新虛擬物件。
  * **Any change**：任何變更發生時都更新。
  * **Time change**：編輯器計時器變更時更新。較省效能，但回應速度較慢。
  * **osu! activated**：目前的 osu! 視窗取得焦點時更新。
  * **Hotkey down**：按下更新快速鍵時更新。
* **Behavior**：Geometry Dashboard 的其他行為。
  * **Minimal diff**：虛擬物件彼此要多接近才會合併。
  * **Keep running**：開啟其他工具時仍保持 Geometry Dashboard 執行。
  * **See playfield**：在編輯器上疊加顯示遊戲區邊界。
  * **Debug**：在編輯器上疊加顯示編輯器邊界。如果即使啟用此選項仍看不到編輯器，表示它超出可偵測範圍。

### 虛擬幾何選項

你可以自訂編輯器中各類虛擬物件的顏色、不透明度、粗細與虛線樣式，提升辨識度。

* **Color**：邊框顏色。也可以從色彩選擇器複製（按一下 HEX 值即可複製）。
* **Opacity**：物件的透明度。
* **Thickness**：構成物件外框的線條粗細。
* **Dash**：設定外框使用虛線或實線。

## 儲存狀態 {#savestates}

儲存狀態的運作方式類似快速鍵設定檔。你可以快速切換設定檔，不必逐一手動變更每個產生器與偏好設定。也可以將快速鍵指定給儲存狀態，更迅速地切換。

按一下加號圖示即可建立新的儲存狀態，接著為它命名並指定快速鍵。使用儲存或載入按鈕即可儲存或修改目前設定。
