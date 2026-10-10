---
title: "Mapset Merger"
author: "OliBomby"
id: mapset-merger
---

Mapset Merger te permite combinar varios mapsets en uno solo.

La herramienta resuelve automáticamente los conflictos entre archivos: mueve tantos archivos como puede a subcarpetas distintas y reconstruye los conjuntos de muestras de los hitsounds personalizados. Por desgracia, no se pueden combinar las skins de beatmap ni los hitsounds personalizados de spinner, porque los beatmaps no hacen referencia explícita a esos archivos; por eso, su presencia siempre afecta a todo el mapset.

## Añadir mapsets {#adding-mapsets}

Para añadir un mapset, pulsa el botón más de la esquina inferior derecha. Se añadirá a la colección un mapset con la información del beatmap seleccionado. Si haces **Mayús y clic** en el botón más, se usará en su lugar el mapset abierto actualmente en el cliente de osu!.

Todos los mapsets que se combinarán aparecen en la lista. Cada uno tiene un nombre y una ruta a su carpeta raíz. Los nombres se usan para clasificar los archivos del mapset combinado, así que procura que sean breves y únicos. Puedes editar una ruta con **doble clic**; aparecerá un botón para elegirla en el Explorador de archivos.

## Exportar {#exporting}

Pulsa el botón de ejecutar para combinar los mapsets y exportar los archivos a la carpeta **Export path**. Asegúrate de que esa carpeta exista; de lo contrario, se producirá un error.

Si marcas **Move storyboard to .osu**, Mapset Merger trasladará el contenido de todos los archivos `.osb` de un mapset a los archivos `.osu`. Así, cada storyboard pertenecerá a un beatmap y no se filtrará a los demás mapsets de la combinación. Es útil al combinar mapsets con storyboards distintos, pero ten cuidado: si un mapset tiene un archivo de storyboard grande y varias dificultades, los datos se duplicarán y los archivos `.osu` crecerán mucho.
