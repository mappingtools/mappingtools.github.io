---
title: "Usar Mapping Tools en osu! lazer"
author: "OliBomby"
id: use-mt-in-lazer
description: Cómo usar Mapping Tools con osu! lazer.
keywords:
  - documentación
  - mapping tools
  - lazer
  - compatibilidad
---

[osu! lazer](https://github.com/ppy/osu) tiene un flujo de edición de beatmaps distinto al de osu! stable. Mapping Tools puede editar archivos de beatmap de ambos clientes. En lazer, usa el flujo de edición externa y ten en cuenta las limitaciones de algunas funciones.

## Cómo usar Mapping Tools en osu! lazer

En el editor de osu! lazer, selecciona **File > Edit externally**. Se creará una carpeta temporal con todos los archivos del mapset que estás editando. Mapping Tools la detectará automáticamente y la establecerá como beatmap seleccionado. Cuando termines de editar con Mapping Tools, selecciona **Finish editing and import changes** para que osu! lazer importe los cambios.

![File > Edit externally](assets/osu_TAqF8oqGPr.png)

## Compatibilidad

No todas las funciones de Mapping Tools son compatibles con osu! lazer. Esta sección resume la compatibilidad de las funciones.

Las funciones que usan Editor Reader no funcionan en osu! lazer. Si solo piensas usar osu! lazer, se recomienda desactivar Editor Reader en **Preferences**.

### General
- :x: **Open current beatmap** no funciona.
- :x: **Current editor time** no funciona.
- :x: **Selected hit objects** no funciona.
- :white_check_mark: **Generate backup** funciona.
- :white_check_mark: **Load backup** funciona.
- :white_check_mark: Los **slider paths** con varios tipos de segmentos son totalmente compatibles.

### Herramientas
- :x: **Geometry Dashboard** no funciona; depende de Editor Reader.
- :white_check_mark: **Hitsound Copier** funciona.
- :large_orange_diamond: **Hitsound Studio** funciona, pero las referencias a muestras importadas y beatmaps dejan de funcionar cuando se elimina la carpeta temporal.
- :white_check_mark: **Pattern Gallery** funciona.
- :white_check_mark: **Property Transformer** funciona.
- :white_check_mark: **Sliderator** funciona, pero el editor de lazer va muy lento.
- :white_check_mark: **Tumour Generator 2** funciona.
- :large_orange_diamond: **Auto-fail Detector** funciona, pero auto-fail no existe en lazer.
- :white_check_mark: **Combo Colour Studio** funciona.
- :white_check_mark: **Hitsound Preview Helper** funciona.
- :white_check_mark: **Map Cleaner** funciona.
- :white_check_mark: **Mapset Merger** funciona.
- :white_check_mark: **Metadata Manager** funciona.
- :white_check_mark: **Rhythm Guide** funciona.
- :white_check_mark: **Slider Completionator** funciona.
- :white_check_mark: **Slider Merger** funciona.
- :large_orange_diamond: **Slider Picturator** funciona, pero lazer no muestra el slider que contiene la imagen.
- :white_check_mark: **Timing Copier** funciona.
- :white_check_mark: **Timing Helper** funciona.

## Aviso sobre la compatibilidad futura con lazer

osu! lazer sigue en desarrollo activo, así que es probable que cambien su cliente y formato de archivos, lo que podría hacer que Mapping Tools dejara de funcionar correctamente.
Si tienes un problema al usar Mapping Tools en lazer que no aparezca en esta lista, informa del error con **About > Report an issue**.
