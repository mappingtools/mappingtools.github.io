---
title: FAQ
author: OliBomby
---

# FAQ

## Warum sehe ich keine Änderungen in meiner Beatmap?

Prüfe, ob in Mapping Tools die richtige Beatmap ausgewählt ist. Lade den osu!-stable-Editor nach einer externen Änderung neu, ohne vorher zu speichern. Sonst kann die ältere Editor-Kopie die Änderungen überschreiben. In den **Preferences** kannst du **Editor reload** konfigurieren oder manuell mit `Ctrl+L` und danach `Enter` neu laden.

Verwende in osu! lazer **File > Edit externally** und importiere die Änderungen nach der Bearbeitung wieder. Weitere Informationen stehen im [lazer-Guide](/docs/guides/use-mt-in-lazer).

## Beim Ausführen eines Tools erscheint „Could not find part of the path“ oder „Empty path name is not legal“.

Prüfe, ob die ausgewählte Beatmap noch existiert und ob der **Songs folder** in den **Preferences** auf deine osu!-Beatmap-Bibliothek zeigt. Für die Erkennung über Gosumemory/Tosu muss die lokale API auf Port `24050` laufen.

## Ein Tool hat meine Beatmap beschädigt. Was kann ich tun?

Mapping Tools kann vor Tool-Ausführungen automatische Backups und bei aktivierter Option periodische Backups erstellen. Öffne sie über **About > Open backups folder**. Mit **File > Load backup** oder **QuickUndo** kannst du ein Backup wiederherstellen.

## „Open current beatmap“ oder Funktionen für ausgewählte Objekte funktionieren nicht.

Diese Funktionen verwenden die in **Preferences** gewählte Anbindung. Unter Windows kann die Beatmap-Erkennung den Speicher auslesen; ungespeicherter Editorzustand wird über **Editor Reader** oder **MTIPC** gelesen. Unter Linux und macOS verwendet die Beatmap-Erkennung standardmäßig die lokale Gosumemory/Tosu-API; das Lesen des Live-Editorzustands ist dort standardmäßig deaktiviert. Du kannst Beatmaps immer direkt über **File > Open beatmap** öffnen. **Geometry Dashboard** benötigt Windows.

## Beim Start werde ich aufgefordert, .NET zu installieren.

Aktuelle Downloads enthalten die .NET-10-Laufzeit. Eine separate Installation sollte nicht erforderlich sein. Lade bei einer Laufzeitaufforderung ein aktuelles Paket von der [Download-Seite](/download) herunter.

## Funktioniert Mapping Tools mit osu! lazer?

Die meisten Beatmap-Tools funktionieren mit lazer über **File > Edit externally**, einige Funktionen haben jedoch Einschränkungen. Siehe den [Kompatibilitätsguide](/docs/guides/use-mt-in-lazer).

## Ich habe eine weitere Frage oder einen Fehler gefunden.

Stelle deine Frage im Discord-Kanal `#mapping-tools-techsupport` oder erstelle ein Issue auf [GitHub](https://github.com/OliBomby/Mapping_Tools/issues).
