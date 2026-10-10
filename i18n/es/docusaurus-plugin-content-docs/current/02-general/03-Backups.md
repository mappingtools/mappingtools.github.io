---
title: "Copias de seguridad"
author: "OliBomby"
id: backups
description: Todo sobre las copias de seguridad de Mapping Tools.
keywords:
  - documentación
  - mapping tools
  - copias de seguridad
---

Mapping Tools guarda copias de seguridad de los beatmaps en la carpeta configurada para ello. Abre esa carpeta con **About > Open backups folder** o cambia su ubicación en **Preferences**.

Si está configurada la lectura del estado del editor en directo, las copias pueden incluir el estado más reciente del editor, incluso si aún no se ha guardado. De lo contrario, Mapping Tools guarda una copia del archivo de beatmap disponible en el disco.

## Copias de seguridad automáticas {#automatic-backups}

Cuando esta opción está activada, Mapping Tools crea una copia antes de que una herramienta modifique un beatmap. Así tendrás un punto de restauración para deshacer la ejecución. Puedes configurar la carpeta y el límite de copias en **Preferences**. Al alcanzar el límite, se eliminan las copias más antiguas.

## Copias de seguridad periódicas {#periodic-backups}

Cuando esta opción está activada, Mapping Tools guarda periódicamente una copia del beatmap actual mientras pueda leer el estado del editor en directo. Omite la copia si el beatmap no ha cambiado desde la anterior. Los nombres de archivo de estas copias contienen `PB`.

## Copias de seguridad manuales {#manual-backups}

Usa el menú **File** para crear una copia del beatmap seleccionado o cargar una copia en él. Los nombres de las copias manuales contienen `UB`. **QuickUndo** restaura en el beatmap abierto en osu! la copia no periódica más reciente.
