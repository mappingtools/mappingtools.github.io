---
title: "Installation"
author: "aehrea"
id: installation
description: Installer Mapping Tools sur Windows, Linux et macOS.
keywords:
  - documentation
  - mapping tools
  - installation
---

Mapping Tools propose des versions natives pour **Windows, Linux et macOS**. Téléchargez la version correspondant à votre processeur depuis la [page de téléchargement](/download) ou les [versions GitHub](https://github.com/OliBomby/Mapping_Tools/releases/latest).

Tous les paquets sont autonomes et incluent l'environnement d'exécution .NET 10.

## Choisir un paquet

- **Windows** : utilisez l'installateur ou l'archive ZIP portable. Choisissez x64 pour la plupart des systèmes ; x86 est destiné à Windows 32 bits.
- **Linux** : utilisez l'AppImage ou l'archive ZIP portable pour x64 ou ARM64.
- **macOS** : téléchargez l'archive ZIP portable pour processeur Intel (x64) ou Apple silicon (ARM64), puis ouvrez **Mapping Tools.app** depuis le dossier extrait.

## Intégration avec l'éditeur selon la plateforme

Les outils qui manipulent les fichiers de beatmap fonctionnent sur toutes les versions de bureau. Certaines fonctions liées à l'éditeur en direct dépendent du système d'exploitation et de la méthode d'intégration :

- **Geometry Dashboard** et l'intégration mémoire de **Editor Reader** nécessitent Windows.
- Sous Linux et macOS, la détection de la beatmap actuelle utilise par défaut l'API locale **Gosumemory/Tosu** à l'adresse `127.0.0.1:24050`. Démarrez une API compatible pour utiliser **Ouvrir la beatmap actuelle**. La lecture de l'état de l'éditeur en direct et son rechargement automatique sont désactivés par défaut sur ces plateformes.
- Vous pouvez toujours sélectionner directement une beatmap avec **Fichier > Ouvrir une beatmap**.

Pour osu! lazer, utilisez la fonction **Fichier > Modifier en externe**. Consultez le [guide de lazer](/docs/guides/use-mt-in-lazer).

## Configuration {#setup}

Après avoir installé Mapping Tools, cliquez sur le bouton en haut à gauche pour ouvrir le menu de navigation, puis accédez aux **Préférences** pour configurer Mapping Tools.

Les champs les plus importants sont les suivants :

- **Dossier osu!** : chemin d'accès au dossier contenant _osu!_.
- **Dossier Songs** : chemin d'accès au dossier qui contient toutes vos beatmaps. Il se trouve généralement directement dans le dossier _osu!_.
- **Fichier de configuration utilisateur osu!** : chemin d'accès au fichier de configuration osu! de l'utilisateur. Il se trouve généralement directement dans le dossier _osu!_ et porte un nom comme `osu.[username].cfg`.

:::note

Vérifiez que ces chemins sont corrects si vous utilisez osu!stable. Sinon, Mapping Tools risque de ne pas fonctionner correctement.

:::
