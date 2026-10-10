---
title: "Pattern Gallery"
author: "OliBomby"
id: pattern-gallery
description: Importeer en exporteer patronen uit osu!-beatmaps en maak verzamelingen patronen die je met vrienden kunt delen.
keywords:
  - docs
  - mapping tools
  - pattern gallery
---

Met Pattern Gallery kun je patronen uit osu!-beatmaps importeren en exporteren en verzamelingen maken om te delen. Zo verplaats je eenvoudig een combinatie van hitobjects of een heel gedeelte van een beatmap naar een andere beatmap.

## Beschrijving van de tool

Met Pattern Gallery kun je:

*   Patronen uit osu!-beatmaps importeren en exporteren, zodat je groepen hitobjects tussen beatmaps kunt verplaatsen.
*   Verzamelingen patronen maken en met vrienden delen.
*   Met de knoppen onderaan patronen toevoegen of verwijderen.
*   Een patroon naar de geselecteerde beatmap exporteren door een of meer patronen te selecteren en op de startknop te klikken, of door op een patroon te dubbelklikken.
*   Tijdens het exporteren extra bewerkingen toepassen met de exportopties.
*   Je verzamelingen patronen opslaan, laden, hernoemen, importeren en exporteren via het menu **Project**.

## Gebruik

1.  Open Pattern Gallery in Mapping Tools.
2.  Voeg patronen aan je verzameling toe met de importopties.
3.  Selecteer een patroon in de galerij.
4.  Klik op de startknop om het patroon naar de geselecteerde beatmap te exporteren.

## Functies en instellingen

De tool biedt de volgende functies:

*   **Patroonbeheer**: voeg patronen toe, verwijder ze, hernoem ze en orden ze in verzamelingen.
*   **Importopties**: importeer patronen uit verschillende bronnen, zoals geselecteerde objecten, beatmapbestanden of patrooncodes.
*   **Exportopties**: pas de export aan met opties voor schalen, draaien en filteren.

## Exportopties

Bij het exporteren van een patroon kun je de volgende opties instellen:

*   **Exportoffset**: bepaalt op welk tijdstip het patroon wordt geplaatst. Kies de oorspronkelijke tijd van het patroon, een aangepaste tijd of de huidige tijd in de editor.
    *   **Aangepaste exportoffset**: bepaalt het tijdstip waarop het patroon wordt geplaatst als je de modus voor een aangepaste offset gebruikt.
*   **Verwijdermarge**: extra tijd in milliseconden rond de patronen voor het verwijderen van delen uit de oorspronkelijke map.
*   **Afstand tussen delen**: het minimale aantal beats dat een tussenruimte moet bevatten om een patroon in kleinere delen op te splitsen.
*   **Beatdivisors**: voer hier door komma's gescheiden beatdivisors in. Bijvoorbeeld: 1/4, 1/12, 1/7, 4/5, 0.13435622499.
*   **Aangepaste schaal**: wijzig de grootte van het patroon met een schaalwaarde.
*   **Aangepaste draaiing**: draai het patroon met het opgegeven aantal graden met de klok mee.
*   **Patroonoverschrijfmodus**: bepaalt hoe overlappende objecten in het patroon en de doelbeatmap worden verwerkt. De beschikbare modi zijn:
    *   **NoOverwrite**: behoudt alle bestaande objecten in de beatmap. Het patroon wordt toegevoegd zonder iets te verwijderen.
    *   **PartitionedOverwrite**: verwijdert objecten uit de oorspronkelijke beatmap alleen op drukke delen van het patroon.
    *   **CompleteOverwrite**: verwijdert alle objecten uit de oorspronkelijke beatmap tussen het begin en het einde van het patroon.
*   **Timingoverschrijfmodus**: bepaalt hoe de timing van de oorspronkelijke beatmap en die van het patroon worden gecombineerd.
*   **Hitsounds opnemen**: exporteer het patroon met de hitsound-effecten van de timingpunten in het patroon.
*   **Kiai opnemen**: exporteer het patroon met de kiai uit het patroon.
*   **Schalen naar nieuwe cirkelgrootte**: schaal het patroon zodat de onderlinge afstanden ten opzichte van de cirkelgrootte gelijk blijven.
*   **Schalen naar nieuwe timing**: schaal het patroon in de tijd zodat het aantal beats tussen objecten bij de nieuwe timing gelijk blijft. Bij niet-uitgelijnde redlines kunnen verkeerde snaps ontstaan. Gebruik deze optie niet als je redlines met 0 of oneindige BPM hebt.
*   **Uitlijnen op nieuwe timing**: lijn de objecten van het patroon met de opgegeven beatdivisors uit op de nieuwe timing.
*   **Stacks handmatig maken**: stapel de objecten van het patroon handmatig.
*   **Globale SV corrigeren**: pas de SV van greenlines in het patroon aan naar de nieuwe globale SV, zodat sliders in de nieuwe beatmap dezelfde SV hebben.
*   **BPM-SV corrigeren**: pas de SV van greenlines in het patroon aan naar de nieuwe BPM, zodat sliders in de nieuwe beatmap dezelfde SV hebben. Het is aanbevolen deze functie uit te schakelen als je **Schalen naar nieuwe timing** gebruikt.
*   **Colourhax corrigeren**: pas de color skip aan, zodat de kleurindexen van de objecten gelijk blijven in het patroon en de oorspronkelijke beatmap.
*   **Slider-tickrate corrigeren**: vermenigvuldig de BPM in het patroon zodat de slider-tickrate in het patroon gelijk blijft.

## Contextmenu voor patronen

Het contextmenu voor patronen in de galerij (klik met de rechtermuisknop op een patroon) biedt de volgende opties:

*   **Eigenschappen**: bekijk extra informatie over het patroon, zoals de naam, aanmaaktijd, laatste gebruik, en het aantal keer dat het is gebruikt.
*   **Verwijderen**: verwijder de geselecteerde patronen. Houd Shift ingedrukt om de bevestigingsdialoog over te slaan.
*   **Openen in Verkenner**: open de bronbestanden van de geselecteerde patronen in de bestandsverkenner.
*   **Groep**: opties om patronen te groeperen.

## Importopties

Met de importknop kun je patronen uit verschillende bronnen importeren.

*   **Selectie importeren**: maak een patroon van de hitobjects die momenteel in de editor geselecteerd zijn.
    *   **Naam**: de naam van het patroon.
*   **Uit .osu-bestand importeren**: importeer patronen uit een .osu-bestand op je computer.
    *   **Naam**: de naam van het patroon.
    *   **Pad naar patroonbestand**: het pad naar het patroonbestand dat je wilt importeren.
    *   **Filter**: filter het .osu-bestand.
    *   **Begintijd**: het tijdstip waarop het patroon in het .osu-bestand begint.
    *   **Eindtijd**: het tijdstip waarop het patroon in het .osu-bestand eindigt.
*   **Uit code importeren**: importeer een patroon uit code. Dit is handig als je patronen online deelt.
    *   **Naam**: de naam van het patroon.
    *   **Hitobjects**: de code voor de hitobjects.
    *   **Timingpunten**: de code voor de timingpunten.
    *   **Globale SV**: stel de globale slider velocity voor de hitobjects in het patroon in.
    *   **Spelmodus**: stel de spelmodus voor het patroon in.

## Projectmenu

In het **Project**-menu van Pattern Gallery kun je:

*   Verzamelingen patronen opslaan.
*   Verzamelingen patronen laden.
*   Verzamelingen patronen hernoemen.
*   Verzamelingen patronen importeren.
*   Verzamelingen patronen exporteren.
