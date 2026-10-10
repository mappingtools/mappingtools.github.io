---
title: FAQ
author: OliBomby, aehrea
---

# FAQ

## Waarom zie ik geen wijzigingen in mijn map?

Controleer de **geselecteerde map** (de blauwe balk bovenaan de applicatie) en kijk of het pad naar je beatmap klopt.

Laad de editor ook **opnieuw zonder op te slaan** nadat je een tool hebt uitgevoerd. Als je de map in de editor opslaat, maak je de wijzigingen van de tool ongedaan: het opslaan overschrijft het .osu-bestand met de oude versie van de beatmap. Je kunt de map snel opnieuw laden door in de editor op `Ctrl+L` en daarna op `Enter` te drukken.

## Ik krijg de foutmelding "Could not find part of the path" of "Empty path name is not legal" wanneer ik een tool uitvoer.

Beweeg de muisaanwijzer over de **beatmapnaam bovenaan het venster**. Daar zie je het volledige pad. Bestaat dit pad? Staat de Songs-map op de juiste plek? Als je Songs-map niet op de standaardlocatie in AppData staat, stel dan via **Voorkeuren** het juiste pad naar je Songs-map in.

## Elke tool geeft een foutmelding op een bepaalde map, maar niet op andere maps.

De map die je probeert te bewerken gebruikt waarschijnlijk een oud, niet-ondersteund bestandsformaat of is beschadigd. Open de map in de editor en sla hem op. Zo werkt osu! de map bij naar het nieuwste bestandsformaat, dat compatibel is met Mapping Tools.

## Een tool heeft mijn map kapotgemaakt. Wat kan ik doen?

Mapping Tools maakt een back-up van je beatmap wanneer er iets wordt gewijzigd. Je vindt deze back-ups via **Over > Back-upmap openen**. Je kunt ook een back-up laden in de huidige map via **Bestand > Back-up laden**, of de QuickUndo-sneltoets gebruiken die je via **Voorkeuren** kunt inschakelen.

## 'Huidige beatmap openen' werkt niet of geselecteerde hitobjects ophalen werkt niet.

Deze functies vereisen dat Mapping Tools het geheugen van de osu!-client kan uitlezen. Dit werkt soms onverwacht niet meer. Meestal helpt het om osu! of je computer opnieuw op te starten. Andere mogelijke oorzaken en oplossingen:
- De firewall of virusscanner blokkeert Mapping Tools: schakel de virusscanner uit of voeg Mapping Tools toe aan de uitzonderingen en probeer het opnieuw.
- Je gebruikt niet de nieuwste versie van Mapping Tools: soms moet Mapping Tools worden bijgewerkt om veranderingen in osu! te ondersteunen.
- Je gebruikt niet de nieuwste versie van osu!: verlaat privésservers en werk osu! bij naar de nieuwste versie.
- osu! is bijgewerkt en heeft geheugenoffsets veranderd: meld dit aan mij, zodat ik het probleem kan oplossen.
- Je gebruikt Mapping Tools op Windows 7 of ouder: installeer .NET Framework 4.5.1 of hoger.
- Je gebruikt Mapping Tools op een ander besturingssysteem dan Windows: raadpleeg de [installatiehandleiding](/docs/mapping-tools/installation).

## Hoe demp ik sliderends zonder hitsounds te kopiëren?

Laat het veld 'Hitsounds kopiëren van' leeg en voeg in het veld 'Hitsounds kopiëren naar' de map toe waarvan de sliderends gedempt moeten worden. Er worden dan geen hitsounds gekopieerd, maar de sliderends worden wel gedempt.

Als je tijdens het dempen wel hitsounds kopieert, gebruikt de tool de objecten uit de beatmap waarvan je kopieert als referentie. Daardoor worden sliderends niet gedempt op plekken waar je hitsounds hebt toegevoegd. Daarom is het dempen van sliderends onderdeel van Hitsound Copier en geen aparte tool.

## Mapping Tools vraagt bij het opstarten om .NET te installeren, maar dat heb ik al gedaan.

Huidige versies van Mapping Tools zijn gericht op .NET 10 en worden zelfstandig verpakt. Je zou dus geen aparte .NET-installatie nodig moeten hebben.

Als je toch een .NET-melding ziet, controleer dan of je een recente release van Mapping Tools start en installeer het programma opnieuw met een verse download van de website.

## Werkt Mapping Tools in lazer?

Ja, de meeste functies van Mapping Tools werken in lazer. Lees de [handleiding](/docs/guides/use-mt-in-lazer) voor meer informatie.

## Ik heb een vraag die hier niet bij staat of heb een bug gevonden.

Stel een vraag in het kanaal mt-techsupport op [Discord](https://discord.gg/YfjKN2yjQV), stuur me rechtstreeks een bericht op Discord (olibomby), of maak een issue aan op [GitHub](https://github.com/OliBomby/Mapping_Tools/issues).
