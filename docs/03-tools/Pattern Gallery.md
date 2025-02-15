---
title: "Pattern Gallery"
author: "OliBomby"
id: pattern-gallery
description: Import and export patterns from osu! beatmaps and create pattern collections which you can share with your friends.
keywords:
  - docs
  - mapping tools
  - pattern gallery
---

Pattern Gallery lets you import and export patterns from osu! beatmaps and create pattern collections which you can share. This makes it an excellent tool for quickly moving any arrangement of hit objects, or any section of a beatmap, between different beatmaps.

## Tool Description

The Pattern Gallery tool allows you to:

*   Import and export patterns from osu! beatmaps, which allows you to move any group of hit objects between beatmaps.
*   Create pattern collections which you can share with your friends.
*   Add or remove patterns using the buttons at the bottom.
*   Export a pattern to the current beatmap by selecting one or more patterns and clicking the run button, or by double-clicking a pattern.
*   Utilize export options for additional processing on the pattern during export.
*   Save, load, rename, import, and export your pattern collections via the 'Project' menu.

## Usage

1.  Open Pattern Gallery in Mapping Tools.
2.  Add patterns to your collection using the import options.
3.  Select a pattern from the gallery.
4.  Click the run button to export the pattern to your current beatmap.

## Functionality and Settings

The tool provides the following functionalities:

*   **Pattern Management**: Add, remove, rename, and organize patterns into collections.
*   **Import Options**: Import patterns from various sources, such as selected objects, beatmap files, or pattern codes.
*   **Export Options**: Customize pattern export with options for scaling, rotation, and filtering.

## Export Options

When exporting a pattern, you can adjust the following options:

*   **Export Offset**: Determines at what time to put the pattern. You can choose between the pattern's original time, a custom time, or the current editor time.
    *   **Custom export offset**: Determines at what time to put the pattern for the custom offset mode.
*   **Deletion margin**: Extra time in milliseconds around the patterns for deleting parts of the original map.
*   **Parting distance**: Minimum number of beats required in a gap to split a pattern into smaller parts.
*   **Beat divisors**: Input any number of beat divisors here separated with commas. Example: 1/4, 1/12, 1/7, 4/5, 0.13435622499.
*   **Custom Scale**: Change the size of the pattern by specifying a scalar value.
*   **Custom Rotate**: Rotate the pattern clockwise by a specified number of degrees.
*   **Pattern Overwrite Mode**: Determines how to handle overlapping objects between the pattern and the target beatmap. The available modes are:
    *   **NoOverwrite**: Keeps all existing objects in the beatmap. The pattern is added without removing anything.
    *   **PartitionedOverwrite**: Removes objects from the original beatmap only in dense parts of the pattern.
    *   **CompleteOverwrite**: Removes all objects from the original beatmap between the start and end time of the pattern.
*   **Timing Overwrite Mode**: Determines how to combine the timing of the original beatmap and the timing of the pattern.
*   **Include hitsounds**: Export the pattern with the hitsound effects of the pattern timing points.
*   **Include kiai**: Export the pattern with the kiai of the pattern.
*   **Scale to new circle size**: Scale the pattern such that the spacing relative to the circle size stays the same.
*   **Scale to new timing**: Scale the pattern in time such that the number of beats between objects stays the same in the new timing. Incorrect snaps can occur if your timing has unsnapped redlines. Do not use this if you have 0 or infinite BPM redlines.
*   **Snap to new timing**: Snap the objects of the pattern to the new timing using the specified beat divisors.
*   **Manualify stacks**: Manually stack objects of the pattern.
*   **Fix global SV**: Adjust greenline SV in the pattern to the new global SV so sliders have the same SV in the new beatmap.
*   **Fix BPM SV**: Adjust greenline SV in the pattern to the new BPM so sliders have the same SV in the new beatmap. It is recommended to disable this feature if you are using the "Scale to new timing" feature.
*   **Fix colourhax**: Adjust color skip such that the color indices of objects stay the same for the pattern and the original beatmap.
*   **Fix slider tick rate**: Multiply BPM in the pattern so the slider tick rate in the pattern stays the same.

## Pattern Context Menu

The context menu for patterns in the gallery (right-click on a pattern) provides the following options:

*   **Properties**: View additional details about the pattern, such as name, creation time, last used time, and usage count.
*   **Delete**: Delete selected patterns. Hold shift to skip the confirmation dialog.
*   **Open in File Explorer**: Open the source files of the selected patterns in the File Explorer.
*   **Group**: Options for grouping patterns.

## Import Options

The import button allows you to import patterns from various sources.

*   **Import Selected**: lets you make a pattern from the currently selected hitobjects in the editor
    *   **Name**: the name of the pattern
*   **Import from .osu File:** lets you import patterns form a .osu file in your drive
    *   **Name**: the name of the pattern
    *   **Pattern file path**: The path to the pattern file to import.
    *   **Filter**: filter the .osu file
    *   **Start Time**: The time inside the .osu file to start the pattern
    *   **End Time**: The time inside the .osu file to end the pattern
*   **Import from Code:** lets you import a pattern from code, usefull if you are sharing patterns online.
    *   **Name**: the name of the pattern
    *   **Hit Objects**: the hit object code
    *   **Timing Points**: the timing point code
    *    **Global SV**: Set the global slider velocity for the pattern's hitobjects.
    *   **Game Mode**: make the pattern for a specific game mode.

## Project Menu

The **Project** menu within Pattern Gallery allows you to:

*   Save pattern collections.
*   Load pattern collections.
*   Rename pattern collections.
*   Import pattern collections.
*   Export pattern collections.