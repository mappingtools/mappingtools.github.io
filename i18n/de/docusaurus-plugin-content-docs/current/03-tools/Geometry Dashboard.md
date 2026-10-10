---
title: "Geometry Dashboard"
author: "OliBomby"
id: geometry-dashboard
---

Geometry Dashboard blendet geometrisch relevante virtuelle Objekte über dem osu!-Editor ein. Du kannst Objekte an diesen virtuellen Punkten, Linien und Kreisen ausrichten und so geometrisch präzise Patterns erstellen, die sonst viel schwieriger oder gar nicht möglich wären.

:::note Plattformunterstützung

Geometry Dashboard benötigt derzeit Windows, da die Live-Editor-Überlagerung auf Windows-spezifischer Anbindung basiert.

:::

:::tip
Damit dieses Tool funktioniert, musst du in den Mapping Tools **Preferences** deine Benutzerkonfigurationsdatei angeben.
:::

## Grundlegende Konzepte {#core-concepts}

Geometry Dashboard arbeitet in folgenden Schritten:

1. **Aktuellen Zustand des osu!-Editors auslesen.** Dazu gehören die aktuell sichtbaren Hitobjects, die Editorzeit und die Position des Editorfensters.
2. **Virtuelle Objekte anhand dieser Hitobjects erzeugen.** Konfigurierbare Generatoren erstellen aus den Hitobjects virtuelle Punkte, Linien und Kreise.
3. **Diese virtuellen Objekte in einer Überlagerung über dem osu!-Editor anzeigen.** Dort siehst du die erzeugte Geometrie und kannst den Cursor daran ausrichten.

## Benutzeroberfläche {#user-interface}

Das Fenster von Geometry Dashboard ist in mehrere Bereiche aufgeteilt:

* **Search:** Suchfeld zum Filtern der Generatorliste und für eine einfachere Navigation.
* **Toggle Buttons:** Schaltflächen zum Aktivieren und Deaktivieren verschiedener Funktionen.
  * Select All
  * Lock All
  * Usability All
* **Savestates Button:** Öffnet das Fenster [Savestates](#savestates).
* **Preferences Button:** Öffnet das Fenster [Preferences](#preferences).
* **Generators List:** Zeigt die verfügbaren Generatoren an. Hier kannst du sie aktivieren oder deaktivieren und ihre Parameter einstellen.

## Virtuelle Geometrie {#virtual-geometry}

Virtuelle Geometrie bildet die Grundlage dieses Tools. Die Objekte sind keine echten Hitobjects im Editor, sondern Punkte, über die du den Cursor beim Mappen bewegen kannst, um Objekte präzise zu platzieren.

### Zustände virtueller Geometrie {#virtual-geometry-states}

Für virtuelle Geometrie gibt es mehrere besondere Zustände, die du ein- und ausschalten kannst:

* **Selected:** Aktiviert das Objekt, damit es neue Objekte erzeugen kann. Mit dem Auswahl-Tastenkürzel kannst du virtuelle Objekte auswählen, auf denen sich der Mauszeiger befindet. Ausgewählte Objekte werden farblich hervorgehoben und leuchten an den Rändern.
* **Locked:** Verhindert, dass ein Objekt verschwindet, wenn sein Generator oder sein Quellobjekt nicht mehr vorhanden ist. So lässt sich Geometrie vor versehentlichem Löschen schützen. Gesperrte virtuelle Geometrie wird ausgegraut angezeigt.
* **Usable:** Virtuelle Geometrie mit diesem Zustand kann von Generatoren verwendet werden, um weitere Geometrie zu erzeugen. Ist der Zustand deaktiviert, ignorieren Generatoren das Objekt und erzeugen keine Geometrie daraus. Nicht verwendbare virtuelle Objekte werden abgedunkelt dargestellt.
* **Relevancy:** Ein Wert zwischen 0 und 1, der angibt, wie relevant diese Geometrie ist. Je höher die Relevanz, desto deckender wird sie dargestellt.

## Generatoren {#generators}

Generatoren sind das Herzstück von Geometry Dashboard. Sie erzeugen virtuelle Objekte aus Hitobjects und anderen virtuellen Objekten.

### Allgemeiner Ablauf eines Generators {#generic-generator-workflow}

Ein Generator arbeitet in folgenden Schritten:

1. **Eingabeauswahl:** Jeder Generator hat eine Reihe von *Abhängigkeiten* (erforderliche Eingabetypen) und *Eingabebedingungen*. Eine Eingabebedingung enthält zusätzliche Regeln, die virtuelle Objekte erfüllen müssen, um von diesem Generator verwendet zu werden. Geometry Dashboard durchsucht vorherige Ebenen nach Objekten, die den Abhängigkeiten und Eingabebedingungen entsprechen. Zu diesen Regeln gehört etwa, ob ein Objekt ausgewählt sein oder einen bestimmten Relevanzwert haben muss.
2. **Geometrie erzeugen:** Für jede mögliche Kombination ausgewählter Eingabeobjekte erzeugt der Generator neue virtuelle Objekte. Seine Methoden nehmen die Eingabeobjekte entgegen und geben ein oder mehrere neue virtuelle Objekte zurück.
3. **Ebenen:** Jedes neu erzeugte Objektset kommt in eine neue Ebene. Die Anzahl der Ebenen legst du über **Inception Level** in den **Preferences** fest. Virtuelle Objekte in niedrigeren Ebenen können beeinflussen, welche Objekte in den nächsten, komplexeren Ebenen entstehen.
4. **Aktualisieren:** Wenn eine Änderung eine Neuberechnung erfordert, werden die Objekte der ersten Ebene anhand der Einstellung **Update Mode** neu erzeugt. Danach werden nacheinander die zweite, dritte und weitere komplexere Ebenen aktualisiert.

Damit nicht zu viele unerwünschte Objekte entstehen, führt jeder Generator eine Prüfung durch: Liegen zwei Objekte derselben Ebene nah genug beieinander, werden sie zusammengeführt und ihre Relevanzwerte addiert. In den **Preferences** kannst du den erforderlichen Abstand zum Zusammenführen ändern.

### Liste der Generatoren {#list-of-generators}

Hier findest du alle verfügbaren Generatoren in Geometry Dashboard:

* **Einfache Generatoren:** Diese Generatoren erzeugen virtuelle Objekte direkt aus Hitobjects. Für alle wird die Zeitposition auf die durchschnittliche Zeit des Basisobjekts gesetzt.
  * **Points on Circles and Slider Heads:** Erzeugt einen virtuellen Punkt an der Startposition von Kreisen und Slidern.
  * **Points on Slider Ends:** Erzeugt einen virtuellen Punkt am äußersten Ende eines Sliders.
  * **Points on Slider Anchors:** Erzeugt virtuelle Punkte an den Ankern (rot und weiß) der Slider.
  * **Points on Last Anchors:** Erzeugt virtuelle Punkte am letzten Kurvenpunkt der Slider.
  * **Lines on Linear Sliders:** Bei einem linearen Slider wird eine virtuelle Linie von der Position bis zum Kurvenpunkt erzeugt. Zeit und Relevanz entsprechen denen des Basis-Sliders.
  * **Points on Blanket Centers:** Erzeugt einen Punkt in der Mitte von kreisförmigen Slidern. Zeit und Relevanz entsprechen denen des Basis-Sliders.
  * **Circles on 3-Point Sliders:** Erzeugt anhand der Slider-Anker einen kreisförmigen Bogen für Blanket- oder Perfect-Kurven. Zeit und Relevanz entsprechen denen des Basis-Sliders.
  * **Points on Slider Paths:** Erzeugt viele virtuelle Punkte auf Slider-Pfaden. Über **Point Density** kannst du festlegen, wie viele Punkte erstellt werden. Für die Ausgabe sind zusätzliche Berechnungen erforderlich.
* **Mittlere Generatoren:** Diese Generatoren benötigen einfache Generatoren. Sie bilden Formen oder erstellen Hilfslinien.
  * **Tangent Circles on Circle:** Erzeugt virtuelle Kreise, die den ersten Eingabekreis in genau einem Punkt berühren.
  * **Circles by Two Points:** Nimmt ein Paar virtueller Punkte und erzeugt zwei virtuelle Kreise mit je einem Punkt als Mittelpunkt. Ihr Radius entspricht dem Abstand zwischen den Punkten.
  * **Equilateral Triangle from Two Points:** Nimmt ein Paar virtueller Punkte und erzeugt auf jeder Seite einen virtuellen Punkt, sodass zwei gleichseitige Dreiecke entstehen.
  * **Equilateral Triangle from Two Points (Type II):** Funktioniert wie der normale Dreiecksgenerator, verwendet für das Dreieck jedoch eine andere Positionierung.
  * **Square from Two Points:** Nimmt ein Paar virtueller Punkte und erzeugt auf jeder Seite einen virtuellen Punkt, sodass ein Quadrat entsteht.
  * **Square from Two Points (Type II):** Nimmt ein Paar virtueller Punkte und erzeugt auf jeder Seite zwei virtuelle Punkte, sodass insgesamt zwei Quadrate entstehen.
  * **Line by Two Points:** Nimmt zwei virtuelle Punkte und erzeugt eine virtuelle Linie, die sie verbindet.
  * **Average of Two Points:** Nimmt zwei virtuelle Punkte und berechnet daraus einen virtuellen Punkt an ihrem Mittelwert.
  * **Average of Three Points:** Nimmt drei virtuelle Punkte und berechnet daraus einen virtuellen Punkt an ihrem Mittelwert.
  * **Scale & Rotate around a Fixed Point:** Dreht und skaliert ein beliebiges virtuelles Objekt um einen festen virtuellen Punkt. Du kannst den Winkel, den Skalierungsfaktor und zusätzliche Regeln für die Auswahl des festen Punkts festlegen.
  * **Parallel Lines:** Nimmt eine Linie und einen Punkt und erzeugt durch diesen Punkt eine parallele virtuelle Linie.
  * **Perpendicular Lines:** Nimmt eine Linie und einen Punkt und erzeugt durch diesen Punkt eine senkrechte virtuelle Linie.
  * **Bisector of Angles:** Nimmt zwei virtuelle Linien und erzeugt am Schnittpunkt dieser Linien die Winkelhalbierende.
  * **Bisector of Two Points:** Nimmt zwei virtuelle Punkte und erzeugt ihre Mittelsenkrechte.
  * **Tangent Lines on Circle:** Nimmt einen virtuellen Kreis und einen Punkt und erzeugt virtuelle Linien, die durch den Punkt verlaufen und den Kreis seitlich berühren.
* **Erweiterte Generatoren:** Diese spezialisierten Generatoren benötigen zusätzliche Einstellungen und eignen sich für fortgeschrittene rekursive Patterns.
  * **Intersection Points:** Nimmt zwei virtuelle Linien oder Kreise und erzeugt an jedem ihrer Schnittpunkte einen virtuellen Punkt. Dieser Generator ist in Kombination mit anderen geometrischen Generatoren sehr nützlich. *Hinweis:* Das Finden von Schnittpunkten ist rechenintensiv und kann die Leistung stark beeinträchtigen, wenn im Editor mehrere komplexe Zeichnungen aktiv sind. Verwende ihn daher mit Bedacht.
  * **Successor of 2 Points:** Nimmt zwei virtuelle Punkte und berechnet den nächsten virtuellen Punkt mit derselben Geschwindigkeit. In Kombination mit **Points on Slider Paths** lässt sich der Kurvenverlauf genauer vorhersagen.
  * **Successor of 3 Points:** Nimmt drei virtuelle Punkte und berechnet den nächsten virtuellen Punkt mit demselben Winkel und derselben Geschwindigkeitsänderung.
  * **Successor of 3 Points Reversed:** Nimmt drei virtuelle Punkte und berechnet den nächsten virtuellen Punkt mit derselben Geschwindigkeitsänderung, aber entgegengesetztem Winkel.
  * **Successor of 4 Points:** Nimmt vier virtuelle Punkte und berechnet den nächsten virtuellen Punkt mit demselben Winkel, derselben Winkeländerung, Geschwindigkeitsänderung und Änderung der Geschwindigkeitsänderung.
  * **Scale & Rotate around a Fixed Point:** Dreht und skaliert ein beliebiges virtuelles Objekt um einen festen virtuellen Punkt. Du kannst den Winkel, den Skalierungsfaktor und zusätzliche Regeln für die Auswahl des festen Punkts festlegen.
  * **Reflection across a Line:** Spiegelt ein beliebiges virtuelles Objekt an einer virtuellen Linie, die als Symmetrieachse dient.

## Generatoroptionen {#generator-options}

Jeder Generator verfügt über Optionen, mit denen du sein Verhalten steuern kannst:

* **Active:** Legt fest, ob der Generator aktiviert ist. Deaktivierte Generatoren erzeugen keine virtuellen Objekte.
* **Sequential:** Beschränkt die Eingabe auf aufeinanderfolgende Objekte. Ist die Option aktiviert, erzeugt der Generator nur Paare virtueller Objekte, die in zeitlicher Reihenfolge aufeinanderfolgen. Dadurch entsteht deutlich weniger Geometrie und die Ansicht bleibt übersichtlicher.
* **Deep:** Sucht nicht nur in der Ebene direkt darüber, sondern in allen anwendbaren vorherigen Ebenen.
* **Relevancy Ratio:** Grundrelevanz der vom Generator erzeugten virtuellen Objekte zwischen 0 und 1. Die tatsächliche Relevanz kann abhängig von den Relevanzwerten anderer Eingaben variieren.
* **Generates Inheritable:** Wenn aktiviert, können die erzeugten Objekte von weiteren Generatoren verwendet werden. Andernfalls sind sie für andere Generatoren nicht verwendbar.
* **Input Selection Collection:** Sammlung von Regeln für die virtuellen Objekte, die der Generator als Eingabe verwendet. Weitere Informationen findest du unter [Eingabeauswahl im Detail](#input-selection-in-detail).

### Besondere Generatoreinstellungen {#specialized-generator-settings}

Einige erweiterte Generatoren haben zusätzliche Optionen:

* **Circle from Single Point:**
  * *Radius:* Skalierung des Kreises.
* **Points on Slider Paths:**
  * *Points Density:* Anzahl der Punkte pro osu!-Pixel des Slider-Pfads.
* **Scale & Rotate around a Fixed Point:**
  * *Angle:* Drehwinkel in Grad.
  * *Scalar:* Faktor für die gleichmäßige Skalierung.
  * *Origin Input Selection:* Zusätzliche Regeln, die virtuelle Objekte erfüllen müssen, um als Drehzentrum zu dienen.
  * *Other Input Selection:* Zusätzliche Regeln für Objekte, die um das Drehzentrum gespiegelt werden.
* **Reflection across a Line:**
  * *Axis Input Selection:* Zusätzliche Regeln, die virtuelle Objekte erfüllen müssen, um als Achse für den Generator zu dienen.
  * *Other Input Selection:* Zusätzliche Regeln für Objekte, die an der Achse gespiegelt werden.

### Eingabeauswahl im Detail {#input-selection-in-detail}

Die Eingabeauswahl legt fest, welche virtuellen Objekte ein Generator für seine Berechnungen berücksichtigt. Jeder Generator definiert erforderliche Eingabetypen (zum Beispiel Punkte oder Linien). Mithilfe von Eingabebedingungen kannst du die Auswahl anhand von Objekteigenschaften weiter eingrenzen. Ohne passend konfigurierte Eingabeauswahl erzeugen Generatoren entweder zu viele irrelevante virtuelle Objekte oder finden nicht die benötigten.

Eine Sammlung von Auswahlbedingungen enthält eine oder mehrere Bedingungen. Ein virtuelles Objekt ist als Eingabe geeignet, sobald es mindestens eine dieser Bedingungen erfüllt.

Bewege den Mauszeiger über **Input Selection** und klicke auf die Plus-Schaltfläche, um eine neue Auswahlbedingung hinzuzufügen. Mit folgenden Einstellungen kannst du die erzeugte Geometrie weiter einschränken:

* **Need Selected:** Wenn aktiviert, verwendet der Generator nur ausgewählte virtuelle Objekte als Eingabe. Ausgewählte Objekte werden beim Überfahren mit dem Mauszeiger außerdem bevorzugt. So kannst du die Erzeugung gezielt steuern.
* **Need Locked:** Wenn aktiviert, verwendet der Generator ausschließlich gesperrte Objekte. Nicht gesperrte Objekte werden gar nicht berücksichtigt. Das ist nützlich, wenn sich bestimmte Generatoren auf gesperrte Objekte beschränken sollen.
* **Need Generated By This:** Prüft, ob alle virtuellen Objekte von diesem Generator erzeugt wurden. Mit der passenden Konfiguration lässt sich die erzeugte Geometrie auf die gewünschten Objekte einschränken.
* **Need Generated Not By This:** Der entgegengesetzte Filter: Berücksichtigt werden nur virtuelle Objekte, die nicht von diesem Generator erzeugt wurden.
* **Min Relevancy:** Erfordert für Eingabeobjekte eine Mindest-Relevanz. Der Relevanzwert liegt zwischen 0 und 1. Bei 0 ist der Filter deaktiviert.

## Preferences {#preferences}

Im Fenster **Geometry Dashboard Preferences** kannst du verschiedene Aspekte des Verhaltens und der Darstellung des Tools anpassen:

* **Hotkeys:**
  * **Snap Key:** Taste, die du gedrückt hältst, um den Cursor an virtuellen Objekten auszurichten.
  * **Select Key:** Taste, die du gedrückt hältst, um virtuelle Objekte auszuwählen.
  * **Lock Key:** Taste, die du gedrückt hältst, um virtuelle Objekte zu sperren.
  * **Usability Key:** Taste, die du gedrückt hältst, um die Verwendbarkeit virtueller Objekte umzuschalten.
  * **Refresh Key:** Taste, mit der die Liste der Hitobjects in der Ursprungsebene sofort aktualisiert wird.
* **Offset:** Verschiebt alle virtuellen Objekte relativ zum Editorfenster. Damit lassen sich Probleme bei der Skalierung oder Position korrigieren.
  * **Left:** Versatz am linken Rand des Editors.
  * **Top:** Versatz am oberen Rand des Editors.
  * **Right:** Versatz am rechten Rand des Editors.
  * **Bottom:** Versatz am unteren Rand des Editors.
* **Complexity:** Anzahl der rekursiven Ebenen, die erzeugt werden. Kann bei Leistungsproblemen verringert werden.
  * **Inception Level:** Anzahl der Ebenen, die anhand der Basis-Hitobjects erzeugt werden.
* **Downkey:** Schaltet um, welche virtuellen Objekte angezeigt werden.
  * **Everything:** Zeigt alle virtuellen Objekte der Hitobjects, ihrer Kinder und ihrer Vorfahren an.
  * **Parents and parents of parents:** Zeigt die Vorfahren der Objekte an, an denen die Auswahl ausgerichtet wird, einschließlich der Vorfahren der Vorfahren.
  * **Direct parents:** Zeigt nur die direkten Vorfahren der Objekte an, an denen die Auswahl ausgerichtet wird.
  * **Children and children of children:** Zeigt alle Nachkommen der Objekte an, an denen die Auswahl ausgerichtet wird, einschließlich deren Nachkommen.
  * **Direct children:** Zeigt nur die unmittelbaren Nachkommen der Objekte an, an denen die Auswahl ausgerichtet wird.
* **Upkey:** Schaltet um, welche virtuellen Objekte angezeigt werden, wenn **Snap Key** nicht gedrückt ist.
  * **All visible:** Zeigt alle Hitobjects an, die den Einstellungen unter **Selection** entsprechen.
  * **Nothing:** Verbirgt alle Objekte, solange **Snap Key** nicht gedrückt ist.
* **Selection:** Legt fest, welche Hitobjects zum Erzeugen virtueller Objekte verwendet werden.
  * **All visible:** Bezieht alle verfügbaren Hitobjects ein.
  * **Visible or selected:** Verwendet sichtbare Hitobjects, außer es sind Hitobjects ausgewählt. In diesem Fall werden alle ausgewählten Hitobjects verwendet.
  * **Selected only:** Verwendet nur Hitobjects, die im Editor ausgewählt sind.
* **Updating:** Legt fest, wann die virtuellen Objekte aktualisiert werden.
  * **Any change:** Aktualisiert sie bei jeder Änderung.
  * **Time change:** Aktualisiert sie, wenn sich die Editorzeit ändert. Das verbessert die Leistung auf Kosten der Reaktionsgeschwindigkeit.
  * **osu! activated:** Aktualisiert sie, wenn das aktuelle osu!-Fenster in den Vordergrund kommt.
  * **Hotkey down:** Aktualisiert sie, wenn das Aktualisierungs-Tastenkürzel gedrückt wird.
* **Behavior:** Weitere Verhaltensoptionen für Geometry Dashboard.
  * **Minimal diff:** Abstand, den zwei virtuelle Objekte unterschreiten müssen, damit sie zusammengeführt werden.
  * **Keep running:** Lässt Geometry Dashboard weiterlaufen, wenn andere Tools geöffnet sind.
  * **See playfield:** Blendet die Grenzen des Spielfelds über dem Editor ein.
  * **Debug:** Blendet die Grenzen des Editors über dem Editor ein. Wenn der Editor selbst dann nicht zu sehen ist, befindet er sich außerhalb des erkannten Bereichs.

### Optionen für virtuelle Geometrie {#virtual-geometry-options}

Für jeden Typ virtueller Objekte, der im Editor angezeigt wird, kannst du Farbe, Deckkraft, Dicke und Strichelung anpassen. Das verbessert die Lesbarkeit.

* **Color:** Farbe der Kontur. Du kannst eine Farbe auch über einen Farbwähler kopieren, indem du auf den HEX-Wert klickst.
* **Opacity:** Transparenz des Objekts.
* **Thickness:** Dicke der Linien, aus denen die Kontur besteht.
* **Dash:** Legt fest, ob die Kontur gestrichelt oder durchgezogen angezeigt wird.

## Savestates {#savestates}

Savestates funktionieren wie Profile für Tastenkürzel. Du kannst schnell zwischen ihnen wechseln, statt die Einstellungen für jeden Generator und die **Preferences** von Hand anzupassen. Außerdem kannst du ein Tastenkürzel mit einem Savestate verknüpfen, um noch schneller zu wechseln.

Klicke auf das Plus-Symbol, um einen Savestate zu erstellen. Danach kannst du ihm einen Namen und ein Tastenkürzel zuweisen. Mit den Schaltflächen zum Speichern und Laden kannst du die aktuellen Einstellungen sichern oder ändern.
