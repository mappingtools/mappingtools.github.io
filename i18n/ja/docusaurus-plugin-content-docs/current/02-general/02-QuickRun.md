---
title: "QuickRun"
author: "OliBomby"
id: quickrun
description: Mapping Tools の QuickRun について。
keywords:
  - ドキュメント
  - Mapping Tools
  - QuickRun
  - SmartQuickRun
  - QuickUndo
---

QuickRun を使うと Mapping Tools をすばやく操作できます。ホットキーを押すだけでツールを実行し、エディターを自動で再読み込みできるため、ボタン 1 回で作業が完了します。

**Preferences** で QuickRun を有効にできます。

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="QuickRun の使用例"
  sources={{
    light: useBaseUrl('./img/quickrun_example_light.png'),
    dark: useBaseUrl('./img/quickrun_example_dark.png'),
  }}
/>
```

## セットアップ {#setup}

QuickRun を有効にするには、**Preferences** を開いて **QuickRun hotkey** にホットキーを割り当てます。ホットキーを押すと、Mapping Tools で現在開いているツールが実行されます。

`Alt+M` は osu! エディターの標準ホットキーと競合しないため、おすすめです。

**Auto reload after QuickRun** が有効な場合、ツールの処理後に Mapping Tools が osu! クライアントへ再読み込みコマンドを自動送信します。手動で再読み込みする手間が省けます。

:::info
QuickRun では、Mapping Tools で選択中の譜面ではなく、**エディターで現在開いている譜面**が常に使われます。
:::

## SmartQuickRun {#smartquickrun}

QuickRun hotkey 欄の右にあるチェックボックスをオンにすると、**SmartQuickRun** が有効になります。エディターで選択しているオブジェクトの数に応じて、異なるツールを QuickRun できます。

SmartQuickRun は、次の 3 つの状態を区別します。

- **None**: ヒットオブジェクトが選択されていない場合。`N=0`
- **Single**: ヒットオブジェクトを 1 つだけ選択している場合。`N=1`
- **Multiple**: ヒットオブジェクトを 2 つ以上選択している場合。`N>1`

## QuickUndo {#quickundo}

**QuickUndo** は、最新のバックアップをエディターに読み込み、直前に実行したツールの操作を取り消すホットキーです。QuickRun と同様に、エディターの**自動再読み込み**にも対応しています。QuickRun と一緒に使うのがおすすめです。

QuickUndo には `Ctrl+Shift+Z` がおすすめです。
