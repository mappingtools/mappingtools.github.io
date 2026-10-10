---
title: "QuickRun"
author: "OliBomby"
id: quickrun
description: Alles über QuickRun.
keywords:
  - docs
  - mapping tools
  - quickrun
  - smartquickrun
  - quickundo
---

QuickRun beschleunigt die Verwendung von Mapping Tools. Mit einem Tastenkürzel kannst du Tools ausführen und den Editor automatisch neu laden lassen. So genügt ein Tastendruck, um ein Tool zu verwenden.

QuickRun lässt sich in den **Preferences** aktivieren.

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="QuickRun-Beispiel"
  sources={{
    light: useBaseUrl('./img/quickrun_example_light.png'),
    dark: useBaseUrl('./img/quickrun_example_dark.png'),
  }}
/>
```

## Einrichtung {#setup}

Öffne **Preferences** und weise dem Feld **QuickRun hotkey** ein Tastenkürzel zu. Wenn du es drückst, wird das aktuell in Mapping Tools geöffnete Tool ausgeführt.

`Alt+M` eignet sich gut, weil dieses Tastenkürzel nicht mit den Standardkürzeln des osu!-Editors kollidiert.

Wenn **Auto reload after QuickRun** aktiviert ist, sendet Mapping Tools nach Abschluss des Tools automatisch einen Befehl an deinen osu!-Client, um den Editor neu zu laden. So musst du ihn nicht von Hand neu laden.

:::info
Beim Ausführen eines Tools mit QuickRun wird **immer die Beatmap verwendet, die gerade im Editor geöffnet ist** und nicht die in Mapping Tools ausgewählte Beatmap.
:::

## SmartQuickRun {#smartquickrun}

Aktiviere über das Kontrollkästchen rechts neben dem Feld für das QuickRun-Tastenkürzel **SmartQuickRun**. Damit kannst du je nach Anzahl der im Editor ausgewählten Objekte unterschiedliche Tools per QuickRun ausführen.

SmartQuickRun unterscheidet drei Fälle:

- **None**, wenn kein Hitobject ausgewählt ist: `N=0`
- **Single**, wenn genau ein Hitobject ausgewählt ist: `N=1`
- **Multiple**, wenn mehrere Hitobjects ausgewählt sind: `N>1`

## QuickUndo {#quickundo}

**QuickUndo** ist ein Tastenkürzel, mit dem du das neueste Backup in den Editor lädst und damit den vorherigen Tool-Lauf rückgängig machst. Wie QuickRun unterstützt es das automatische Neuladen. Es empfiehlt sich, QuickUndo zusammen mit QuickRun zu verwenden.

`Ctrl+Shift+Z` eignet sich gut als Tastenkürzel für QuickUndo.
