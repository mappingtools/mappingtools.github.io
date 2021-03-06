---
title: "Mapset Merger"
author: "OliBomby"
id: mapset-merger
---

Mapset Merger is a tool that lets you merge multiple mapsets into one big mapset.

The tool will automatically resolve any file conflicts by moving as many files as possible to separate subfolders and reconstructing sample sets for custom hitsounds. Sadly, beatmap skins and custom spinner hitsounds can not be merged, because these files are not explicitly referenced in the beatmap, so their presence will always affect the entire mapset.

## Adding mapsets {#adding-mapsets}

To add a mapset, press the plus button at the bottom right. This will add a new mapset to the collection pre-filled with the mapset info of the current beatmap. If you **shift-click** the plus button it will use the mapset currently open in the osu! client instead.

All mapsets to be merged will show up in the list. Each mapset has a name and a path to the root folder of the mapset. The names of the mapsets will be used to categorize files in the merged mapset, so make sure the names are unique and concise. The path can be edited in the list by **double-clicking** on it. It will also show you a browse button which you can use to select the path using the File Explorer.

## Exporting {#exporting}

Pressing the run button will merge the mapsets and export the files to the folder at the **Export path**. Make sure this folder exists, because otherwise it will give you an error.

If you have checked the box **Move storyboard to .osu**, Mapset Merger will move the content of any .osb file in a mapset to the .osu files. This will cause storyboards to be beatmap-specific and not leak over to the other mapsets in the merged mapset. This option is good to use if you merge mapsets with different storyboards, but be carefull because if a mapset has a large storyboard file and multiple difficulties this will multiply the data and produce large .osu files.
