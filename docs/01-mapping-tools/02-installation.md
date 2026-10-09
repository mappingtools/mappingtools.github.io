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

## Editor integration by platform

Beatmap file tools work across the desktop builds. Some live-editor features depend on the operating system and the integration method:

- **Geometry Dashboard** and the **Editor Reader** memory integration require Windows.
- On Linux and macOS, current-beatmap discovery defaults to the local **Gosumemory/Tosu** API at `127.0.0.1:24050`. Start a compatible API to use **Open current beatmap**. Live editor state reading and automatic editor reload are disabled by default on these platforms.
- You can always select a beatmap directly with **File > Open beatmap**.

For osu! lazer, use its **File > Edit externally** workflow. See the [lazer guide](/docs/guides/use-mt-in-lazer).

## Setup {#setup}

Once you have installed Mapping Tools, click the button in the top left to open the navigation menu and go to **Preferences** to configure Mapping Tools.

The most important fields to set are the following:

- **osu! folder**: path to the folder containing _osu!_.
- **Songs folder**: path to the folder containing all your maps. It's typically directly inside the _osu!_ folder.
- **osu! config user file**: path to your osu! user configuration file. It's typically directly inside the _osu!_ folder with the filename `osu.[username].cfg`.

:::note

Make sure these fields are correct if you are using osu!stable, as Mapping Tools may not work properly otherwise.

:::
