---
title: "Konwersja hitsoundów z mania na standard"
author: "OliBomby"
id: convert-mania-to-standard-hs
description: Jak konwertować hitsoundy osu!mania na hitsoundy osu!standard za pomocą Hitsound Studio.
keywords:
  - dokumentacja
  - mapping tools
  - hitsound studio
  - hitsoundy
  - konwersja hitsoundów
---

osu!mania pozwala umieszczać kilka nut w tym samym takcie. Daje to większą swobodę przy dodawaniu hitsoundów, ponieważ można używać jednocześnie wielu zestawów próbek i niestandardowych próbek. Przenoszenie hitsoundów z osu!mania do osu!standard jest jednak trudniejsze, bo w osu!standard może przypadać najwyżej jedna nuta na takt. Hitsound Studio umożliwia konwertowanie hitsoundów z osu!mania na hitsoundy osu!standard i otwiera wiele nowych możliwości ich tworzenia.

## Krok 1: Konfiguracja Hitsound Studio {#1}

Otwórz Hitsound Studio w Mapping Tools. Kliknij menu **Project**, a następnie **New project**. Jeśli chcesz zachować obecną konfigurację Hitsound Studio, najpierw zapisz ją przez **Save project**.

## Krok 2: Importowanie warstw hitsoundów {#2}

Kliknij przycisk plusa w prawym dolnym rogu okna, aby otworzyć nowe okno importowania. Przejdź na kartę **Import hitsounds**, aby zaimportować wszystkie hitsoundy z beatmapy. W polu **Source beatmap** wybierz beatmapę z hitsoundami osu!mania, które chcesz przekonwertować. Zaznacz również pola **Detect duplicate samples** i **Remove duplicate hitsounds** oraz **Include storyboarded samples**, jeśli mapa używa próbek ze storyboardu do wypełniania niektórych luk w hitsoundach. Kliknij **Accept**, aby zaimportować hitsoundy. W Hitsound Studio pojawi się lista warstw hitsoundów.

## Krok 3: Konfiguracja {#3}

Na dole są jeszcze dwie opcje do ustawienia: **Base beatmap** i **Default sample**. Jako beatmapę bazową wybierz mapę do konwersji. Z niej zostaną użyte metadane, timing i poziomy głośności.

Dla domyślnej próbki jest kilka możliwości, zależnie od preferencji. Próbka domyślna jest używana, gdy w warstwach hitsoundów nie zdefiniowano dźwięku hitnormal, którego osu!standard zawsze potrzebuje. Możesz pozostawić to pole puste, wybrać zestaw próbek Soft i ustawić głośność na `-1`.

## Krok 4: Eksport {#4}

Kliknij przycisk uruchamiania w prawym dolnym rogu okna. Otworzy się okno z opcjami eksportu. Upewnij się, że **Export mode** i **Export gamemode** są ustawione na **Standard**. Możesz też zmienić **Sample file format** i **Mixed sample file format** na **Vorbis (.ogg)**, aby przekonwertować wszystkie próbki do `.ogg` i zmniejszyć rozmiar plików. Następnie kliknij **Accept**, aby rozpocząć eksportowanie hitsoundów.

Po zakończeniu eksportu przez Hitsound Studio folder eksportu będzie zawierał plik `.osu` z różnicą hitsoundów osu!standard oraz zestaw plików audio wymaganych przez hitsoundy. Skopiuj wszystkie te pliki do zestawu map osu!standard, a następnie skopiuj hitsoundy z różnicy za pomocą Hitsound Copier.
