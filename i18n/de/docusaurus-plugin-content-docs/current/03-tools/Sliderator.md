---
title: "Sliderator"
author: "OliBomby"
id: sliderator
---

Mit Sliderator kannst du Slider oder Streams erstellen, deren Geschwindigkeit sich unterwegs ändert.

Importiere zum Einstieg über die Steuerelemente oben links einen Slider und bearbeite dann das Diagramm mit der rechten Maustaste.

:::caution Nicht rankbar

Slider, die mit Sliderator erstellt wurden, gelten als nicht rankbar. Einzelheiten findest du in [diesem Reddit-Beitrag](https://www.reddit.com/r/osugame/comments/xnmcuq/acceldecel_sliders_made_with_mapping_tool_is_now/?utm_source=share&utm_medium=web2x&context=3).

:::

## Slider importieren {#importing}

Bevor du Sliderator verwendest, musst du über die Schaltfläche **Import sliders** oben links einen oder mehrere Slider importieren.
Es gibt drei Möglichkeiten, Slider zu importieren:

- **Selected** importiert die Slider, die gerade im osu!-Editor ausgewählt sind.
- **Bookmarked** importiert alle Slider der ausgewählten Beatmap, die mit einem Lesezeichen markiert sind.
- **Time** importiert Slider der ausgewählten Beatmap, die über einen Zeitcode angegeben werden, den du in das Feld daneben eingibst. Der Zeitcode sollte dasselbe Format haben wie beim Kopieren von Objekten aus dem Editor in ein Textfeld, zum Beispiel: `00:56:823 (1,2,1,2) -`

Wenn du mehrere Slider importiert hast, kannst du mit den Links- und Rechtsschaltflächen zwischen ihnen wechseln. Wenn du dabei **Shift** gedrückt hältst, wird der aktuelle Sliderator-Lauf zusätzlich schnell ausgeführt, bevor zum nächsten Slider gewechselt wird.

Bei der Auswahl eines Sliders werden automatisch die Werte **Beat length**, **BPM** und **Global SV** eingestellt.

## Diagramm {#graph}

Das Diagramm ist der wichtigste Teil von Sliderator. Hier legst du fest, wie sich der Sliderball im Laufe der Zeit bewegt.

Auf der X-Achse wird die **Zeit** über die gesamte Dauer des Sliders angezeigt. Die Dauer wird im Feld **Beat length** festgelegt.
Mit dem Schieberegler unter dem Diagramm kannst du den Beat-Snap-Divisor für die Linien auf der X-Achse ändern.

Für die Y-Achse gibt es zwei Modi. Mit der grünen Schaltfläche unter dem Diagramm kannst du zwischen ihnen wechseln:

- **X** ist der Positionsmodus. Die Y-Achse zeigt die Position entlang des Sliders. Damit legst du fest, wo sich der Sliderball zu einem bestimmten Zeitpunkt befinden muss.
- **V** ist der Geschwindigkeitsmodus. Die Y-Achse zeigt den Slider-Velocity-Multiplikator im Bereich zwischen der positiven und negativen **SV limit**.

![Sliderator-Diagramm](./assets/sliderator_graph.png)

### Diagramm bearbeiten {#editing-graph}

Das Diagramm wird mit Kontrollpunkten und Interpolationen bearbeitet.

Mit einem **Rechtsklick** an beliebiger Stelle im Diagramm fügst du einen Kontrollpunkt ein. Ein Rechtsklick auf einen Kontrollpunkt öffnet ein Kontextmenü, in dem du ihn löschen oder seine Interpolationsmethode ändern kannst. Mit **Shift+Rechtsklick** entfernst du einen Kontrollpunkt sofort. Mit der **linken Maustaste** kannst du Kontrollpunkte verschieben. Ziehe den Hintergrund mit der linken Maustaste oder verwende das Mausrad, um die Ansicht zu verschieben und zu zoomen.

In der Mitte jedes interpolierten Abschnitts befindet sich ein kleinerer Kontrollpunkt. Wenn du ihn nach oben oder unten ziehst, ändert sich die Form der Interpolation. Mit einem **Rechtsklick** darauf setzt du ihn zurück.

Diese Tastenkürzel helfen dir beim Verschieben der Kontrollpunkte:

- **Shift** beschränkt die Bewegung auf eine horizontale Ebene.
- **Ctrl** beschränkt die Bewegung auf eine vertikale Ebene.
- **Alt** deaktiviert das Snapping.

### Weitere Diagrammoptionen {#graph-controls}

Hier werden weitere Steuerelemente für das Diagramm erklärt.

- **Beat length** ist die Dauer des Sliders in Beats. Der Wert wirkt sich auch auf die Breite des Diagramms aus.
- **BPM** ist das Tempo, in dem der Slider läuft. Der Wert sollte dem BPM-Wert an der Stelle entsprechen, an der der Slider exportiert wird.
- **Global SV** ist der Slider-Multiplikator der Beatmap. Der Wert sollte dem Slider-Multiplikator der ausgewählten Beatmap entsprechen.
- **SV limit** ist die maximale SV im Diagramm. Im Geschwindigkeitsmodus bestimmt dieser Wert auch die Höhe des Diagramms. Standardmäßig beträgt er 10, da dies die maximale SV in geerbten Timingpunkten ist.
- **Scale to completion** skaliert alle Kontrollpunkte vertikal, sodass der Sliderball entlang des Sliders höchstens bis zum gewünschten Fertigstellungsgrad läuft.
- **Reset graph** setzt das Diagramm auf den Standardzustand zurück.
- **Show red anchors** zeigt im Positionsmodus die Positionen der roten Anker des Sliders als rote horizontale Linien im Diagramm.
- **Show graph anchors** zeigt die Positionen der Kontrollpunkte des Diagramms in der Slider-Vorschau an.
- **Expected segment count** zeigt eine Schätzung, wie viele Slider-Anker die aktuelle Konfiguration benötigt. Unter 10.000 sollte das Spiel dadurch nicht wesentlich langsamer werden.

## Exportoptionen {#export-options}

Wenn du Sliderator ausführst, wird der bearbeitete Slider zur Exportzeit in die ausgewählte Beatmap exportiert. Du kannst ihn einfach hinzufügen oder mit **Override** vorhandene Inhalte an dieser Stelle der Beatmap ersetzen.

Wenn du **Export as stream instead** aktivierst, exportiert Sliderator statt eines Sliders einen Stream aus Kreisen, der Geschwindigkeit und Dauer des Sliders nachbildet. Anhand des Beat-Snap-Divisors des Diagramms wird bestimmt, wie viele Kreise pro Beat platziert werden.

Du kannst die **New SV** des bearbeiteten Sliders manuell festlegen. Diese SV sollte in die Nähe der höchsten im Diagramm verwendeten Geschwindigkeit kommen. Normalerweise reicht der automatisch bestimmte Wert. Manchmal lässt er sich jedoch leicht reduzieren, um weniger Anker zu erzeugen, ohne die Qualität des Sliders zu beeinträchtigen.

Mit **Minimum tumour length** kannst du die Anzahl der Anker im fertigen Slider deutlich verringern. Sliderator verlangsamt den Sliderball mithilfe unsichtbarer Tumours. Eine höhere Mindestlänge erzeugt größere und damit weniger Tumours. Der Nachteil: Bei größeren Tumours bewegt sich der Sliderball weniger gleichmäßig.

Mit **Delegate SV to BPM** verwendet Sliderator BPM, um die neue SV des Sliders festzulegen. Dadurch entfällt die Begrenzung auf das Zehnfache der SV in geerbten Timingpunkten. Außerdem kannst du **Remove slider ticks** aktivieren. Die Slider-Ticks werden dann mithilfe eines geerbten Timingpunkts mit `NaN`-SV entfernt.
