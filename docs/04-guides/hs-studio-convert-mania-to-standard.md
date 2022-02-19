---
title: "Convert mania HS to standard HS"
author: "OliBomby"
id: convert-mania-to-standard-hs
description: How to convert osu!mania hitsounds to osu!standard hitsounds with Hitsound Studio.
keywords:
  - docs
  - mapping tools
  - hitsound studio
  - hitsounds
  - convert hs
---

osu!mania is known for being able to have multiple notes on the same tick. This gives a lot more freedom in hitsounding osu!mania, because you can use multiple sample sets or custom samples simultaneously. However this makes copying hitsounds from osu!mania to osu!standard more difficult, because in osu!standard you can have at most one note per tick. Hitsound Studio makes it possible to convert these osu!mania hitsounds to osu!standard hitsounds and open up a lot of hitsounding possibilities.

## Step 1: Set-up Hitsound Studio {#1}

Open Hitsound Studio in Mapping Tools. Click on the **Project** menu and click **New project**. If don't want to lose your current configuration in Hitsound Studio, first save it with **Save project**.

## Step 2: Import hitsound layers {#2}

Click the plus button on the bottom right of the window, this will open up a new window for importing. Go to the **Import hitsounds** tab to import all hitsounds from a beatmap. In **Source beatmap** select the beatmap with the osu!mania hitsounds you want to convert. Also check the boxes for **Detect duplicate samples** and **Remove duplicate hitsounds**, and **Include storyboarded samples** if your map uses storyboarded samples to fill in some of the gaps in the hitsounds. Then click **Accept** to import the hitsounds and you should see a list of hitsound layers appear in Hitsound Studio.

## Step 3: Configure {#3}

At the bottom there are two more things to configure: the **Base beatmap** and the **Default sample**. For the base beatmap just select the map you want to convert. It will use the metadata, timing, and volume levels of the base beatmap.

For the default sample there are multiple options and it depends on preference. The default sample is used whenever there is no hitnormal hitsound defined in the hitsound layers and osu!standard always wants to play a hitnormal sound. You can leave it empty and select Soft sample set and input `-1` volume.

## Step 4: Export {#4}

Click the run button on the bottom right of the window. This will open a dialog with export options. Make sure **Export mode** and **Export gamemode** are both **Standard**. You can also change **Sample file format** and **Mixed sample file format** to **Vorbis (.ogg)** to convert all samples to `.ogg` and save on filesize. Then click **Accept** to start exporting the hitsounds.

After Hitsound Studio is done exporting you'll see the export folder containing a `.osu` file which is the osu!standard hitsounds diff and a bunch of audio files which are required for the hitsounds. You can now copy all these files into your osu!standard mapset and copy the hitsounds from the hitsounds diff with Hitsound Copier.
