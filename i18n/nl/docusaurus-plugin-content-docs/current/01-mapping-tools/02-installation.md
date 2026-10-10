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

## Compatibiliteit van functies {#editor-integration-by-platform}

✅ Ondersteund · ❌ Niet ondersteund. Voor ondersteunde functies kan de onderstaande configuratie nodig zijn.

<div className="feature-compatibility">

| Besturingssysteem | osu! client | Beatmaps lezen/schrijven | Huidige beatmap ophalen | Live-editorstatus uitlezen | Automatisch herladen | Globale sneltoetsen | Geometry Dashboard-overlay |
| --- | --- | :---: | :---: | :---: | :---: | :---: | :---: |
| Windows | stable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Windows | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Windows | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Linux | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| macOS | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |

</div>

- **osu! stable**: op Windows en Linux (Wine) wordt de huidige beatmap opgehaald via **Geheugen uitlezen**. Stel de **Songs-map** in bij Voorkeuren met het oorspronkelijke bestandssysteempad. Het uitlezen van live-editorstatus en automatisch herladen zijn alleen beschikbaar op Windows. Rechtstreeks geheugen uitlezen wordt op macOS niet ondersteund.
- **osu! lazer**: gebruik **Bestand > Extern bewerken** om de beatmapbestanden beschikbaar te maken. Mapping Tools detecteert de beatmap die extern wordt bewerkt automatisch; in deze tabel geldt dat als de huidige beatmap ophalen. Gebruik **Bewerken voltooien en wijzigingen importeren** in lazer om je wijzigingen toe te passen. Bekijk de [lazer-handleiding](/docs/guides/use-mt-in-lazer).
- **osu! unstable**: kies **MTIPC** in Voorkeuren om de huidige beatmap op te halen, live-editorstatus uit te lezen en de editor opnieuw te laden. Deze functies vereisen de MTIPC-server van de client. Het uitlezen van live-editorstatus en het opnieuw laden van de editor zijn op Linux en macOS standaard uitgeschakeld.
- **Globale sneltoetsen**: op Linux is ondersteuning afhankelijk van X11 of een desktopomgeving met de portal voor globale sneltoetsen. Geef op macOS toestemming voor de toetsenbordtoegang die het systeem vraagt.

Je kunt altijd zelf een beatmap selecteren via **Bestand > Beatmap openen**.

## Instellen {#setup}

Klik na de installatie linksboven op de knop om het navigatiemenu te openen. Ga naar **Voorkeuren** om Mapping Tools in te stellen.

De belangrijkste velden zijn:

- **osu!-map**: het pad naar de map met _osu!_.
- **Songs-map**: het pad naar de map met al je beatmaps. Deze staat meestal direct in de _osu!_-map.
- **osu!-configuratiebestand van gebruiker**: het pad naar je osu!-gebruikersconfiguratiebestand. Dit staat meestal direct in de _osu!_-map en heet `osu.[username].cfg`.

:::note

Controleer of deze velden kloppen als je osu!stable gebruikt. Anders werkt Mapping Tools mogelijk niet goed.

:::
