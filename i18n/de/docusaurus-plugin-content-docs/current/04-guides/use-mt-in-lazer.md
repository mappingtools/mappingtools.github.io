---
title: "Mapping Tools in osu! lazer verwenden"
author: "OliBomby"
id: use-mt-in-lazer
description: So verwendest du Mapping Tools mit osu! lazer.
keywords:
  - docs
  - mapping tools
  - lazer
  - compatibility
---

[osu! lazer](https://github.com/ppy/osu) verwendet einen anderen Workflow zum Bearbeiten von Beatmaps als osu! stable. Mapping Tools kann Beatmap-Dateien beider Clients bearbeiten. Verwende in lazer den Workflow für die externe Bearbeitung und beachte, dass einige Funktionen eingeschränkt sind.

## Mapping Tools in osu! lazer verwenden

Klicke im osu! lazer-Editor auf **File > Edit externally**. Dadurch wird ein temporärer Ordner mit allen Dateien des gerade bearbeiteten Mapsets erstellt. Mapping Tools erkennt diesen Ordner automatisch und legt ihn als ausgewählte Beatmap fest. Wenn du die Bearbeitung mit Mapping Tools abgeschlossen hast, klicke auf **Finish editing and import changes**, damit osu! lazer die Änderungen übernimmt.

![File > Edit externally](assets/osu_TAqF8oqGPr.png)

## Kompatibilität

Nicht alle Funktionen von Mapping Tools funktionieren in osu! lazer. Hier findest du eine Übersicht über die Kompatibilität der einzelnen Funktionen.

Funktionen, die **Editor Reader** verwenden, funktionieren in osu! lazer nicht. Wenn du ausschließlich osu! lazer verwendest, solltest du Editor Reader in den **Preferences** deaktivieren.

### Allgemein

- :x: **Open current beatmap** funktioniert nicht.
- :x: **Current editor time** funktioniert nicht.
- :x: **Selected hit objects** funktioniert nicht.
- :white_check_mark: **Generate backup** funktioniert.
- :white_check_mark: **Load backup** funktioniert.
- :white_check_mark: Slider-Pfade mit mehreren Segmenttypen werden vollständig unterstützt.

### Tools

- :x: **Geometry Dashboard** funktioniert nicht. Es ist auf Editor Reader angewiesen.
- :white_check_mark: **Hitsound Copier** funktioniert.
- :large_orange_diamond: **Hitsound Studio** funktioniert, aber Verweise auf importierte Samples und Beatmaps gehen verloren, sobald der temporäre Ordner entfernt wird.
- :white_check_mark: **Pattern Gallery** funktioniert.
- :white_check_mark: **Property Transformer** funktioniert.
- :white_check_mark: **Sliderator** funktioniert, ist im lazer-Editor aber sehr langsam.
- :white_check_mark: **Tumour Generator 2** funktioniert.
- :large_orange_diamond: **Auto-fail Detector** funktioniert, aber Auto-fail gibt es in lazer nicht.
- :white_check_mark: **Combo Colour Studio** funktioniert.
- :white_check_mark: **Hitsound Preview Helper** funktioniert.
- :white_check_mark: **Map Cleaner** funktioniert.
- :white_check_mark: **Mapset Merger** funktioniert.
- :white_check_mark: **Metadata Manager** funktioniert.
- :white_check_mark: **Rhythm Guide** funktioniert.
- :white_check_mark: **Slider Completionator** funktioniert.
- :white_check_mark: **Slider Merger** funktioniert.
- :large_orange_diamond: **Slider Picturator** funktioniert, aber der Bild-Slider wird in lazer nicht angezeigt.
- :white_check_mark: **Timing Copier** funktioniert.
- :white_check_mark: **Timing Helper** funktioniert.

## Hinweis zur fortlaufenden lazer-Kompatibilität

osu! lazer wird aktiv weiterentwickelt. Daher können sich sein Dateiformat und Client ändern, wodurch Mapping Tools möglicherweise nicht mehr richtig funktioniert.
Falls du mit lazer auf ein Problem stößt, das hier nicht aufgeführt ist, melde es über **About > Report an issue**.
