---
title: osu!mania のヒットサウンドを osu!standard 用に変換
author: "OliBomby"
id: convert-mania-to-standard-hs
description: Hitsound Studio で osu!mania のヒットサウンドを osu!standard 用に変換する方法。
keywords:
  - ドキュメント
  - Mapping Tools
  - Hitsound Studio
  - ヒットサウンド
  - 変換
---

osu!mania では、同じティックに複数のノートを置けることで知られています。複数のサンプルセットやカスタムサンプルを同時に使えるため、osu!mania ではヒットサウンドをより自由に設定できます。しかし osu!standard では同じティックにノートを 1 つまでしか置けないため、osu!mania からヒットサウンドをコピーするのは難しくなります。Hitsound Studio を使うと、osu!mania のヒットサウンドを osu!standard 用に変換し、ヒットサウンド付けの可能性を広げられます。

## ステップ 1: Hitsound Studio の準備 {#1}

Mapping Tools で Hitsound Studio を開きます。**Project** メニューをクリックし、**New project** を選択します。現在の Hitsound Studio の設定を残したい場合は、先に **Save project** で保存してください。

## ステップ 2: ヒットサウンドのレイヤーをインポート {#2}

ウィンドウ右下のプラスボタンをクリックして、インポート用の新しいウィンドウを開きます。**Import hitsounds** タブで譜面のヒットサウンドをすべてインポートします。**Source beatmap** で変換する osu!mania のヒットサウンドがある譜面を選びます。**Detect duplicate samples** と **Remove duplicate hitsounds** にチェックを入れ、ストーリーボード上のサンプルでヒットサウンドの一部を補っている譜面の場合は **Include storyboarded samples** にもチェックを入れます。次に **Accept** を押すとヒットサウンドがインポートされ、Hitsound Studio にレイヤーの一覧が表示されます。

## ステップ 3: 設定 {#3}

画面下部にある **Base beatmap** と **Default sample** を設定します。ベース譜面として変換先の譜面を選択します。その譜面のメタデータ、タイミング、音量が使われます。

既定サンプルにはいくつか選択肢があり、好みによって異なります。ヒットサウンドレイヤーに hitnormal が定義されていないときは、osu!standard が常に hitnormal 音を鳴らすため、既定サンプルが使われます。空欄のままにして、Soft sample set を選び、音量に `-1` を入力することもできます。

## ステップ 4: エクスポート {#4}

ウィンドウ右下の実行ボタンを押すと、エクスポート設定のダイアログが開きます。**Export mode** と **Export gamemode** の両方が **Standard** になっていることを確認してください。**Sample file format** と **Mixed sample file format** を **Vorbis (.ogg)** に変更すると、すべてのサンプルが `.ogg` に変換され、ファイルサイズを抑えられます。**Accept** を押して、ヒットサウンドのエクスポートを開始します。

Hitsound Studio のエクスポートが完了すると、エクスポートフォルダーに `.osu` ファイルと複数のオーディオファイルが作成されます。.osu ファイルは osu!standard のヒットサウンド差分で、オーディオファイルはヒットサウンドの再生に必要です。これらのファイルを osu!standard のマップセットにコピーし、Hitsound Copier を使って差分からヒットサウンドをコピーしてください。
