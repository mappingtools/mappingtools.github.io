---
title: "Kopie zapasowe"
author: "OliBomby"
id: backups
description: Wszystko o kopiach zapasowych Mapping Tools.
keywords:
  - dokumentacja
  - mapping tools
  - kopie zapasowe
---

Mapping Tools przechowuje kopie zapasowe beatmap w skonfigurowanym folderze. Otwórz go przez **About > Open backups folder** lub zmień jego lokalizację w **Preferences**.

Gdy skonfigurowano odczyt stanu edytora na żywo, kopie zapasowe mogą zawierać najnowszy niezapisany stan z edytora. W przeciwnym razie Mapping Tools kopiuje plik beatmapy dostępny na dysku.

## Automatyczne kopie zapasowe {#automatic-backups}

Gdy ta funkcja jest włączona, przed każdą zmianą beatmapy przez narzędzie Mapping Tools tworzy kopię zapasową. Możesz dzięki niej przywrócić poprzedni stan i cofnąć działanie narzędzia. W **Preferences** ustaw folder kopii zapasowych i limit ich przechowywania. Po osiągnięciu limitu usuwane są najstarsze kopie.

## Okresowe kopie zapasowe {#periodic-backups}

Gdy ta funkcja jest włączona, Mapping Tools okresowo tworzy kopię aktualnej beatmapy, jeśli może odczytać stan edytora na żywo. Pomija kopię, jeśli beatmapa nie zmieniła się od poprzedniej. Nazwy okresowych kopii zawierają `PB`.

## Ręczne kopie zapasowe {#manual-backups}

Użyj menu **File**, aby utworzyć kopię wybranej beatmapy lub wczytać kopię do niej. Nazwy ręcznych kopii zawierają `UB`. **QuickUndo** przywraca najnowszą kopię inną niż okresowa do beatmapy aktualnie otwartej w osu!.
