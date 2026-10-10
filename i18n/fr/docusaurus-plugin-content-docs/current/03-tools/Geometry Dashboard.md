---
title: "Geometry Dashboard"
author: "OliBomby"
id: geometry-dashboard
---

Geometry Dashboard est un outil puissant qui superpose à l'éditeur osu! des objets virtuels utiles à la construction géométrique. Vous pouvez aligner des objets sur ces points, lignes et cercles virtuels afin de créer des motifs géométriques parfaits, difficiles, voire impossibles à réaliser autrement.

:::note Compatibilité avec les plateformes

Geometry Dashboard nécessite actuellement Windows, car sa superposition sur l'éditeur en direct dépend d'une intégration propre à Windows.

:::

:::tip
Pour utiliser cet outil, vous devez indiquer votre fichier de configuration utilisateur dans les Préférences de Mapping Tools.
:::

## Concepts de base {#core-concepts}

Geometry Dashboard fonctionne ainsi :

1. **Lecture de l'état actuel de l'éditeur osu!** Cela comprend les objets visibles, l'heure de l'éditeur et la position de sa fenêtre.
2. **Génération d'objets virtuels à partir de ces objets.** Un ensemble de générateurs configurables crée des points, des lignes et des cercles virtuels.
3. **Affichage de ces objets virtuels dans une superposition sur l'éditeur osu!** Vous pouvez voir la géométrie générée et aligner votre curseur dessus.

## Interface utilisateur {#user-interface}

La fenêtre Geometry Dashboard est divisée en plusieurs sections :

* **Recherche** : filtre la liste des générateurs pour faciliter la navigation.
* **Boutons d'activation** : permettent d'activer ou de désactiver plusieurs fonctions.
  * Tout sélectionner
  * Tout verrouiller
  * Tout rendre utilisable
* **Bouton d'états enregistrés** : ouvre la [fenêtre des états enregistrés](#savestates).
* **Bouton des préférences** : ouvre la [fenêtre des préférences](#preferences).
* **Liste des générateurs** : affiche les générateurs disponibles et leurs options d'activation et de configuration.

## Géométrie virtuelle {#virtual-geometry}

La géométrie virtuelle est au cœur de cet outil. Elle ne correspond pas à de vrais objets de l'éditeur, mais à des points que le curseur peut survoler pour placer précisément des objets pendant le mapping.

### États de la géométrie virtuelle {#virtual-geometry-states}

La géométrie virtuelle possède plusieurs états que vous pouvez activer ou désactiver :

* **Sélectionnée** : rend l'objet actif afin de pouvoir créer de nouveaux objets à partir de lui. Utilisez le raccourci de sélection sur un objet virtuel survolé pour le sélectionner. Les objets sélectionnés sont affichés avec une autre couleur de superposition et une bordure lumineuse.
* **Verrouillée** : empêche un objet de disparaître lorsque le générateur ou l'objet de base qui l'a créé n'existe plus. Cette option protège la géométrie contre une suppression accidentelle. Un objet verrouillé est affiché en gris.
* **Utilisable** : permet aux générateurs d'utiliser l'objet pour produire de la géométrie supplémentaire. Si cette option est désactivée, les générateurs ignorent l'objet et ne produisent rien à partir de sa géométrie. Les objets inutilisables sont affichés avec une luminosité atténuée.
* **Pertinence** : valeur comprise entre 0 et 1 qui indique la pertinence de la géométrie. Plus la pertinence est élevée, plus l'objet est opaque.

## Générateurs {#generators}

Les générateurs sont au cœur de Geometry Dashboard. Ils créent des objets virtuels à partir des objets de la beatmap et d'autres objets virtuels.

### Fonctionnement général d'un générateur {#generic-generator-workflow}

Un générateur fonctionne ainsi :

1. **Sélection des entrées :** chaque générateur définit des *dépendances* (types d'entrées requis) et des *prédicats d'entrée*. Un prédicat définit des règles supplémentaires auxquelles les objets virtuels doivent répondre pour servir d'entrée. Geometry Dashboard parcourt les couches précédentes à la recherche d'objets correspondant aux dépendances et satisfaisant les prédicats. Ceux-ci peuvent notamment préciser si un objet doit être sélectionné ou avoir un certain niveau de pertinence.
2. **Génération de géométrie :** pour chaque combinaison possible d'objets d'entrée sélectionnés, le générateur applique ses méthodes de génération. Elles prennent les objets sélectionnés en paramètres et renvoient un ou plusieurs nouveaux objets virtuels.
3. **Organisation en couches :** chaque nouvel ensemble d'objets virtuels est placé dans une nouvelle couche. Vous pouvez définir le nombre de couches avec le **Niveau d'imbrication** dans les Préférences. Les objets des couches inférieures peuvent influer sur la création des objets dans les couches suivantes, plus complexes.
4. **Mise à jour :** chaque fois qu'un changement nécessite un nouveau calcul, les objets de la première couche sont recréés selon la préférence **Mode de mise à jour**. Les couches suivantes sont ensuite mises à jour successivement.

Pour éviter la création d'un trop grand nombre d'objets indésirables, les générateurs fusionnent les objets suffisamment proches dans une même couche et additionnent leurs pertinences. Les Préférences permettent de régler la distance à partir de laquelle deux objets sont fusionnés.

### Liste des générateurs {#list-of-generators}

Voici la liste des générateurs disponibles dans Geometry Dashboard :

* **Générateurs de base :** créent directement des objets virtuels à partir des objets de la beatmap. Leur position dans le temps correspond toujours à l'heure moyenne de l'objet de base.
  * **Points sur les cercles et les têtes de slider :** crée un point virtuel à la position de départ des cercles et des sliders.
  * **Points aux fins de slider :** crée un point virtuel à l'extrémité des sliders.
  * **Points sur les points d'ancrage des sliders :** crée des points virtuels aux points d'ancrage rouges et blancs des sliders.
  * **Points sur les derniers points d'ancrage :** crée des points virtuels au dernier point de la courbe des sliders.
  * **Lignes sur les sliders linéaires :** si le slider est linéaire, crée une ligne virtuelle entre sa position et son point de courbe. L'heure et la pertinence correspondent à celles du slider de base.
  * **Points au centre des sliders en arc :** crée un point au centre des sliders en arc. L'heure et la pertinence correspondent à celles des sliders de base.
  * **Cercles sur les sliders à 3 points :** crée un cercle à partir des points d'ancrage des sliders, pour les courbes en arc ou parfaites. L'heure et la pertinence correspondent à celles des sliders de base.
  * **Points sur les trajectoires de slider :** crée de nombreux points virtuels sur les trajectoires des sliders. Réglez leur nombre avec le paramètre de densité. Ce générateur nécessite des calculs supplémentaires.
* **Générateurs intermédiaires :** nécessitent des générateurs de base. Ils servent à former des figures ou à créer des repères.
  * **Cercles tangents à un cercle :** crée des cercles virtuels qui touchent le cercle d'entrée en un seul point.
  * **Cercles à partir de deux points :** prend deux points virtuels et crée un cercle centré sur chacun, dont le rayon correspond à la distance entre les deux points.
  * **Triangle équilatéral à partir de deux points :** prend deux points virtuels et crée un point de chaque côté pour former deux triangles équilatéraux.
  * **Triangle équilatéral à partir de deux points (type II) :** fonctionne comme le générateur de triangle classique, mais place le triangle différemment.
  * **Carré à partir de deux points :** prend deux points virtuels et crée un point de chaque côté pour former un carré.
  * **Carré à partir de deux points (type II) :** prend deux points virtuels et crée deux points de chaque côté pour former deux carrés.
  * **Ligne à partir de deux points :** crée une ligne virtuelle qui relie deux points virtuels.
  * **Moyenne de deux points :** calcule un point virtuel situé à la moyenne de deux points virtuels.
  * **Moyenne de trois points :** calcule un point virtuel situé à la moyenne de trois points virtuels.
  * **Échelle et rotation autour d'un point fixe :** fait pivoter et change l'échelle de tout objet virtuel autour d'un point virtuel fixe. Vous pouvez régler l'angle, le facteur d'échelle et les règles de sélection du point fixe.
  * **Lignes parallèles :** prend une ligne et un point, puis crée une ligne virtuelle parallèle à la première et passant par le point.
  * **Lignes perpendiculaires :** prend une ligne et un point, puis crée une ligne virtuelle perpendiculaire à la première et passant par le point.
  * **Bissectrice d'angles :** prend deux lignes virtuelles et crée la bissectrice de l'angle formé à leur point d'intersection.
  * **Médiatrice de deux points :** prend deux points virtuels et crée leur médiatrice.
  * **Tangentes à un cercle :** prend un cercle et un point virtuels, puis crée les lignes tangentes au cercle qui passent par ce point.
* **Générateurs avancés :** générateurs spécialisés qui nécessitent une configuration supplémentaire et permettent de créer des motifs récursifs complexes.
  * **Points d'intersection :** prend deux lignes ou cercles virtuels et crée un point virtuel à chacun de leurs points d'intersection. Ce générateur s'avère très utile avec d'autres méthodes de génération géométrique. *Remarque :* le calcul des intersections est coûteux ; plusieurs dessins complexes actifs dans l'éditeur peuvent donc fortement affecter les performances.
  * **Point suivant à partir de 2 points :** prend deux points virtuels et calcule le point suivant en conservant la même vitesse. Ce générateur peut être utilisé avec « Points sur les trajectoires de slider » pour prévoir les courbes avec plus de précision.
  * **Point suivant à partir de 3 points :** prend trois points virtuels et calcule le point suivant en conservant le même angle et la même variation de vitesse.
  * **Point suivant à partir de 3 points, inversé :** prend trois points virtuels et calcule le point suivant avec la même variation de vitesse et l'angle opposé.
  * **Point suivant à partir de 4 points :** prend quatre points virtuels et calcule le point suivant en conservant l'angle, la variation d'angle, la variation de vitesse et la variation de cette dernière.
  * **Échelle et rotation autour d'un point fixe :** fait pivoter et change l'échelle de tout objet virtuel autour d'un point virtuel fixe. Vous pouvez régler l'angle, le facteur d'échelle et les règles de sélection du point fixe.
  * **Symétrie par rapport à une ligne :** reproduit en miroir tout objet virtuel par rapport à une ligne virtuelle, qui sert d'axe de symétrie.

## Options des générateurs {#generator-options}

Chaque générateur possède les options suivantes pour configurer son comportement :

* **Actif :** active ou désactive le générateur. Un générateur désactivé ne crée aucun objet virtuel.
* **Séquentiel :** limite les entrées aux objets consécutifs. Lorsqu'elle est activée, cette option ne produit des paires d'objets virtuels que s'ils se suivent dans le temps. Elle réduit fortement le nombre d'objets générés et peut éviter l'encombrement.
* **En profondeur :** demande au générateur de vérifier toutes les couches précédentes applicables, et pas seulement la couche directement au-dessus.
* **Coefficient de pertinence :** pertinence de base des objets virtuels produits par ce générateur, entre 0 et 1. La pertinence réelle peut varier selon le coefficient des autres entrées.
* **Générer des objets transmissibles :** si cette option est activée, les objets générés peuvent être réutilisés. Sinon, aucun autre générateur ne peut les utiliser.
* **Collection de sélection des entrées :** ensemble de règles déterminant les objets virtuels que le générateur peut utiliser. Consultez [Sélection des entrées en détail](#input-selection-in-detail) pour en savoir plus.

### Paramètres propres à certains générateurs {#specialized-generator-settings}

Certains générateurs avancés disposent d'options particulières :

* **Cercle à partir d'un point :**
  * *Rayon :* facteur d'échelle du cercle.
* **Points sur les trajectoires de slider :**
  * *Densité des points :* nombre de points générés par pixel osu! de la trajectoire du slider.
* **Échelle et rotation autour d'un point fixe :**
  * *Angle :* angle de rotation en degrés.
  * *Facteur d'échelle :* facteur d'agrandissement ou de réduction uniforme.
  * *Sélection de l'origine :* règles supplémentaires auxquelles les objets virtuels doivent répondre pour servir de centre de rotation.
  * *Autre sélection :* règles supplémentaires pour les objets à transformer autour de l'origine.
* **Symétrie par rapport à une ligne :**
  * *Sélection de l'axe :* règles supplémentaires auxquelles les objets virtuels doivent répondre pour servir d'axe à ce générateur.
  * *Autre sélection :* règles supplémentaires pour les objets à reproduire en miroir par rapport à l'axe.

### Sélection des entrées en détail {#input-selection-in-detail}

La sélection des entrées détermine principalement quels objets virtuels le générateur prendra en compte. Chaque générateur définit les types d'entrée requis (par exemple, points ou lignes) ; les prédicats permettent d'affiner cette sélection en fonction des propriétés des objets. Sans sélection d'entrée correctement configurée, les générateurs risquent de produire trop d'objets virtuels sans intérêt ou de ne pas créer ceux qui sont nécessaires.

Une collection de prédicats de sélection regroupe plusieurs prédicats. Un objet virtuel peut être utilisé comme entrée s'il satisfait au moins l'un d'entre eux.

Survolez **Sélection des entrées** et cliquez sur le bouton plus pour ajouter un prédicat. Plusieurs paramètres vous permettent alors de préciser quels objets géométriques peuvent être générés :

* **Sélection obligatoire :** si l'option est activée, seuls les objets virtuels sélectionnés seront utilisés en entrée. Ils seront également prioritaires lorsque vous les survolez. Vous pouvez ainsi contrôler précisément ce que vous créez.
* **Verrouillage obligatoire :** si l'option est activée, seuls les objets verrouillés serviront à générer de la géométrie. Les objets non verrouillés seront ignorés. Cette option peut être utile pour utiliser certains générateurs tout en en verrouillant d'autres.
* **Doit avoir été généré par ce générateur :** vérifie que tous les objets virtuels ont été créés par ce générateur. Cette règle peut limiter les créations aux géométries souhaitées.
* **Ne doit pas avoir été généré par ce générateur :** filtre inverse ; seuls les objets virtuels créés par un autre générateur sont pris en compte.
* **Pertinence minimale :** impose aux objets utilisés en entrée une pertinence minimale. La pertinence varie de 0 à 1 ; la valeur 0 désactive cette condition.

## Préférences {#preferences}

La fenêtre des Préférences de Geometry Dashboard permet de personnaliser le comportement et l'apparence de l'outil :

* **Raccourcis clavier :**
  * **Touche d'alignement :** touche à maintenir pour aligner le curseur sur les objets virtuels.
  * **Touche de sélection :** touche à maintenir pour sélectionner les objets virtuels.
  * **Touche de verrouillage :** touche à maintenir pour verrouiller les objets virtuels.
  * **Touche d'utilisation :** touche à maintenir pour activer ou désactiver l'utilisation des objets virtuels.
  * **Touche d'actualisation :** touche qui actualise immédiatement la liste d'objets de la couche racine.
* **Décalage :** décale tous les objets virtuels par rapport à l'écran de l'éditeur. Cette option peut corriger les problèmes d'échelle ou de position.
  * **Gauche :** décalage du bord gauche de l'éditeur.
  * **Haut :** décalage du bord supérieur de l'éditeur.
  * **Droite :** décalage du bord droit de l'éditeur.
  * **Bas :** décalage du bord inférieur de l'éditeur.
* **Complexité :** nombre de couches récursives à générer. Vous pouvez réduire ce nombre en cas de problèmes de performances.
  * **Niveau d'imbrication :** nombre de couches générées à partir des objets de base.
* **Touche bas :** choisit les objets virtuels affichés.
  * **Tout :** affiche tous les objets virtuels, notamment ceux issus des objets de beatmap, leurs descendants et leurs ancêtres.
  * **Parents et ancêtres :** affiche les ancêtres des objets utilisés pour l'alignement.
  * **Parents directs :** affiche uniquement les parents directs des objets utilisés pour l'alignement.
  * **Enfants et descendants :** affiche tous les descendants des objets utilisés pour l'alignement.
  * **Enfants directs :** affiche uniquement leurs enfants directs.
* **Touche haut :** choisit les objets virtuels affichés lorsque la touche d'alignement n'est pas enfoncée.
  * **Tous visibles :** affiche tous les objets de beatmap selon les options de sélection.
  * **Aucun :** masque tous les objets lorsque la touche d'alignement est relâchée.
* **Sélection :** choisit les objets de beatmap utilisés pour générer des objets virtuels.
  * **Tous visibles :** inclut tous les objets de beatmap disponibles.
  * **Visibles ou sélectionnés :** utilise les objets visibles, sauf si des objets sont sélectionnés ; dans ce cas, seuls les objets sélectionnés sont utilisés.
  * **Sélectionnés uniquement :** utilise les objets sélectionnés dans l'éditeur.
* **Mise à jour :** définit quand les objets virtuels sont mis à jour.
  * **Tout changement :** effectue une mise à jour à chaque changement.
  * **Changement de temps :** effectue une mise à jour quand le minuteur de l'éditeur change. Cette option améliore les performances au prix d'une moindre réactivité.
  * **osu! au premier plan :** effectue une mise à jour lorsque la fenêtre osu! devient active.
  * **Raccourci enfoncé :** effectue une mise à jour à l'appui du raccourci d'actualisation.
* **Comportement :** autres options de Geometry Dashboard.
  * **Différence minimale :** distance en dessous de laquelle les objets virtuels sont fusionnés.
  * **Continuer en arrière-plan :** laisse Geometry Dashboard actif lorsque d'autres outils sont ouverts.
  * **Afficher le terrain de jeu :** affiche les limites du terrain de jeu par-dessus l'éditeur.
  * **Débogage :** affiche les limites de l'éditeur en superposition. Si l'éditeur reste invisible alors que cette option est activée, il se trouve en dehors de la zone de l'éditeur.

### Options de géométrie virtuelle {#virtual-geometry-options}

Vous pouvez personnaliser la couleur, l'opacité, l'épaisseur et le style de tirets de chaque type d'objet virtuel affiché dans l'éditeur afin d'en améliorer la lisibilité.

* **Couleur :** couleur du contour. Vous pouvez aussi la copier avec un sélecteur de couleurs (cliquez sur la valeur HEX).
* **Opacité :** degré de transparence de l'objet.
* **Épaisseur :** épaisseur des lignes qui forment le contour de l'objet.
* **Tirets :** choisit si les contours sont en pointillés ou continus.

## États enregistrés {#savestates}

Les états enregistrés fonctionnent comme des profils de raccourcis. Vous pouvez passer rapidement de l'un à l'autre au lieu de modifier manuellement les paramètres des générateurs et les Préférences. Vous pouvez également associer un raccourci à un état pour basculer encore plus rapidement.

Pour créer un état, appuyez sur l'icône **+**, puis indiquez son nom et son raccourci. Les boutons d'enregistrement et de chargement permettent ensuite d'enregistrer les paramètres actuels dans cet état ou de les modifier.
