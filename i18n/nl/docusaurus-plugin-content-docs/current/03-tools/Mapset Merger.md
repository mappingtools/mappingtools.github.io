---
title: "Mapset Merger"
author: "OliBomby"
id: mapset-merger
---

Met Mapset Merger kun je meerdere mapsets samenvoegen tot één grote mapset.

De tool lost bestandsconflicten automatisch op door zoveel mogelijk bestanden naar aparte submappen te verplaatsen en sample-sets voor aangepaste hitsounds opnieuw samen te stellen. Beatmap-skins en aangepaste spinner-hitsounds kunnen helaas niet worden samengevoegd. Deze bestanden worden namelijk niet expliciet in de beatmap vermeld, waardoor ze altijd invloed hebben op de hele mapset.

## Mapsets toevoegen {#adding-mapsets}

Klik rechtsonder op de plusknop om een mapset toe te voegen. Er wordt een mapset aan de lijst toegevoegd met vooraf ingevulde informatie van de geselecteerde beatmap. Als je met Shift op de plusknop klikt, gebruikt de tool de mapset die momenteel in de osu!-client geopend is.

Alle mapsets die worden samengevoegd, verschijnen in de lijst. Elke mapset heeft een naam en een pad naar de hoofdmap. De namen worden gebruikt om bestanden in de samengevoegde mapset te categoriseren, dus kies unieke en beknopte namen. Je kunt het pad in de lijst aanpassen door erop te dubbelklikken. Daarna verschijnt er ook een bladerknop waarmee je het pad in de bestandsverkenner kunt selecteren.

## Exporteren {#exporting}

Klik op de startknop om de mapsets samen te voegen en de bestanden te exporteren naar de map bij **Exportpad**. Zorg dat deze map bestaat, anders krijg je een foutmelding.

Als je **Storyboard naar .osu verplaatsen** aanvinkt, verplaatst Mapset Merger de inhoud van elk .osb-bestand in een mapset naar de .osu-bestanden. Storyboards worden dan specifiek voor elke beatmap en lekken niet door naar andere mapsets in de samengevoegde mapset. Dit is handig als je mapsets met verschillende storyboards samenvoegt. Let wel op: bij een grote storyboardfile en meerdere moeilijkheidsgraden wordt de data vermenigvuldigd en ontstaan grote .osu-bestanden.
