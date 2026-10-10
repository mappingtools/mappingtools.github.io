---
title: "Installation"
author: "aehrea"
id: installation
description: How to install Mapping Tools on Windows, Linux, and macOS.
keywords:
  - docs
  - mapping tools
  - install
---

Mapping Tools has native desktop builds for **Windows, Linux, and macOS**. Download the build for your processor from the [downloads page](/download) or the [GitHub releases](https://github.com/OliBomby/Mapping_Tools/releases/latest).

All packages are self-contained and include the .NET 10 runtime.

## Choose a package

- **Windows**: use the installer or portable ZIP. Choose x64 for most systems; x86 is for 32-bit Windows.
- **Linux**: use the AppImage or portable ZIP for x64 or ARM64.
- **macOS**: download the portable ZIP for Intel (x64) or Apple silicon (ARM64), then open **Mapping Tools.app** from the extracted folder.

## Feature compatibility {#editor-integration-by-platform}

✅ Supported · ❌ Unsupported. Supported features may require the setup described below.

<div className="feature-compatibility">

| OS | osu! client | Read/write beatmaps | Get current beatmap | Read live editor state | Auto-reload | Global hotkeys | Geometry Dashboard overlay |
| --- | --- | :---: | :---: | :---: | :---: | :---: | :---: |
| Windows | stable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Windows | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | stable | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |
| Linux | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | stable | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| macOS | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |

</div>

- **osu! stable**: current-beatmap fetching uses **Memory read** on Windows and Linux (Wine). Set the **Songs folder** in Preferences to its native filesystem path. Live editor state reading is available on Windows and Linux (Wine). Auto-reload is available on Windows only. Current-beatmap fetching is not supported on macOS; gosumemory and tosu also have no official native macOS support.
- **osu! lazer**: use **File > Edit externally** to expose the beatmap files. Mapping Tools automatically detects the external-edit beatmap, which counts as getting the current beatmap in this matrix. Use **Finish editing and import changes** in lazer to apply your edits. See the [lazer guide](/docs/guides/use-mt-in-lazer).
- **Global hotkeys**: on Linux, support depends on X11 or a desktop with the global-shortcut portal. On macOS, allow the keyboard access permissions requested by the system.

You can always select a beatmap directly with **File > Open beatmap**.

## Setup {#setup}

Once you have installed Mapping Tools, click the button in the top left to open the navigation menu and go to **Preferences** to configure Mapping Tools.

The most important fields to set are the following:

- **osu! folder**: path to the folder containing _osu!_.
- **Songs folder**: path to the folder containing all your maps. It's typically directly inside the _osu!_ folder.
- **osu! config user file**: path to your osu! user configuration file. It's typically directly inside the _osu!_ folder with the filename `osu.[username].cfg`.

:::note

Make sure these fields are correct if you are using osu!stable, as Mapping Tools may not work properly otherwise.

:::
