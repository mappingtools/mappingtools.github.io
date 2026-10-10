---
title: "Convertir hitsounds de mania a standard"
author: "OliBomby"
id: convert-mania-to-standard-hs
description: Cómo convertir hitsounds de osu!mania a hitsounds de osu!standard con Hitsound Studio.
keywords:
  - documentación
  - mapping tools
  - hitsound studio
  - hitsounds
  - convertir hitsounds
---

osu!mania permite tener varias notas en el mismo tick. Esto ofrece mucha más libertad para crear hitsounds, porque puedes usar varios conjuntos de muestras o muestras personalizadas a la vez. Sin embargo, dificulta copiar hitsounds de osu!mania a osu!standard, donde solo puede haber una nota por tick. Hitsound Studio permite convertir los hitsounds de osu!mania a osu!standard y abre muchas posibilidades para crear hitsounds.

## Paso 1: Configurar Hitsound Studio {#1}

Abre Hitsound Studio en Mapping Tools. Abre el menú **Project** y selecciona **New project**. Si no quieres perder la configuración actual de Hitsound Studio, guárdala primero con **Save project**.

## Paso 2: Importar capas de hitsound {#2}

Pulsa el botón más de la esquina inferior derecha para abrir la ventana de importación. Ve a la pestaña **Import hitsounds** para importar todos los hitsounds de un beatmap. En **Source beatmap**, selecciona el beatmap cuyos hitsounds de osu!mania quieres convertir. Marca también **Detect duplicate samples** y **Remove duplicate hitsounds**. Si el mapa usa muestras de storyboard para completar algunos hitsounds, marca **Include storyboarded samples**. Pulsa **Accept** para importarlos; verás que aparecen las capas de hitsound en Hitsound Studio.

## Paso 3: Configurar {#3}

En la parte inferior tienes que configurar otras dos opciones: **Base beatmap** y **Default sample**. En **Base beatmap**, selecciona el mapa que quieres convertir. Se usarán sus metadatos, timing y niveles de volumen.

**Default sample** tiene varias opciones y puedes elegir según tus preferencias. Se usa cuando las capas de hitsound no definen ningún hitsound normal, ya que osu!standard siempre reproduce un sonido normal. Puedes dejarla vacía, elegir el conjunto de muestras Soft e introducir el volumen `-1`.

## Paso 4: Exportar {#4}

Pulsa el botón de ejecutar de la esquina inferior derecha. Se abrirá un cuadro con las opciones de exportación. Asegúrate de que **Export mode** y **Export gamemode** estén ambos en **Standard**. También puedes cambiar **Sample file format** y **Mixed sample file format** a **Vorbis (.ogg)** para convertir todas las muestras a `.ogg` y ahorrar espacio. Pulsa **Accept** para empezar a exportar los hitsounds.

Al terminar la exportación de Hitsound Studio, verás una carpeta que contiene un archivo `.osu` con la dificultad de hitsounds de osu!standard y varios archivos de audio necesarios para los hitsounds. Puedes copiar esos archivos a tu mapset de osu!standard y copiar los hitsounds de la dificultad con Hitsound Copier.
