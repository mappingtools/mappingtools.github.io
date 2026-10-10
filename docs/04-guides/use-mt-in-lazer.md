---
title: "Using Mapping Tools in osu! lazer"
author: "OliBomby"
id: use-mt-in-lazer
description: How to use Mapping Tools with osu! lazer.
keywords:
  - docs
  - mapping tools
  - lazer
  - compatibility
---

[osu! lazer](https://github.com/ppy/osu) has a different beatmap editing workflow from osu! stable. Mapping Tools can edit beatmap files from either client. In lazer, use its external editing workflow and be aware that some features have limitations.

## How to use Mapping Tools in osu! lazer

In the osu! lazer editor, click **File > Edit externally**. This will create a temporary folder with all the files of the beatmap set you are currently editing. Mapping Tools will automatically detect this folder and set it as the selected beatmap. Once you're done editing with Mapping Tools you can click **Finish editing and import changes** and osu! lazer will import the changes.

![File > Edit externally](assets/osu_TAqF8oqGPr.png)

## Compatibility

Not all features of Mapping Tools work in osu! lazer. This section attempts to list the compatibility of all Mapping Tools features.

Any features that use Editor Reader will not work in osu! lazer, so it is recommended to go to the **Preferences** and disable Editor Reader if you plan on only using osu! lazer.

### General
- :x: Anything **Open current beatmap** does not work
- :x: Anything **Current editor time** does not work
- :x: Anything **Selected hit objects** does not work
- :white_check_mark: **Generate backup** works
- :white_check_mark: **Load backup** works
- :white_check_mark: **Slider paths** with multiple segment types are fully supported

### Tools
- :x: **Geometry Dashboard** does not work. Relies on editor reader.
- :white_check_mark: **Hitsound Copier** works
- :large_orange_diamond: **Hitsound Studio** works, but references to imported samples and beatmaps break after the temp folder is removed.
- :white_check_mark: **Pattern Gallery** works
- :white_check_mark: **Property Transformer** works
- :white_check_mark: **Sliderator** works, but is extremely laggy in lazer editor
- :white_check_mark: **Tumour Generator 2** works
- :large_orange_diamond: **Auto-fail Detector** works, but auto-fail does not exist in Lazer.
- :white_check_mark: **Combo Colour Studio** works
- :white_check_mark: **Hitsound Preview Helper** works
- :white_check_mark: **Map Cleaner** works
- :white_check_mark: **Mapset Merger** works
- :white_check_mark: **Metadata Manager** works
- :white_check_mark: **Rhythm Guide** works
- :white_check_mark: **Slider Completionator** works
- :white_check_mark: **Slider Merger** works
- :large_orange_diamond: **Slider Picturator** works, but the picture slider does not show up in Lazer.
- :white_check_mark: **Timing Copier** works
- :white_check_mark: **Timing Helper** works

## Heads up about continued lazer compatibility

As osu! lazer is actively in development, it's file format and client are likely to change and that can cause Mapping Tools to break.
If you run into any issues using Mapping Tools on lazer that is not on this list, report an issue with **About > Report an issue**.
