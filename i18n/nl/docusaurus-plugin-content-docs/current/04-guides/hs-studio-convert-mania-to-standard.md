---
title: "Mania-hitsounds omzetten naar standard-hitsounds"
author: "OliBomby"
id: convert-mania-to-standard-hs
description: Zet met Hitsound Studio osu!mania-hitsounds om naar osu!standard-hitsounds.
keywords:
  - docs
  - mapping tools
  - hitsound studio
  - hitsounds
  - convert hs
---

In osu!mania kunnen meerdere notes op dezelfde tick staan. Daardoor heb je bij het plaatsen van hitsounds in osu!mania veel vrijheid: je kunt meerdere sample-sets of aangepaste samples tegelijk gebruiken. Hitsounds van osu!mania naar osu!standard kopiëren is echter lastiger, omdat osu!standard maximaal één note per tick toestaat. Met Hitsound Studio kun je deze osu!mania-hitsounds omzetten naar osu!standard-hitsounds, waardoor je veel meer mogelijkheden krijgt voor hitsounds.

## Stap 1: Hitsound Studio instellen {#1}

Open Hitsound Studio in Mapping Tools. Klik op het menu **Project** en daarna op **Nieuw project**. Als je je huidige configuratie in Hitsound Studio wilt bewaren, sla die dan eerst op met **Project opslaan**.

## Stap 2: Hitsoundlagen importeren {#2}

Klik rechtsonder in het venster op de plusknop om het importvenster te openen. Ga naar het tabblad **Hitsounds importeren** om alle hitsounds uit een beatmap te importeren. Selecteer bij **Bronbeatmap** de beatmap met de osu!mania-hitsounds die je wilt omzetten. Vink ook **Dubbele samples detecteren** en **Dubbele hitsounds verwijderen** aan. Vink **Gescripte samples opnemen** aan als je map gescripte samples gebruikt om lege plekken in de hitsounds op te vullen. Klik daarna op **Accepteren** om de hitsounds te importeren. De hitsoundlagen verschijnen nu in Hitsound Studio.

## Stap 3: Instellen {#3}

Onderaan moet je nog twee dingen instellen: de **basisbeatmap** en de **standaardsample**. Selecteer als basisbeatmap de map die je wilt omzetten. De tool gebruikt de metadata, timing en volumeniveaus van deze basisbeatmap.

Je kunt de standaardsample op verschillende manieren instellen; kies wat je prettig vindt. De standaardsample wordt gebruikt als er geen hitnormal-hitsound in de hitsoundlagen staat. osu!standard speelt namelijk altijd een hitnormal-geluid af. Je kunt dit veld leeg laten, **Soft sample-set** kiezen en het volume op `-1` zetten.

## Stap 4: Exporteren {#4}

Klik rechtsonder in het venster op de startknop. Er verschijnt een dialoogvenster met exportopties. Zorg dat zowel **Exportmodus** als **Spelmodus exporteren** op **Standard** staan. Je kunt ook **Samplebestandsformaat** en **Gemengd samplebestandsformaat** wijzigen naar **Vorbis (.ogg)**. Zo worden alle samples naar `.ogg` omgezet en nemen ze minder ruimte in. Klik vervolgens op **Accepteren** om de hitsounds te exporteren.

Na afloop staat in de exportmap een `.osu`-bestand met de osu!standard-hitsounds-difficulty en een aantal audiobestanden die voor de hitsounds nodig zijn. Kopieer al deze bestanden naar je osu!standard-mapset en kopieer de hitsounds uit de hitsounds-difficulty met Hitsound Copier.
