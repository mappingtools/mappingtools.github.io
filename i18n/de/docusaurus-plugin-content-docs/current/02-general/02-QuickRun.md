---
title: "QuickRun"
author: "OliBomby"
id: quickrun
description: Everything about QuickRun.
keywords:
  - docs
  - mapping tools
  - quickrun
  - smartquickrun
  - quickundo
---

QuickRun startet ein kompatibles Tool mit einem globalen Hotkey auf der Beatmap, die im osu!-Editor geöffnet ist. In den **Preferences** kannst du außerdem festlegen, dass normale **Run**-Buttons QuickRun verwenden.

## Einrichtung {#setup}

Lege in den **Preferences** einen **QuickRun hotkey** fest. Mapping Tools sucht zuerst nach der im osu!-Editor geöffneten Beatmap. Wenn keine gefunden wird, wird die in Mapping Tools ausgewählte Beatmap verwendet. Wird die Editor-Beatmap gefunden, aktualisiert Mapping Tools die Auswahl.

Unter **Editor reload** kannst du festlegen, ob und wie der Editor nach einer Änderung neu geladen wird. Die simulierte Tastatureingabe lädt osu! stable mit `Ctrl+L` und danach `Enter` neu. Die verfügbaren Methoden hängen vom Betriebssystem ab.

## SmartQuickRun {#smartquickrun}

SmartQuickRun kann den globalen QuickRun-Hotkey abhängig von der Anzahl ausgewählter Hitobjekte einem anderen Tool zuordnen. Lege in den **Preferences** ein Tool für jede Auswahl fest:

- **None**: keine Objekte ausgewählt (`N=0`)
- **Single**: genau ein Objekt ausgewählt (`N=1`)
- **Multiple**: mehr als ein Objekt ausgewählt (`N>1`)

SmartQuickRun benötigt eine Editor-Anbindung, die die aktuelle Auswahl lesen kann.

## QuickUndo {#quickundo}

QuickUndo stellt das neueste nicht periodische Backup der im osu!-Editor geöffneten Beatmap wieder her. Lege den Hotkey in den **Preferences** fest. Wenn eine Methode unter **Editor reload** aktiviert ist, kann Mapping Tools den Editor danach neu laden.
