---
title: "Sliderator"
author: "OliBomby"
id: sliderator
---

Sliderator pozwala tworzyć slidery lub strumienie, których prędkość zmienia się w trakcie.

Aby zacząć, zaimportuj slider za pomocą przycisków w lewym górnym rogu i edytuj wykres prawym przyciskiem myszy.

:::caution Nierankowalne

Slidery utworzone przez Sliderator są uznawane za nierankowalne. Szczegóły znajdziesz w [tym poście na Reddicie](https://www.reddit.com/r/osugame/comments/xnmcuq/acceldecel_sliders_made_with_mapping_tool_is_now/?utm_source=share&utm_medium=web2x&context=3).

:::

## Importowanie sliderów {#importing}

Zanim zaczniesz korzystać ze Sliderator, zaimportuj co najmniej jeden slider przyciskiem **Import sliders** w lewym górnym rogu.
Slidery można importować na trzy sposoby:

- **Selected** importuje slidery aktualnie zaznaczone w edytorze osu!.
- **Bookmarked** importuje slidery z wybranej beatmapy, na których umieszczono zakładkę.
- **Time** importuje slidery z wybranej beatmapy wskazane kodem czasu wpisanym w sąsiednim polu. Kod czasu powinien mieć taki sam format jak po skopiowaniu obiektów z edytora do pola tekstowego, na przykład: `00:56:823 (1,2,1,2) -`

Jeśli zaimportowano kilka sliderów, można przełączać się między nimi przyciskami w lewo i w prawo. Kliknięcie tych przycisków z wciśniętym Shift dodatkowo szybko przetworzy bieżący slider przed przejściem do następnego.

Po wybraniu slidera wartości **Beat length**, **BPM** i **Global SV** są ustawiane automatycznie.

## Wykres {#graph}

Wykres to najważniejszy element Sliderator. Określa ruch kulki slidera w czasie.

Oś X przedstawia **czas** trwania całego slidera. Czas trwania określa pole **Beat length**.
Dzielnik dopasowania rytmu dla linii na osi X można zmienić suwakiem pod wykresem.

Oś Y ma dwa tryby, które przełącza się zielonym przyciskiem pod wykresem:

- **X** to tryb pozycji. Oś Y przedstawia pozycję wzdłuż slidera, więc możesz dokładnie określić, gdzie kulka ma się znajdować w danym czasie.
- **V** to tryb prędkości. Oś Y przedstawia mnożnik prędkości slidera, od dodatniego do ujemnego **SV limit**.

![Wykres Sliderator](./assets/sliderator_graph.png)

### Edycja wykresu {#editing-graph}

Wykres edytuje się za pomocą punktów kontrolnych i interpolacji.

Aby dodać punkt kontrolny, kliknij wykres prawym przyciskiem myszy. Kliknięcie punktu kontrolnego prawym przyciskiem otwiera menu kontekstowe, z którego możesz go usunąć lub zmienić metodę interpolacji. Użyj **Shift+kliknięcia prawym przyciskiem** punktu kontrolnego, aby natychmiast go usunąć. Przytrzymaj lewy przycisk myszy na punkcie, aby go przeciągnąć. Widok można przesuwać i przybliżać, przeciągając tło lewym przyciskiem myszy lub używając kółka przewijania.

Pośrodku każdego interpolowanego odcinka znajduje się mniejszy punkt kontrolny. Przeciągnij go w górę lub w dół, aby zmienić kształt interpolacji. Kliknij go prawym przyciskiem myszy, aby przywrócić domyślne ustawienie.

Przeciąganie punktów kontrolnych ułatwiają następujące skróty:

- **Shift** ogranicza ruch do płaszczyzny poziomej.
- **Ctrl** ogranicza ruch do płaszczyzny pionowej.
- **Alt** wyłącza przyciąganie.

### Inne opcje wykresu {#graph-controls}

Ta sekcja opisuje pozostałe opcje związane z wykresem.

- **Beat length** to czas trwania slidera w taktach. Wpływa też na szerokość wykresu.
- **BPM** to liczba uderzeń na minutę, w jakiej działa slider. Powinna odpowiadać BPM w miejscu, w którym slider zostanie wyeksportowany.
- **Global SV** to mnożnik sliderów beatmapy. Powinien odpowiadać mnożnikowi sliderów wybranej beatmapy.
- **SV limit** to maksymalne SV na wykresie. Wpływa też na wysokość wykresu w trybie prędkości. Domyślnie wynosi 10, czyli tyle, ile wynosi maksymalne SV w inherited timing points.
- **Scale to completion** skaluje pionowo wszystkie punkty kontrolne, tak aby kulka dotarła najdalej do wybranego stopnia ukończenia slidera.
- **Reset graph** przywraca domyślny stan wykresu.
- **Show red anchors** wyświetla w trybie pozycji czerwone punkty kontrolne slidera jako czerwone linie poziome.
- **Show graph anchors** wyświetla położenie punktów kontrolnych wykresu w podglądzie slidera.
- **Expected segment count** pokazuje szacunkową liczbę punktów kontrolnych slidera wymaganą przez bieżącą konfigurację. Wartość poniżej 10000 nie powinna znacznie spowalniać gry.

## Opcje eksportu {#export-options}

Uruchomienie Sliderator eksportuje przetworzony slider do wybranej beatmapy we wskazanym czasie. Możesz jedynie dodać go do beatmapy albo zastąpić istniejące obiekty opcją **Override**.

Po zaznaczeniu **Export as stream instead** Sliderator wyeksportuje strumień kółek podążających za prędkością i czasem trwania slidera. Dzielnik dopasowania rytmu wykresu określa liczbę kółek umieszczanych w każdym takcie.

Możesz ręcznie ustawić **New SV** przetworzonego slidera. Powinno ono zbliżać się do maksymalnej prędkości na wykresie. Wartość automatyczna zwykle jest odpowiednia, ale czasem można ją nieco zmniejszyć, aby ograniczyć liczbę punktów kontrolnych bez pogorszenia jakości slidera.

**Minimum tumour length** pozwala znacznie zmniejszyć liczbę punktów kontrolnych w wynikowym sliderze. Sliderator używa niewidocznych tumourów, aby spowolnić kulkę, więc zwiększenie minimalnej długości tumourów tworzy większe tumoury i ogranicza ich liczbę. Jedyną wadą jest mniej płynny ruch kulki przy większych tumourach.

**Delegate SV to BPM** sprawia, że Sliderator używa BPM do ustawienia nowego SV slidera. Usuwa to ograniczenie 10x SV dla inherited timing points. Umożliwia też włączenie opcji **Remove slider ticks**, która usuwa ticki slidera za pomocą inherited timing point z SV równym `NaN`.
