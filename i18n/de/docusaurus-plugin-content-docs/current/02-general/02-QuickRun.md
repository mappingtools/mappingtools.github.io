---
title: "QuickRun"
author: "Julaaaan"
id: quickrun
description: Everything about QuickRun.
keywords:
  - docs
  - mapping tools
  - quickrun
  - smartquickrun
  - quickundo
---


QuickRun ist eine großartige Methode um das Benutzen von Mapping Tools zu beschleunigen. Es erlaubt das Ausführen eines Tools und das Neuladen des osu! editors durch das Drücken eines Hotkeys. Dadurch lassen sich Tools auf knopfdruck benutzen.

Du kannst QuickRun in den **Preferences** aktivieren.

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="QuickRun example image"
  sources={{
    light: useBaseUrl('./img/quickrun_example_light.png'),
    dark: useBaseUrl('./img/quickrun_example_dark.png'),
  }}
/>
```

## Setup {#setup}

Um QuickRun zu aktivieren, weise dem **QuickRun hotkey** Feld in den **Preferences** einen Hotkey zu. Wenn du nun deinen festgelegten Hotkey drückst, wird das aktuell ausgewählt Tool in Mapping Tools ausführen.

`Alt+M` ist ein guter Hotkey, da er die normalen osu! editor hotkeys nicht Stört.

Wenn die Option **Auto reload after QuickRun** aktiviert ist, wird Mapping Tools die Tastenkombination `Strg+L, Enter` an das osu! Fenster senden um den editor neuzuladen nachdem das Tool fertig ist. Dadurch musst du den Editor nicht manuell neu laden.

Anzumerken ist dass QuickRun **immer die aktuell im osu! Editor geöffnete map benutzt** und nicht nicht die in Mapping Tools ausgewählte Beatmap.

## SmartQuickRun {#smartquickrun}

**SmartQuickRun** lässt sich durch das Klicken der Checkbox rechts neben dem QuickRun Hotkey Feld aktivieren. Dieses Feature erlaubt QuickRun, verschiedene Tools auszuführen, je nach dem wie viele Objekte du in dem osu! editor ausgewählt hast.

Es gibt drei verschiedene Unterscheidungen die SmartQuickRun machen kann:
- **None** wenn keine Objekte ausgeählt sind. `N=0`
- **Single** wenn genau ein Objekt ausgewählt ist. `N=1`
- **Multiple** wenn mehr als ein Object ausgewählt ist. `N>1`

## QuickUndo {#quickundo}

**QuickUndo** ist ein hotkey der das letzte Backup in den Editor lädt und damit das vorherige Tool rückgängig macht. Außerdem unterstützt er das **auto reload** feature, genau wie QuickRun. Es ist empfohlen, QuickUndo neben QuickRun zu benutzen.

`Strg+Shift+Z` is a good hotkey to use for QuickUndo.
`Strg+Shift+Z` ist ein guter Hotkey für QuickUndo.