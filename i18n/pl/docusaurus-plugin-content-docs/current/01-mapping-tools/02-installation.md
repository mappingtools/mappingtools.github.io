---
title: "Instalacja"
author: "aehrea"
id: installation
description: Jak zainstalować Mapping Tools w systemach Windows, Linux i macOS.
keywords:
  - dokumentacja
  - mapping tools
  - instalacja
---

Mapping Tools ma natywne wersje na komputery **Windows, Linux i macOS**. Pobierz wersję dla swojego procesora ze [strony pobierania](/download) lub z [wydań GitHub](https://github.com/OliBomby/Mapping_Tools/releases/latest).

Wszystkie pakiety są samowystarczalne i zawierają środowisko uruchomieniowe .NET 10.

## Wybór pakietu

- **Windows**: wybierz instalator albo przenośne archiwum ZIP. Wybierz x64 dla większości systemów; x86 jest przeznaczone dla 32-bitowego Windows.
- **Linux**: wybierz AppImage albo przenośne archiwum ZIP dla x64 lub ARM64.
- **macOS**: pobierz przenośne archiwum ZIP dla procesora Intel (x64) lub Apple silicon (ARM64), a następnie otwórz **Mapping Tools.app** z rozpakowanego folderu.

## Integracja z edytorem na poszczególnych platformach

Narzędzia do obsługi plików beatmap działają we wszystkich wersjach desktopowych. Niektóre funkcje działające na żywo z edytorem zależą od systemu operacyjnego i sposobu integracji:

- **Geometry Dashboard** i integracja pamięci **Editor Reader** wymagają Windows.
- W systemach Linux i macOS wyszukiwanie aktualnie otwartej beatmapy domyślnie korzysta z lokalnego API **Gosumemory/Tosu** pod adresem `127.0.0.1:24050`. Uruchom zgodne API, aby używać **Open current beatmap**. Odczyt stanu edytora na żywo i automatyczne ponowne wczytywanie edytora są na tych platformach domyślnie wyłączone.
- Beatmapę zawsze można wybrać bezpośrednio przez **File > Open beatmap**.

W osu! lazer użyj opcji **File > Edit externally**. Zobacz [poradnik do lazer](/docs/guides/use-mt-in-lazer).

## Konfiguracja {#setup}

Po zainstalowaniu Mapping Tools kliknij przycisk w lewym górnym rogu, aby otworzyć menu nawigacji, a następnie przejdź do **Preferences**, by skonfigurować aplikację.

Najważniejsze pola do ustawienia:

- **osu! folder**: ścieżka do folderu zawierającego _osu!_.
- **Songs folder**: ścieżka do folderu ze wszystkimi mapami. Zazwyczaj znajduje się bezpośrednio w folderze _osu!_.
- **osu! config user file**: ścieżka do pliku konfiguracji użytkownika osu!. Zazwyczaj znajduje się bezpośrednio w folderze _osu!_ i ma nazwę `osu.[username].cfg`.

:::note

Upewnij się, że te pola są poprawne, jeśli używasz osu!stable. W przeciwnym razie Mapping Tools może nie działać prawidłowo.

:::
