---
title: "Map Cleaner"
author: "OliBomby"
id: map-cleaner
---

Map Cleaner bereinigt die ausgewählte Beatmap von überflüssigen Greenlines und bietet weitere Funktionen, die sich auf die gesamte Beatmap auswirken.

Map Cleaner rekonstruiert dazu alle Timingpunkte. Zunächst speichert das Tool die Einflüsse der Timingpunkte und baut sie anschließend strukturiert neu auf. Dadurch werden Greenlines automatisch wieder auf die Objekte gesnappt, die sie verwenden, und unnötige Änderungen entfernt.
Dabei bleiben die Beatmap und ihre Hitsounds im Wesentlichen unverändert, sofern keine zusätzlichen Funktionen aktiviert sind. Im Editor sollten nur die Änderungen sichtbar sein.

## Einstellungen zu Beatmap-Informationen {#map-info-settings}

Diese Einstellungen bestimmen, welche Inhalte Map Cleaner aus den Timingpunkten entfernt. Wenn du auf Nummer sicher gehen möchtest, kannst du alle Optionen aktivieren. Dadurch wird am wenigsten entfernt.

- **Map uses volume changes in sliders**: Wenn diese Option aktiviert ist, behandelt Map Cleaner Lautstärkeänderungen während eines Sliders als *beabsichtigt* und entfernt sie nicht.
- **Map uses sampleset changes in sliders**: Wenn diese Option aktiviert ist, behandelt Map Cleaner Änderungen des Sample-Sets oder Sample-Indexes während eines Sliders als *beabsichtigt* und entfernt sie nicht.
- **Map uses volume changes in spinners**: Wenn diese Option aktiviert ist, behandelt Map Cleaner Lautstärkeänderungen während eines Spinners als *beabsichtigt* und entfernt sie nicht.

## Zusätzliche Funktionen {#additional-features}

Diese Vorgänge ergänzen die normale Bereinigung von Map Cleaner.

- **Resnap objects**: Snapt während der Bereinigung alle Hitobjects und Sliderenden erneut. Dazu wird der eingestellte Beat-Divisor verwendet.
- **Resnap bookmarks**: Snapt alle Lesezeichen mit der Standardmethode erneut. Deaktiviere diese Option, wenn deine Lesezeichen auf ungewöhnliche Beat-Divisoren gesnappt sind.
- **Remove unused samples**: Entfernt alle Audiosamples im Mapset, die von keiner Beatmap und keinem Storyboard im Mapset verwendet werden. Samples, die über den Beatmap-Skin eingebunden werden können, bleiben unberührt.
- **Remove muting**: Entfernt alle Lautstärkeänderungen und benutzerdefinierten Sample-Index-Änderungen an Hitsounds mit 5 % Lautstärke. Hat ein Timingpunkt eine Lautstärke von 5 %, werden die Lautstärke- und Sample-Index-Änderungen dieses Timingpunkts entfernt.
- **Mute unclickable hitsounds**: Setzt alle Hitsound-Ereignisse, die von Hitobjects ohne aktive Spielereingabe stammen, auf 5 % Lautstärke. Hörbar bleiben nur Kreise, Sliderköpfe und Hold-Note-Köpfe. So lässt sich der Rhythmus der Beatmap besser erkennen und nachvollziehen, wie sie sich spielt.

## Erneut snappen

Beim erneuten Snappen wird auf den nächsten Tick der Zeitleiste gesnappt und anschließend auf eine ganze Zahl abgerundet. Liegt innerhalb von 10 ms nach dem Zeitpunkt eines Hitobjects eine Redline, wird stattdessen auf diese Redline gesnappt. So werden Objekte nicht auf einen Tick gesnappt, der 3 ms vor der Redline liegt.

Sliderenden werden auf zwei Arten erneut gesnappt. Bei der ersten Methode wird die Slider-Dauer auf das nächste Vielfache eines Beat-Divisors geändert. Das entspricht in etwa `Ctrl+Shift+S` für einen Slider im osu!-Standardeditor.

Die zweite Methode kommt nur zum Einsatz, wenn während des Sliders oder bis zu 20 ms danach eine Redline liegt. Dabei wird die Endzeit des Sliders auf den nächsten Tick des neuen Timings gesnappt. Die Slider haben dann eine ganzzahlige Dauer; durch die Rundung auf die Ticks der Zeitleiste weicht ihre genaue Länge ab.

Auch Spinner-Enden und Enden von Hold-Notes werden mit der zweiten Methode erneut gesnappt.

Ist die ausgewählte Beatmap im osu!-mania-Modus, werden beim erneuten Snappen auch die X-Positionen der Noten auf die Spaltenmitte und ihre Y-Positionen auf `192` gesetzt.

## Zeitleiste

Nach jedem Lauf von Map Cleaner zeigt eine kleine Zeitleiste alle Änderungen an den Timingpunkten.

- Eine rote Linie steht für einen entfernten Timingpunkt.
- Eine orange Linie steht für einen geänderten Timingpunkt.
- Eine grüne Linie steht für einen hinzugefügten Timingpunkt.

Wurde ein Timingpunkt nur verschoben, siehst du an seinem alten Offset eine rote und am neuen Offset eine grüne Linie.

Mit einem **Doppelklick** auf eine Linie in der Zeitleiste springst du im Editor zu diesem Zeitpunkt.
