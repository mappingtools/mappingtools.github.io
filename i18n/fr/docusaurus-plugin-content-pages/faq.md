---
title: FAQ
author: OliBomby, aehrea
---

# FAQ

## Pourquoi les changements n'apparaissent-ils pas dans ma beatmap ?

Vérifiez la **beatmap sélectionnée** (barre bleue en haut de l'application) pour vous assurer que le chemin d'accès à votre beatmap est correct.

Veillez également à **recharger l'éditeur sans enregistrer** après avoir exécuté l'outil. Si vous enregistrez la beatmap dans l'éditeur, les changements apportés par l'outil seront annulés : l'enregistrement remplace le fichier .osu par l'ancienne version de la beatmap. Pour recharger rapidement la beatmap, appuyez sur `Ctrl+L`, puis sur `Entrée` dans l'éditeur.

## Une erreur s'affiche lorsque je lance un outil : « Could not find part of the path » ou « Empty path name is not legal ».

Passez le curseur de la souris sur le **nom de la beatmap en haut de la fenêtre** pour afficher son chemin complet. Ce chemin existe-t-il ? Le dossier Songs se trouve-t-il au bon endroit ? Si le dossier Songs ne se trouve pas à l'emplacement AppData par défaut, vérifiez que le bon chemin est défini dans les **Préférences**.

## Un outil affiche une erreur à chaque exécution sur une beatmap précise, mais pas sur les autres.

La beatmap que vous essayez de modifier utilise probablement un ancien format de fichier non pris en charge ou est corrompue. Pour la réparer, ouvrez-la dans l'éditeur et enregistrez-la. osu! la mettra ainsi à jour vers le format de fichier le plus récent, compatible avec Mapping Tools.

## Un outil a abîmé ma beatmap. Que faire ?

Mapping Tools crée des sauvegardes de vos beatmaps chaque fois qu'il les modifie. Vous pouvez les trouver dans **À propos > Ouvrir le dossier des sauvegardes**. Vous pouvez aussi charger une sauvegarde dans la beatmap actuelle avec **Fichier > Charger une sauvegarde**, ou utiliser le raccourci QuickUndo, que vous pouvez activer dans les **Préférences**.

## « Ouvrir la beatmap actuelle » ne fonctionne pas, ou je n'arrive pas à sélectionner les objets.

Ces fonctions dépendent de la lecture de la mémoire du client osu!. Cette lecture peut parfois s'interrompre ; dans ce cas, redémarrer osu! ou votre ordinateur règle généralement le problème. Voici d'autres causes possibles et leurs solutions :

- Un pare-feu ou un antivirus bloque Mapping Tools : désactivez l'antivirus ou ajoutez Mapping Tools à ses exceptions, puis réessayez.
- Vous n'utilisez pas la dernière version de Mapping Tools : une mise à jour de Mapping Tools est parfois nécessaire pour suivre les changements apportés à osu!.
- Vous n'utilisez pas la dernière version de osu! : quittez les serveurs privés et mettez osu! à jour.
- osu! a été mis à jour et les décalages mémoire ont changé : signalez-moi le problème afin que je puisse le corriger.
- Vous utilisez Mapping Tools sur Windows 7 ou une version antérieure : assurez-vous d'avoir installé .NET Framework 4.5.1 ou une version ultérieure.
- Vous utilisez Mapping Tools sur un système autre que Windows : consultez le [guide d'installation](/docs/mapping-tools/installation).

## Comment désactiver les sons de fin de slider sans copier les hitsounds ?

Pour désactiver uniquement les sons de fin de slider, laissez le champ « Copier les hitsounds depuis » vide et indiquez la beatmap à traiter dans le champ « Copier les hitsounds vers ». Aucun hitsound ne sera copié, mais la désactivation des sons de fin de slider fonctionnera tout de même.

Si vous copiez aussi des hitsounds, l'outil utilisera les objets de la beatmap source comme référence. Il ne désactivera donc pas les sons de fin aux endroits où vous avez ajouté des hitsounds. C'est pourquoi cette fonction fait partie de Hitsound Copier plutôt que d'être un outil autonome.

## Au lancement de Mapping Tools, on me demande d'installer .NET alors qu'il est déjà installé.

Les versions actuelles de Mapping Tools ciblent .NET 10 et sont fournies de manière autonome. Elles ne devraient donc pas nécessiter d'installation distincte de .NET.

Si le message .NET s'affiche toujours, vérifiez que vous lancez une version récente de Mapping Tools et réinstallez-la après avoir téléchargé un nouveau paquet depuis le site web.

## Mapping Tools fonctionne-t-il dans lazer ?

Oui, la plupart des fonctionnalités de Mapping Tools fonctionnent dans lazer. Pour en savoir plus, consultez le [guide](/docs/guides/use-mt-in-lazer).

## Ma question ne figure pas ici, ou j'ai trouvé un bug.

Posez votre question dans le canal mt-techsupport sur [Discord](https://discord.gg/YfjKN2yjQV), contactez-moi directement sur Discord (olibomby) ou créez un ticket sur [GitHub](https://github.com/OliBomby/Mapping_Tools/issues).
