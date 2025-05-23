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

Mapping Tools currently **only supports Windows**. For non-Windows users there is the option to use [Wine](#wine) or use the [web-based version of Mapping Tools](#web-based).

Mapping Tools can be downloaded from the [downloads page](/download) or from the [GitHub releases](https://github.com/OliBomby/Mapping_Tools/releases).

### Installer {#installer}

Download and run the installer. Go through all the steps and finish the installer. Mapping Tools will then be installed.

The installer automatically installs any dependencies that may be required for Mapping Tools to work, such as .NET 5.

### Portable {#portable}

Download the portable version .zip file and extract all of the contents into a folder. You can then open **Mapping Tools.exe**.

:::note

In order to run, you need to have installed **.NET Desktop Runtime 5** with the same architecture as your version of Mapping Tools. That means you need to install x64 .NET if you downloaded x64 Mapping Tools and you need to install x86 .NET if you downloaded x86 Mapping Tools.

:::

### Wine (Linux) {#wine}

You can successfully run Mapping Tools on different operating systems with Wine. Most features will work correctly, but memory reading and Geometry Dashboard need some extra consideration.
In order to get memory reading to work, you need to install Mapping Tools into the osu! Wine prefix and run it with the same Wine binary. You also need to open osu! before opening Mapping Tools. If you can not get it to work, I recommend disabling Editor Reader in the Preferences, so Mapping Tools will not attempt memory reading every time it does something.

#### Install script (Recommended)

Use [this install script](https://gist.github.com/night-mareLuna/52c21dabd35d7cd359f9c52b471f0a8f) to automatically install Mapping Tools into your osu! Wine prefix. It will install any dependencies and memory reading should work too. This has been tested with [osu-winello](https://github.com/NelloKudo/osu-winello).

1. Download `install-mappingtools.sh` from the [GitHub gist](https://gist.github.com/night-mareLuna/52c21dabd35d7cd359f9c52b471f0a8f).
2. Start your osu! client.
3. Run: `chmod +x ./install-mappingtools.sh`
4. Run: `./install-mappingtools.sh --install`

#### Manual install

1. Install [WineHQ](https://www.winehq.org/). Follow the installation instructions for your operating system.
2. If you are using an Arch Linux distro, then you need to install GDI+ using Winetricks.
3. Download and install the windows version of [.NET 5 Desktop Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/5.0) using Wine.
4. Launch `wine regedit` and then go to the `HKEY_CURRENT_USER/Environment`.
5. Create a new text key called `DOTNET_ROOT` and set the value to `C:\Program Files\dotnet`.
6. Download and run the Mapping Tools installer using Wine.
7. Run Mapping Tools after the installation is complete.
8. Go to the Preferences and disable Editor Reader.

This has been tested with:
- Ubuntu 20.04 64-bit with wine-6.0.2 and wine-7.0.
- Manjaro KDE 21.3.7 with wine-7.1.

### Web-based {#web-based}

You can find an early preview of web-based Mapping Tools [**here**](https://potoofu.github.io/mapping-tools-web/). This version works on all platforms. This version of Mapping Tools does not have all the tools available.

Start by uploading your beatmap files with the **Upload** button at the top right. Select a mapping tool on the left, select a beatmap and run. The modified beatmap will be automatically downloaded. The files on the right also update when you run a mapping tool to modify them.

:::caution Still in early stages of developement

Many of the tools are still missing and there are likely a lot of bugs. If it doesn't load, try reloading the page with Shift-F5 and clear the cache.

:::

## Setup {#setup}

Once you have installed Mapping Tools, click the button in the top left to open the navigation menu and go to **Preferences** to configure Mapping Tools.

The most important fields to set are the following:

- **osu! folder**: path to the folder containing _osu!_.
- **Songs folder**: path to the folder containing all your maps. It's typically directly inside the _osu!_ folder.
- **osu! config user file**: path to your osu! user configuration file. It's typically directly inside the _osu!_ folder with the filename `osu.[username].cfg`.

:::note

Make sure these fields are correct, as Mapping Tools may not work properly otherwise.

:::
