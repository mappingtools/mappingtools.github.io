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

## Zgodność funkcji {#editor-integration-by-platform}

✅ Obsługiwane · ❌ Nieobsługiwane. Obsługiwane funkcje mogą wymagać konfiguracji opisanej poniżej.

<div className="feature-compatibility">

| System | Klient osu! | Odczyt/zapis beatmap | Pobieranie aktualnej beatmapy | Odczyt bieżącego stanu edytora | Automatyczne ponowne wczytywanie | Globalne skróty klawiszowe | Nakładka Geometry Dashboard |
| --- | --- | :---: | :---: | :---: | :---: | :---: | :---: |
| Windows | stable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Windows | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Windows | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Linux | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| macOS | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |

</div>

- **osu! stable**: w systemie Windows wykrywanie aktualnej beatmapy i odczyt bieżącego stanu edytora korzystają z integracji z pamięcią, a automatyczne ponowne wczytywanie symuluje naciśnięcia klawiszy. W systemach Linux i macOS uruchom stable przez Wine oraz zgodne API **Gosumemory/Tosu** pod adresem `127.0.0.1:24050`, aby pobierać aktualną beatmapę. Ustaw **Songs folder** w preferencjach.
- **osu! lazer**: użyj opcji **File > Edit externally**, aby udostępnić pliki beatmapy. Mapping Tools automatycznie wykryje beatmapę edytowaną zewnętrznie, co w tej tabeli liczy się jako pobranie aktualnej beatmapy. Użyj opcji **Finish editing and import changes** w lazer, aby zastosować zmiany. Zobacz [poradnik do lazer](/docs/guides/use-mt-in-lazer).
- **osu! unstable**: wybierz **MTIPC** w preferencjach, aby pobierać aktualną beatmapę, odczytywać bieżący stan edytora i ponownie wczytywać edytor. Te funkcje wymagają serwera MTIPC klienta. Odczyt bieżącego stanu edytora i ponowne wczytywanie edytora są domyślnie wyłączone w systemach Linux i macOS.
- **Globalne skróty klawiszowe**: w systemie Linux ich obsługa zależy od X11 lub środowiska graficznego z portalem globalnych skrótów. W systemie macOS przyznaj uprawnienia dostępu do klawiatury, o które poprosi system.

Beatmapę zawsze możesz wybrać bezpośrednio przez **File > Open beatmap**.

## Konfiguracja {#setup}

Po zainstalowaniu Mapping Tools kliknij przycisk w lewym górnym rogu, aby otworzyć menu nawigacji, a następnie przejdź do **Preferences**, by skonfigurować aplikację.

Najważniejsze pola do ustawienia:

- **osu! folder**: ścieżka do folderu zawierającego _osu!_.
- **Songs folder**: ścieżka do folderu ze wszystkimi mapami. Zazwyczaj znajduje się bezpośrednio w folderze _osu!_.
- **osu! config user file**: ścieżka do pliku konfiguracji użytkownika osu!. Zazwyczaj znajduje się bezpośrednio w folderze _osu!_ i ma nazwę `osu.[username].cfg`.

:::note

Upewnij się, że te pola są poprawne, jeśli używasz osu!stable. W przeciwnym razie Mapping Tools może nie działać prawidłowo.

:::
