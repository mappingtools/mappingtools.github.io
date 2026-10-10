---
title: "Mania-Hitsounds in Standard-Hitsounds umwandeln"
author: "OliBomby"
id: convert-mania-to-standard-hs
description: So wandelst du mit Hitsound Studio osu!mania-Hitsounds in osu!standard-Hitsounds um.
keywords:
  - docs
  - mapping tools
  - hitsound studio
  - hitsounds
  - convert hs
---

In osu!mania können mehrere Noten auf demselben Tick liegen. Dadurch hast du beim Setzen von Hitsounds in osu!mania mehr Freiheiten, weil du mehrere Sample-Sets oder eigene Samples gleichzeitig verwenden kannst. Das erschwert jedoch das Kopieren von Hitsounds aus osu!mania nach osu!standard, wo pro Tick höchstens eine Note liegen kann. Hitsound Studio ermöglicht es, diese osu!mania-Hitsounds umzuwandeln und so neue Möglichkeiten für das Setzen von Hitsounds zu eröffnen.

## Schritt 1: Hitsound Studio einrichten {#1}

Öffne Hitsound Studio in Mapping Tools. Klicke im Menü **Project** auf **New project**. Wenn du deine aktuelle Konfiguration in Hitsound Studio behalten möchtest, speichere sie zuerst mit **Save project**.

## Schritt 2: Hitsound-Ebenen importieren {#2}

Klicke unten rechts im Fenster auf die Plus-Schaltfläche. Dadurch öffnet sich ein neues Importfenster. Wechsle zum Tab **Import hitsounds**, um alle Hitsounds aus einer Beatmap zu importieren. Wähle unter **Source beatmap** die Beatmap mit den osu!mania-Hitsounds aus, die du umwandeln möchtest. Aktiviere außerdem **Detect duplicate samples** und **Remove duplicate hitsounds**. Aktiviere **Include storyboarded samples**, wenn dein Mapset Storyboard-Samples verwendet, um einige Lücken bei den Hitsounds zu füllen. Klicke anschließend auf **Accept**, um die Hitsounds zu importieren. In Hitsound Studio sollte nun eine Liste mit Hitsound-Ebenen erscheinen.

## Schritt 3: Konfiguration {#3}

Unten musst du noch **Base beatmap** und **Default sample** festlegen. Wähle als Basis-Beatmap die Beatmap aus, die du umwandeln möchtest. Metadaten, Timing und Lautstärkepegel werden aus dieser Beatmap übernommen.

Für das Standard-Sample gibt es mehrere Möglichkeiten. Wähle diejenige, die deinen Vorlieben entspricht. Das Standard-Sample wird verwendet, wenn in den Hitsound-Ebenen kein Hitnormal-Hitsound festgelegt ist. osu!standard benötigt jedoch immer einen Hitnormal-Sound. Du kannst das Feld leer lassen und als Sample-Set **Soft** sowie als Lautstärke `-1` angeben.

## Schritt 4: Exportieren {#4}

Klicke unten rechts im Fenster auf die Ausführen-Schaltfläche. Dadurch wird ein Dialog mit den Exportoptionen geöffnet. Stelle sicher, dass sowohl **Export mode** als auch **Export gamemode** auf **Standard** gesetzt sind. Du kannst auch **Sample file format** und **Mixed sample file format** auf **Vorbis (.ogg)** ändern, damit alle Samples ins `.ogg`-Format umgewandelt werden und weniger Speicherplatz benötigen. Klicke anschließend auf **Accept**, um den Export der Hitsounds zu starten.

Nach dem Export durch Hitsound Studio enthält der Exportordner eine `.osu`-Datei mit dem osu!standard-Hitsound-Difficulty sowie die zugehörigen Audiodateien. Kopiere alle Dateien in dein osu!standard-Mapset und kopiere die Hitsounds aus der Hitsound-Difficulty mit Hitsound Copier.
