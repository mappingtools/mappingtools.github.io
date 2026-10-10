---
title: "Pattern Gallery"
author: "OliBomby"
id: pattern-gallery
description: Importer et exporter des patterns de beatmaps osu! et créer des collections à partager avec vos amis.
keywords:
  - documentation
  - mapping tools
  - galerie de patterns
---

Pattern Gallery permet d'importer et d'exporter des patterns de beatmaps osu! et de créer des collections à partager. C'est un excellent outil pour transférer rapidement n'importe quelle disposition d'objets, ou n'importe quelle section de beatmap, d'une beatmap à une autre.

## Description de l'outil

Pattern Gallery permet de :

* importer et exporter des patterns de beatmaps osu! afin de déplacer des groupes d'objets entre des beatmaps ;
* créer des collections de patterns à partager avec vos amis ;
* ajouter ou supprimer des patterns avec les boutons situés en bas ;
* exporter un ou plusieurs patterns sélectionnés vers la beatmap choisie en cliquant sur le bouton d'exécution ou en double-cliquant sur un pattern ;
* appliquer des options de traitement supplémentaires aux patterns pendant leur exportation ;
* enregistrer, charger, renommer, importer et exporter vos collections de patterns depuis le menu **Projet**.

## Utilisation

1. Ouvrez Pattern Gallery dans Mapping Tools.
2. Ajoutez des patterns à votre collection avec les options d'importation.
3. Sélectionnez un pattern dans la galerie.
4. Cliquez sur le bouton d'exécution pour exporter le pattern vers la beatmap sélectionnée.

## Fonctions et paramètres

L'outil propose les fonctions suivantes :

* **Gestion des patterns** : ajoutez, supprimez, renommez et organisez les patterns en collections.
* **Options d'importation** : importez des patterns de différentes sources, comme des objets sélectionnés, des fichiers de beatmap ou des codes de pattern.
* **Options d'exportation** : personnalisez l'exportation des patterns avec des options d'échelle, de rotation et de filtrage.

## Options d'exportation

Lors de l'exportation d'un pattern, vous pouvez régler les options suivantes :

* **Décalage d'exportation** : définit l'heure à laquelle placer le pattern. Vous pouvez choisir son heure d'origine, une heure personnalisée ou l'heure actuelle de l'éditeur.
  * **Décalage d'exportation personnalisé** : définit l'heure à laquelle placer le pattern pour le mode de décalage personnalisé.
* **Marge de suppression** : durée supplémentaire, en millisecondes, autour du pattern pour supprimer des parties de la beatmap d'origine.
* **Distance de séparation** : nombre minimal de battements à laisser dans un intervalle pour séparer le pattern en parties plus petites.
* **Diviseurs de battement** : saisissez ici des diviseurs de battement séparés par des virgules. Exemple : `1/4, 1/12, 1/7, 4/5, 0.13435622499`.
* **Échelle personnalisée** : modifie la taille du pattern selon le facteur indiqué.
* **Rotation personnalisée** : fait tourner le pattern dans le sens horaire du nombre de degrés indiqué.
* **Mode de remplacement du pattern** : définit comment gérer le chevauchement entre les objets du pattern et ceux de la beatmap cible :
  * **NoOverwrite** : conserve tous les objets existants de la beatmap et ajoute le pattern sans rien supprimer.
  * **PartitionedOverwrite** : supprime des objets de la beatmap d'origine uniquement dans les parties denses du pattern.
  * **CompleteOverwrite** : supprime tous les objets de la beatmap d'origine entre le début et la fin du pattern.
* **Mode de remplacement du timing** : définit comment combiner le timing de la beatmap d'origine et celui du pattern.
* **Inclure les hitsounds** : exporte le pattern avec les effets de hitsound de ses points de timing.
* **Inclure le kiai** : exporte le pattern avec le kiai du pattern.
* **Adapter à la nouvelle taille des cercles** : redimensionne le pattern afin de conserver l'espacement relatif à la taille des cercles.
* **Adapter au nouveau timing** : adapte la durée du pattern pour conserver le nombre de battements entre les objets selon le nouveau timing. Des alignements incorrects peuvent se produire si le timing contient des lignes rouges non alignées. N'utilisez pas cette option si vous avez des lignes rouges à BPM nul ou infini.
* **Recaler sur le nouveau timing** : recale les objets du pattern sur le nouveau timing avec les diviseurs de battement indiqués.
* **Empiler manuellement** : empile manuellement les objets du pattern.
* **Corriger la SV globale** : adapte la SV des greenlines du pattern à la nouvelle SV globale afin que les sliders conservent la même SV dans la beatmap cible.
* **Corriger la SV liée au BPM** : adapte la SV des greenlines au nouveau BPM afin que les sliders conservent la même SV dans la beatmap cible. Il est recommandé de désactiver cette option si **Adapter au nouveau timing** est activé.
* **Corriger les colorhax** : adapte le décalage de couleur afin de conserver les mêmes indices de couleur pour les objets du pattern et de la beatmap d'origine.
* **Corriger la fréquence des ticks des sliders** : modifie le BPM du pattern afin de conserver la même fréquence de ticks.

## Menu contextuel des patterns

Le menu contextuel de la galerie (clic droit sur un pattern) propose les commandes suivantes :

* **Propriétés** : affiche des détails sur le pattern, comme son nom, sa date de création, sa dernière utilisation et son nombre d'utilisations.
* **Supprimer** : supprime les patterns sélectionnés. Maintenez Maj pour ignorer la boîte de dialogue de confirmation.
* **Ouvrir dans l'explorateur de fichiers** : ouvre les fichiers source des patterns sélectionnés dans l'explorateur de fichiers.
* **Grouper** : propose des commandes de regroupement des patterns.

## Options d'importation

Le bouton d'importation permet d'importer des patterns depuis différentes sources.

* **Importer la sélection** : crée un pattern à partir des objets sélectionnés dans l'éditeur.
  * **Nom** : nom du pattern.
* **Importer depuis un fichier .osu** : importe des patterns d'un fichier .osu sur votre disque.
  * **Nom** : nom du pattern.
  * **Chemin du fichier de pattern** : chemin d'accès au fichier de pattern à importer.
  * **Filtre** : filtre appliqué au fichier .osu.
  * **Heure de début** : heure du fichier .osu à laquelle commence le pattern.
  * **Heure de fin** : heure du fichier .osu à laquelle se termine le pattern.
* **Importer depuis un code** : importe un pattern depuis du code, pratique pour partager des patterns en ligne.
  * **Nom** : nom du pattern.
  * **Objets** : code des objets.
  * **Points de timing** : code des points de timing.
  * **SV globale** : définit la vitesse globale des sliders des objets du pattern.
  * **Mode de jeu** : mode de jeu auquel le pattern est destiné.

## Menu Projet

Le menu **Projet** de Pattern Gallery permet de :

* enregistrer des collections de patterns ;
* charger des collections de patterns ;
* renommer des collections de patterns ;
* importer des collections de patterns ;
* exporter des collections de patterns.
