---
title: "Pattern Gallery"
author: "OliBomby"
id: pattern-gallery
description: Importuj i eksportuj wzory z beatmap osu! oraz twórz kolekcje wzorów, którymi możesz dzielić się ze znajomymi.
keywords:
  - dokumentacja
  - mapping tools
  - pattern gallery
---

Pattern Gallery pozwala importować i eksportować wzory z beatmap osu! oraz tworzyć kolekcje wzorów do udostępniania. To świetny sposób na szybkie przenoszenie dowolnego układu obiektów lub fragmentu beatmapy między różnymi beatmapami.

## Opis narzędzia

Pattern Gallery umożliwia:

* Importowanie i eksportowanie wzorów z beatmap osu!, aby przenosić grupy obiektów między beatmapami.
* Tworzenie kolekcji wzorów, którymi możesz dzielić się ze znajomymi.
* Dodawanie i usuwanie wzorów za pomocą przycisków na dole.
* Eksportowanie wzoru do wybranej beatmapy: zaznacz jeden lub więcej wzorów i kliknij przycisk uruchamiania albo dwukrotnie kliknij wzór.
* Dodatkowe przetwarzanie wzoru podczas eksportu przy użyciu opcji eksportu.
* Zapisywanie, wczytywanie, zmianę nazwy, importowanie i eksportowanie kolekcji wzorów z menu **Project**.

## Korzystanie

1. Otwórz Pattern Gallery w Mapping Tools.
2. Dodaj wzory do kolekcji za pomocą opcji importowania.
3. Wybierz wzór z galerii.
4. Kliknij przycisk uruchamiania, aby wyeksportować wzór do wybranej beatmapy.

## Funkcje i ustawienia

Narzędzie udostępnia następujące funkcje:

* **Zarządzanie wzorami**: dodawaj, usuwaj i zmieniaj nazwy wzorów, a także porządkuj je w kolekcje.
* **Opcje importu**: importuj wzory z różnych źródeł, takich jak zaznaczone obiekty, pliki beatmap czy kody wzorów.
* **Opcje eksportu**: dostosuj eksport wzoru, używając skalowania, obrotu i filtrowania.

## Opcje eksportu

Podczas eksportu wzoru możesz dostosować następujące opcje:

* **Export Offset**: określa czas wstawienia wzoru. Możesz wybrać czas oryginalny, niestandardowy lub aktualny czas w edytorze.
    * **Custom export offset**: określa czas wstawienia wzoru w trybie niestandardowego przesunięcia.
* **Deletion margin**: dodatkowy czas w milisekundach wokół wzorów, w którym usuwane są fragmenty oryginalnej mapy.
* **Parting distance**: minimalna liczba taktów w przerwie wymagana do podzielenia wzoru na mniejsze części.
* **Beat divisors**: wpisz dowolną liczbę dzielników rytmu oddzielonych przecinkami. Przykład: 1/4, 1/12, 1/7, 4/5, 0.13435622499.
* **Custom Scale**: zmień rozmiar wzoru, podając współczynnik skali.
* **Custom Rotate**: obróć wzór zgodnie z ruchem wskazówek zegara o podaną liczbę stopni.
* **Pattern Overwrite Mode**: określa sposób obsługi obiektów nakładających się na wzór i docelową beatmapę. Dostępne tryby:
    * **NoOverwrite**: zachowuje wszystkie istniejące obiekty beatmapy. Dodaje wzór bez usuwania czegokolwiek.
    * **PartitionedOverwrite**: usuwa oryginalne obiekty beatmapy tylko w gęstych fragmentach wzoru.
    * **CompleteOverwrite**: usuwa wszystkie obiekty oryginalnej beatmapy między początkiem a końcem wzoru.
* **Timing Overwrite Mode**: określa sposób łączenia timingu oryginalnej beatmapy z timingiem wzoru.
* **Include hitsounds**: eksportuje wzór z efektami hitsoundów z jego punktów timingowych.
* **Include kiai**: eksportuje wzór z efektem kiai.
* **Scale to new circle size**: skaluje wzór tak, aby odstępy względem rozmiaru kółek pozostały takie same.
* **Scale to new timing**: skaluje wzór w czasie tak, aby w nowym timingu zachować liczbę taktów między obiektami. Przy redline'ach niedopasowanych do siatki mogą powstać nieprawidłowe dopasowania. Nie używaj tej opcji, jeśli masz redline'y o BPM równym 0 lub nieskończonym.
* **Snap to new timing**: dopasowuje obiekty wzoru do nowego timingu z użyciem wskazanych dzielników rytmu.
* **Manualify stacks**: ręcznie układa obiekty wzoru w stosy.
* **Fix global SV**: dopasowuje SV greenline'ów we wzorze do nowego globalnego SV, aby slidery zachowały ten sam SV w nowej beatmapie.
* **Fix BPM SV**: dopasowuje SV greenline'ów we wzorze do nowego BPM, aby slidery zachowały ten sam SV w nowej beatmapie. Zalecamy wyłączenie tej opcji przy używaniu **Scale to new timing**.
* **Fix colourhax**: dostosowuje przeskok kolorów tak, aby indeksy kolorów obiektów wzoru i oryginalnej beatmapy pozostały takie same.
* **Fix slider tick rate**: mnoży BPM wzoru, aby zachować częstotliwość ticków sliderów we wzorze.

## Menu kontekstowe wzoru

Menu kontekstowe wzorów w galerii (otwierane prawym przyciskiem myszy na wzorze) udostępnia następujące opcje:

* **Properties**: wyświetla dodatkowe informacje o wzorze, takie jak nazwa, czas utworzenia, czas ostatniego użycia i liczba użyć.
* **Delete**: usuwa zaznaczone wzory. Przytrzymaj Shift, aby pominąć okno potwierdzenia.
* **Open in File Explorer**: otwiera pliki źródłowe zaznaczonych wzorów w eksploratorze plików.
* **Group**: udostępnia opcje grupowania wzorów.

## Opcje importu

Przycisk importu umożliwia importowanie wzorów z różnych źródeł.

* **Import Selected**: tworzy wzór z obiektów aktualnie zaznaczonych w edytorze.
    * **Name**: nazwa wzoru.
* **Import from .osu File:** importuje wzory z pliku .osu na dysku.
    * **Name**: nazwa wzoru.
    * **Pattern file path**: ścieżka do importowanego pliku wzoru.
    * **Filter**: filtr dla pliku .osu.
    * **Start Time**: czas w pliku .osu, w którym rozpoczyna się wzór.
    * **End Time**: czas w pliku .osu, w którym kończy się wzór.
* **Import from Code:** importuje wzór z kodu, co przydaje się podczas udostępniania wzorów w internecie.
    * **Name**: nazwa wzoru.
    * **Hit Objects**: kod obiektów.
    * **Timing Points**: kod punktów timingowych.
    * **Global SV**: globalny slider velocity obiektów wzoru.
    * **Game Mode**: tryb gry, dla którego przeznaczony jest wzór.

## Menu Project

Menu **Project** w Pattern Gallery umożliwia:

* Zapisywanie kolekcji wzorów.
* Wczytywanie kolekcji wzorów.
* Zmianę nazw kolekcji wzorów.
* Importowanie kolekcji wzorów.
* Eksportowanie kolekcji wzorów.
