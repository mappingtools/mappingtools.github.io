---
title: "Installation"
author: "aehrea"
id: installation
description: How to install Mapping Tools.
keywords:
  - docs
  - mapping tools
  - install
---

Mapping Tools currently **only runs on Windows**. The web-based version is there for all platforms but is still in development.

## Windows {#windows}

Mapping Tools can be downloaded from the [downloads page](/download) or from the [GitHub releases](https://github.com/OliBomby/Mapping_Tools/releases).

### Installer {#installer}

Download and run the installer. Go through all the steps and finish the installer. Mapping Tools will then be installed.

The installer automatically installs any dependencies that may be required for Mapping Tools to work.

### Portable {#portable}

Download the portable version .zip file and extract all of the contents into a folder. You can then open **Mapping Tools.exe**.

:::note

In order to run, you need to have installed **.NET Desktop Runtime 5** with the same architecture as your version of Mapping Tools. That means you need to install x64 .NET if you downloaded x64 Mapping Tools and you need to install x86 .NET if you downloaded x86 Mapping Tools.

:::

## Web-based

You can find an early preview of web-based Mapping Tools [**here**](https://misakura-rin.github.io/mapping-tools-web/). This version works on all platforms.

:::caution Still in early stages of developement

Many of the tools are still missing and there are likely a lot of bugs. If it doesn't load, try reloading the page with Shift-F5 and clear the cache.

:::

## Setup {#setup}

Once you have installed Mapping Tools, go to **Options > Preferences** to configure Mapping Tools.

The most important fields to set are the following:

- **osu! folder**: path to the folder containing _osu!_.
- **Songs folder**: path to the folder containing all your maps. It's typically directly inside the _osu!_ folder.
- **osu! config user file**: path to your osu! user configuration file. It's typically directly inside the _osu!_ folder with the filename `osu.[username].cfg`.

:::note

Make sure these fields are correct, as Mapping Tools may not work properly otherwise.

:::