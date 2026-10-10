---
title: "Map Cleaner"
author: "OliBomby"
id: map-cleaner
---

Map Cleaner limpia el beatmap seleccionado eliminando greenlines innecesarias y también permite realizar otras operaciones en todo el beatmap.

Map Cleaner reconstruye todos los puntos de timing. Primero guarda las influencias de los puntos de timing y luego los vuelve a crear de forma estructurada. Así, las greenlines se ajustan automáticamente a los objetos que las usan y se eliminan los cambios innecesarios. Durante este proceso, el mapa y sus hitsounds prácticamente no cambian, salvo que actives funciones adicionales. Los cambios deberían notarse solo en el editor.

## Ajustes de información del mapa {#map-info-settings}

Estos ajustes determinan qué elementos de los puntos de timing eliminará Map Cleaner. Para ir sobre seguro y eliminar la menor cantidad posible, puedes dejarlos todos marcados.

- **Map uses volume changes in sliders**: indica a Map Cleaner que los cambios de volumen dentro del cuerpo de un slider son *intencionales* y no deben eliminarse.
- **Map uses sampleset changes in sliders**: indica que los cambios de conjunto de muestras o de índice de muestra dentro del cuerpo de un slider son *intencionales* y no deben eliminarse.
- **Map uses volume changes in spinners**: indica que los cambios de volumen durante un spinner son *intencionales* y no deben eliminarse.

## Funciones adicionales {#additional-features}

Estas operaciones se suman al funcionamiento habitual de Map Cleaner.

- **Resnap objects**: vuelve a ajustar todos los objetos y los finales de slider durante la limpieza del mapa, usando el divisor de beat configurado.
- **Resnap bookmarks**: vuelve a ajustar todos los marcadores con el método predeterminado. Quizá quieras desmarcar esta opción si tienes marcadores ajustados a divisores de beat poco habituales.
- **Remove unused samples**: elimina las muestras de audio del mapset que no utilice ningún beatmap ni storyboard del mapset. Se ignoran las muestras que pueden asignarse a una skin del beatmap.
- **Remove muting**: elimina de los hitsounds todos los cambios de volumen y de índice personalizados que tengan un volumen del 5 %. Si un punto de timing tiene un volumen del 5 %, se eliminan sus cambios de volumen e índice personalizado.
- **Mute unclickable hitsounds**: asigna un volumen del 5 % a los eventos de hitsound que provengan de objetos que no requieren la intervención activa del jugador. Solo se oirán los círculos, los inicios de slider y los inicios de notas hold. Esto puede ayudarte a entender mejor el ritmo del mapa y cómo se juega.

## Reajuste

El reajuste ajusta los objetos a la marca más cercana de la línea de tiempo y redondea el tiempo hacia abajo a un entero. Si hay una redline hasta 10 ms después del momento del objeto, se ajustará a esa redline. Así se evita que los objetos se ajusten a una marca situada 3 ms antes de la redline.

Los finales de slider se reajustan de dos formas. La primera toma la duración del slider y la cambia al múltiplo más cercano de un divisor de beat. Es similar a usar `Ctrl+Shift+S` en un slider del editor normal de osu!.

La segunda solo se usa si hay una redline durante el slider o hasta 20 ms después. Ajusta el tiempo final del slider a la marca más cercana del nuevo timing. Esto crea sliders con una duración entera, y su longitud exacta puede desviarse por el redondeo a las marcas de la línea de tiempo.

Los finales de spinner y de notas hold también se reajustan con el segundo método.

Si el beatmap seleccionado está en el modo de juego osu!mania, el reajuste también mueve la posición X de las notas al centro de las columnas y las coloca en Y = 192.

## Línea de tiempo

Al ejecutar Map Cleaner, aparece una pequeña línea de tiempo que muestra todos los cambios realizados en los puntos de timing.

- Una línea roja indica que se ha eliminado un punto de timing.
- Una línea naranja indica que se ha cambiado un punto de timing.
- Una línea verde indica que se ha añadido un punto de timing.

Si solo se ha movido un punto de timing, verás una línea roja en la posición anterior y una verde en la nueva.

Puedes hacer **doble clic** en cualquier línea para ir a ese momento en el editor.
