---
title: "Backups"
author: "OliBomby"
id: backups
description: Alles über Backups in Mapping Tools.
keywords:
  - docs
  - mapping tools
  - backups
---

Mapping Tools speichert Beatmap-Backups im dafür konfigurierten Ordner. Öffne ihn über **About > Open backups folder** oder ändere den Speicherort in den **Preferences**.

Wenn das Auslesen des Live-Editorzustands eingerichtet ist, können Backups auch den neuesten, noch nicht gespeicherten Zustand des Editors enthalten. Andernfalls sichert Mapping Tools die Beatmap-Datei, auf die es auf dem Datenträger zugreifen kann.

## Automatische Backups {#automatic-backups}

Wenn diese Funktion aktiviert ist, erstellt Mapping Tools ein Backup, bevor ein Tool eine Beatmap ändert. So kannst du den vorherigen Stand wiederherstellen, falls du einen Tool-Lauf rückgängig machen möchtest. In den **Preferences** kannst du den Backup-Ordner und die Aufbewahrungsgrenze festlegen. Sobald die Grenze erreicht ist, werden die ältesten Backups gelöscht.

## Periodische Backups {#periodic-backups}

Wenn diese Funktion aktiviert ist, sichert Mapping Tools die aktuelle Beatmap regelmäßig, solange der Live-Editorzustand ausgelesen werden kann. Hat sich die Beatmap seit dem letzten Backup nicht geändert, wird kein neues angelegt. Periodische Backups enthalten `PB` im Dateinamen.

## Manuelle Backups {#manual-backups}

Über das Menü **File** kannst du ein Backup der ausgewählten Beatmap erstellen oder ein Backup in sie laden. Manuelle Backups enthalten `UB` im Dateinamen. **QuickUndo** stellt das neueste nicht-periodische Backup in der aktuell in osu! geöffneten Beatmap wieder her.
