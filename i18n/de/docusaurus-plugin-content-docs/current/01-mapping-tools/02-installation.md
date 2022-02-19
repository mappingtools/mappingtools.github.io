---
title: "Installation"
author: "Julaaaan"
id: installation
description: So installierst du Mapping Tools.
keywords:
  - docs
  - mapping tools
  - install
---

Mapping Tools unterstützt im Moment **nur Windows**. Für Nicht-Windows Nutzer gibt es die Option [Wine](#wine) oder die  [Web-Basierte Version von Mapping Tools](#web-based) zu benutzen.

Mapping tools kann von der [Downloads Seite](/download) oder von den [GitHub releases](https://github.com/OliBomby/Mapping_Tools/releases) herutergeladen werden.

### Installer {#installer}

Lade den Installer herunter und führe ihn aus. Schließe alle Schritte ab und beende den Installer. Mapping Tools wird daraufhin installiert sein.

Der Installer lädt automatisch alle Abhängigkeiten (Dependencies) herrunter die Mapping Tools benötogt, wie z.B. .NET 5.

### Portable {#portable}

Lade die portable .zip Datei herunter und extrahiere deren Inhalte in einen Ordner. Öffne die Datei **Mapping Tools.exe**

:::note

Um Mapping Tools ausführen zu können musst du **.NET Desktop Runtime 5** mit der selben Architektur wie deine Verion von Mapping Tools installiert haben. Das bedeutet, dass du x64 .NET installieren musst wenn du x64 Mapping Tools heruntergeladen hast, und x86 .NET installieren musst wenn du x64 Mapping Tools heruntergeladen hast.

:::

### Wine {#wine}

Du kannst Mapping Tools erfolgreich auf anderen Betriebssystemen mit Wine ausführen. Die meisten Funktionen werden Fehlerfrei funktionieren, mit Ausnahme von memory reading und Geometry Dashboard. Ich empfehle, Editor Reader in den Einstellungen zu Deaktivieren, damit Mapping Tools nicht ständig versucht, den Arbeitsspeicher auszulesen. 

1. Lade [WineHQ](https://www.winehq.org/) herunter und installiere es. Volge den Installations-Anweisungen für dein Betriebssystem.
2. Lade Mapping Tools herunter und starte den Installer mit Wine.
3. Starte Mapping Tools nachdem die Installation abgeschlossen ist.

Dies wurde auf Ubuntu 20.04 64-bit mit wine-6.0.2 und wine-7.0 getestet.

### Web-based {#web-based}

Du kannst eine frühe Vorschau der Web-Basierten Version von Mapping Tools [**hier**](https://misakura-rin.github.io/mapping-tools-web/) finden. Diese version funktioniert auf allen Plattformen. Diese Version verfügt allerdings nicht über alle Tools.

Starte indem du deine Beatmap Dateien mit dem **Upload** Button oben rechts hochlädst. Wähle ein Tool auf der linken seite aus, wähle eine Beatmap und fürhe das Tool aus. Die modifizierte Beatmap wird automatisch heruntergeladen. Zusätzlich werden die Dateien auf der rechten Seite aktualisiert sobald ein Tool ausgeführt wird.

:::caution Noch in frühem Entwicklungsstadium

Viele der Tools fehlen und es kann zu Fehlern kommen. Falls sie Website nicht lädt, versuche sie mit Shift-F5 neuzuladen und den cache zu leeren.

:::

## Setup {#setup}

Sobald du Mapping Tools installiert hast, klicke auf den Button oben links um das Navigationsmenü zu öffen. Gehe von dor aus zu **Preferences** um Mapping Tools zu konfigurieren.

Die wichtigsten Felder sind:

- **osu! folder**: Pfad zu dem Order der _osu!_ enthält.
- **Songs folder**: Pfad zu dem Ordner der alle Songs enthält. Er ist typischerweise direkt in dem _osu!_ Ordner.
- **osu! config user file**: Prad zu deiner osu! Banutzerkonfigurationsdatei. Sie ist typischerweise direkt in dem _osu!_ Ordner mit dem Dateinamen `osu.[username].cfg`.

:::note

Stelle sicher dass diese Felder korrekt sind, weil Mapping Tools sonst möglicherweise nicht richtig Funktioniert.

:::