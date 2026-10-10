---
title: "Mapset Merger"
author: "OliBomby"
id: mapset-merger
---

Mapset Merger est un outil qui fusionne plusieurs mapsets en un seul.

L'outil résout automatiquement les conflits de fichiers en plaçant autant de fichiers que possible dans des sous-dossiers distincts et en reconstruisant les ensembles d'échantillons des hitsounds personnalisés. Malheureusement, il est impossible de fusionner les skins de beatmap et les hitsounds personnalisés de spinner : ces fichiers ne sont pas explicitement référencés dans la beatmap, leur présence affecterait donc toujours l'ensemble du mapset.

## Ajouter des mapsets {#adding-mapsets}

Pour ajouter un mapset, appuyez sur le bouton plus en bas à droite. Un nouveau mapset sera ajouté à la collection avec les informations de celui de la beatmap sélectionnée. Si vous faites un **Maj-clic** sur le bouton plus, l'outil utilisera plutôt le mapset actuellement ouvert dans le client osu!.

Tous les mapsets à fusionner apparaissent dans la liste. Chaque mapset possède un nom et le chemin d'accès à son dossier racine. Les noms serviront à classer les fichiers du mapset fusionné ; choisissez-les donc uniques et concis. Pour modifier un chemin dans la liste, faites un **double-clic** dessus. Un bouton Parcourir apparaît également pour sélectionner un chemin dans l'explorateur de fichiers.

## Exporter {#exporting}

Appuyez sur le bouton d'exécution pour fusionner les mapsets et exporter les fichiers vers le dossier indiqué par le **chemin d'exportation**. Vérifiez que ce dossier existe, sinon une erreur s'affichera.

Si vous cochez **Déplacer le storyboard vers .osu**, Mapset Merger déplace le contenu des fichiers .osb de chaque mapset dans les fichiers .osu. Les storyboards deviennent ainsi propres à chaque beatmap et ne se propagent pas aux autres mapsets de l'ensemble fusionné. Cette option est utile si vous fusionnez des mapsets avec des storyboards différents. Soyez toutefois prudent : un storyboard volumineux associé à plusieurs difficultés multipliera les données et produira des fichiers .osu volumineux.
