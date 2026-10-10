---
title: "QuickRun"
author: "OliBomby"
id: quickrun
description: Tout savoir sur QuickRun.
keywords:
  - documentation
  - mapping tools
  - quickrun
  - smartquickrun
  - quickundo
---

QuickRun est un excellent moyen d'accélérer l'utilisation de Mapping Tools. Cette fonction permet de lancer des outils avec un raccourci clavier et de recharger automatiquement l'éditeur : l'utilisation d'un outil se fait ainsi en une seule pression de touche.

Vous pouvez activer QuickRun dans les **Préférences**.

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="Exemple de QuickRun"
  sources={{
    light: useBaseUrl('./img/quickrun_example_light.png'),
    dark: useBaseUrl('./img/quickrun_example_dark.png'),
  }}
/>
```

## Configuration {#setup}

Pour activer QuickRun, ouvrez les **Préférences** et attribuez un raccourci au champ **Raccourci QuickRun**. Ensuite, en appuyant sur ce raccourci, vous lancerez l'outil actuellement ouvert dans Mapping Tools.

`Alt+M` est un bon choix, car ce raccourci n'interfère pas avec les raccourcis habituels de l'éditeur osu!.

Si l'option **Recharger automatiquement après QuickRun** est activée, Mapping Tools enverra automatiquement une commande à votre client osu! pour recharger l'éditeur une fois l'outil exécuté. Vous n'aurez ainsi pas besoin de le recharger manuellement.

:::info

N'oubliez pas qu'un lancement avec QuickRun utilise **toujours la beatmap actuellement ouverte dans l'éditeur**, et non celle sélectionnée dans Mapping Tools.

:::

## SmartQuickRun {#smartquickrun}

La case située à droite du champ du raccourci QuickRun permet d'activer **SmartQuickRun**. Cette fonction lance des outils différents selon le nombre d'objets sélectionnés dans l'éditeur.

SmartQuickRun distingue trois cas :

- **Aucun** objet sélectionné : `N=0`.
- **Un seul** objet sélectionné : `N=1`.
- **Plusieurs** objets sélectionnés : `N>1`.

## QuickUndo {#quickundo}

**QuickUndo** est un raccourci qui charge dans l'éditeur la sauvegarde la plus récente, ce qui annule de fait l'exécution précédente de l'outil. Il prend aussi en charge le **rechargement automatique**, comme QuickRun. Il est recommandé d'utiliser QuickUndo avec QuickRun.

`Ctrl+Shift+Z` est un bon raccourci pour QuickUndo.
