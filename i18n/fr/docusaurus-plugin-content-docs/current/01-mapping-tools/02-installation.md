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

## Compatibilité des fonctionnalités {#editor-integration-by-platform}

✅ Pris en charge · ❌ Non pris en charge. Certaines fonctionnalités nécessitent la configuration décrite ci-dessous.

<div className="feature-compatibility">

| Système | Client osu! | Lire/écrire les beatmaps | Obtenir la beatmap actuelle | Lire l'état de l'éditeur en direct | Rechargement automatique | Raccourcis clavier globaux | Superposition Geometry Dashboard |
| --- | --- | :---: | :---: | :---: | :---: | :---: | :---: |
| Windows | stable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Windows | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |

</div>

- **osu! stable** : la récupération de la beatmap actuelle utilise la **lecture mémoire** sous Windows et Linux (Wine). Définissez le **dossier Songs** dans les Préférences avec son chemin natif dans le système de fichiers. La lecture de l’état de l’éditeur en direct et le rechargement automatique sont disponibles uniquement sous Windows. La lecture mémoire native n’est pas prise en charge sous macOS.
- **osu! lazer** : utilisez **Fichier > Modifier en externe** pour rendre les fichiers de beatmap accessibles. Mapping Tools détecte automatiquement la beatmap modifiée en externe, ce qui correspond à l'obtention de la beatmap actuelle dans ce tableau. Utilisez **Terminer la modification et importer les changements** dans lazer pour appliquer vos modifications. Consultez le [guide de lazer](/docs/guides/use-mt-in-lazer).
- **Raccourcis clavier globaux** : sous Linux, la prise en charge dépend de X11 ou d'un environnement de bureau doté du portail de raccourcis globaux. Sous macOS, accordez les autorisations d'accès au clavier demandées par le système.

Vous pouvez toujours sélectionner directement une beatmap avec **Fichier > Ouvrir une beatmap**.

## Configuration {#setup}

Après avoir installé Mapping Tools, cliquez sur le bouton en haut à gauche pour ouvrir le menu de navigation, puis accédez aux **Préférences** pour configurer Mapping Tools.

Les champs les plus importants sont les suivants :

- **Dossier osu!** : chemin d'accès au dossier contenant _osu!_.
- **Dossier Songs** : chemin d'accès au dossier qui contient toutes vos beatmaps. Il se trouve généralement directement dans le dossier _osu!_.
- **Fichier de configuration utilisateur osu!** : chemin d'accès au fichier de configuration osu! de l'utilisateur. Il se trouve généralement directement dans le dossier _osu!_ et porte un nom comme `osu.[username].cfg`.

:::note

Vérifiez que ces chemins sont corrects si vous utilisez osu!stable. Sinon, Mapping Tools risque de ne pas fonctionner correctement.

:::
