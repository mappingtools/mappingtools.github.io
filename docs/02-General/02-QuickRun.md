---
title: "QuickRun"
author: "OliBomby"
id: quickrun
description: Everything about QuickRun.
keywords:
  - docs
  - mapping tools
  - quickrun
  - smartquickrun
  - quickundo
---


QuickRun is a great way to speed up the usage of Mapping Tools. It allows you to run tools by pressing a hotkey and automatically reload the editor, making the whole process of using a tool just one press of a button.

You can enable QuickRun in the **Options > Preferences**.

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

To enable QuickRun, go to **Options > Preferences** and assign a hotkey to the **QuickRun hotkey** field. Now when you press the hotkey, it will run the tool which is currently open in Mapping Tools.

`Alt+M` is a good hotkey to use since it doesn't interfere with the standard osu! editor hotkeys.

If you have the option **Auto reload after QuickRun** enabled, Mapping Tools will send a key-combination `Ctrl+L, Enter` to the osu! window to reload the editor after the tool has finished its work. This saves you having to reload manually.

It's good to remember that when QuickRunning a tool it **always uses the beatmap currently open in the editor** and not the current map selected in Mapping Tools.

## SmartQuickRun {#smartquickrun}

By checking the box to the right of the QuickRun hotkey field, you enable **SmartQuickRun**. This is a feature that allows you to QuickRun different tools depending on how many objects you have selected in the editor.

There are three different distinctions SmartQuickRun can make:
- **None** for when no hit objects are selected. `N=0`
- **Single** for when exactly one hit object is selected. `N=1`
- **Multiple** for when more than one hit objects are selected. `N>1`

## QuickUndo {#quickundo}

**QuickUndo** is a hotkey that loads the most recent backup into the editor, effectively undoing the previous tool run. It also supports the **auto reload** feature, just like QuickRun. It's recommended to use QuickUndo alongside QuickRun.

`Ctrl+Shift+Z` is a good hotkey to use for QuickUndo.
