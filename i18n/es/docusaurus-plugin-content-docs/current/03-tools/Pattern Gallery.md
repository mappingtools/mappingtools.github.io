---
title: "Pattern Gallery"
author: "OliBomby"
id: pattern-gallery
description: Importa y exporta patrones de beatmaps de osu! y crea colecciones que puedes compartir con tus amigos.
keywords:
  - documentación
  - mapping tools
  - pattern gallery
---

Pattern Gallery te permite importar y exportar patrones de beatmaps de osu! y crear colecciones para compartir. Es una herramienta excelente para trasladar rápidamente cualquier disposición de objetos o sección de un beatmap a otros beatmaps.

## Descripción de la herramienta

Pattern Gallery te permite:

* Importar y exportar patrones de beatmaps de osu! para trasladar grupos de objetos entre beatmaps.
* Crear colecciones de patrones que puedes compartir con tus amigos.
* Añadir o quitar patrones con los botones de la parte inferior.
* Exportar un patrón al beatmap seleccionado: selecciona uno o varios patrones y pulsa el botón de ejecutar, o haz doble clic en un patrón.
* Aplicar opciones de exportación para procesar el patrón.
* Guardar, cargar, cambiar el nombre, importar y exportar colecciones desde el menú **Project**.

## Uso

1. Abre Pattern Gallery en Mapping Tools.
2. Añade patrones a tu colección con las opciones de importación.
3. Selecciona un patrón de la galería.
4. Pulsa el botón de ejecutar para exportar el patrón al beatmap seleccionado.

## Funciones y ajustes

La herramienta ofrece estas funciones:

* **Gestión de patrones**: añade, elimina y renombra patrones, y organízalos en colecciones.
* **Opciones de importación**: importa patrones de varias fuentes, como objetos seleccionados, archivos de beatmap o códigos de patrón.
* **Opciones de exportación**: personaliza la exportación con opciones de escala, rotación y filtrado.

## Opciones de exportación

Al exportar un patrón, puedes ajustar estas opciones:

* **Export Offset**: determina en qué momento se colocará el patrón. Puedes usar el momento original del patrón, un momento personalizado o el momento actual del editor.
  * **Custom export offset**: determina en qué momento se colocará el patrón en el modo de desplazamiento personalizado.
* **Deletion margin**: margen de tiempo adicional, en milisegundos, alrededor del patrón para eliminar partes del mapa original.
* **Parting distance**: número mínimo de beats que debe haber en un hueco para dividir el patrón en partes más pequeñas.
* **Beat divisors**: introduce aquí los divisores de beat, separados por comas. Por ejemplo: `1/4, 1/12, 1/7, 4/5, 0.13435622499`.
* **Custom Scale**: cambia el tamaño del patrón especificando un factor de escala.
* **Custom Rotate**: gira el patrón en el sentido de las agujas del reloj el número de grados indicado.
* **Pattern Overwrite Mode**: determina cómo se gestionan los objetos que se solapan entre el patrón y el beatmap de destino:
  * **NoOverwrite**: conserva todos los objetos existentes y añade el patrón sin quitar nada.
  * **PartitionedOverwrite**: elimina objetos del mapa original solo en las partes densas del patrón.
  * **CompleteOverwrite**: elimina todos los objetos del mapa original entre el inicio y el final del patrón.
* **Timing Overwrite Mode**: determina cómo se combina el timing del mapa original con el timing del patrón.
* **Include hitsounds**: exporta el patrón con los efectos de hitsound de sus puntos de timing.
* **Include kiai**: exporta el patrón con el kiai del patrón.
* **Scale to new circle size**: escala el patrón para conservar el espaciado relativo al tamaño de los círculos.
* **Scale to new timing**: escala el tiempo del patrón para conservar el número de beats entre objetos con el nuevo timing. Puede producir ajustes incorrectos si el timing incluye redlines sin ajustar. No uses esta opción si tienes redlines con BPM 0 o infinito.
* **Snap to new timing**: ajusta los objetos del patrón al nuevo timing usando los divisores de beat especificados.
* **Manualify stacks**: apila manualmente los objetos del patrón.
* **Fix global SV**: ajusta el SV de las greenlines del patrón al SV global nuevo para que los sliders mantengan el mismo SV en el beatmap.
* **Fix BPM SV**: ajusta el SV de las greenlines del patrón al BPM nuevo para que los sliders mantengan el mismo SV en el beatmap. Se recomienda desactivar esta opción si usas **Scale to new timing**.
* **Fix colourhax**: ajusta los saltos de color para conservar los índices de color de los objetos en el patrón y el mapa original.
* **Fix slider tick rate**: multiplica el BPM del patrón para conservar la frecuencia de ticks de slider del patrón.

## Menú contextual de patrones

El menú contextual de los patrones de la galería (clic derecho en un patrón) incluye estas opciones:

* **Properties**: muestra detalles del patrón, como su nombre, fecha de creación, último uso y número de usos.
* **Delete**: elimina los patrones seleccionados. Mantén Mayús para omitir el cuadro de confirmación.
* **Open in File Explorer**: abre en el Explorador de archivos los archivos de origen de los patrones seleccionados.
* **Group**: opciones para agrupar patrones.

## Opciones de importación

El botón de importación permite importar patrones de varias fuentes.

* **Import Selected**: crea un patrón a partir de los objetos seleccionados actualmente en el editor.
  * **Name**: nombre del patrón.
* **Import from .osu File**: importa patrones de un archivo `.osu` del equipo.
  * **Name**: nombre del patrón.
  * **Pattern file path**: ruta al archivo del patrón que se va a importar.
  * **Filter**: filtro para el archivo `.osu`.
  * **Start Time**: momento del archivo `.osu` en que comienza el patrón.
  * **End Time**: momento del archivo `.osu` en que termina el patrón.
* **Import from Code**: importa un patrón desde un código, algo útil para compartir patrones en línea.
  * **Name**: nombre del patrón.
  * **Hit Objects**: código de los objetos.
  * **Timing Points**: código de los puntos de timing.
  * **Global SV**: establece el slider velocity global de los objetos del patrón.
  * **Game Mode**: modo de juego para el que se crea el patrón.

## Menú Project

El menú **Project** de Pattern Gallery permite:

* Guardar colecciones de patrones.
* Cargar colecciones de patrones.
* Cambiar el nombre de las colecciones.
* Importar colecciones de patrones.
* Exportar colecciones de patrones.
