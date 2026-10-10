---
title: "Map Cleaner"
author: "OliBomby"
id: map-cleaner
---

Map Cleaner usuwa zbędne greenline'y z wybranej beatmapy i pozwala wykonać na całej mapie kilka innych przydatnych operacji.

Map Cleaner rekonstruuje wszystkie punkty timingowe. Najpierw zapisuje wpływ każdego z nich, a następnie odtwarza je w uporządkowany sposób. Dzięki temu greenline'y są automatycznie ponownie dopasowywane do obiektów, które z nich korzystają, a zbędne zmiany zostają usunięte. W trakcie tego procesu mapa i hitsoundy zasadniczo pozostają bez zmian, chyba że włączono dodatkowe funkcje. Zmiany powinny być widoczne tylko w edytorze.

## Ustawienia informacji o mapie {#map-info-settings}

Te ustawienia określają, które elementy Map Cleaner może usuwać z punktów timingowych. Jeśli chcesz zachować ostrożność, pozostaw wszystkie opcje zaznaczone, aby usunąć jak najmniej elementów.

- **Map uses volume changes in sliders**: zaznacz, jeśli zmiany głośności w trakcie slidera są *zamierzone* i nie powinny być usuwane.
- **Map uses sampleset changes in sliders**: zaznacz, jeśli zmiany zestawu próbek lub indeksu próbki w trakcie slidera są *zamierzone* i nie powinny być usuwane.
- **Map uses volume changes in spinners**: zaznacz, jeśli zmiany głośności w trakcie spinnera są *zamierzone* i nie powinny być usuwane.

## Funkcje dodatkowe {#additional-features}

Map Cleaner może wykonać te dodatkowe operacje oprócz standardowego czyszczenia.

- **Resnap objects**: ponownie dopasowuje wszystkie obiekty oraz zakończenia sliderów podczas czyszczenia mapy. Dopasowanie używa ustawionego dzielnika rytmu.
- **Resnap bookmarks**: ponownie dopasowuje wszystkie zakładki domyślną metodą. Możesz wyłączyć tę opcję, jeśli zakładki są dopasowane do niestandardowych dzielników rytmu.
- **Remove unused samples**: usuwa z zestawu map wszystkie próbki dźwiękowe nieużywane przez beatmapy ani storyboardy. Próbki, które mogą być używane przez skórki beatmap, są pomijane.
- **Remove muting**: usuwa wszystkie zmiany głośności i niestandardowego indeksu przy hitsoundach z głośnością 5%. Jeśli punkt timingowy ma głośność 5%, zmiana głośności i niestandardowego indeksu zostaną z niego usunięte.
- **Mute unclickable hitsounds**: ustawia głośność 5% dla wszystkich zdarzeń hitsoundów pochodzących z obiektów, które nie wymagają aktywnego wejścia gracza. Słyszalne pozostaną tylko kółka, początki sliderów i początki nut hold. Może to ułatwić analizę rytmu mapy i jej rozgrywki.

## Ponowne dopasowywanie

Ponowne dopasowanie polega na ustawieniu obiektu na najbliższym takcie osi czasu i zaokrągleniu czasu w dół do liczby całkowitej. Jeśli do 10 ms po czasie obiektu znajduje się redline, obiekt zostanie dopasowany do redline'a. Zapobiega to dopasowaniu obiektów do taktu znajdującego się 3 ms przed redline'em.

Zakończenia sliderów są dopasowywane na dwa sposoby. Pierwszy polega na zmianie czasu trwania slidera na najbliższą wielokrotność dzielnika rytmu. Działa to podobnie do użycia `Ctrl+Shift+S` na sliderze w standardowym edytorze osu!.

Drugi sposób jest używany tylko wtedy, gdy redline znajduje się w trakcie slidera lub do 20 ms po nim. Wtedy czas zakończenia slidera zostaje dopasowany do najbliższego taktu w nowym timingu. W efekcie czas trwania slidera jest liczbą całkowitą, a jego dokładna długość może się nieznacznie różnić wskutek zaokrąglenia do taktów osi czasu.

Zakończenia wszystkich spinnerów i nut hold są również dopasowywane drugim sposobem.

Jeśli wybrana beatmapa używa trybu gry osu!mania, ponowne dopasowanie obejmie także pozycję X nut (do środka kolumn) i ustawi ich pozycję Y na 192.

## Oś czasu

Po uruchomieniu Map Cleaner pojawi się oś czasu przedstawiająca wszystkie zmiany wprowadzone przez program w punktach timingowych.

- Czerwona linia oznacza usunięty punkt timingowy.
- Pomarańczowa linia oznacza zmieniony punkt timingowy.
- Zielona linia oznacza dodany punkt timingowy.

Jeśli punkt timingowy został tylko przesunięty, zobaczysz czerwoną linię w poprzednim położeniu i zieloną linię w nowym.

Możesz **dwukrotnie kliknąć** dowolną linię na osi czasu, aby przejść do danego momentu w edytorze.
