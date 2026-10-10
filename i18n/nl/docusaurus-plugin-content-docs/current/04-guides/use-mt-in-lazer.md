---
title: "Mapping Tools gebruiken in osu! lazer"
author: "OliBomby"
id: use-mt-in-lazer
description: Mapping Tools gebruiken met osu! lazer.
keywords:
  - docs
  - mapping tools
  - lazer
  - compatibility
---

[osu! lazer](https://github.com/ppy/osu) gebruikt een andere werkwijze voor het bewerken van beatmaps dan osu! stable. Mapping Tools kan beatmapbestanden van beide clients bewerken. Gebruik in lazer de workflow voor extern bewerken en houd rekening met de beperkingen van sommige functies.

## Mapping Tools gebruiken in osu! lazer

Klik in de osu! lazer-editor op **Bestand > Extern bewerken**. Er wordt een tijdelijke map gemaakt met alle bestanden van de beatmapset waaraan je werkt. Mapping Tools vindt deze map automatisch en stelt die in als de geselecteerde beatmap. Klik in osu! lazer op **Bewerken voltooien en wijzigingen importeren** wanneer je klaar bent met Mapping Tools. osu! lazer importeert dan de wijzigingen.

![Bestand > Extern bewerken](assets/osu_TAqF8oqGPr.png)

## Compatibiliteit

Niet alle functies van Mapping Tools werken in osu! lazer. Hieronder staat de compatibiliteit van de functies.

Functies die **Editor Reader** gebruiken, werken niet in osu! lazer. Als je alleen osu! lazer gebruikt, raden we aan om **Editor Reader** uit te schakelen via **Voorkeuren**.

### Algemeen
- :x: **Huidige beatmap openen** werkt niet
- :x: **Huidige editortijd** werkt niet
- :x: **Geselecteerde hitobjects** werkt niet
- :white_check_mark: **Back-up maken** werkt
- :white_check_mark: **Back-up laden** werkt
- :white_check_mark: **Sliderpaden** met meerdere segmenttypen worden volledig ondersteund

### Tools
- :x: **Geometry Dashboard** werkt niet. Deze tool is afhankelijk van Editor Reader.
- :white_check_mark: **Hitsound Copier** werkt
- :large_orange_diamond: **Hitsound Studio** werkt, maar verwijzingen naar geïmporteerde samples en beatmaps zijn ongeldig zodra de tijdelijke map is verwijderd.
- :white_check_mark: **Pattern Gallery** werkt
- :white_check_mark: **Property Transformer** werkt
- :white_check_mark: **Sliderator** werkt, maar is erg traag in de lazer-editor
- :white_check_mark: **Tumour Generator 2** werkt
- :large_orange_diamond: **Auto-fail Detector** werkt, maar auto-fail bestaat niet in lazer.
- :white_check_mark: **Combo Colour Studio** werkt
- :white_check_mark: **Hitsound Preview Helper** werkt
- :white_check_mark: **Map Cleaner** werkt
- :white_check_mark: **Mapset Merger** werkt
- :white_check_mark: **Metadata Manager** werkt
- :white_check_mark: **Rhythm Guide** werkt
- :white_check_mark: **Slider Completionator** werkt
- :white_check_mark: **Slider Merger** werkt
- :large_orange_diamond: **Slider Picturator** werkt, maar de afbeelding van de slider wordt niet weergegeven in lazer.
- :white_check_mark: **Timing Copier** werkt
- :white_check_mark: **Timing Helper** werkt

## Let op: compatibiliteit met toekomstige versies van lazer

osu! lazer wordt actief ontwikkeld. Het bestandsformaat en de client kunnen veranderen, waardoor Mapping Tools mogelijk niet meer werkt.
Als je een probleem tegenkomt dat niet in deze lijst staat, meld dit dan via **Over > Probleem melden**.
