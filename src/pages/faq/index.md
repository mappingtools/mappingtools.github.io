---
title: FAQ
author: aehrea
---

# FAQ

## Why don't I see any changes in my map?

Check the Current Map (blue bar at the bottom of the application) to make sure you have set the correct path to your beatmap.

Also, make sure you reload the editor **without saving** after running the tool, as saving the map in the editor reverts the changes caused by the tool because saving overwrites the .osu with the old version. You can reload the map quickly by pressing `Ctrl+L` and `Enter` in the editor.

## I get an error when I run the tool "Could not find part of the path" or "Empty path name is not legal".

Check the Current Map at the bottom of the window. Does this path exist? Is the Songs folder in the right place? Make sure you have set the correct path to your Songs folder in the **Options > Preferences**.

## A tool broke my map. What do I do?

Mapping Tools saves backups of your beatmaps any time it makes a change. You can find these backups by going to **Options > Open backup folder**. You can also load a backup to the Current Map with **File > Load backup** or by using the QuickUndo hotkey.

## "Open Current Beatmap" doesn't work or getting selected hit objects doesn't work.

These are features that depend on reading the memory of the osu! client. It is possible that a firewall or anti-virus software is blocking Mapping Tools from reading osu! memory and thus breaking the features. Also, memory reading can randomly stop working sometimes in which case restarting osu! or restarting your computer usually fixes the issue.

## How to mute sliderends without copying hitsounds?

To just mute sliderends you can leave the 'Copy hitsounds from' field empty and in the 'Copy hitsounds to' field add the map which should get its sliderends muted. This will cause no hitsounds to be copied, but sliderend muting will still work.

If you do copy hitsounds while muting sliderends, then the tool will use the objects from the beatmap you are copying from as a reference, so it will not mute sliderends in places where you have added hitsounds.

## Starting Mapping Tools prompts me to install .NET, but I installed it already.

It could be that the wrong version of .NET got installed. You need to install .NET 5 with the same architecture as Mapping Tools. So if you have x64 Mapping Tools you need x64 .NET and if you have x86 Mapping Tools you need x86 .NET.

## I have a question not on this list or I found a bug.

Ask a question in the mapping-tools-techsupport channel in the [Discord](https://discord.gg/YfjKN2yjQV), ask me directly on Discord (OliBomby#3573), or make a new issue on [GitHub](https://github.com/OliBomby/Mapping_Tools/issues).

## TODO
