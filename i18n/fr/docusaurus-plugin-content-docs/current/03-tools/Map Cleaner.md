---
title: "Map Cleaner"
author: "OliBomby"
id: map-cleaner
---

Map Cleaner nettoie la beatmap sélectionnée en supprimant les greenlines inutiles et permet aussi d'effectuer d'autres opérations utiles sur l'ensemble de la beatmap.

Map Cleaner reconstruit tous les points de timing. Il mémorise d'abord l'influence de chacun, puis les réorganise. Les greenlines sont ainsi automatiquement recalées sur les objets qui en dépendent, et les modifications inutiles sont supprimées.
Pendant ce processus, la beatmap et ses hitsounds restent essentiellement identiques, sauf si des fonctions supplémentaires sont activées. Seuls des changements d'apparence dans l'éditeur devraient être visibles.

## Paramètres des informations de la beatmap {#map-info-settings}

Ces paramètres déterminent ce que Map Cleaner supprime ou conserve dans les points de timing.
Pour plus de prudence, vous pouvez tous les laisser cochés ; l'outil supprimera alors le moins d'éléments possible.

- **La beatmap utilise des changements de volume dans les sliders** : cochez cette option pour indiquer à Map Cleaner que les changements de volume pendant le corps d'un slider sont *intentionnels* et ne doivent pas être supprimés.

- **La beatmap utilise des changements d'échantillon dans les sliders** : cochez cette option pour indiquer que les changements d'ensemble ou d'index d'échantillons pendant le corps d'un slider sont *intentionnels* et ne doivent pas être supprimés.

- **La beatmap utilise des changements de volume dans les spinners** : cochez cette option pour indiquer que les changements de volume pendant un spinner sont *intentionnels* et ne doivent pas être supprimés.

## Fonctions supplémentaires {#additional-features}

Ces opérations peuvent compléter le nettoyage normal de Map Cleaner.

- **Recaler les objets** : recale tous les objets et les fins de slider sur la grille pendant le nettoyage, selon le diviseur de battement défini.

- **Recaler les marque-pages** : recale tous les marque-pages avec la méthode de recalage par défaut. Décochez cette option si vos marque-pages sont alignés sur des diviseurs de battement inhabituels.

- **Supprimer les échantillons inutilisés** : supprime tous les échantillons audio du mapset qui ne sont utilisés par aucune beatmap ni aucun storyboard du mapset. Les échantillons compatibles avec les skins de beatmap sont ignorés.

- **Supprimer les mises en sourdine** : supprime les changements de volume et les changements d'index personnalisés sur les hitsounds dont le volume est de 5 %. Si un point de timing a un volume de 5 %, ses changements de volume et d'index personnalisé seront supprimés.

- **Rendre muets les hitsounds non cliquables** : règle le volume à 5 % pour tous les événements de hitsound provenant d'objets qui ne nécessitent aucune action du joueur. Seuls les cercles, les têtes de slider et les têtes de note longue seront audibles. Cette option peut aider à mieux comprendre le rythme de la beatmap et son déroulement en jeu.

## Recalage

Le recalage aligne les objets sur le tick le plus proche de la timeline, puis arrondit leur position à l'entier inférieur. Si une ligne rouge se trouve dans les 10 ms après l'heure de l'objet, celui-ci est plutôt recalé sur cette ligne rouge. Cela évite de le déplacer sur un tick situé 3 ms avant la ligne rouge.

Les fins de slider sont recalées de deux façons. La première consiste à prendre la durée du slider et à la remplacer par le multiple le plus proche d'un diviseur de battement. Cette méthode ressemble à l'utilisation de `Ctrl+Shift+S` sur un slider dans l'éditeur osu! standard.

La deuxième méthode n'est utilisée que si une ligne rouge se trouve pendant le slider ou jusqu'à 20 ms après celui-ci. Elle recale alors la fin du slider sur le tick le plus proche du nouveau timing. La durée du slider devient ainsi un entier et sa longueur exacte peut légèrement varier avec l'arrondi des ticks de la timeline.

Les fins de spinner et de note longue sont également recalées avec la deuxième méthode.

Si la beatmap sélectionnée est en mode osu!mania, le recalage ajuste aussi la position X des notes au centre des colonnes et règle leur position Y à 192.

## Timeline

Chaque exécution de Map Cleaner affiche une petite timeline qui récapitule les modifications apportées aux points de timing.

- Une ligne rouge correspond à un point de timing supprimé.
- Une ligne orange correspond à un point de timing modifié.
- Une ligne verte correspond à un point de timing ajouté.

Lorsqu'un point de timing a simplement été déplacé, une ligne rouge apparaît à son ancien décalage et une ligne verte au nouveau.

Faites un **double-clic** sur une ligne de la timeline pour accéder à cette heure dans l'éditeur.
