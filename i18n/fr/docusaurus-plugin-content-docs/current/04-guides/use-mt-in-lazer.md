---
title: "Utiliser Mapping Tools dans osu! lazer"
author: "OliBomby"
id: use-mt-in-lazer
description: Comment utiliser Mapping Tools avec osu! lazer.
keywords:
  - documentation
  - mapping tools
  - lazer
  - compatibilité
---

[osu! lazer](https://github.com/ppy/osu) utilise un flux de travail différent de celui d'osu! stable pour modifier les beatmaps. Mapping Tools peut modifier les fichiers de beatmap des deux clients. Dans lazer, utilisez la fonction de modification externe et gardez à l'esprit que certaines fonctions ont des limites.

## Utiliser Mapping Tools dans osu! lazer

Dans l'éditeur osu! lazer, cliquez sur **Fichier > Modifier en externe**. Un dossier temporaire contenant tous les fichiers du mapset en cours de modification sera créé. Mapping Tools détectera automatiquement ce dossier et le définira comme beatmap sélectionnée. Une fois les modifications terminées avec Mapping Tools, cliquez sur **Terminer la modification et importer les changements** ; osu! lazer importera alors vos changements.

![Fichier > Modifier en externe](assets/osu_TAqF8oqGPr.png)

## Compatibilité

Toutes les fonctions de Mapping Tools ne fonctionnent pas dans osu! lazer. Cette section récapitule la compatibilité des fonctions de Mapping Tools.

Les fonctions qui utilisent Editor Reader ne fonctionnent pas dans osu! lazer. Il est donc recommandé de désactiver Editor Reader dans les **Préférences** si vous comptez utiliser uniquement osu! lazer.

### Général

- :x: **Ouvrir la beatmap actuelle** ne fonctionne pas.
- :x: **Heure actuelle de l'éditeur** ne fonctionne pas.
- :x: **Objets sélectionnés** ne fonctionne pas.
- :white_check_mark: **Créer une sauvegarde** fonctionne.
- :white_check_mark: **Charger une sauvegarde** fonctionne.
- :white_check_mark: Les **trajectoires de slider** comprenant plusieurs types de segments sont entièrement prises en charge.

### Outils

- :x: **Geometry Dashboard** ne fonctionne pas. Il dépend d'Editor Reader.
- :white_check_mark: **Hitsound Copier** fonctionne.
- :large_orange_diamond: **Hitsound Studio** fonctionne, mais les références aux échantillons importés et aux beatmaps cessent de fonctionner lorsque le dossier temporaire est supprimé.
- :white_check_mark: **Pattern Gallery** fonctionne.
- :white_check_mark: **Property Transformer** fonctionne.
- :white_check_mark: **Sliderator** fonctionne, mais il ralentit fortement l'éditeur lazer.
- :white_check_mark: **Tumour Generator 2** fonctionne.
- :large_orange_diamond: **Auto-fail Detector** fonctionne, mais le mécanisme d'échec automatique n'existe pas dans lazer.
- :white_check_mark: **Combo Colour Studio** fonctionne.
- :white_check_mark: **Hitsound Preview Helper** fonctionne.
- :white_check_mark: **Map Cleaner** fonctionne.
- :white_check_mark: **Mapset Merger** fonctionne.
- :white_check_mark: **Metadata Manager** fonctionne.
- :white_check_mark: **Rhythm Guide** fonctionne.
- :white_check_mark: **Slider Completionator** fonctionne.
- :white_check_mark: **Slider Merger** fonctionne.
- :large_orange_diamond: **Slider Picturator** fonctionne, mais le slider image ne s'affiche pas dans lazer.
- :white_check_mark: **Timing Copier** fonctionne.
- :white_check_mark: **Timing Helper** fonctionne.

## À propos de la compatibilité future avec lazer

osu! lazer étant activement développé, son client et son format de fichier sont susceptibles de changer, ce qui pourrait empêcher Mapping Tools de fonctionner.
Si vous rencontrez un problème avec Mapping Tools dans lazer qui ne figure pas dans cette liste, signalez-le avec **À propos > Signaler un problème**.
