---
title: "Geometry Dashboard"
author: "OliBomby"
id: geometry-dashboard
---

Geometry Dashboard to zaawansowane narzędzie, które nakłada na edytor osu! wirtualne obiekty geometryczne. Możesz przyciągać do tych wirtualnych punktów, linii i okręgów, aby tworzyć geometrycznie idealne wzory, które w innym przypadku byłyby znacznie trudniejsze lub wręcz niemożliwe do uzyskania.

:::note Obsługa platform

Geometry Dashboard wymaga obecnie systemu Windows, ponieważ jego nakładka na żywy edytor korzysta z integracji specyficznej dla Windows.

:::

:::tip
Aby narzędzie działało, określ plik konfiguracji użytkownika w **Preferences** Mapping Tools.
:::

## Podstawowe pojęcia

Geometry Dashboard działa w następujący sposób:

1. **Odczytuje aktualny stan edytora osu!** Obejmuje to widoczne obiekty, czas w edytorze i położenie okna edytora.
2. **Generuje obiekty wirtualne na podstawie tych obiektów.** Służy do tego zestaw konfigurowalnych generatorów, które tworzą wirtualne punkty, linie i okręgi.
3. **Wyświetla obiekty wirtualne na nakładce nad edytorem osu!** Dzięki niej widzisz wygenerowaną geometrię i możesz przyciągać do niej kursor.

## Interfejs użytkownika

Okno Geometry Dashboard jest podzielone na kilka sekcji:

* **Search:** pasek wyszukiwania ułatwiający filtrowanie listy generatorów.
* **Toggle Buttons:** przyciski do włączania lub wyłączania różnych funkcji.
    * Select All
    * Lock All
    * Usability All
* **Savestates Button:** otwiera [okno Savestates](#savestates).
* **Preferences Button:** otwiera [okno Preferences](#preferences).
* **Generators List:** lista dostępnych generatorów, z opcjami ich włączania, wyłączania i konfigurowania parametrów.

## Geometria wirtualna

Geometria wirtualna jest podstawą tego narzędzia. Nie istnieje jako rzeczywiste obiekty w edytorze, lecz jako punkty, nad którymi możesz umieścić kursor, aby precyzyjnie ustawiać obiekty podczas mapowania.

### Stany geometrii wirtualnej

Geometria wirtualna ma kilka unikatowych stanów, które można włączać i wyłączać:

* **Selected:** aktywuje obiekt, aby mógł służyć do tworzenia nowych obiektów. Możesz zaznaczać obiekty wirtualne znajdujące się pod kursorem za pomocą skrótu wyboru. Zaznaczone obiekty mają inny kolor nakładki i poświatę na krawędziach.
* **Locked:** zapobiega zniknięciu obiektu, gdy przestanie istnieć generator lub obiekt bazowy. Przydaje się do ochrony geometrii przed przypadkowym usunięciem. Zablokowana geometria wirtualna jest wyszarzona.
* **Usable:** jeśli opcja jest włączona, generatory mogą używać geometrii wirtualnej do tworzenia kolejnych elementów. Jeśli jest wyłączona, generatory ją pomijają i nie tworzą na jej podstawie żadnych obiektów. Nieużyteczne obiekty wirtualne są przyciemnione.
* **Relevancy:** wartość od 0 do 1 określająca istotność geometrii. Im większa istotność, tym mniej przezroczysty obiekt.

## Generatory

Generatory stanowią podstawę Geometry Dashboard. Tworzą obiekty wirtualne na podstawie obiektów w beatmapie oraz innych obiektów wirtualnych.

### Ogólny sposób działania generatorów

Generator działa w następujący sposób:

1. **Wybór danych wejściowych:** każdy generator określa *zależności* (wymagane typy danych) i *predykaty wejściowe*. Predykat wejściowy określa dodatkowe warunki, które muszą spełniać obiekty wirtualne, aby generator mógł ich użyć. Geometry Dashboard przeszukuje poprzednie warstwy w poszukiwaniu obiektów zgodnych z zależnościami i spełniających te warunki. Obejmują one między innymi to, czy obiekty muszą być zaznaczone lub mieć odpowiednią wartość istotności.

2. **Tworzenie geometrii:** dla każdej możliwej kombinacji zaznaczonych obiektów wejściowych generator używa swoich metod, aby utworzyć nowe obiekty wirtualne. Metody generatora otrzymują zaznaczone obiekty i zwracają jeden lub więcej nowych obiektów wirtualnych.

3. **Warstwy:** każdy nowy zestaw obiektów wirtualnych trafia do nowej warstwy. Liczbę warstw można ustawić przez **Inception Level** w **Preferences**. Obiekty wirtualne w niższych warstwach mogą wpływać na obiekty tworzone w kolejnych, bardziej złożonych warstwach.

4. **Aktualizowanie:** za każdym razem, gdy Geometry Dashboard musi przeliczyć dane, obiekty w pierwszej warstwie są generowane ponownie zgodnie z ustawieniem **Update Mode**. Następnie aktualizowana jest druga, bardziej złożona warstwa, potem trzecia i kolejne.

Aby uniknąć powstawania nadmiaru niechcianych obiektów, generatory łączą dwa wystarczająco bliskie obiekty w tej samej warstwie i sumują ich istotność. W **Preferences** możesz ustawić wymaganą odległość, przy której obiekty zostaną połączone.

### Lista generatorów

Oto lista wszystkich dostępnych generatorów Geometry Dashboard:

* **Basic Generators:** tworzą obiekty wirtualne bezpośrednio z obiektów beatmapy. Czas ich położenia wynosi średni czas obiektu bazowego.
    * **Points on Circles and Slider Heads:** tworzy wirtualny punkt na pozycji początkowej kółka lub slidera.
    * **Points on Slider Ends:** tworzy wirtualny punkt na samym końcu slidera.
    * **Points on Slider Anchors:** tworzy wirtualne punkty w punktach kontrolnych slidera (czerwonych i białych).
    * **Points on Last Anchors:** tworzy wirtualne punkty na ostatnim punkcie krzywej slidera.
    * **Lines on Linear Sliders:** gdy typ slidera jest liniowy, tworzy wirtualną linię między jego pozycją a punktem krzywej. Czas i istotność są takie same jak slidera bazowego.
    * **Points on Blanket Centers:** tworzy punkt na środku sliderów typu okrąg. Czas i istotność są takie same jak slidera bazowego.
    * **Circles on 3-Point Sliders:** na podstawie punktów kontrolnych slidera tworzy okrąg dla krzywych typu blanket/perfect. Czas i istotność są takie same jak slidera bazowego.
    * **Points on Slider Paths:** tworzy wiele wirtualnych punktów wzdłuż ścieżek sliderów. Liczbę punktów ustawisz opcją **Point Density**. Ten generator wykonuje dodatkowe obliczenia dla swoich wyników.
* **Intermediate Generators:** do działania wymagają podstawowych generatorów. Pomagają tworzyć kształty lub linie pomocnicze.
    * **Tangent Circles on Circle:** tworzy wirtualne okręgi przecinające okrąg wejściowy dokładnie w jednym punkcie.
    * **Circles by Two Points:** pobiera parę wirtualnych punktów i tworzy parę wirtualnych okręgów o środkach w tych punktach i promieniu równym odległości między nimi.
    * **Equilateral Triangle from Two Points:** pobiera parę wirtualnych punktów i tworzy po jednym wirtualnym punkcie po każdej stronie, aby otrzymać dwa trójkąty równoboczne.
    * **Equilateral Triangle from Two Points (Type II):** działa jak zwykły generator trójkąta, ale inaczej rozmieszcza wierzchołki.
    * **Square from Two Points:** pobiera parę wirtualnych punktów i tworzy po jednym wirtualnym punkcie z każdej strony, aby otrzymać jeden kwadrat.
    * **Square from Two Points (Type II):** pobiera parę wirtualnych punktów i tworzy po dwa wirtualne punkty z każdej strony, aby otrzymać dwa kwadraty.
    * **Line by Two Points:** pobiera parę wirtualnych punktów i tworzy łączącą je wirtualną linię.
    * **Average of Two Points:** pobiera dwa wirtualne punkty i oblicza ich środek.
    * **Average of Three Points:** pobiera trzy wirtualne punkty i oblicza ich środek.
    * **Scale & Rotate around a Fixed Point:** obraca i skaluje dowolny obiekt wirtualny wokół stałego wirtualnego punktu. Możesz ustawić kąt, współczynnik skali i dodatkowe reguły wyboru punktu stałego.
    * **Parallel Lines:** pobiera parę złożoną z linii i punktu, a następnie tworzy przechodzącą przez punkt linię równoległą do pierwszej.
    * **Perpendicular Lines:** pobiera parę złożoną z linii i punktu, a następnie tworzy przechodzącą przez punkt linię prostopadłą do pierwszej.
    * **Bisector of Angles:** pobiera parę linii wirtualnych i tworzy dwusieczną kąta między nimi w punkcie przecięcia.
    * **Bisector of Two Points:** pobiera parę wirtualnych punktów i tworzy ich symetralną.
    * **Tangent Lines on Circle:** pobiera wirtualny okrąg i punkt, a następnie tworzy wirtualne linie styczne przechodzące przez ten punkt.
* **Advanced Generators:** bardziej wyspecjalizowane generatory, które wymagają dodatkowej konfiguracji i nadają się do zaawansowanego, rekurencyjnego tworzenia wzorów.
    * **Intersection Points:** pobiera parę wirtualnych linii lub okręgów i tworzy wirtualny punkt w każdym miejscu ich przecięcia. Ten generator dobrze współpracuje z innymi metodami tworzenia geometrii. *Uwaga:* obliczanie przecięć wymaga dużej mocy obliczeniowej i może znacznie obniżyć wydajność, gdy w edytorze są aktywne złożone rysunki. Zachowaj ostrożność.
    * **Successor of 2 Points:** pobiera dwa wirtualne punkty i oblicza kolejny przy zachowaniu tej samej prędkości. Można go połączyć z **Points on Slider Paths**, aby dokładniej przewidywać krzywą.
    * **Successor of 3 Points:** pobiera trzy wirtualne punkty i oblicza kolejny przy zachowaniu tego samego kąta i zmiany prędkości.
    * **Successor of 3 Points Reversed:** pobiera trzy wirtualne punkty i oblicza kolejny przy zachowaniu tej samej zmiany prędkości i odwróconym kącie.
    * **Successor of 4 Points:** pobiera cztery wirtualne punkty i oblicza kolejny przy zachowaniu tego samego kąta, zmiany kąta, zmiany prędkości i zmiany tej zmiany prędkości.
    * **Scale & Rotate around a Fixed Point:** obraca i skaluje dowolny obiekt wirtualny wokół stałego wirtualnego punktu. Możesz ustawić kąt, współczynnik skali i dodatkowe reguły wyboru punktu stałego.
    * **Reflection across a Line:** odbija dowolny obiekt wirtualny względem wirtualnej linii stanowiącej oś symetrii.

## Opcje generatorów

Każdy generator ma zestaw opcji, które określają jego działanie:

* **Active:** określa, czy generator jest włączony. Wyłączony generator nie tworzy obiektów wirtualnych.
* **Sequential:** sprawia, że generator używa jako danych wejściowych tylko kolejnych obiektów. Włączona opcja powoduje generowanie wyłącznie par obiektów wirtualnych następujących po sobie w czasie. Znacznie zmniejsza to liczbę tworzonych elementów i pomaga uniknąć bałaganu.
* **Deep:** nakazuje generatorowi sprawdzać nie tylko warstwę powyżej, lecz także wszystkie wcześniejsze pasujące warstwy.
* **Relevancy Ratio:** podstawowa istotność obiektów wirtualnych tworzonych przez ten generator (od 0 do 1). Faktyczna istotność może zależeć od wskaźników istotności innych obiektów wejściowych.
* **Generates Inheritable:** jeśli opcja jest włączona, tworzone obiekty są użyteczne dla kolejnych generatorów. W przeciwnym razie nie mogą być przez nie używane.
* **Input Selection Collection:** zestaw reguł określających, jakie obiekty wirtualne generator może przyjmować jako dane wejściowe. Więcej informacji znajdziesz w sekcji [Input Selection](#input-selection-in-detail).

### Ustawienia wyspecjalizowanych generatorów

Niektóre zaawansowane generatory mają dodatkowe opcje.

* **Circle from Single Point:**
    * *Radius:* skala okręgu.
* **Points on Slider Paths:**
    * *Points Density:* określa liczbę tworzonych punktów na piksel ścieżki slidera osu!.
* **Scale & Rotate around a Fixed Point:**
    * *Angle:* kąt obrotu w stopniach.
    * *Scalar:* współczynnik skali jednolitej.
    * *Origin Input Selection:* dodatkowe reguły, które obiekty wirtualne muszą spełniać, aby służyć jako punkt obrotu.
    * *Other Input Selection:* dodatkowe reguły dla obiektów odbijanych względem punktu obrotu.
* **Reflection across a Line:**
    * *Axis Input Selection:* dodatkowe reguły, które obiekty wirtualne muszą spełniać, aby służyć temu generatorowi za oś.
    * *Other Input Selection:* dodatkowe reguły dla obiektów odbijanych względem osi.

### Szczegóły wyboru danych wejściowych {#input-selection-in-detail}

Wybór danych wejściowych to podstawowy mechanizm określający, które obiekty wirtualne generator uwzględni w obliczeniach. Każdy generator określa wymagane typy danych (np. punkty, linie), a predykaty wejściowe pozwalają doprecyzować wybór na podstawie właściwości obiektu. Bez poprawnej konfiguracji wyboru generator może tworzyć zbyt wiele nieistotnych obiektów albo nie utworzyć potrzebnych.

Zestaw predykatów wyboru zawiera kilka predykatów. Wystarczy spełnić jeden z nich, aby obiekt wirtualny kwalifikował się jako dane wejściowe.

Najedź kursorem na **Input Selection** i kliknij przycisk plusa, aby dodać predykat wyboru. Pojawi się kilka ustawień, które pozwalają dokładniej określić tworzoną geometrię:

* **Need Selected:** generator przyjmuje tylko zaznaczone obiekty wirtualne. Zaznaczone obiekty są też traktowane priorytetowo podczas wskazywania kursorem, co pozwala precyzyjnie wybrać elementy do utworzenia.
* **Need Locked:** generator tworzy geometrię wyłącznie z zablokowanych obiektów. Niezablokowane obiekty całkowicie pomija. Przydaje się przy korzystaniu z niektórych generatorów równocześnie z blokowaniem pozostałych.
* **Need Generated By This:** sprawdza, czy wszystkie obiekty wirtualne zostały utworzone przez ten generator. Pozwala ograniczyć generowanie geometrii do wybranych elementów.
* **Need Generated Not By This:** odwrotny filtr wyboru; uwzględnia tylko obiekty wirtualne utworzone przez inny generator.
* **Min Relevancy:** wymaga, aby obiekty wejściowe miały co najmniej określoną istotność. Istotność ma zakres od 0 do 1; wartość 0 wyłącza ten filtr.

## Preferences

Okno Preferences Geometry Dashboard pozwala dostosować wiele aspektów działania i wyglądu narzędzia:

* **Hotkeys:**
    * **Snap Key:** klawisz, który trzeba przytrzymać, aby przyciągać kursor do obiektów wirtualnych.
    * **Select Key:** klawisz, który trzeba przytrzymać, aby zaznaczać obiekty wirtualne.
    * **Lock Key:** klawisz, który trzeba przytrzymać, aby blokować obiekty wirtualne.
    * **Usability Key:** klawisz, który trzeba przytrzymać, aby przełączać użyteczność obiektów wirtualnych.
    * **Refresh Key:** klawisz natychmiastowego odświeżenia listy obiektów w warstwie głównej.
* **Offset:** przesuwa wszystkie obiekty wirtualne względem ekranu edytora. Może naprawić problemy ze skalą lub położeniem.
    * **Left:** przesunięcie lewej krawędzi edytora.
    * **Top:** przesunięcie górnej krawędzi edytora.
    * **Right:** przesunięcie prawej krawędzi edytora.
    * **Bottom:** przesunięcie dolnej krawędzi edytora.
* **Complexity:** określa liczbę rekurencyjnych warstw. Może pomóc ograniczyć problemy z wydajnością.
    * **Inception Level:** liczba warstw tworzonych na podstawie obiektów bazowych.
* **Downkey:** przełącza wyświetlane obiekty wirtualne.
    * **Everything:** wyświetla wszystkie obiekty wirtualne: obiekty bazowe, elementy potomne i nadrzędne.
    * **Parents and parents of parents:** wyświetla przodków obiektów, do których przyciągany jest kursor.
    * **Direct parents:** wyświetla wyłącznie bezpośrednie obiekty nadrzędne.
    * **Children and children of children:** wyświetla wszystkich potomków obiektów, do których przyciągany jest kursor.
    * **Direct children:** wyświetla wyłącznie bezpośrednie obiekty potomne.
* **Upkey:** przełącza obiekty wirtualne wyświetlane po zwolnieniu **Snap Key**.
    * **All visible:** wyświetla wszystkie obiekty zgodnie z ustawieniami w opcjach wyboru.
    * **Nothing:** ukrywa wszystkie obiekty po zwolnieniu **Snap Key**.
* **Selection:** określa obiekty wejściowe używane do tworzenia geometrii wirtualnej.
    * **All visible:** uwzględnia wszystkie dostępne obiekty.
    * **Visible or selected:** używa widocznych obiektów. Jeśli jakieś obiekty są zaznaczone, używa ich wszystkich.
    * **Selected only:** używa obiektów zaznaczonych w edytorze.
* **Updating:** określa, kiedy aktualizowane są obiekty wirtualne.
    * **Any change:** aktualizuje po każdej zmianie.
    * **Time change:** aktualizuje po zmianie czasu w edytorze. Może poprawić wydajność kosztem szybkości reakcji.
    * **osu! activated:** aktualizuje, gdy aktywne staje się bieżące okno osu!.
    * **Hotkey down:** aktualizuje po naciśnięciu skrótu odświeżania.
* **Behavior:** dodatkowe ustawienia Geometry Dashboard.
    * **Minimal diff:** minimalna odległość między obiektami wirtualnymi, przy której są łączone.
    * **Keep running:** utrzymuje Geometry Dashboard w działaniu również wtedy, gdy otwarte są inne narzędzia.
    * **See playfield:** nakłada na edytor granice pola gry.
    * **Debug:** nakłada na edytor jego granice. Jeśli mimo włączenia tej opcji nie widać edytora, znajduje się on poza obszarem wykrywania.

### Opcje geometrii wirtualnej

Dla każdego typu obiektu wirtualnego wyświetlanego w edytorze możesz dostosować kolor, krycie, grubość i styl linii. Ułatwia to odczytywanie geometrii.

* **Color:** kolor krawędzi. Możesz też skopiować go z próbnika kolorów (kliknij wartość HEX).
* **Opacity:** przezroczystość obiektu.
* **Thickness:** grubość linii tworzących obrys obiektu.
* **Dash:** określa, czy obrys ma być linią przerywaną czy ciągłą.

## Savestates

Savestates działają jak profile skrótów klawiszowych. Możesz szybko przełączać się między profilami zamiast ręcznie zmieniać ustawienia każdego generatora i preferencje. Możesz też przypisać skrót do savestate, aby przełączać się między nimi jeszcze szybciej.

Aby utworzyć savestate, naciśnij ikonę plusa. Następnie nadaj mu nazwę i przypisz skrót. Dostępne są przyciski zapisu i wczytywania, które zapisują lub modyfikują bieżące ustawienia.
