---
title: "Back-ups"
author: "OliBomby"
id: backups
description: Alles over back-ups in Mapping Tools.
keywords:
  - docs
  - mapping tools
  - backups
---

Mapping Tools bewaart back-ups van beatmaps in de ingestelde back-upmap. Open deze via **Over > Back-upmap openen** of wijzig de locatie in **Voorkeuren**.

Als het uitlezen van de live-editorstatus is ingesteld, kunnen back-ups ook de nieuwste niet-opgeslagen staat uit de editor bevatten. Anders maakt Mapping Tools een back-up van het beatmapbestand dat op schijf beschikbaar is.

## Automatische back-ups {#automatic-backups}

Als deze functie is ingeschakeld, maakt Mapping Tools een back-up voordat een tool een beatmap wijzigt. Zo kun je de toolbewerking ongedaan maken. Je kunt de back-upmap en het bewaarlimiet instellen via **Voorkeuren**. Wanneer de limiet wordt bereikt, worden de oudste back-ups verwijderd.

## Periodieke back-ups {#periodic-backups}

Als deze functie is ingeschakeld, maakt Mapping Tools regelmatig een back-up van de huidige beatmap wanneer de live-editorstatus kan worden uitgelezen. Als de beatmap sinds de vorige back-up niet is veranderd, wordt er geen nieuwe gemaakt. Periodieke back-ups bevatten `PB` in hun bestandsnaam.

## Handmatige back-ups {#manual-backups}

Gebruik het menu **Bestand** om een back-up te maken van de geselecteerde beatmap of er een in te laden. Handmatige back-ups bevatten `UB` in hun bestandsnaam. **QuickUndo** zet de nieuwste niet-periodieke back-up terug naar de beatmap die momenteel in osu! geopend is.
