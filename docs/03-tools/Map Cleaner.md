---
title: "Map Cleaner"
author: "OliBomby"
id: map-cleaner
---

Map Cleaner cleans the current beatmap of useless greenlines and it also lets you do some
other usefull operations on the whole beatmap.

Map cleaner works by reconstructing all timing points. It first stores all the influences of the
timing points and then rebuilds them in a structured way. This means the greenlines automatically get
resnapped to the objects that use them and any unnecessary changes get removed. 
In this process the map and hitsounds essentially stay the same, unless additional features are active. 
The changes should only be noticable in the editor.

## Map info settings {#map-info-settings}

These settings influence what things Map Cleaner will or will not remove from the timing points.
If you want to be on the safe side, you can keep all these settings checked as this will result in the least amount of stuff being removed.

- **Map uses volume changes in sliders**: By checking this you tell Map Cleaner that
any volume changes during the body of a slider are *intentional* and as such should not be removed.

- **Map uses sampleset changes in sliders**: By checking this you tell Map Cleaner that
any sample set changes or sample index changes during the body of a slider are *intentional* and as such should not be removed.

- **Map uses volume changes in spinners**: By checking this you tell Map Cleaner that
any volume changes during a spinner are *intentional* and as such should not be removed.

## Additional features {#additional-features}

These are additional operations Map Cleaner can do in addition to its normal operation.

- **Resnap objects**: This will resnap all the hit objects and resnap sliderends
  during the map cleaning process. The resnapping will be done to the beat
  divisor setting.

- **Resnap bookmarks**: This will resnap all bookmarks with the default resnapping method. 
  You might want to uncheck this if you have bookmarks snapped to abnormal beat divisors.

- **Remove unused samples**: This will remove all audio samples in the mapset which are unused
  by all beatmaps and storyboards in the mapset. Beatmap-skinnable samples will be ignored.

- **Remove muting**: This option removes all volume changes and custom index
  changes on hitsounds with 5% volume. If any timingpoint has 5% volume, then
  the volume change and custom index change on that will be removed.

- **Mute unclickable hitsounds**: This will put 5% volume on all hitsound events
  originating from hitobjects that do not involve active player input. Only
  circles, sliderheads and hold note heads will be audible. This can be used to
  get better insight on the rhythm of your map or how it plays.

## Resnapping

Resnapping works by snapping to the nearest tick on the timeline and
flooring it to integer. If there is a redline within 10 ms after the time of
the hitobject, then it will snap to that redline instead. This is to prevent stuff
from resnapping to a tick 3 ms before the redline.

Resnapping sliderends is done in two different ways. First method works by
taking the duration of the slider and then changing that to the nearest
multiple of a beat divisor. This is similar to using `Ctrl+Shift+S` on a slider
in the vanilla osu! editor. 

The second method is only used if there is a redline
during the slider or up to 20 ms after the slider. This will 
snap the end time of the slider to the nearest tick on the new timing. 
Note that this creates sliders with an integer duration and
the exact length deviates with the rounding around the timeline ticks.

All spinner ends and hold note ends are also resnapped using the second
method.

If the current beatmap is in the osu! mania gamemode, then resnapping will also resnap the X
position of the notes to the middle of the columns and to Y = 192.

## Timeline

Whenever you run Map Cleaner a little timeline will show all the changes the
program made to the timingpoints.

- Red line means a removed timingpoint
- Orange line means a changed timingpoint
- Green line means a timingpoint addition

If a timingpoint was just moved you will see a red line on the previous offset
and a green line on the new offset.

You can **double-click** any of the lines in the timeline to go to that time in the editor.