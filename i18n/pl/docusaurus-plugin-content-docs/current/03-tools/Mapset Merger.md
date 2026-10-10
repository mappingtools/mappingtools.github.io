---
title: "Mapset Merger"
author: "OliBomby"
id: mapset-merger
---

Mapset Merger pozwala połączyć kilka zestawów map w jeden duży zestaw.

Narzędzie automatycznie rozwiązuje konflikty plików, przenosząc jak najwięcej plików do osobnych podfolderów i rekonstruując zestawy próbek dla niestandardowych hitsoundów. Niestety nie można połączyć skórek beatmap ani niestandardowych hitsoundów spinnerów, ponieważ pliki te nie są jawnie wskazane w beatmapie, a więc ich obecność zawsze wpływa na cały zestaw map.

## Dodawanie zestawów map {#adding-mapsets}

Aby dodać zestaw map, kliknij przycisk plusa w prawym dolnym rogu. Do kolekcji zostanie dodany nowy zestaw z informacjami z wybranej beatmapy. Przytrzymanie klawisza Shift podczas kliknięcia przycisku plusa sprawi, że użyty zostanie zestaw aktualnie otwarty w kliencie osu!.

Wszystkie zestawy map do połączenia będą widoczne na liście. Każdy ma nazwę i ścieżkę do folderu głównego zestawu. Nazwy posłużą do kategoryzowania plików w połączonym zestawie, więc powinny być krótkie i niepowtarzalne. Ścieżkę można edytować na liście przez **dwukrotne kliknięcie**. Pojawi się też przycisk przeglądania, który umożliwia wybranie ścieżki w eksploratorze plików.

## Eksportowanie {#exporting}

Kliknij przycisk uruchamiania, aby połączyć zestawy map i wyeksportować pliki do folderu określonego w polu **Export path**. Upewnij się, że folder istnieje, inaczej pojawi się błąd.

Jeśli zaznaczysz pole **Move storyboard to .osu**, Mapset Merger przeniesie zawartość każdego pliku .osb do plików .osu. Storyboardy będą wtedy przypisane do konkretnych beatmap i nie będą przenikać do innych zestawów w połączonym zestawie. Przydaje się to podczas łączenia zestawów z różnymi storyboardami. Zachowaj jednak ostrożność: duży plik storyboardu przy wielu poziomach trudności może zwielokrotnić ilość danych i znacznie zwiększyć rozmiar plików .osu.
