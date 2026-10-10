---
title: "QuickRun"
author: "OliBomby"
id: quickrun
description: Wszystko o QuickRun.
keywords:
  - dokumentacja
  - mapping tools
  - quickrun
  - smartquickrun
  - quickundo
---


QuickRun pozwala znacznie przyspieszyć korzystanie z Mapping Tools. Umożliwia uruchamianie narzędzi skrótem klawiszowym i automatyczne ponowne wczytanie edytora, dzięki czemu całe użycie narzędzia sprowadza się do jednego naciśnięcia przycisku.

QuickRun można włączyć w **Preferences**.

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="Przykład QuickRun"
  sources={{
    light: useBaseUrl('./img/quickrun_example_light.png'),
    dark: useBaseUrl('./img/quickrun_example_dark.png'),
  }}
/>
```

## Konfiguracja {#setup}

Aby włączyć QuickRun, przejdź do **Preferences** i przypisz skrót do pola **QuickRun hotkey**. Po naciśnięciu skrótu uruchomi się narzędzie aktualnie otwarte w Mapping Tools.

`Alt+M` to dobry skrót, ponieważ nie koliduje ze standardowymi skrótami edytora osu!.

Jeśli włączysz opcję **Auto reload after QuickRun**, po zakończeniu działania narzędzia Mapping Tools automatycznie wyśle do klienta osu! polecenie ponownego wczytania edytora. Dzięki temu nie musisz robić tego ręcznie.

:::info
Pamiętaj, że QuickRun **zawsze używa beatmapy aktualnie otwartej w edytorze**, a nie mapy wybranej w Mapping Tools.
:::

## SmartQuickRun {#smartquickrun}

Zaznaczenie pola po prawej stronie pola skrótu QuickRun włącza **SmartQuickRun**. Ta funkcja pozwala uruchamiać różne narzędzia QuickRun w zależności od liczby obiektów zaznaczonych w edytorze.

SmartQuickRun rozróżnia trzy sytuacje:
- **None**: gdy nie zaznaczono żadnych obiektów. `N=0`
- **Single**: gdy zaznaczono dokładnie jeden obiekt. `N=1`
- **Multiple**: gdy zaznaczono więcej niż jeden obiekt. `N>1`

## QuickUndo {#quickundo}

**QuickUndo** to skrót, który wczytuje do edytora najnowszą kopię zapasową, skutecznie cofając poprzednie uruchomienie narzędzia. Obsługuje też funkcję **Auto reload**, tak jak QuickRun. Zalecamy używanie QuickUndo razem z QuickRun.

`Ctrl+Shift+Z` to dobry skrót dla QuickUndo.
