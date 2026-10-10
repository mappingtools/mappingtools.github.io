---
title: FAQ
author: OliBomby, aehrea
---

# FAQ

## 為什麼譜面沒有任何變更？

請查看應用程式頂端的藍色列，確認**已選取譜面**設定了正確的譜面路徑。

執行工具後，也請記得**不要儲存，直接重新載入編輯器**。在編輯器中儲存譜面會以舊版譜面覆寫 `.osu` 檔案，因此會還原工具所做的變更。你可以在編輯器中按下 `Ctrl+L` 再按 `Enter`，快速重新載入譜面。

## 執行工具時出現「Could not find part of the path」或「Empty path name is not legal」錯誤。

將滑鼠游標移到**視窗頂端的譜面名稱**上，即可查看完整路徑。請確認此路徑確實存在，而且 Songs 資料夾位於正確位置。如果 Songs 資料夾不在預設的 Appdata 位置，請在 **Preferences** 中設定正確的 Songs 資料夾路徑。

## 每次在某張譜面上執行任何工具都出錯，但其他譜面正常。

你嘗試編輯的譜面可能使用舊版且不受支援的檔案格式，或檔案已損毀。請在編輯器中開啟並儲存該譜面，強制 osu! 將它更新為與 Mapping Tools 相容的最新檔案格式。

## 工具弄壞了我的譜面，該怎麼辦？

Mapping Tools 每次修改譜面時都會建立備份。前往 **About > Open backup folder** 即可找到備份。你也可以透過 **File > Load backup** 將備份載入「目前譜面」，或在 **Preferences** 中啟用 QuickUndo 快速鍵來還原。

## 「Open Current Beatmap」或取得選取的打擊物件功能無法使用。

這些功能需要讀取 osu! 用戶端的記憶體。記憶體讀取有時會隨機停止，通常重新啟動 osu! 或電腦就能解決。其他可能原因與解決方法如下：

- 防火牆或防毒軟體封鎖了 Mapping Tools：停用防毒軟體，或將 Mapping Tools 加入例外清單後再試一次。
- Mapping Tools 不是最新版本：有時 Mapping Tools 需要更新，以配合 osu! 的變更。
- osu! 不是最新版本：離開私人伺服器，並將 osu! 更新至最新版本。
- osu! 更新後再次變更記憶體位移：請通知我，以便修正問題。
- 在 Windows 7 或更舊版本上使用 Mapping Tools：請安裝 .NET Framework 4.5.1 或更新版本。
- 在非 Windows 作業系統上使用 Mapping Tools：請參閱[安裝指南](/docs/mapping-tools/installation)。

## 如何將滑條尾端靜音，而不複製打擊音效？

若只要將滑條尾端靜音，請將「Copy hitsounds from」欄位留白，並在「Copy hitsounds to」欄位加入要將滑條尾端靜音的譜面。這樣不會複製任何打擊音效，但仍會將滑條尾端靜音。

如果你在靜音滑條尾端時也複製打擊音效，工具會參照來源譜面的物件，因此不會將你已加入打擊音效的位置的滑條尾端靜音。這就是為什麼滑條尾端靜音功能會整合在 Hitsound Copier 中，而不是獨立成另一個工具。

## 啟動 Mapping Tools 時要求安裝 .NET，但我已經安裝了。

目前版本的 Mapping Tools 以 .NET 10 為目標，並以自包含方式封裝，因此不需要另外安裝 .NET。

如果仍看到 .NET 安裝提示，請確認你啟動的是目前版本的 Mapping Tools，並從網站重新下載安裝。

## Mapping Tools 可以在 lazer 中使用嗎？

可以，Mapping Tools 的大多數功能都能在 lazer 中使用。詳情請參閱[指南](/docs/guides/use-mt-in-lazer)。

## 我有其他問題，或發現錯誤。

請在 [Discord](https://discord.gg/YfjKN2yjQV) 的 mt-techsupport 頻道提問、直接在 Discord 聯絡我（olibomby），或在 [GitHub](https://github.com/OliBomby/Mapping_Tools/issues) 建立 issue。
