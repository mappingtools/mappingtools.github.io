---
title: FAQ
author: Potoofu
---

# FAQ

## Warum sehe ich keine Veränderungen in meiner Beatmap?

Überprüfe zuerst, ob **die blaue Leiste am unteren Rand der Anwendung den richtigen Pfad zur zu bearbeitenden Beatmap** anzeigt.

Außerdem solltest du sicherstellen, dass der Editor nach der Ausführung eines Tools **ohne die Änderungen davor zuspeichern** neu geladen wird. 

Grund dafür ist, dass das Speichern der Beatmap im Editor die Veränderungen von Mapping-Tools rückgängig macht, da dadurch die vorherige `.osu` Beatmap-Datei ohne die Veränderungen abgespeichert wird.

Am besten lädst du die Beatmap im Editor neu indem du erst `Ctrl+L` und dann `Enter` drückst.

## Ich erhalte den Fehler "Could not find part of the path" oder "Empty path name is not legal" wenn ein Tool ausgeführt wird.

Überprüfe zuerst, ob **die blaue Leiste am unteren Rand der Anwendung den richtigen Pfad zur zu bearbeitenden Beatmap** anzeigt.

Sollte dies nicht der Fall sein, musst du die Pfade in **Preferences** überprüfen und eventuell korrigieren.

## Meine Beatmap hat Fehler oder ist nicht mehr nutzbar nachdem ich ein Tool verwendet habe.

Mapping-Tools erstellt nach jeder Änderung ein Backup der Beatmap. Den Ordner mit diesem Backup kannst du ganz einfach über das Dropdown **About > Open backup folder** öffnen. Ansonsten kannst du über das Menü **File > Load backup** oder mit dem **QuickUndo-Hotkey** (falls dieser gesetzt ist) ein Backup auch direkt wiederherstellen.

## Der Menüpunkt "Open Current Beatmap" funktioniert nicht oder es können keine Hitobjekte abgerufen werden.

Einige Features sind abhängig davon, den Speicher der _osu!_ Anwendung auslesen zu können. 

Meistens liegt der Fehler darin, dass Mapping-Tools diesen Speicher nicht finden konnte. Ein **Neustart der beiden Programme oder des Computers** beheben dies im Normalfall.

Es ist aber außerdem möglich, dass eine **Firewall- oder Antivirensoftware** Mapping-Tools daran hindert diesen Speicher auszulesen. In diesem Fall musst du Mapping-Tools die nötigen Rechte geben oder die Software kurzzeitig deaktivieren.

## Wie kann ich Sliderends stummschalten ohne dessen Hitsounds zu kopieren?

Lasse das Feld `Copy hitsounds from` leer und füge im Feld `Copy hitsounds to` die Beatmap hinzu, deren Sliderends stummgeschaltet werden sollen. Dadurch werden keine Hitsounds kopiert, die Stummschaltung der Sliderends funktioniert aber trotzdem noch.

Solltest du Hitsounds kopieren und gleichzeitig Sliderends stummschalten, verwendet das Tool die zu kopierenden Objekte als Referenz und schaltet Sliderends nur stumm an Stellen, an denen noch keine Hitsounds existieren.

# Beim Start von Mapping-Tools werde ich aufgefordert, .NET zu installieren, obwohl ich dies schon getan habe.

Möglicherweise hat du falsche Version von .NET installiert. Du musst **.NET Desktop Runtime 5** mit der **gleichen Architektur wie Mapping Tools** installieren. Wenn du also `x64` Mapping Tools installiert hast, benötigst du `x64` .NET und wenn du `x86` Mapping Tools installiert hast, benötigst du `x86` .NET. 

## Ich habe eine Frage die hier nicht vorkommt oder ich habe einen Bug gefunden.

Du kannst auf [Discord](https://discord.gg/YfjKN2yjQV) im Kanal `#mapping-tools-techsupport` oder direkt dem Nutzer `OliBomby#3573` fragen stellen.

Für Bugs solltest du am Besten eine Fehlermeldung auf [GitHub](https://github.com/OliBomby/Mapping_Tools/issues) erstellen.