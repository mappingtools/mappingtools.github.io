---
title: FAQ
author: OliBomby, aehrea
---

# FAQ

## Warum sehe ich keine Änderungen an meiner Beatmap?

Prüfe anhand der **Selected Map** (blaue Leiste oben in der Anwendung), ob du den richtigen Pfad zu deiner Beatmap angegeben hast.

Lade außerdem nach dem Ausführen des Tools den Editor **ohne zu speichern** neu. Wenn du die Beatmap im Editor speicherst, werden die Änderungen des Tools rückgängig gemacht, da beim Speichern die alte Version der Beatmap in die `.osu`-Datei geschrieben wird. Mit `Ctrl+L` und anschließend `Enter` kannst du die Beatmap im Editor schnell neu laden.

## Beim Ausführen eines Tools erscheint der Fehler „Could not find part of the path“ oder „Empty path name is not legal“.

Bewege den Mauszeiger über den **Beatmap-Namen oben im Fenster**, um den vollständigen Pfad anzuzeigen. Existiert dieser Pfad? Befindet sich der Songs-Ordner am richtigen Ort? Wenn sich dein Songs-Ordner nicht am standardmäßigen AppData-Speicherort befindet, gib in den **Preferences** den richtigen Pfad zum Songs-Ordner an.

## Bei jeder Ausführung eines Tools auf einer bestimmten Beatmap erscheint ein Fehler, bei anderen Beatmaps aber nicht.

Die Beatmap verwendet wahrscheinlich ein altes, nicht unterstütztes Dateiformat oder ist beschädigt. Öffne sie im Editor und speichere sie. Dadurch aktualisiert osu! die Beatmap auf das neueste Dateiformat, das mit Mapping Tools kompatibel ist.

## Ein Tool hat meine Beatmap beschädigt. Was kann ich tun?

Mapping Tools erstellt jedes Mal Backups deiner Beatmaps, wenn es eine Änderung vornimmt. Du findest diese unter **About > Open backup folder**. Über **File > Load backup** kannst du ein Backup in die **Current Map** laden. Alternativ kannst du **QuickUndo** verwenden, das du in den **Preferences** aktivieren kannst.

## „Open Current Beatmap“ funktioniert nicht oder ausgewählte Hitobjects werden nicht erkannt.

Diese Funktionen müssen den Arbeitsspeicher des osu!-Clients auslesen. Das kann gelegentlich nicht mehr funktionieren; in diesem Fall hilft es normalerweise, osu! oder den Computer neu zu starten. Weitere mögliche Ursachen und Lösungen:

- Eine Firewall oder ein Antivirenprogramm blockiert Mapping Tools: Deaktiviere das Antivirenprogramm oder richte eine Ausnahme für Mapping Tools ein und versuche es erneut.
- Du verwendest nicht die neueste Version von Mapping Tools: Manchmal ist ein Update von Mapping Tools erforderlich, um Änderungen in osu! zu unterstützen.
- Du verwendest nicht die neueste Version von osu!: Wechsle von privaten Servern zurück zur offiziellen Version und aktualisiere osu!.
- osu! wurde aktualisiert und hat die Speicher-Offsets erneut geändert: Gib mir Bescheid, damit ich das Problem beheben kann.
- Du verwendest Mapping Tools unter Windows 7 oder älter: Stelle sicher, dass mindestens .NET Framework 4.5.1 installiert ist.
- Du verwendest Mapping Tools auf einem anderen Betriebssystem als Windows: Lies die [Installationsanleitung](/docs/mapping-tools/installation).

## Wie kann ich Sliderenden stummschalten, ohne Hitsounds zu kopieren?

Wenn du nur die Sliderenden stummschalten möchtest, lass das Feld **Copy hitsounds from** leer und wähle im Feld **Copy hitsounds to** die Beatmap aus, deren Sliderenden stummgeschaltet werden sollen. Dadurch werden zwar keine Hitsounds kopiert, aber die Sliderenden trotzdem stummgeschaltet.

Wenn du beim Stummschalten der Sliderenden Hitsounds kopierst, verwendet das Tool die Objekte der Quell-Beatmap als Referenz. Deshalb werden Sliderenden an Stellen, an denen du Hitsounds hinzugefügt hast, nicht stummgeschaltet. Aus diesem Grund ist das Stummschalten von Sliderenden Teil von Hitsound Copier und kein eigenes Tool.

## Beim Starten von Mapping Tools soll ich .NET installieren, obwohl es bereits installiert ist.

Aktuelle Versionen von Mapping Tools zielen auf .NET 10 ab und werden eigenständig ausgeliefert. Eine separate .NET-Installation sollte daher nicht erforderlich sein.

Wenn die Aufforderung zur .NET-Installation trotzdem erscheint, stelle sicher, dass du eine aktuelle Version von Mapping Tools startest. Lade die Anwendung erneut von der Website herunter und installiere sie frisch.

## Funktioniert Mapping Tools mit osu! lazer?

Ja, die meisten Funktionen von Mapping Tools funktionieren mit lazer. Weitere Informationen findest du im [Guide](/docs/guides/use-mt-in-lazer).

## Ich habe eine Frage, die hier nicht beantwortet wird, oder einen Fehler gefunden.

Stelle deine Frage im Discord-Kanal `mt-techsupport`, schreibe mir direkt auf Discord (`olibomby`) oder erstelle ein Issue auf [GitHub](https://github.com/OliBomby/Mapping_Tools/issues).
