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

## 機能の対応状況 {#editor-integration-by-platform}

✅ 対応 · ❌ 非対応。対応機能でも、以下のセットアップが必要な場合があります。

<div className="feature-compatibility">

| OS | osu! クライアント | 譜面の読み書き | 現在の譜面を取得 | エディターの状態をリアルタイムで読み取り | 自動再読み込み | グローバルホットキー | Geometry Dashboard オーバーレイ |
| --- | --- | :---: | :---: | :---: | :---: | :---: | :---: |
| Windows | stable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Windows | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Windows | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Linux | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| macOS | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |

</div>

- **osu! stable**: Windows では、現在の譜面の検出とエディター状態のリアルタイム読み取りにメモリ連携を使い、自動再読み込みにはキー入力のシミュレーションを使います。Linux と macOS では、stable を Wine 経由で実行し、互換性のある **Gosumemory/Tosu** API を `127.0.0.1:24050` で起動すると、現在の譜面を取得できます。Preferences で **Songs folder** を設定してください。
- **osu! lazer**: **File > Edit externally** を使って譜面ファイルを公開します。Mapping Tools は外部編集用の譜面を自動検出します。これはこの表で「現在の譜面を取得」に該当します。変更を適用するには、lazer で **Finish editing and import changes** を使ってください。詳しくは[osu! lazer ガイド](/docs/guides/use-mt-in-lazer)をご覧ください。
- **osu! unstable**: 現在の譜面の取得、エディター状態のリアルタイム読み取り、エディターの再読み込みには、Preferences で **MTIPC** を選択してください。これらの機能にはクライアント側の MTIPC サーバーが必要です。Linux と macOS では、エディター状態のリアルタイム読み取りと再読み込みは既定で無効です。
- **グローバルホットキー**: Linux では、X11 またはグローバルショートカットポータルを備えたデスクトップ環境で利用できます。macOS では、システムから求められたキーボードアクセス権限を許可してください。

**File > Open beatmap** からいつでも譜面を直接選択できます。

## セットアップ {#setup}

Mapping Tools をインストールしたら、左上のボタンからナビゲーションメニューを開き、**Preferences** で設定します。

最初に設定しておきたい項目は次のとおりです。

- **osu! folder**: _osu!_ があるフォルダーのパス。
- **Songs folder**: すべての譜面があるフォルダーのパス。通常は _osu!_ フォルダー内にあります。
- **osu! config user file**: osu! のユーザー設定ファイルのパス。通常は _osu!_ フォルダー内にあり、ファイル名は `osu.[username].cfg` です。

:::note

osu! stable を使っている場合は、これらの項目が正しく設定されていないと Mapping Tools が正常に動作しないことがあります。

:::
