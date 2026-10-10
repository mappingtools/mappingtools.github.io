---
title: "Map Cleaner"
author: "OliBomby"
id: map-cleaner
---

Map Cleaner ruimt de geselecteerde beatmap op door overbodige greenlines te verwijderen en biedt ook andere handige bewerkingen voor de hele beatmap.

Map Cleaner bouwt alle timingpunten opnieuw op. Eerst worden de invloeden van de timingpunten opgeslagen, daarna worden ze op een gestructureerde manier opnieuw opgebouwd. Daardoor worden greenlines automatisch opnieuw uitgelijnd met de objecten die ze gebruiken en verdwijnen onnodige wijzigingen. Tijdens dit proces blijven de map en hitsounds in wezen hetzelfde, tenzij je extra functies inschakelt. De wijzigingen zijn vooral zichtbaar in de editor.

## Instellingen voor mapinformatie {#map-info-settings}

Deze instellingen bepalen welke onderdelen Map Cleaner wel of niet uit de timingpunten verwijdert.
Als je het zekere voor het onzekere wilt nemen, laat je alle opties aangevinkt. Dan wordt er zo weinig mogelijk verwijderd.

- **Map gebruikt volumeverschillen in sliders**: hiermee geef je aan dat alle volumeverschillen tijdens het middenstuk van een slider *opzettelijk* zijn en dus niet verwijderd mogen worden.

- **Map gebruikt sample-setwijzigingen in sliders**: hiermee geef je aan dat alle wijzigingen van de sample-set of sample-index tijdens het middenstuk van een slider *opzettelijk* zijn en dus niet verwijderd mogen worden.

- **Map gebruikt volumeverschillen in spinners**: hiermee geef je aan dat alle volumeverschillen tijdens een spinner *opzettelijk* zijn en dus niet verwijderd mogen worden.

## Extra functies {#additional-features}

Deze bewerkingen kan Map Cleaner naast de standaardbewerking uitvoeren.

- **Objecten opnieuw uitlijnen**: lijnt alle hitobjects en sliderends tijdens het opschonen van de map opnieuw uit. De uitlijning gebruikt de ingestelde beatdivisor.

- **Bladwijzers opnieuw uitlijnen**: lijnt alle bladwijzers opnieuw uit met de standaardmethode. Schakel dit eventueel uit als je bladwijzers op ongebruikelijke beatdivisors zijn uitgelijnd.

- **Ongebruikte samples verwijderen**: verwijdert alle audiosamples uit de mapset die niet door een beatmap of storyboard in de mapset worden gebruikt. Samples die aan een beatmap-skin zijn gekoppeld, worden genegeerd.

- **Demping verwijderen**: verwijdert alle volumeverschillen en aangepaste indexwijzigingen op hitsounds met 5% volume. Als een timingpunt 5% volume heeft, worden de volume- en aangepaste indexwijzigingen daarop verwijderd.

- **Niet-aanklikbare hitsounds dempen**: zet het volume op 5% voor alle hitsound-events die afkomstig zijn van hitobjects waarvoor de speler niets hoeft te doen. Alleen cirkels, sliderheads en hold-notekoppen blijven hoorbaar. Zo kun je het ritme van je map of de gameplay beter beoordelen.

## Opnieuw uitlijnen

Bij het opnieuw uitlijnen wordt naar de dichtstbijzijnde tick op de tijdlijn gesprongen en wordt de tijd naar beneden afgerond op een geheel getal. Staat er binnen 10 ms na het tijdstip van het hitobject een redline, dan wordt het object naar die redline verplaatst. Zo wordt voorkomen dat objecten naar een tick 3 ms vóór de redline worden verplaatst.

Sliderends worden op twee manieren opnieuw uitgelijnd. Bij de eerste manier wordt de duur van de slider aangepast naar het dichtstbijzijnde veelvoud van een beatdivisor. Dit is vergelijkbaar met `Ctrl+Shift+S` gebruiken op een slider in de standaard osu!-editor.

De tweede manier wordt alleen gebruikt als er een redline in de slider staat of tot 20 ms na de slider valt. De eindtijd van de slider wordt dan naar de dichtstbijzijnde tick op de nieuwe timing verplaatst. De duur van de slider wordt hierbij een geheel getal; de exacte lengte kan door afronding ten opzichte van de tijdlijnticks afwijken.

Ook de eindes van spinners en hold-notes worden met de tweede methode opnieuw uitgelijnd.

Als de geselecteerde beatmap de osu!mania-spelmodus gebruikt, worden de X-posities van de notes ook opnieuw uitgelijnd naar het midden van de kolommen en naar Y = 192.

## Tijdlijn

Wanneer je Map Cleaner uitvoert, verschijnt er een kleine tijdlijn met alle wijzigingen aan de timingpunten.

- Een rode lijn betekent dat een timingpunt is verwijderd.
- Een oranje lijn betekent dat een timingpunt is gewijzigd.
- Een groene lijn betekent dat een timingpunt is toegevoegd.

Als een timingpunt alleen is verplaatst, staat er een rode lijn bij de oude offset en een groene lijn bij de nieuwe offset.

Je kunt op een lijn dubbelklikken om naar dat tijdstip in de editor te gaan.
