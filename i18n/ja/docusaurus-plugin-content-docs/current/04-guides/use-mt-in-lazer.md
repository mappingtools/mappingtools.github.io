---
title: osu! lazer で Mapping Tools を使う
author: "OliBomby"
id: use-mt-in-lazer
description: osu! lazer で Mapping Tools を使う方法。
keywords:
  - ドキュメント
  - Mapping Tools
  - lazer
  - 互換性
---

[osu! lazer](https://github.com/ppy/osu) の譜面編集ワークフローは osu! stable と異なります。Mapping Tools はどちらのクライアントでも譜面ファイルを編集できます。lazer では外部編集ワークフローを使ってください。一部の機能には制限があります。

## osu! lazer で Mapping Tools を使う

osu! lazer エディターで **File > Edit externally** をクリックします。編集中のマップセットに含まれるすべてのファイルを入れた一時フォルダーが作成されます。Mapping Tools がフォルダーを自動検出し、Selected beatmap に設定します。Mapping Tools での編集が終わったら **Finish editing and import changes** をクリックすると、osu! lazer に変更が取り込まれます。

![File > Edit externally](assets/osu_TAqF8oqGPr.png)

## 互換性

Mapping Tools のすべての機能が osu! lazer で動作するわけではありません。このセクションでは、Mapping Tools の機能ごとの互換性を説明します。

Editor Reader を使う機能は osu! lazer では動作しません。osu! lazer だけを使う場合は、**Preferences** で Editor Reader を無効にすることをおすすめします。

### 一般
- :x: **Open current beatmap** を使う機能は動作しません。
- :x: **Current editor time** を使う機能は動作しません。
- :x: **Selected hit objects** を使う機能は動作しません。
- :white_check_mark: **Generate backup** は動作します。
- :white_check_mark: **Load backup** は動作します。
- :white_check_mark: 複数のセグメントタイプを含む **Slider paths** に完全対応しています。

### ツール
- :x: **Geometry Dashboard** は動作しません。Editor Reader に依存します。
- :white_check_mark: **Hitsound Copier** は動作します。
- :large_orange_diamond: **Hitsound Studio** は動作しますが、一時フォルダーが削除されると、インポートしたサンプルや譜面への参照が切れます。
- :white_check_mark: **Pattern Gallery** は動作します。
- :white_check_mark: **Property Transformer** は動作します。
- :white_check_mark: **Sliderator** は動作しますが、lazer エディター上で非常に動作が遅くなります。
- :white_check_mark: **Tumour Generator 2** は動作します。
- :large_orange_diamond: **Auto-fail Detector** は動作しますが、lazer には Auto-fail がありません。
- :white_check_mark: **Combo Colour Studio** は動作します。
- :white_check_mark: **Hitsound Preview Helper** は動作します。
- :white_check_mark: **Map Cleaner** は動作します。
- :white_check_mark: **Mapset Merger** は動作します。
- :white_check_mark: **Metadata Manager** は動作します。
- :white_check_mark: **Rhythm Guide** は動作します。
- :white_check_mark: **Slider Completionator** は動作します。
- :white_check_mark: **Slider Merger** は動作します。
- :large_orange_diamond: **Slider Picturator** は動作しますが、画像スライダーは lazer に表示されません。
- :white_check_mark: **Timing Copier** は動作します。
- :white_check_mark: **Timing Helper** は動作します。

## 今後の osu! lazer との互換性について

osu! lazer は現在も開発中のため、ファイル形式やクライアントが変更され、Mapping Tools が動作しなくなることがあります。Mapping Tools を lazer で使っていて、この一覧にない問題が発生した場合は、**About > Report an issue** から報告してください。
