---
title: FAQ
author: OliBomby, aehrea
---

# FAQ

## Dlaczego nie widzę żadnych zmian na mojej mapie?

Sprawdź **Selected Map** (niebieski pasek u góry aplikacji), aby upewnić się, że ustawiono prawidłową ścieżkę do beatmapy.

Po uruchomieniu narzędzia **wczytaj ponownie edytor bez zapisywania**. Zapisanie mapy w edytorze cofa zmiany wprowadzone przez narzędzie, ponieważ plik .osu zostaje nadpisany starą wersją beatmapy. Aby szybko wczytać mapę ponownie, naciśnij w edytorze `Ctrl+L`, a następnie `Enter`.

## Podczas uruchamiania narzędzia pojawia się błąd „Could not find part of the path” lub „Empty path name is not legal”.

Najedź kursorem na **nazwę beatmapy u góry okna**, aby zobaczyć pełną ścieżkę. Czy ta ścieżka istnieje? Czy folder Songs znajduje się we właściwym miejscu? Jeśli folder Songs nie znajduje się w domyślnej lokalizacji AppData, ustaw prawidłową ścieżkę do niego w **Preferences**.

## Przy uruchamianiu dowolnego narzędzia na konkretnej mapie za każdym razem pojawia się błąd, ale na innych mapach nie.

Edytowana mapa prawdopodobnie używa starego, nieobsługiwanego formatu pliku albo jest uszkodzona. Otwórz ją w edytorze i zapisz. Wymusi to aktualizację beatmapy przez osu! do najnowszego formatu zgodnego z Mapping Tools.

## Narzędzie uszkodziło moją mapę. Co zrobić?

Mapping Tools tworzy kopie zapasowe beatmap za każdym razem, gdy wprowadza zmianę. Znajdziesz je w **About > Open backup folder**. Kopię zapasową możesz też wczytać do **Current Map** przez **File > Load backup** albo użyć skrótu QuickUndo, który można włączyć w **Preferences**.

## Nie działa „Open Current Beatmap” albo zaznaczone obiekty nie są wykrywane.

Te funkcje wymagają odczytu pamięci klienta osu!. Czasami przestaje on działać; zwykle pomaga ponowne uruchomienie osu! lub komputera. Inne możliwe przyczyny i rozwiązania:

- Zapora lub program antywirusowy blokuje Mapping Tools: wyłącz program antywirusowy albo dodaj Mapping Tools do wyjątków i spróbuj ponownie.
- Nie używasz najnowszej wersji Mapping Tools: czasami aktualizacja Mapping Tools jest potrzebna, aby uwzględnić zmiany w osu!.
- Nie używasz najnowszej wersji osu!: wyłącz serwery prywatne i zaktualizuj osu! do najnowszej wersji.
- osu! ponownie się zaktualizowało i zmieniło przesunięcia w pamięci: powiadom mnie, abym mógł naprawić problem.
- Używasz Mapping Tools w systemie Windows 7 lub starszym: upewnij się, że masz zainstalowany .NET Framework 4.5.1 lub nowszy.
- Używasz Mapping Tools w systemie innym niż Windows: zapoznaj się z [instrukcją instalacji](/docs/mapping-tools/installation).

## Jak wyciszyć zakończenia sliderów bez kopiowania hitsoundów?

Aby wyciszyć same zakończenia sliderów, pozostaw pole **Copy hitsounds from** puste, a w polu **Copy hitsounds to** dodaj mapę, na której mają być wyciszone zakończenia sliderów. Hitsoundy nie zostaną skopiowane, ale zakończenia sliderów zostaną wyciszone.

Jeśli podczas wyciszania zakończeń sliderów kopiujesz hitsoundy, narzędzie używa obiektów ze źródłowej beatmapy jako punktu odniesienia. Dlatego nie wyciszy zakończeń sliderów w miejscach, w których dodano hitsoundy. Z tego powodu wyciszanie zakończeń sliderów jest częścią Hitsound Copier, a nie osobnym narzędziem.

## Podczas uruchamiania Mapping Tools prosi o instalację .NET, mimo że mam go już zainstalowanego.

Aktualne wersje Mapping Tools są przeznaczone dla .NET 10 i zawierają własne środowisko uruchomieniowe, więc nie powinny wymagać osobnej instalacji .NET.

Jeśli nadal widzisz monit o instalację .NET, upewnij się, że uruchamiasz aktualne wydanie Mapping Tools, a następnie zainstaluj je ponownie z nowo pobranego pliku ze strony.

## Czy Mapping Tools działa w lazer?

Tak, większość funkcji Mapping Tools działa w lazer. Więcej informacji znajdziesz w [poradniku](/docs/guides/use-mt-in-lazer).

## Mam pytanie, na które nie ma tu odpowiedzi, albo znalazłem błąd.

Zadaj pytanie na kanale `mt-techsupport` na [Discordzie](https://discord.gg/YfjKN2yjQV), napisz do mnie bezpośrednio na Discordzie (`olibomby`) albo utwórz zgłoszenie w [GitHub](https://github.com/OliBomby/Mapping_Tools/issues).
