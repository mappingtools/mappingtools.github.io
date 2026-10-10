---
title: "Installatie"
author: "aehrea"
id: installation
description: Mapping Tools installeren op Windows, Linux en macOS.
keywords:
  - docs
  - mapping tools
  - install
---

Mapping Tools heeft native desktopversies voor **Windows, Linux en macOS**. Download de versie voor je processor via de [downloadpagina](/download) of de [GitHub-releases](https://github.com/OliBomby/Mapping_Tools/releases/latest).

Alle pakketten zijn zelfstandig en bevatten de .NET 10-runtime.

## Kies een pakket

- **Windows**: gebruik het installatieprogramma of de draagbare ZIP. Kies x64 voor de meeste systemen; x86 is voor 32-bits Windows.
- **Linux**: gebruik de AppImage of draagbare ZIP voor x64 of ARM64.
- **macOS**: download de draagbare ZIP voor Intel (x64) of Apple silicon (ARM64) en open daarna **Mapping Tools.app** in de uitgepakte map.

## Editorintegratie per platform

Beatmapbestanden werken met alle desktopversies. Sommige functies voor live-editorintegratie zijn afhankelijk van het besturingssysteem en de integratiemethode:

- **Geometry Dashboard** en de geheugenintegratie van **Editor Reader** vereisen Windows.
- Op Linux en macOS zoekt Mapping Tools standaard naar de huidige beatmap via de lokale **Gosumemory/Tosu**-API op `127.0.0.1:24050`. Start een compatibele API om **Huidige beatmap openen** te gebruiken. Het uitlezen van live-editorstatus en het automatisch herladen van de editor zijn op deze platforms standaard uitgeschakeld.
- Je kunt altijd zelf een beatmap selecteren via **Bestand > Beatmap openen**.

Gebruik in osu! lazer de workflow **Bestand > Extern bewerken**. Bekijk de [lazer-handleiding](/docs/guides/use-mt-in-lazer).

## Instellen {#setup}

Klik na de installatie linksboven op de knop om het navigatiemenu te openen. Ga naar **Voorkeuren** om Mapping Tools in te stellen.

De belangrijkste velden zijn:

- **osu!-map**: het pad naar de map met _osu!_.
- **Songs-map**: het pad naar de map met al je beatmaps. Deze staat meestal direct in de _osu!_-map.
- **osu!-configuratiebestand van gebruiker**: het pad naar je osu!-gebruikersconfiguratiebestand. Dit staat meestal direct in de _osu!_-map en heet `osu.[username].cfg`.

:::note

Controleer of deze velden kloppen als je osu!stable gebruikt. Anders werkt Mapping Tools mogelijk niet goed.

:::
