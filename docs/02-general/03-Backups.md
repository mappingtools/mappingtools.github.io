---
title: "Backups"
author: "OliBomby"
id: backups
description: Everything about Mapping Tools backups.
keywords:
  - docs
  - mapping tools
  - backups
---

Mapping Tools stores beatmap backups in its configured backups folder. Open the folder with **About > Open backups folder** or change its location in **Preferences**.

When live editor state reading is configured, backups can include the latest unsaved state from the editor. Otherwise, Mapping Tools backs up the beatmap file it can access on disk.

## Automatic backups {#automatic-backups}

When enabled, Mapping Tools creates a backup before a tool changes a beatmap. This gives you a restore point if you want to undo the tool run. You can set the backup folder and retention limit in **Preferences**. When the limit is reached, the oldest backups are removed.

## Periodic backups {#periodic-backups}

When enabled, Mapping Tools periodically backs up the current beatmap while it can read live editor state. It skips a backup when the beatmap has not changed since the previous one. Periodic backups contain `PB` in their filenames.

## Manual backups {#manual-backups}

Use the **File** menu to create a backup of the selected beatmap or load a backup into it. Manual backups contain `UB` in their filenames. **QuickUndo** restores the newest non-periodic backup to the beatmap currently open in osu!.
