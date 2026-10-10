---
title: "Sauvegardes"
author: "OliBomby"
id: backups
description: Tout savoir sur les sauvegardes de Mapping Tools.
keywords:
  - documentation
  - mapping tools
  - sauvegardes
---

Mapping Tools stocke les sauvegardes des beatmaps dans le dossier de sauvegarde configuré. Ouvrez ce dossier avec **À propos > Ouvrir le dossier des sauvegardes**, ou modifiez son emplacement dans les **Préférences**.

Lorsque la lecture de l'état de l'éditeur en direct est configurée, les sauvegardes peuvent inclure les dernières modifications non enregistrées dans l'éditeur. Sinon, Mapping Tools sauvegarde le fichier de beatmap auquel il peut accéder sur le disque.

## Sauvegardes automatiques {#automatic-backups}

Lorsque cette fonction est activée, Mapping Tools crée une sauvegarde avant qu'un outil ne modifie une beatmap. Vous disposez ainsi d'un point de restauration pour annuler l'exécution de l'outil. Vous pouvez définir le dossier de sauvegarde et la limite de conservation dans les **Préférences**. Lorsque la limite est atteinte, les sauvegardes les plus anciennes sont supprimées.

## Sauvegardes périodiques {#periodic-backups}

Lorsque cette fonction est activée, Mapping Tools sauvegarde périodiquement la beatmap actuelle tant qu'il peut lire l'état de l'éditeur en direct. Il ignore une sauvegarde si la beatmap n'a pas changé depuis la précédente. Les sauvegardes périodiques portent la mention `PB` dans leur nom de fichier.

## Sauvegardes manuelles {#manual-backups}

Utilisez le menu **Fichier** pour sauvegarder la beatmap sélectionnée ou charger une sauvegarde dans celle-ci. Les sauvegardes manuelles portent la mention `UB` dans leur nom de fichier. **QuickUndo** restaure dans osu! la sauvegarde non périodique la plus récente de la beatmap actuellement ouverte.
