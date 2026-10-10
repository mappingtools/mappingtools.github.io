---
title: "インストール"
author: "aehrea"
id: installation
description: Windows、Linux、macOS への Mapping Tools のインストール方法。
keywords:
  - ドキュメント
  - Mapping Tools
  - インストール
---

Mapping Tools は **Windows、Linux、macOS** 向けのネイティブデスクトップ版を提供しています。お使いのプロセッサーに合ったビルドを[ダウンロードページ](/download)または[GitHub Releases](https://github.com/OliBomby/Mapping_Tools/releases/latest)からダウンロードしてください。

すべてのパッケージは自己完結型で、.NET 10 ランタイムが含まれています。

## パッケージを選ぶ

- **Windows**: インストーラーまたはポータブル ZIP を使います。ほとんどのシステムでは x64 を選択してください。x86 は 32 ビット版 Windows 用です。
- **Linux**: x64 または ARM64 用の AppImage かポータブル ZIP を使います。
- **macOS**: Intel (x64) または Apple silicon (ARM64) 用のポータブル ZIP をダウンロードして展開し、フォルダー内の **Mapping Tools.app** を開きます。

## プラットフォームごとのエディター連携

譜面ファイルを扱うツールは、どのデスクトップ版でも利用できます。一部のライブエディター機能は、OS や連携方法によって制限されます。

- **Geometry Dashboard** と **Editor Reader** のメモリ連携には Windows が必要です。
- Linux と macOS では、現在の譜面の検出にローカルの **Gosumemory/Tosu** API (`127.0.0.1:24050`) を既定で使います。**Open current beatmap** を使うには、対応する API を起動してください。これらのプラットフォームでは、ライブエディター状態の読み取りとエディターの自動再読み込みは既定で無効です。
- **File > Open beatmap** からいつでも譜面を直接選択できます。

osu! lazer では **File > Edit externally** のワークフローを使ってください。詳しくは[osu! lazer ガイド](/docs/guides/use-mt-in-lazer)をご覧ください。

## セットアップ {#setup}

Mapping Tools をインストールしたら、左上のボタンからナビゲーションメニューを開き、**Preferences** で設定します。

最初に設定しておきたい項目は次のとおりです。

- **osu! folder**: _osu!_ があるフォルダーのパス。
- **Songs folder**: すべての譜面があるフォルダーのパス。通常は _osu!_ フォルダー内にあります。
- **osu! config user file**: osu! のユーザー設定ファイルのパス。通常は _osu!_ フォルダー内にあり、ファイル名は `osu.[username].cfg` です。

:::note

osu! stable を使っている場合は、これらの項目が正しく設定されていないと Mapping Tools が正常に動作しないことがあります。

:::
