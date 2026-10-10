---
title: "QuickRun"
author: "OliBomby"
id: quickrun
description: Alles over QuickRun van Mapping Tools.
keywords:
  - docs
  - mapping tools
  - quickrun
  - smartquickrun
  - quickundo
---

Met QuickRun kun je Mapping Tools sneller gebruiken. Je start tools met een sneltoets en kunt de editor automatisch opnieuw laden. Zo voer je een tool met één druk op de knop uit.

Je kunt QuickRun inschakelen via **Voorkeuren**.

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="QuickRun-voorbeeld"
  sources={{
    light: useBaseUrl('./img/quickrun_example_light.png'),
    dark: useBaseUrl('./img/quickrun_example_dark.png'),
  }}
/>
```

## Instellen {#setup}

Ga naar **Voorkeuren** en wijs een sneltoets toe aan het veld **QuickRun-sneltoets**. Wanneer je die sneltoets indrukt, wordt de tool uitgevoerd die op dat moment in Mapping Tools geopend is.

`Alt+M` is een handige sneltoets, omdat deze niet botst met de standaard osu!-editor sneltoetsen.

Als **Automatisch herladen na QuickRun** is ingeschakeld, stuurt Mapping Tools na afloop van de tool automatisch een opdracht naar je osu!-client om de editor opnieuw te laden. Zo hoef je dat niet zelf te doen.

:::info
QuickRun gebruikt **altijd de beatmap die momenteel in de editor is geopend**, niet de beatmap die in Mapping Tools is geselecteerd.
:::

## SmartQuickRun {#smartquickrun}

Vink het vakje rechts van het veld voor de QuickRun-sneltoets aan om **SmartQuickRun** in te schakelen. Hiermee kun je verschillende tools starten, afhankelijk van het aantal objecten dat je in de editor hebt geselecteerd.

SmartQuickRun maakt onderscheid tussen drie situaties:
- **Geen** geselecteerde hitobjects: `N=0`
- **Enkel** hitobject geselecteerd: `N=1`
- **Meerdere** hitobjects geselecteerd: `N>1`

## QuickUndo {#quickundo}

**QuickUndo** is een sneltoets die de nieuwste back-up in de editor laadt. Daarmee maakt hij de vorige toolbewerking ongedaan. QuickUndo ondersteunt ook automatisch herladen, net als QuickRun. We raden aan QuickUndo samen met QuickRun te gebruiken.

`Ctrl+Shift+Z` is een handige sneltoets voor QuickUndo.
