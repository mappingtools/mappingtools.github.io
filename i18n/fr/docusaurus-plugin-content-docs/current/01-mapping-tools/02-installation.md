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
| Windows | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Linux | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| macOS | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |

</div>

- **osu! stable** : sous Windows, la détection de la beatmap actuelle et la lecture de l'état de l'éditeur en direct utilisent l'intégration mémoire, et le rechargement automatique simule des frappes au clavier. Sous Linux et macOS, lancez stable avec Wine et démarrez une API **Gosumemory/Tosu** compatible à l'adresse `127.0.0.1:24050` pour obtenir la beatmap actuelle. Définissez le **dossier Songs** dans les Préférences.
- **osu! lazer** : utilisez **Fichier > Modifier en externe** pour rendre les fichiers de beatmap accessibles. Mapping Tools détecte automatiquement la beatmap modifiée en externe, ce qui correspond à l'obtention de la beatmap actuelle dans ce tableau. Utilisez **Terminer la modification et importer les changements** dans lazer pour appliquer vos modifications. Consultez le [guide de lazer](/docs/guides/use-mt-in-lazer).
- **osu! unstable** : sélectionnez **MTIPC** dans les Préférences pour récupérer la beatmap actuelle, lire l'état de l'éditeur en direct et recharger l'éditeur. Ces fonctionnalités nécessitent le serveur MTIPC du client. La lecture de l'état de l'éditeur en direct et son rechargement sont désactivés par défaut sous Linux et macOS.
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
