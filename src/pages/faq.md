---
title: FAQ
author: OliBomby, aehrea
---

# FAQ

## Why don't I see any changes in my map?

Check the **Current Map** (blue bar at the top of the application) to make sure you have set the correct path to your beatmap.

Also, make sure to **reload the editor without saving** after running the tool, as saving the map in the editor reverts the changes caused by the tool, because saving overwrites the .osu with the old version of the beatmap. You can reload the map quickly by pressing `Ctrl+L` and `Enter` in the editor.

## I get an error when I run the tool "Could not find part of the path" or "Empty path name is not legal".

Hover your mouse cursor over the **Beatmap name at the top of the window** and it will show the full path. Does this path exist? Is the Songs folder in the right place? If your Songs folder is not in the default Appdata location, make sure you have set the correct path to your Songs folder in the **Preferences**.

## A tool broke my map. What do I do?

Mapping Tools saves backups of your beatmaps any time it makes a change. You can find these backups by going to **About > Open backup folder**. You can also load a backup to the Current Map with **File > Load backup**, or by using the QuickUndo hotkey which you can enable in the **Preferences**.

## 'Open Current Beatmap' doesn't work or getting selected hit objects doesn't work.

These are features that depend on reading the memory of the osu! client. Memory reading can randomly stop working sometimes in which case restarting osu! or restarting your computer usually fixes the issue. Other causes and solutions for the issue:
- Firewall of anti-virus is blocking Mapping Tools: Disable the anti-virus or exempt Mapping Tools and try again.
- Not using the latest version of Mapping Tools: Sometimes an update to Mapping Tools is required to match changes in osu!
- osu! updated and changed memory offsets again: Please notify me so the issue can be fixed.
- Using Mapping Tools on Windows 7 or earlier: Make sure you have .NET framework 4.5.1 or later installed.
- Using Mapping Tools on an OS which is not Windows: No solutions for this unfortunately.

## How to mute sliderends without copying hitsounds?

To just mute sliderends you can leave the 'Copy hitsounds from' field empty and in the 'Copy hitsounds to' field add the map which should get its sliderends muted. This will cause no hitsounds to be copied, but sliderend muting will still work.

If you do copy hitsounds while muting sliderends, then the tool will use the objects from the beatmap you are copying from as a reference, so it will not mute sliderends in places where you have added hitsounds. That's why sliderend muting is a part of Hitsound Copier instead of being its own standalone tool.

## Starting Mapping Tools prompts me to install .NET, but I installed it already.

It could be that you installed the wrong version of .NET. You need to install **.NET Desktop Runtime 5** with the **same architecture as Mapping Tools**. So if you have x64 Mapping Tools you need x64 .NET and if you have x86 Mapping Tools you need x86 .NET.

Reinstalling Mapping Tools with a fresh installer from the website should also fix the issue, because the installer automatically installs the correct version of .NET for you.

## I have a question not on this list or I found a bug.

Ask a question in the mapping-tools-techsupport channel in the [Discord](https://discord.gg/YfjKN2yjQV), ask me directly on Discord (OliBomby#3573), or make a new issue on [GitHub](https://github.com/OliBomby/Mapping_Tools/issues).
