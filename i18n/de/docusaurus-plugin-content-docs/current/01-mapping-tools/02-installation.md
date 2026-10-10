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

## Funktionskompatibilität {#editor-integration-by-platform}

✅ Unterstützt · ❌ Nicht unterstützt. Unterstützte Funktionen erfordern möglicherweise die unten beschriebene Einrichtung.

<div className="feature-compatibility">

| OS | osu! Client | Beatmaps lesen/schreiben | Aktuelle Beatmap abrufen | Live-Editorstatus auslesen | Automatisch neu laden | Globale Tastenkürzel | Geometry-Dashboard-Overlay |
| --- | --- | :---: | :---: | :---: | :---: | :---: | :---: |
| Windows | stable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Windows | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | stable | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ |
| Linux | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | stable | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| macOS | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |

</div>

- **osu! stable**: Die aktuelle Beatmap wird unter Windows und Linux (Wine) über **Speicher auslesen** abgerufen. Lege den **Songs folder** in den Preferences mit seinem nativen Dateisystempfad fest. Das Auslesen des Live-Editorstatus ist unter Windows und Linux (Wine) verfügbar. Automatisches Neuladen ist nur unter Windows verfügbar. Der Abruf der aktuellen Beatmap wird unter macOS nicht unterstützt; auch gosumemory und tosu bieten keine offizielle native macOS-Unterstützung.
- **osu! lazer**: Verwende **File > Edit externally**, um die Beatmap-Dateien bereitzustellen. Mapping Tools erkennt die extern bearbeitete Beatmap automatisch; in dieser Tabelle zählt das als Abruf der aktuellen Beatmap. Über **Finish editing and import changes** in lazer übernimmst du deine Änderungen. Siehe den [lazer-Guide](/docs/guides/use-mt-in-lazer).
- **Globale Tastenkürzel**: Unter Linux hängt die Unterstützung von X11 oder einem Desktop mit dem Portal für globale Tastenkürzel ab. Unter macOS musst du den vom System angeforderten Zugriff auf die Tastatur erlauben.

Du kannst eine Beatmap jederzeit direkt über **File > Open beatmap** auswählen.

## Einrichtung {#setup}

Öffne nach der Installation über die Schaltfläche oben links das Navigationsmenü und gehe zu **Preferences**, um Mapping Tools einzurichten.

Wichtig sind vor allem diese Felder:

- **osu! folder**: Pfad zum Ordner mit _osu!_.
- **Songs folder**: Pfad zum Ordner mit deinen Beatmaps. Dieser liegt normalerweise direkt im _osu!_-Ordner.
- **osu! config user file**: Pfad zu deiner osu!-Benutzerkonfigurationsdatei. Sie liegt normalerweise direkt im _osu!_-Ordner und heißt `osu.[username].cfg`.

:::note

Prüfe diese Pfade besonders dann, wenn du osu!stable verwendest. Andernfalls funktioniert Mapping Tools möglicherweise nicht richtig.

:::
