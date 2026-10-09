---
title: "Installation"
author: "Julaaaan"
id: installation
description: So installierst du Mapping Tools unter Windows, Linux und macOS.
keywords:
  - docs
  - mapping tools
  - install
---

Mapping Tools bietet native Desktop-Versionen für **Windows, Linux und macOS**. Lade die passende Version auf der [Download-Seite](/download) oder in den [GitHub-Releases](https://github.com/OliBomby/Mapping_Tools/releases/latest) herunter.

Alle Pakete enthalten die .NET-10-Laufzeit; eine separate Installation ist nicht nötig.

## Passendes Paket auswählen

- **Windows**: Installer oder portable ZIP-Datei. x64 ist für die meisten Systeme geeignet; x86 ist für 32-Bit-Windows.
- **Linux**: AppImage oder portable ZIP-Datei für x64 oder ARM64.
- **macOS**: portable ZIP-Datei für Intel (x64) oder Apple Silicon (ARM64). Entpacke sie und öffne **Mapping Tools.app**.

## Editor-Anbindung

Die Dateibearbeitungs-Tools funktionieren auf allen Desktop-Versionen. Einige Live-Editor-Funktionen hängen vom Betriebssystem und der gewählten Anbindung ab:

- **Geometry Dashboard** und die **Editor Reader**-Speicheranbindung benötigen Windows.
- Unter Linux und macOS verwendet die Beatmap-Erkennung standardmäßig die lokale **Gosumemory/Tosu**-API unter `127.0.0.1:24050`. Starte eine kompatible API, um **Open current beatmap** zu verwenden. Das Lesen des Live-Editorzustands und das automatische Neuladen sind dort standardmäßig deaktiviert.
- Eine Beatmap kannst du immer direkt über **File > Open beatmap** auswählen.

Für osu! lazer verwendest du **File > Edit externally**. Weitere Informationen stehen im [lazer-Guide](/docs/guides/use-mt-in-lazer).

## Einrichtung {#setup}

Öffne über die Navigation (`Ctrl+K`) die **Preferences**. Setze den **Songs folder** auf den Ordner mit deinen Beatmaps. **osu! folder** und **osu! user config file** kannst du angeben, damit Mapping Tools diese Pfade aus deiner osu!-Installation ermittelt.

Mit **Current beatmap fetching**, **Beatmap live state reading** und **Editor reload** legst du fest, wie Mapping Tools mit dem Editor kommuniziert. Die verfügbaren Optionen hängen vom Betriebssystem ab. Für die Erkennung über Gosumemory/Tosu muss die lokale API auf Port `24050` laufen.

:::note

Du kannst **File > Open beatmap** auch ohne Editor-Anbindung verwenden. Der Songs-Ordner wird benötigt, wenn Mapping Tools Beatmap-Pfade aus osu! oder einer lokalen Gosumemory/Tosu-API auflösen soll.

:::
