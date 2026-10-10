---
title: "Installation"
author: "aehrea"
id: installation
description: So installierst du Mapping Tools unter Windows, Linux und macOS.
keywords:
  - docs
  - mapping tools
  - install
---

Mapping Tools gibt es als native Desktop-Version für **Windows, Linux und macOS**. Lade auf der [Download-Seite](/download) oder bei den [GitHub-Releases](https://github.com/OliBomby/Mapping_Tools/releases/latest) das Paket für deinen Prozessor herunter.

Alle Pakete sind eigenständig und enthalten die .NET-10-Laufzeit.

## Paket auswählen

- **Windows**: Verwende den Installer oder das portable ZIP-Archiv. Für die meisten Systeme ist x64 richtig; x86 ist für 32-Bit-Windows.
- **Linux**: Verwende das AppImage oder das portable ZIP-Archiv für x64 oder ARM64.
- **macOS**: Lade das portable ZIP-Archiv für Intel (x64) oder Apple Silicon (ARM64) herunter und öffne anschließend **Mapping Tools.app** im entpackten Ordner.

## Editor-Anbindung nach Plattform

Beatmap-Datei-Tools funktionieren in allen Desktop-Versionen. Einige Live-Editor-Funktionen hängen vom Betriebssystem und der verwendeten Anbindung ab:

- **Geometry Dashboard** und die speicherbasierte Anbindung über **Editor Reader** benötigen Windows.
- Unter Linux und macOS sucht Mapping Tools standardmäßig über die lokale **Gosumemory/Tosu**-API unter `127.0.0.1:24050` nach der aktuellen Beatmap. Starte eine kompatible API, um **Open current beatmap** zu verwenden. Das Auslesen des Live-Editorzustands und das automatische Neuladen des Editors sind auf diesen Plattformen standardmäßig deaktiviert.
- Du kannst eine Beatmap jederzeit direkt über **File > Open beatmap** auswählen.

Verwende in osu! lazer den Workflow **File > Edit externally**. Siehe dazu den [lazer-Guide](/docs/guides/use-mt-in-lazer).

## Einrichtung {#setup}

Öffne nach der Installation über die Schaltfläche oben links das Navigationsmenü und gehe zu **Preferences**, um Mapping Tools einzurichten.

Wichtig sind vor allem diese Felder:

- **osu! folder**: Pfad zum Ordner mit _osu!_.
- **Songs folder**: Pfad zum Ordner mit deinen Beatmaps. Dieser liegt normalerweise direkt im _osu!_-Ordner.
- **osu! config user file**: Pfad zu deiner osu!-Benutzerkonfigurationsdatei. Sie liegt normalerweise direkt im _osu!_-Ordner und heißt `osu.[username].cfg`.

:::note

Prüfe diese Pfade besonders dann, wenn du osu!stable verwendest. Andernfalls funktioniert Mapping Tools möglicherweise nicht richtig.

:::
