---
title: "Sliderator"
author: "OliBomby"
id: sliderator
---

Sliderator is een tool waarmee je sliders of streams maakt die halverwege van snelheid veranderen.

Om te beginnen importeer je linksboven met de bedieningselementen een slider. Daarna kun je de grafiek bewerken met de rechtermuisknop.

:::caution Niet rankbaar

Sliders die met Sliderator zijn gemaakt, worden als niet-rankbaar beschouwd. Meer informatie staat in [dit Reddit-bericht](https://www.reddit.com/r/osugame/comments/xnmcuq/acceldecel_sliders_made_with_mapping_tool_is_now/?utm_source=share&utm_medium=web2x&context=3).

:::

## Sliders importeren {#importing}

Voordat je Sliderator gebruikt, moet je met de knop **Sliders importeren** linksboven een of meer sliders importeren.
Je kunt sliders op drie manieren importeren:

- **Geselecteerd** importeert de sliders die je momenteel in de osu!-editor hebt geselecteerd.
- **Met bladwijzer** importeert alle sliders in de geselecteerde beatmap met een bladwijzer.
- **Tijd** importeert sliders uit de geselecteerde beatmap die worden aangeduid met een tijdcode die je in het vak ernaast invoert. Deze tijdcode heeft dezelfde notatie als wanneer je objecten in de editor kopieert en in een tekstveld plakt. Bijvoorbeeld: `00:56:823 (1,2,1,2) -`

Als je meerdere sliders hebt geïmporteerd, kun je ertussen navigeren met de linker- en rechterknop. Als je Shift ingedrukt houdt terwijl je op een van deze knoppen klikt, wordt de huidige slider snel bewerkt voordat je naar de volgende gaat.

Wanneer je een slider selecteert, worden **Beatlengte**, **BPM** en **Globale SV** automatisch ingesteld.

## Grafiek {#graph}

De grafiek is het belangrijkste onderdeel van Sliderator. Hier bepaal je hoe de sliderbal zich door de tijd verplaatst.

De X-as geeft de **tijd** weer over de volledige duur van de slider. De duur stel je in met het veld **Beatlengte**.
Met de schuifregelaar onder de grafiek wijzig je de beat-snapdivisor voor de lijnen op de X-as.

Voor de Y-as zijn er twee modi. Je wisselt ertussen met de groene knop onder de grafiek:

- **X** is de positiemodus. De Y-as geeft hier de positie op de slider weer. Zo bepaal je precies waar de sliderbal zich op elk tijdstip bevindt.
- **V** is de snelheidsmodus. De Y-as geeft hier de slider-velocity-multiplier weer, tussen de positieve en negatieve **SV-limiet**.

![Sliderator-grafiek](./assets/sliderator_graph.png)

### De grafiek bewerken {#editing-graph}

Je bewerkt de grafiek met controlepunten en interpolaties.

Klik met de **rechtermuisknop** ergens in de grafiek om een controlepunt toe te voegen. Klik met de rechtermuisknop op een controlepunt om een contextmenu te openen. Daar kun je het punt verwijderen of de interpolatiemethode wijzigen. Gebruik **Shift+rechtermuisknop** op een controlepunt om het meteen te verwijderen. Klik met de **linkermuisknop** op controlepunten om ze te verslepen. Je kunt de weergave verschuiven en zoomen door met de linkermuisknop de achtergrond te slepen of met het scrollwiel te scrollen.

In het midden van elk geïnterpoleerd gedeelte staat een kleiner controlepunt. Sleep dit punt omhoog of omlaag om de vorm van de interpolatie te wijzigen. Klik er met de **rechtermuisknop** op om het controlepunt te resetten.

Er zijn ook sneltoetsen waarmee je controlepunten kunt verslepen:

- **Shift** beperkt de beweging tot een horizontaal vlak.
- **Ctrl** beperkt de beweging tot een verticaal vlak.
- **Alt** schakelt het uitlijnen uit.

### Andere bedieningselementen van de grafiek {#graph-controls}

Hieronder staan de overige bedieningselementen van de grafiek.

- **Beatlengte** is de duur van de slider in beats. Dit bepaalt ook de breedte van de grafiek.
- **BPM** is het aantal beats per minuut van de slider. Deze waarde moet gelijk zijn aan de BPM op de plek waar de slider wordt geëxporteerd.
- **Globale SV** is de slider-multiplier van de beatmap. Deze waarde moet gelijk zijn aan de slider-multiplier van de geselecteerde beatmap.
- **SV-limiet** is de maximale SV in de grafiek. Dit bepaalt ook de hoogte van de grafiek in snelheidsmodus. Standaard is dit 10, omdat dit de maximale SV is die in overgeërfde timingpunten is toegestaan.
- **Schalen naar voltooiing** schaalt alle controlepunten verticaal, zodat de sliderbal maximaal de gewenste afstand over de slider aflegt.
- **Grafiek resetten** herstelt de standaardgrafiek.
- **Rode ankerpunten tonen** toont in de positiemodus de posities van rode ankerpunten in de slider als rode horizontale lijnen in de grafiek.
- **Grafiekankers tonen** toont de posities van de controlepunten van de grafiek in het slider-voorbeeld.
- **Verwacht aantal segmenten** geeft voor je huidige instellingen een schatting van het aantal sliderankers dat nodig is. Tot 10.000 veroorzaakt dit normaal gesproken geen merkbare vertraging in het spel.

## Exportopties {#export-options}

Wanneer je Sliderator uitvoert, wordt de bewerkte slider naar de geselecteerde beatmap geëxporteerd op de ingestelde exporttijd. Met **Overschrijven** kun je ervoor kiezen de slider toe te voegen aan de beatmap of bestaande inhoud te vervangen.

Als je **In plaats daarvan als stream exporteren** aanvinkt, exporteert Sliderator geen slider maar een stream van cirkels die de snelheid en duur van de slider volgt. Met de beat-snapdivisor van de grafiek bepaalt deze optie hoeveel cirkels er per beat worden geplaatst.

Je kunt de **Nieuwe SV** voor de bewerkte slider handmatig instellen. Deze SV hoort in de buurt te komen van de maximale snelheid in de grafiek. Meestal is de automatische waarde goed genoeg. Soms kun je deze iets verlagen om minder ankerpunten te gebruiken zonder dat de kwaliteit van de slider merkbaar afneemt.

Met **Minimale tumour-lengte** kun je het aantal ankerpunten in de slider flink verlagen. Sliderator gebruikt onzichtbare tumours om de sliderbal af te remmen. Als je de minimale tumour-lengte vergroot, maakt Sliderator grotere tumours en zijn er dus minder nodig. Het nadeel is dat de beweging van de sliderbal door de grotere tumours minder vloeiend wordt.

Met **SV aan BPM toewijzen** gebruikt Sliderator BPM om de nieuwe SV van de slider te bepalen. Daardoor geldt de SV-limiet van 10 voor overgeërfde timingpunten niet meer. Je kunt hiermee ook de optie **Sliderticks verwijderen** inschakelen. Die verwijdert sliderticks met een overgeërfd timingpunt met `NaN`-SV.
