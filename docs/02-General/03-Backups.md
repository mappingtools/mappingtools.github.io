---
title: "Backups"
author: "OliBomby"
id: backups
description: Everything about backups.
keywords:
  - docs
  - mapping tools
  - backups
---

Mapping Tools makes backups of your osu! beatmaps and stores them in the backups folder. To open the backups folder use **Options > Open backups folder**. The location of the backups folder and other settings can be changed in the **Options > Preferences**. 

The creation of backups makes use of Editor Reader to backup the latest version in the editor instead of the last save.

## Automatic backups {#automatic-backups}

With automatic backups enabled, every time you run a mapping tool a backup will be created of the beatmap that will be changed. This backup is usefull for if you want to undo the work of a tool.

To keep the number of backups in check, there is a max number of backups for the backups folder. If the backups folder is full, the oldest backups will be deleted whenever a new backup gets created.

## Periodic backups {#periodic-backups}

With periodic backups enabled, Mapping Tools will periodically make backups of your beatmap while you are using the osu! editor. It uses Editor Reader to backup the latest version, even when you forget to save. It will skip the backup if there has been no change in the beatmap since the last backup, so if you go AFK in the editor your backups folder won't be spammed with identical backups.

Periodic backups can be recognized by the `PB` (Periodic Backup) in the filename.

## Manual backups {#manual-backups}

In the **File** menu you have options for manual backup management:
- **Generate backup** creates a backup of the current beatmap.
- **Load backup** opens a file explorer to select a backup beatmap to load into the current beatmap.

Manual backups can be recognized by the `UB` (User Backup) in the filename.
