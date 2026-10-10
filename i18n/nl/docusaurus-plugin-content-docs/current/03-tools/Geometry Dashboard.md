---
title: "Geometry Dashboard"
author: "OliBomby"
id: geometry-dashboard
---

Geometry Dashboard toont virtuele objecten met relevante geometrie als overlay op de osu!-editor. Je kunt objecten op deze virtuele punten, lijnen en cirkels uitlijnen. Zo maak je geometrisch nauwkeurige patronen die anders veel moeilijker of zelfs onmogelijk zouden zijn.

:::note Platformondersteuning

Geometry Dashboard vereist momenteel Windows, omdat de live-editoroverlay afhankelijk is van Windows-specifieke integratie.

:::

:::tip
Je moet het configuratiebestand van je gebruiker instellen via de Mapping Tools-voorkeuren om deze tool te kunnen gebruiken.
:::

## Basisbegrippen

Geometry Dashboard werkt als volgt:

1.  **De huidige status van de osu!-editor uitlezen.** Dit omvat de zichtbare hitobjects, de editortijd en de positie van het editorvenster.
2.  **Virtuele objecten genereren op basis van deze hitobjects.** Dit gebeurt met configureerbare generatoren die virtuele punten, lijnen en cirkels maken op basis van de hitobjects.
3.  **Deze virtuele objecten als overlay boven op de osu!-editor weergeven.** Zo kun je de gegenereerde geometrie zien en je cursor erop uitlijnen.

## Gebruikersinterface

Het venster van Geometry Dashboard is opgedeeld in een aantal onderdelen:

*   **Zoeken:** een zoekbalk om de lijst met generatoren te filteren en makkelijker te navigeren.
*   **Schakelknoppen:** hiermee schakel je verschillende functies in of uit.
    *   Alles selecteren
    *   Alles vergrendelen
    *   Alles bruikbaar maken
*   **Knop Opgeslagen toestanden:** opent het venster [Opgeslagen toestanden](#savestates).
*   **Knop Voorkeuren:** opent het venster [Voorkeuren](#preferences).
*   **Lijst met generatoren:** toont de beschikbare generatoren, met opties om ze in of uit te schakelen en hun parameters in te stellen.

## Virtuele geometrie

Virtuele geometrie vormt de basis van deze tool. De objecten bestaan niet echt als hitobjects in de editor. Het zijn punten waar je cursor overheen kan bewegen om objecten tijdens het mappen nauwkeurig te plaatsen.

### Status van virtuele geometrie

Virtuele geometrie heeft een aantal bijzondere statussen die je aan of uit kunt zetten:

*   **Geselecteerd:** activeert het object zodat het nieuwe objecten kan vormen. Je kunt een virtueel object onder de cursor selecteren met de selectiesneltoets. Geselecteerde objecten krijgen een andere kleur als overlay en een gloeiende rand.
*   **Vergrendeld:** voorkomt dat het object verdwijnt als de generator of het oorspronkelijke object niet meer bestaat. Dit is handig om te voorkomen dat bepaalde geometrie per ongeluk wordt verwijderd. Vergrendelde virtuele geometrie wordt grijs weergegeven.
*   **Bruikbaar:** virtuele geometrie met deze status kan door generatoren worden gebruikt om extra geometrie te maken. Als deze status uitstaat, negeren generatoren het object en wordt er geen object gemaakt op basis van de bijbehorende geometrie. Onbruikbare virtuele objecten worden gedimd weergegeven.
*   **Relevantie:** een waarde van 0 tot en met 1 die aangeeft hoe relevant deze geometrie is. Een hogere relevantie maakt het object minder doorzichtig.

## Generatoren

Generatoren vormen de kern van Geometry Dashboard. Ze maken virtuele objecten op basis van hitobjects en andere virtuele objecten.

### Algemene werking van generatoren

Een generator werkt als volgt:

1.  **Invoer selecteren:** elke generator heeft een aantal *afhankelijkheden* (vereiste invoertypen) en *invoerfilters*. Het invoerfilter beschrijft aan welke extra regels virtuele objecten moeten voldoen om door deze generator te worden gebruikt. Geometry Dashboard doorzoekt de vorige lagen naar objecten die aan de afhankelijkheden en invoerfilters voldoen. Deze regels kunnen bijvoorbeeld bepalen of objecten geselecteerd moeten zijn of een bepaalde relevantiewaarde moeten hebben.

2.  **Geometrie genereren:** de generator gebruikt zijn methoden om voor elke mogelijke combinatie van geselecteerde invoerobjecten nieuwe virtuele objecten te maken. De methoden krijgen de geselecteerde invoerobjecten als parameters en geven een of meer nieuwe virtuele objecten terug.

3.  **Lagen maken:** elke nieuwe verzameling virtuele objecten komt in een nieuwe laag. Je stelt het aantal lagen in met **Inceptieniveau** bij de Voorkeuren. Virtuele objecten in lagere lagen kunnen bepalen welke virtuele objecten in de volgende, complexere lagen worden gemaakt.

4.  **Bijwerken:** telkens wanneer Geometry Dashboard opnieuw moet rekenen, worden de objecten in de eerste laag opnieuw gegenereerd op basis van de voorkeur **Bijwerkmodus**. Daarna wordt de tweede, complexere laag bijgewerkt, vervolgens de derde, enzovoort.

Om te voorkomen dat er te veel ongewenste objecten ontstaan, voegen generatoren objecten in dezelfde laag samen als ze dicht genoeg bij elkaar staan. De relevantie van de objecten wordt daarbij opgeteld. Je kunt bij de Voorkeuren instellen hoe dicht twee objecten bij elkaar moeten staan om te worden samengevoegd.

### Lijst met generatoren

Hier volgt een lijst met alle beschikbare generatoren in Geometry Dashboard:

*   **Basisgeneratoren:** maken rechtstreeks virtuele objecten van hitobjects. De tijdpositie van elk object wordt ingesteld op de gemiddelde tijd van het basisobject.

    *   **Punten op cirkels en sliderheads:** maakt een virtueel punt op de startpositie van cirkels en sliders.
    *   **Punten op sliderends:** maakt een virtueel punt helemaal aan het einde van sliders.
    *   **Punten op sliderankers:** maakt virtuele punten op de ankers (rood en wit) van sliders.
    *   **Punten op laatste ankers:** maakt virtuele punten op het laatste curvepunt van sliders.
    *   **Lijnen op lineaire sliders:** als het slidertype lineair is, maakt dit een virtuele lijn van de positie naar het curvepunt. De tijd en relevantie zijn gelijk aan die van de basisslider.
    *   **Punten op blanket-centra:** maakt een punt in het midden van sliders met een cirkelvorm. De tijd en relevantie zijn gelijk aan die van de basisslider.
    *   **Cirkels op sliders met 3 punten:** maakt een cirkel op basis van de ankers van sliders, voor blanket- en perfecte curves. De tijd en relevantie zijn gelijk aan die van de basisslider.
    *   **Punten op sliderpaden:** maakt veel virtuele punten op sliderpaden. Stel bij **Puntdichtheid** in hoeveel punten er worden gemaakt. Deze generator vereist extra berekeningen.
*   **Tussengeneratoren:** hebben basisgeneratoren nodig. Ze helpen vormen te maken of hulplijnen te tekenen.
    *   **Raakcirkels op cirkel:** maakt virtuele cirkels die de eerste invoercirkel precies op één punt raken.
    *   **Cirkels door twee punten:** neemt twee virtuele punten en maakt op elk punt een virtuele cirkel. De straal is gelijk aan de afstand tussen de punten.
    *   **Gelijkzijdige driehoeken uit twee punten:** neemt twee virtuele punten en maakt aan weerszijden een virtueel punt voor twee gelijkzijdige driehoeken.
    *   **Gelijkzijdige driehoek uit twee punten (type II):** werkt hetzelfde als de gewone driehoekgenerator, maar plaatst de driehoek anders.
    *   **Vierkant uit twee punten:** neemt twee virtuele punten en maakt aan weerszijden een virtueel punt voor één vierkant.
    *   **Vierkanten uit twee punten (type II):** neemt twee virtuele punten en maakt aan weerszijden een paar virtuele punten voor twee vierkanten.
    *   **Lijn door twee punten:** neemt twee virtuele punten en maakt een virtuele lijn die de punten verbindt.
    *   **Gemiddelde van twee punten:** neemt twee virtuele punten en berekent hun gemiddelde als nieuw virtueel punt.
    *   **Gemiddelde van drie punten:** neemt drie virtuele punten en berekent hun gemiddelde als nieuw virtueel punt.
    *   **Schalen en draaien om een vast punt:** draait en schaalt een willekeurig virtueel object om een vast virtueel punt. Je kunt de hoek, schaalfactor en extra regels voor het selecteren van het vaste punt instellen.
    *   **Evenwijdige lijnen:** neemt een lijn en een punt en maakt door het punt een virtuele lijn evenwijdig aan de eerste lijn.
    *   **Loodrechte lijnen:** neemt een lijn en een punt en maakt door het punt een virtuele lijn loodrecht op de eerste lijn.
    *   **Bissectrices van hoeken:** neemt twee virtuele lijnen en maakt door hun snijpunt de bissectrice van de hoek tussen de lijnen.
    *   **Middelloodlijn van twee punten:** neemt twee virtuele punten en maakt hun middelloodlijn.
    *   **Raaklijnen aan cirkel:** neemt een virtuele cirkel en een punt en maakt virtuele lijnen die vanaf het punt de cirkel aan beide kanten raken.
*   **Geavanceerde generatoren:** meer gespecialiseerde generatoren die extra instellingen vereisen en geschikt zijn voor geavanceerde, recursieve patronen.
    *   **Snijpunten:** neemt twee virtuele lijnen of cirkels en maakt op elk snijpunt een virtueel punt. Deze generator kan goed worden gecombineerd met andere methoden voor geometriegeneratie. *Let op:* het berekenen van snijpunten kost veel rekenkracht. De prestaties kunnen sterk afnemen als er meerdere complexe tekeningen actief zijn in de editor. Gebruik deze generator voorzichtig.
    *   **Volgend punt uit twee punten:** neemt twee virtuele punten en berekent het volgende punt met dezelfde snelheid. Je kunt dit combineren met **Punten op sliderpaden** om curves nauwkeuriger te voorspellen.
    *   **Volgend punt uit drie punten:** neemt drie virtuele punten en berekent het volgende punt met dezelfde hoek en snelheidsverandering.
    *   **Volgend punt uit drie punten (omgekeerd):** neemt drie virtuele punten en berekent het volgende punt met dezelfde snelheidsverandering en de tegenovergestelde hoek.
    *   **Volgend punt uit vier punten:** neemt vier virtuele punten en berekent het volgende punt met dezelfde hoek, hoekverandering, snelheidsverandering en verandering van de snelheidsverandering.
    *   **Schalen en draaien om een vast punt:** draait en schaalt een willekeurig virtueel object om een vast virtueel punt. Je kunt de hoek, schaalfactor en extra regels voor het selecteren van het vaste punt instellen.
    *   **Spiegelen over een lijn:** spiegelt een willekeurig virtueel object over een virtuele lijn die als symmetrieas dient.

## Generatoropties

Elke generator heeft opties waarmee je het gedrag kunt instellen:

*   **Actief:** bepaalt of de generator is ingeschakeld. Een uitgeschakelde generator maakt geen virtuele objecten.
*   **Sequentieel:** laat de generator alleen opeenvolgende objecten als invoer gebruiken. Als deze optie actief is, worden alleen paren virtuele objecten gegenereerd die elkaar in de tijd opvolgen. Dit vermindert het aantal gegenereerde geometrische objecten sterk en kan rommel voorkomen.
*   **Diep:** laat de generator niet alleen de laag erboven doorzoeken, maar ook alle eerdere lagen die van toepassing zijn.
*   **Relevantieverhouding:** de basisrelevantie van de virtuele objecten die deze generator maakt, van 0 tot en met 1. De werkelijke relevantie kan afhangen van de relevantieverhoudingen van andere invoerobjecten.
*   **Overdraagbaar genereren:** als dit is ingeschakeld, kunnen de gemaakte objecten door andere generatoren worden gebruikt. Anders zijn ze niet bruikbaar voor verdere generatoren.
*   **Verzameling invoerselecties:** een verzameling regels voor de virtuele objecten die de generator als invoer gebruikt. Zie [Invoerselectie in detail](#input-selection-in-detail) voor meer informatie.

### Gespecialiseerde generatorinstellingen

Sommige geavanceerde generatoren hebben extra opties.

*   **Cirkel uit één punt:**
    *   *Straal:* de schaal van de cirkel.
*   **Punten op sliderpaden:**
    *   *Puntdichtheid:* bepaalt hoeveel punten per osu!-pixel van het sliderpad worden gemaakt.
*   **Schalen en draaien om een vast punt:**
    *   *Hoek:* de draaihoek in graden.
    *   *Schaalfactor:* de uniforme schaalfactor.
    *   *Invoerselectie van oorsprong:* extra regels waaraan virtuele objecten moeten voldoen om als draaipunt te worden gebruikt.
    *   *Andere invoerselectie:* extra regels voor objecten die om het draaipunt worden gespiegeld.
*   **Spiegelen over een lijn:**
    *   *Invoerselectie van as:* extra regels waaraan virtuele objecten moeten voldoen om als as voor deze generator te worden gebruikt.
    *   *Andere invoerselectie:* extra regels voor objecten die om de as worden gespiegeld.

### Invoerselectie in detail {#input-selection-in-detail}

Invoerselectie bepaalt welke virtuele objecten een generator voor zijn berekeningen gebruikt. Elke generator geeft de vereiste invoertypen op (bijvoorbeeld punten of lijnen). Met invoerfilters kun je de selectie verfijnen op basis van eigenschappen van objecten. Zonder goed ingestelde invoerselecties maken generatoren te veel irrelevante virtuele objecten of kunnen ze juist niet de objecten maken die je nodig hebt.

Een verzameling selectievoorwaarden bestaat uit meerdere selectievoorwaarden. Een virtueel object komt als invoer in aanmerking zodra het aan één van deze voorwaarden voldoet.

Klik op de plusknop wanneer je de invoerselectie aanwijst om een nieuwe selectievoorwaarde toe te voegen. Daarna verschijnen instellingen waarmee je de gegenereerde virtuele geometrie verder kunt beperken:

*   **Moet geselecteerd zijn:** laat de generator alleen geselecteerde virtuele objecten als invoer gebruiken. Geselecteerde objecten krijgen ook voorrang wanneer je er met de cursor overheen beweegt. Zo kun je heel gericht objecten maken.

*   **Moet vergrendeld zijn:** laat de generator alleen vergrendelde objecten gebruiken om geometrie te maken. Als een object niet vergrendeld is, wordt het volledig genegeerd. Dit kan handig zijn wanneer je bepaalde generatoren wilt gebruiken en andere wilt vergrendelen.

*   **Moet door deze generator zijn gemaakt:** controleert of alle virtuele objecten door deze generator zelf zijn gemaakt. Met de juiste instelling kun je zo alleen de gewenste geometrie gebruiken.

*   **Mag niet door deze generator zijn gemaakt:** het tegenovergestelde filter. Alleen virtuele objecten die niet door deze generator zijn gemaakt, worden gebruikt.

*   **Minimale relevantie:** vereist dat invoerobjecten minimaal de opgegeven relevantie hebben. Relevantie loopt van 0 tot en met 1. Met 0 schakel je dit filter uit.

## Voorkeuren {#preferences}

In het venster met voorkeuren voor Geometry Dashboard kun je verschillende onderdelen van het gedrag en uiterlijk aanpassen:

*   **Sneltoetsen:**
    *   **Uitlijnsleutel:** houd deze toets ingedrukt om de cursor op virtuele objecten uit te lijnen.
    *   **Selectiesleutel:** houd deze toets ingedrukt om virtuele objecten te selecteren.
    *   **Vergrendelsleutel:** houd deze toets ingedrukt om virtuele objecten te vergrendelen.
    *   **Bruikbaarheidssleutel:** houd deze toets ingedrukt om de bruikbaarheid van virtuele objecten te wisselen.
    *   **Ververssleutel:** gebruik deze toets om de lijst met hitobjects in de basislaag meteen te vernieuwen.
*   **Offset:** verschuift alle virtuele objecten ten opzichte van het editorscherm. Je kunt dit gebruiken om problemen met de schaal of positie te verhelpen.
    *   **Links:** offset voor de linkerrand van de editor.
    *   **Boven:** offset voor de bovenrand van de editor.
    *   **Rechts:** offset voor de rechterrand van de editor.
    *   **Onder:** offset voor de onderrand van de editor.
*   **Complexiteit:** het aantal recursieve lagen dat wordt gegenereerd. Je kunt dit gebruiken om prestatieproblemen te beperken.
    *   **Inceptieniveau:** het aantal lagen dat op basis van de hitobjects wordt gegenereerd.
*   **Toets omlaag:** bepaalt welke virtuele objecten worden weergegeven.
    *   **Alles:** toont alle virtuele objecten, waaronder die van hitobjects, kinderen en ouders.
    *   **Ouders en voorouders:** toont de voorouders van de objecten waarop de cursor wordt uitgelijnd.
    *   **Directe ouders:** toont alleen de directe ouders van de objecten waarop de cursor wordt uitgelijnd.
    *   **Kinderen en nakomelingen:** toont alle nakomelingen van de objecten waarop de cursor wordt uitgelijnd.
    *   **Directe kinderen:** toont alleen de directe kinderen van de objecten waarop de cursor wordt uitgelijnd.
*   **Toets omhoog:** bepaalt welke virtuele objecten worden weergegeven als de uitlijnsleutel niet is ingedrukt.
    *   **Alles zichtbaar:** toont alle hitobjects die aan de instellingen bij **Selectie** voldoen.
    *   **Niets:** verbergt alle objecten wanneer de uitlijnsleutel niet is ingedrukt.
*   **Selectie:** bepaalt welke hitobjects worden gebruikt om virtuele objecten te genereren.
    *   **Alles zichtbaar:** gebruikt alle beschikbare hitobjects.
    *   **Zichtbaar of geselecteerd:** gebruikt zichtbare hitobjects, tenzij er hitobjects geselecteerd zijn; in dat geval worden alle geselecteerde hitobjects gebruikt.
    *   **Alleen geselecteerd:** gebruikt de hitobjects die in de editor geselecteerd zijn.
*   **Bijwerken:** bepaalt wanneer de virtuele objecten worden bijgewerkt.
    *   **Elke wijziging:** werkt de objecten bij zodra er iets verandert.
    *   **Tijdwijziging:** werkt de objecten bij wanneer de editortimer verandert. Dit is beter voor de prestaties, maar de tool reageert minder snel.
    *   **osu! actief:** werkt de objecten bij wanneer het osu!-venster actief wordt.
    *   **Sneltoets ingedrukt:** werkt de objecten bij wanneer de sneltoets voor vernieuwen wordt ingedrukt.
*   **Gedrag:** aanvullende instellingen voor Geometry Dashboard.
    *   **Minimaal verschil:** bepaalt hoe dicht virtuele objecten bij elkaar moeten staan voordat ze worden samengevoegd.
    *   **Actief blijven:** laat Geometry Dashboard actief blijven wanneer andere tools geopend zijn.
    *   **Speelveld tonen:** toont de grenzen van het speelveld als overlay in de editor.
    *   **Foutopsporing:** toont de grenzen van de editor als overlay. Als de editor zelfs met deze instelling niet zichtbaar is, valt hij buiten het bereik van de editor.

### Opties voor virtuele geometrie

Je kunt voor elk type virtueel object dat in de editor wordt weergegeven de kleur, dekking, dikte en streepstijl instellen. Zo blijft de geometrie beter leesbaar.

*   **Kleur:** de kleur van de rand. Je kunt ook een kleur uit de kleurkiezer kopiëren door op de HEX-waarde te klikken.
*   **Dekking:** bepaalt hoe doorzichtig het object is.
*   **Dikte:** bepaalt hoe dik de lijnen van de omtrek zijn.
*   **Streepstijl:** bepaalt of de omtrek uit streepjes bestaat of doorgetrokken is.

## Opgeslagen toestanden {#savestates}

Opgeslagen toestanden werken als sneltoetsprofielen. Je kunt er snel tussen wisselen, zodat je niet telkens de instellingen van alle generatoren en voorkeuren handmatig hoeft te veranderen. Je kunt ook een sneltoets aan een opgeslagen toestand koppelen om nog sneller te wisselen.

Klik op het pluspictogram om een nieuwe opgeslagen toestand te maken. Geef deze daarna een naam en sneltoets. Met de knoppen voor opslaan en laden sla je de huidige instellingen op of laad je opgeslagen instellingen.
