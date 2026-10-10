---
title: "Pattern Gallery"
author: "OliBomby"
id: pattern-gallery
description: Importiere und exportiere Patterns aus osu!-Beatmaps und stelle Sammlungen zusammen, die du mit Freunden teilen kannst.
keywords:
  - docs
  - mapping tools
  - pattern gallery
---

Mit Pattern Gallery kannst du Patterns aus osu!-Beatmaps importieren und exportieren sowie Sammlungen erstellen und teilen. So kannst du schnell beliebige Anordnungen von Hitobjects oder ganze Abschnitte einer Beatmap zwischen Beatmaps übertragen.

## Beschreibung des Tools

Mit Pattern Gallery kannst du:

- Patterns aus osu!-Beatmaps importieren und exportieren, um beliebige Gruppen von Hitobjects zwischen Beatmaps zu verschieben.
- Pattern-Sammlungen erstellen und mit Freunden teilen.
- Über die Schaltflächen unten Patterns hinzufügen oder entfernen.
- Ein Pattern in die ausgewählte Beatmap exportieren: Wähle ein oder mehrere Patterns aus und klicke auf die Ausführen-Schaltfläche oder doppelklicke auf ein Pattern.
- Beim Export zusätzliche Verarbeitungsschritte auf ein Pattern anwenden.
- Pattern-Sammlungen über das Menü **Project** speichern, laden, umbenennen, importieren und exportieren.

## Verwendung

1. Öffne Pattern Gallery in Mapping Tools.
2. Füge mit den Importoptionen Patterns zu deiner Sammlung hinzu.
3. Wähle in der Galerie ein Pattern aus.
4. Klicke auf die Ausführen-Schaltfläche, um das Pattern in die ausgewählte Beatmap zu exportieren.

## Funktionen und Einstellungen

Das Tool bietet folgende Funktionen:

- **Pattern-Verwaltung**: Patterns hinzufügen, entfernen, umbenennen und in Sammlungen organisieren.
- **Importoptionen**: Patterns aus verschiedenen Quellen importieren, etwa aus ausgewählten Objekten, Beatmap-Dateien oder Pattern-Codes.
- **Exportoptionen**: Den Pattern-Export mit Optionen für Skalierung, Drehung und Filterung anpassen.

## Exportoptionen

Beim Exportieren eines Patterns kannst du folgende Optionen anpassen:

- **Export Offset**: Legt fest, zu welchem Zeitpunkt das Pattern eingefügt wird. Du kannst die ursprüngliche Zeit des Patterns, eine eigene Zeit oder die aktuelle Editorzeit verwenden.
  - **Custom export offset**: Legt bei der benutzerdefinierten Offset-Methode fest, zu welchem Zeitpunkt das Pattern eingefügt wird.
- **Deletion margin**: Zusätzlicher Zeitbereich in Millisekunden um das Pattern, in dem Teile der ursprünglichen Beatmap gelöscht werden.
- **Parting distance**: Mindestanzahl an Beats in einer Lücke, ab der ein Pattern in kleinere Teile aufgeteilt wird.
- **Beat divisors**: Gib hier beliebige, durch Kommas getrennte Beat-Divisoren ein. Beispiele: `1/4, 1/12, 1/7, 4/5, 0.13435622499`.
- **Custom Scale**: Ändert die Größe des Patterns anhand eines Skalierungswerts.
- **Custom Rotate**: Dreht das Pattern um eine angegebene Gradzahl im Uhrzeigersinn.
- **Pattern Overwrite Mode**: Legt fest, wie überlappende Objekte zwischen dem Pattern und der Ziel-Beatmap behandelt werden:
  - **NoOverwrite**: Behält alle bestehenden Objekte in der Beatmap bei. Das Pattern wird ohne weitere Änderungen hinzugefügt.
  - **PartitionedOverwrite**: Entfernt Objekte aus der ursprünglichen Beatmap nur in dicht belegten Abschnitten des Patterns.
  - **CompleteOverwrite**: Entfernt alle Objekte aus der ursprünglichen Beatmap zwischen Start- und Endzeit des Patterns.
- **Timing Overwrite Mode**: Legt fest, wie das Timing der ursprünglichen Beatmap mit dem Timing des Patterns kombiniert wird.
- **Include hitsounds**: Exportiert das Pattern mit den Hitsound-Effekten seiner Timingpunkte.
- **Include kiai**: Exportiert das Pattern mit dessen Kiai-Zustand.
- **Scale to new circle size**: Skaliert das Pattern so, dass die Abstände relativ zur Kreisgröße gleich bleiben.
- **Scale to new timing**: Skaliert das Pattern zeitlich so, dass die Anzahl der Beats zwischen Objekten dem neuen Timing entspricht. Bei unsnappten Redlines kann das Snapping fehlerhaft sein. Verwende diese Option nicht, wenn du Redlines mit 0 oder unendlichen BPM hast.
- **Snap to new timing**: Snapt die Objekte des Patterns anhand der angegebenen Beat-Divisoren auf das neue Timing.
- **Manualify stacks**: Stapelt die Objekte des Patterns manuell.
- **Fix global SV**: Passt die SV der Greenlines im Pattern an die neue globale SV an, damit Slider im neuen Beatmap dieselbe SV haben.
- **Fix BPM SV**: Passt die SV der Greenlines im Pattern an die neuen BPM an, damit Slider in der neuen Beatmap dieselbe SV haben. Es empfiehlt sich, diese Funktion zu deaktivieren, wenn **Scale to new timing** verwendet wird.
- **Fix colourhax**: Passt den Farb-Skip so an, dass die Farb-Indizes der Objekte im Pattern und in der ursprünglichen Beatmap gleich bleiben.
- **Fix slider tick rate**: Multipliziert die BPM im Pattern so, dass die Slider-Tick-Rate im Pattern gleich bleibt.

## Kontextmenü für Patterns

Das Kontextmenü der Patterns in der Galerie (Rechtsklick auf ein Pattern) bietet folgende Optionen:

- **Properties**: Zeigt weitere Informationen zum Pattern an, zum Beispiel Namen, Erstellungszeit, letzte Verwendung und Anzahl der Verwendungen.
- **Delete**: Löscht die ausgewählten Patterns. Halte **Shift** gedrückt, um den Bestätigungsdialog zu überspringen.
- **Open in File Explorer**: Öffnet die Quelldateien der ausgewählten Patterns im Datei-Explorer.
- **Group**: Optionen zum Gruppieren von Patterns.

## Importoptionen

Über die Import-Schaltfläche kannst du Patterns aus verschiedenen Quellen importieren.

- **Import Selected**: Erstellt ein Pattern aus den aktuell im Editor ausgewählten Hitobjects.
  - **Name**: Name des Patterns.
- **Import from .osu File**: Importiert Patterns aus einer `.osu`-Datei auf deinem Laufwerk.
  - **Name**: Name des Patterns.
  - **Pattern file path**: Pfad zur zu importierenden Pattern-Datei.
  - **Filter**: Filtert die `.osu`-Datei.
  - **Start Time**: Zeitpunkt in der `.osu`-Datei, an dem das Pattern beginnt.
  - **End Time**: Zeitpunkt in der `.osu`-Datei, an dem das Pattern endet.
- **Import from Code**: Importiert ein Pattern aus Code, beispielsweise wenn du Patterns online teilst.
  - **Name**: Name des Patterns.
  - **Hit Objects**: Code der Hitobjects.
  - **Timing Points**: Code der Timingpunkte.
  - **Global SV**: Legt die globale Slider Velocity für die Hitobjects des Patterns fest.
  - **Game Mode**: Legt den Spielmodus des Patterns fest.

## Menü Project

Im Menü **Project** von Pattern Gallery kannst du:

- Pattern-Sammlungen speichern.
- Pattern-Sammlungen laden.
- Pattern-Sammlungen umbenennen.
- Pattern-Sammlungen importieren.
- Pattern-Sammlungen exportieren.
