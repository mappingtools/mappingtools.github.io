---
title: "Mapset Merger"
author: "OliBomby"
id: mapset-merger
---

Mit Mapset Merger kannst du mehrere Mapsets zu einem großen Mapset zusammenführen.

Das Tool löst Dateikonflikte automatisch, indem es möglichst viele Dateien in eigene Unterordner verschiebt und Sample-Sets für benutzerdefinierte Hitsounds rekonstruiert. Beatmap-Skins und benutzerdefinierte Spinner-Hitsounds lassen sich leider nicht zusammenführen: Diese Dateien werden in der Beatmap nicht ausdrücklich referenziert und wirken sich daher immer auf das gesamte Mapset aus.

## Mapsets hinzufügen {#adding-mapsets}

Klicke unten rechts auf die Plus-Schaltfläche, um ein Mapset hinzuzufügen. Das neue Mapset wird mit den Informationen der ausgewählten Beatmap vorausgefüllt. Wenn du beim Klicken auf die Plus-Schaltfläche **Shift** gedrückt hältst, wird stattdessen das im osu!-Client geöffnete Mapset verwendet.

Alle Mapsets, die zusammengeführt werden sollen, erscheinen in der Liste. Jedes Mapset hat einen Namen und einen Pfad zum Stammordner. Die Namen werden verwendet, um Dateien im zusammengeführten Mapset zu gruppieren. Achte deshalb darauf, dass sie eindeutig und kurz sind. Mit einem **Doppelklick** auf einen Pfad kannst du ihn in der Liste bearbeiten. Über die angezeigte Schaltfläche zum Durchsuchen kannst du den Pfad auch im Datei-Explorer auswählen.

## Exportieren {#exporting}

Klicke auf die Ausführen-Schaltfläche, um die Mapsets zusammenzuführen und die Dateien in den Ordner unter **Export path** zu exportieren. Dieser Ordner muss bereits vorhanden sein, sonst wird ein Fehler angezeigt.

Wenn **Move storyboard to .osu** aktiviert ist, verschiebt Mapset Merger den Inhalt jeder `.osb`-Datei eines Mapsets in dessen `.osu`-Dateien. Dadurch werden Storyboards an einzelne Beatmaps gebunden und wirken sich nicht auf andere Mapsets im zusammengeführten Mapset aus. Diese Option ist hilfreich, wenn du Mapsets mit verschiedenen Storyboards zusammenführst. Beachte jedoch: Enthält ein Mapset eine große Storyboard-Datei und mehrere Schwierigkeitsgrade, werden die Daten vervielfacht und die `.osu`-Dateien entsprechend groß.
