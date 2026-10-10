---
title: "Sliderator"
author: "OliBomby"
id: sliderator
---

Sliderator est un outil qui permet de créer des sliders ou des streams dont la vitesse change en cours de route.

Pour commencer, importez un slider avec les commandes en haut à gauche, puis modifiez le graphique avec le bouton droit de la souris.

:::caution Non classables

Les sliders créés par Sliderator sont considérés comme non classables. Vous trouverez plus de détails dans [ce post Reddit](https://www.reddit.com/r/osugame/comments/xnmcuq/acceldecel_sliders_made_with_mapping_tool_is_now/?utm_source=share&utm_medium=web2x&context=3).

:::

## Importer des sliders {#importing}

Avant d'utiliser Sliderator, vous devez importer un ou plusieurs sliders avec le bouton **Importer des sliders**, en haut à gauche.
Il existe trois façons d'importer des sliders :

- **Sélectionnés** importe les sliders actuellement sélectionnés dans l'éditeur osu!.
- **Marqués** importe les sliders de la beatmap sélectionnée qui possèdent un marque-page.
- **Temps** importe les sliders de la beatmap sélectionnée référencés par un code temporel saisi dans le champ voisin. Ce code doit respecter le format obtenu en copiant des objets de l'éditeur dans un champ de texte, par exemple : `00:56:823 (1,2,1,2) -`.

Si vous avez importé plusieurs sliders, utilisez les boutons gauche et droite pour passer de l'un à l'autre. Maj-clic sur ces boutons applique rapidement Sliderator au slider actuel avant de passer au suivant.

La sélection d'un slider définit automatiquement les valeurs **Durée en temps**, **BPM** et **SV globale**.

## Graphique {#graph}

Le graphique est l'élément essentiel de Sliderator. C'est là que vous définissez le mouvement de la balle du slider au fil du temps.

L'axe X représente le **temps** sur toute la durée du slider. Cette durée est définie dans le champ **Durée en temps**.
Le diviseur de grille rythmique des lignes de l'axe X se règle avec le curseur sous le graphique.

L'axe Y dispose de deux modes, que vous pouvez alterner avec le bouton vert sous le graphique :

- **X** est le mode position. L'axe Y indique la position le long du slider ; vous pouvez donc définir précisément où se trouvera la balle à un instant donné.
- **V** est le mode vitesse. L'axe Y indique le multiplicateur de vitesse du slider, entre les valeurs positive et négative de la **limite de SV**.

![Graphique de Sliderator](./assets/sliderator_graph.png)

### Modifier le graphique {#editing-graph}

Vous modifiez le graphique à l'aide de points de contrôle et d'interpolations.

Pour ajouter un point de contrôle, faites un **clic droit** n'importe où sur le graphique. Un clic droit sur un point de contrôle ouvre un menu contextuel qui permet de le supprimer ou de changer sa méthode d'interpolation. Utilisez **Maj + clic droit** sur un point pour le supprimer immédiatement. Un **clic gauche** sur un point permet de le déplacer. Faites glisser l'arrière-plan avec le bouton gauche de la souris ou utilisez la molette pour déplacer et zoomer dans la vue.

Au milieu de chaque segment interpolé se trouve un point de contrôle plus petit. Déplacez-le verticalement pour modifier la forme de l'interpolation. Faites un **clic droit** sur ce point pour le réinitialiser.

Les raccourcis suivants facilitent le déplacement des points de contrôle :

- **Maj** limite le déplacement à l'horizontale.
- **Ctrl** limite le déplacement à la verticale.
- **Alt** désactive l'alignement sur la grille.

### Autres commandes du graphique {#graph-controls}

Cette section décrit d'autres commandes liées au graphique.

- **Durée en temps** définit la durée du slider en temps. Elle détermine aussi la largeur du graphique.
- **BPM** définit le nombre de battements par minute du slider. Cette valeur doit correspondre au BPM à l'endroit où le slider sera exporté.
- **SV globale** est le multiplicateur de vitesse des sliders de la beatmap. Cette valeur doit correspondre au multiplicateur de la beatmap sélectionnée.
- **Limite de SV** est la SV maximale du graphique. Cette valeur détermine aussi sa hauteur en mode vitesse. Elle vaut 10 par défaut, car c'est la SV maximale autorisée dans les points de timing hérités.
- **Adapter à la complétion** redimensionne verticalement tous les points de contrôle pour que la distance maximale parcourue par la balle corresponde à la complétion souhaitée.
- **Réinitialiser le graphique** rétablit l'état par défaut du graphique.
- **Afficher les points d'ancrage rouges** affiche les positions des points d'ancrage rouges du slider sous forme de lignes horizontales rouges en mode position.
- **Afficher les points d'ancrage du graphique** affiche les positions des points de contrôle du graphique dans l'aperçu du slider.
- **Nombre de segments estimé** indique le nombre approximatif de points d'ancrage nécessaires avec la configuration actuelle. En dessous de 10 000, le jeu ne devrait pas trop ralentir.

## Options d'exportation {#export-options}

L'exécution de Sliderator exporte le slider modifié vers la beatmap sélectionnée à l'heure d'exportation. Avec **Remplacer**, vous pouvez choisir de remplacer le contenu existant de la beatmap plutôt que de simplement l'ajouter.

Si vous cochez **Exporter plutôt comme un stream**, Sliderator exportera un stream de cercles qui suit la vitesse et la durée du slider au lieu d'un slider. Le diviseur de grille du graphique détermine le nombre de cercles par battement.

Vous pouvez définir manuellement la **nouvelle SV** du slider. Elle doit se rapprocher de la vitesse maximale du graphique. La valeur automatique convient généralement, mais vous pouvez parfois la réduire légèrement pour obtenir moins de points d'ancrage sans nuire à la qualité du slider.

**Longueur minimale des tumeurs** est une autre option qui permet de réduire considérablement le nombre de points d'ancrage du slider obtenu. Sliderator utilise des tumeurs invisibles pour ralentir la balle ; une longueur minimale plus grande produit donc de plus grosses tumeurs et en utilise moins au total. En revanche, le mouvement de la balle devient moins fluide.

**Déléguer la SV au BPM** demande à Sliderator d'utiliser le BPM pour définir la nouvelle SV. Cela supprime la limite de SV de 10x des points de timing hérités. Cette option permet aussi d'activer **Supprimer les ticks du slider**, qui retire les ticks en utilisant un point de timing hérité dont la SV vaut `NaN`.
