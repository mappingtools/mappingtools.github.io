---
title: "Korzystanie z Mapping Tools w osu! lazer"
author: "OliBomby"
id: use-mt-in-lazer
description: Jak korzystać z Mapping Tools w osu! lazer.
keywords:
  - dokumentacja
  - mapping tools
  - lazer
  - zgodność
---

[osu! lazer](https://github.com/ppy/osu) korzysta z innego sposobu edycji beatmap niż osu! stable. Mapping Tools może edytować pliki beatmap z obu klientów. W lazer używaj funkcji edycji zewnętrznej i pamiętaj, że niektóre funkcje mają ograniczenia.

## Korzystanie z Mapping Tools w osu! lazer

W edytorze osu! lazer kliknij **File > Edit externally**. Zostanie utworzony folder tymczasowy ze wszystkimi plikami aktualnie edytowanego zestawu map. Mapping Tools automatycznie wykryje ten folder i wybierze go jako beatmapę. Po zakończeniu edycji w Mapping Tools kliknij **Finish editing and import changes**, aby osu! lazer zaimportował zmiany.

![File > Edit externally](assets/osu_TAqF8oqGPr.png)

## Zgodność

Nie wszystkie funkcje Mapping Tools działają w osu! lazer. W tej sekcji opisano zgodność poszczególnych funkcji.

Funkcje korzystające z Editor Reader nie działają w osu! lazer. Jeśli zamierzasz używać wyłącznie lazer, zalecamy wyłączenie Editor Reader w **Preferences**.

### Ogólne
- :x: **Open current beatmap** nie działa.
- :x: **Current editor time** nie działa.
- :x: **Selected hit objects** nie działa.
- :white_check_mark: **Generate backup** działa.
- :white_check_mark: **Load backup** działa.
- :white_check_mark: **Slider paths** z wieloma typami segmentów są w pełni obsługiwane.

### Narzędzia
- :x: **Geometry Dashboard** nie działa, ponieważ wymaga Editor Reader.
- :white_check_mark: **Hitsound Copier** działa.
- :large_orange_diamond: **Hitsound Studio** działa, ale odwołania do zaimportowanych próbek i beatmap przestają działać po usunięciu folderu tymczasowego.
- :white_check_mark: **Pattern Gallery** działa.
- :white_check_mark: **Property Transformer** działa.
- :white_check_mark: **Sliderator** działa, ale powoduje bardzo duże spowolnienia w edytorze lazer.
- :white_check_mark: **Tumour Generator 2** działa.
- :large_orange_diamond: **Auto-fail Detector** działa, ale auto-fail nie występuje w lazer.
- :white_check_mark: **Combo Colour Studio** działa.
- :white_check_mark: **Hitsound Preview Helper** działa.
- :white_check_mark: **Map Cleaner** działa.
- :white_check_mark: **Mapset Merger** działa.
- :white_check_mark: **Metadata Manager** działa.
- :white_check_mark: **Rhythm Guide** działa.
- :white_check_mark: **Slider Completionator** działa.
- :white_check_mark: **Slider Merger** działa.
- :large_orange_diamond: **Slider Picturator** działa, ale obrazkowy slider nie wyświetla się w lazer.
- :white_check_mark: **Timing Copier** działa.
- :white_check_mark: **Timing Helper** działa.

## Uwaga dotycząca dalszej zgodności z lazer

osu! lazer jest aktywnie rozwijane, więc format plików i klient mogą się zmieniać, co może spowodować nieprawidłowe działanie Mapping Tools.
Jeśli napotkasz w lazer problem z Mapping Tools, którego nie opisano na tej liście, zgłoś go przez **About > Report an issue**.
