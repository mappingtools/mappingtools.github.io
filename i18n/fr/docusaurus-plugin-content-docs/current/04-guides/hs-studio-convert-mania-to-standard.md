---
title: "Convertir les hitsounds mania en hitsounds standard"
author: "OliBomby"
id: convert-mania-to-standard-hs
description: Comment convertir les hitsounds osu!mania en hitsounds osu!standard avec Hitsound Studio.
keywords:
  - documentation
  - mapping tools
  - hitsound studio
  - hitsounds
  - conversion de hitsounds
---

osu!mania permet de placer plusieurs notes sur un même tick. Le placement des hitsounds est donc beaucoup plus libre dans osu!mania, car plusieurs ensembles d'échantillons ou échantillons personnalisés peuvent être utilisés simultanément. En revanche, copier les hitsounds d'osu!mania vers osu!standard est plus difficile, car osu!standard ne permet qu'une note par tick au maximum. Hitsound Studio peut convertir les hitsounds osu!mania en hitsounds osu!standard et ainsi ouvrir de nouvelles possibilités de placement.

## Étape 1 : configurer Hitsound Studio {#1}

Ouvrez Hitsound Studio dans Mapping Tools. Cliquez sur le menu **Projet**, puis sur **Nouveau projet**. Pour conserver la configuration actuelle de Hitsound Studio, enregistrez-la d'abord avec **Enregistrer le projet**.

## Étape 2 : importer les couches de hitsounds {#2}

Cliquez sur le bouton plus en bas à droite de la fenêtre pour ouvrir la fenêtre d'importation. Ouvrez l'onglet **Importer des hitsounds** pour importer tous les hitsounds d'une beatmap. Dans **Beatmap source**, sélectionnez la beatmap contenant les hitsounds osu!mania à convertir. Cochez également **Détecter les échantillons en double** et **Supprimer les hitsounds en double**, ainsi que **Inclure les échantillons de storyboard** si votre beatmap utilise des échantillons de storyboard pour combler certaines lacunes dans les hitsounds. Cliquez ensuite sur **Accepter** pour importer les hitsounds ; la liste des couches apparaît alors dans Hitsound Studio.

## Étape 3 : configurer {#3}

En bas de la fenêtre, configurez deux autres options : la **beatmap de base** et l'**échantillon par défaut**. Sélectionnez la beatmap que vous souhaitez convertir comme beatmap de base. L'outil utilisera ses métadonnées, son timing et ses niveaux de volume.

Vous avez le choix entre plusieurs échantillons par défaut, selon vos préférences. L'échantillon par défaut est utilisé lorsqu'aucun hitsound hitnormal n'est défini dans les couches de hitsounds. osu!standard exige toujours la lecture d'un son hitnormal. Vous pouvez laisser le champ vide, choisir l'ensemble d'échantillons Soft et saisir `-1` comme volume.

## Étape 4 : exporter {#4}

Cliquez sur le bouton d'exécution en bas à droite de la fenêtre pour ouvrir la boîte de dialogue des options d'exportation. Vérifiez que **Mode d'exportation** et **Mode de jeu à l'exportation** sont tous deux définis sur **Standard**. Vous pouvez aussi choisir **Vorbis (.ogg)** pour les options **Format de fichier d'échantillon** et **Format de fichier d'échantillon mixte** afin de convertir tous les échantillons en `.ogg` et de réduire la taille des fichiers. Cliquez ensuite sur **Accepter** pour lancer l'exportation des hitsounds.

Une fois l'exportation terminée, Hitsound Studio ouvre le dossier d'exportation, qui contient un fichier `.osu` correspondant aux différences de hitsounds osu!standard ainsi que les fichiers audio nécessaires. Vous pouvez copier tous ces fichiers dans votre mapset osu!standard, puis copier les hitsounds depuis le fichier de différences à l'aide de Hitsound Copier.
