---
title: "Sliderator"
author: "OliBomby"
id: sliderator
---

Sliderator te permite crear sliders o streams cuya velocidad cambia a mitad del recorrido.

Para empezar, importa un slider con los controles de la esquina superior izquierda y edita la gráfica con el botón derecho del ratón.

:::caution No clasificable

Los sliders creados con Sliderator se consideran no clasificables. Encontrarás más información en [esta publicación de Reddit](https://www.reddit.com/r/osugame/comments/xnmcuq/acceldecel_sliders_made_with_mapping_tool_is_now/?utm_source=share&utm_medium=web2x&context=3).

:::

## Importar sliders {#importing}

Antes de usar Sliderator, importa uno o varios sliders con el botón **Import sliders**, en la esquina superior izquierda. Hay tres formas de hacerlo:

- **Selected** importa los sliders que tengas seleccionados en el editor de osu!.
- **Bookmarked** importa los sliders del beatmap seleccionado que tengan un marcador.
- **Time** importa los sliders del beatmap seleccionado que se indiquen con el código de tiempo que introduzcas en el cuadro contiguo. El formato debe ser el mismo que aparece al copiar objetos del editor y pegarlos en un campo de texto. Por ejemplo: `00:56:823 (1,2,1,2) -`.

Si has importado varios sliders, puedes pasar de uno a otro con los botones de flecha izquierda y derecha. Si haces Mayús y clic en uno de estos botones, Sliderator ajustará rápidamente la velocidad del slider actual antes de pasar al siguiente.

Al seleccionar un slider, se establecen automáticamente los valores **Beat length**, **BPM** y **Global SV**.

## Gráfica {#graph}

La gráfica es la parte principal de Sliderator: aquí defines cómo se mueve la bola del slider a lo largo del tiempo.

El eje X representa el **tiempo** durante toda la duración del slider, que se especifica en **Beat length**. El divisor de ajuste de beat de las líneas del eje X se cambia con el control deslizante debajo de la gráfica.

El eje Y tiene dos modos, que puedes alternar con el botón verde debajo de la gráfica:

- **X** es el modo de posición. El eje Y representa la posición a lo largo del slider y te permite definir dónde debe estar la bola en cada momento.
- **V** es el modo de velocidad. El eje Y representa el multiplicador de velocidad del slider y su intervalo va desde el límite negativo hasta el positivo de **SV limit**.

![Gráfica de Sliderator](./assets/sliderator_graph.png)

### Editar la gráfica {#editing-graph}

Edita la gráfica mediante puntos de control e interpolaciones.

Para añadir un punto de control, haz **clic derecho** en cualquier parte de la gráfica. Al hacer clic derecho en un punto de control se abre un menú contextual desde el que puedes eliminarlo o cambiar su método de interpolación. Usa **Mayús y clic derecho** sobre un punto para eliminarlo al instante. Haz **clic izquierdo** en los puntos para arrastrarlos. Puedes desplazar y ampliar o reducir la vista arrastrando el fondo con el botón izquierdo o usando la rueda del ratón.

En el centro de cada sección interpolada hay un punto de control más pequeño. Arrástralo verticalmente para cambiar la forma de la interpolación. Haz **clic derecho** en él para restablecerlo.

Estas teclas de acceso rápido también ayudan a mover los puntos de control:

- **Mayús** restringe el movimiento al plano horizontal.
- **Ctrl** restringe el movimiento al plano vertical.
- **Alt** desactiva el ajuste.

### Otros controles de la gráfica {#graph-controls}

Esta sección explica otros controles relacionados con la gráfica.

- **Beat length** es la duración del slider en beats. También determina el ancho de la gráfica.
- **BPM** es el número de beats por minuto del slider. Debe coincidir con el BPM del punto donde se exportará.
- **Global SV** es el multiplicador de slider del beatmap. Debe coincidir con el multiplicador del beatmap seleccionado.
- **SV limit** es el SV máximo permitido en la gráfica. También determina su altura en el modo de velocidad. De forma predeterminada es 10, el SV máximo permitido en los puntos de timing heredados.
- **Scale to completion** escala verticalmente todos los puntos de control para que el recorrido máximo de la bola del slider coincida con la finalización deseada.
- **Reset graph** restablece la gráfica a su estado predeterminado.
- **Show red anchors** muestra las posiciones de los anclajes rojos del slider con líneas horizontales en el modo de posición.
- **Show graph anchors** muestra en la vista previa del slider las posiciones de los puntos de control de la gráfica.
- **Expected segment count** estima el número de anclajes necesarios con la configuración actual. Un valor inferior a 10000 no debería ralentizar demasiado el juego.

## Opciones de exportación {#export-options}

Al ejecutar Sliderator, el slider resultante se exporta al beatmap seleccionado en el momento indicado. Puedes añadirlo al beatmap o activar **Override** para reemplazar lo que ya haya allí.

Si marcas **Export as stream instead**, Sliderator exportará una secuencia de círculos en lugar de un slider. La secuencia sigue la velocidad y la duración del slider. Esta opción usa el divisor de beat de la gráfica para determinar cuántos círculos colocar en cada beat.

Puedes elegir manualmente el **New SV** del slider. Este SV debería acercarse a la velocidad máxima usada en la gráfica. Normalmente, el valor automático es suficiente; a veces puedes reducirlo un poco para disminuir la cantidad de anclajes sin afectar a la calidad del slider.

**Minimum tumour length** permite reducir significativamente el número de anclajes del slider resultante. Sliderator usa tumours invisibles para ralentizar la bola; al aumentar la longitud mínima, se crean tumours más grandes y se usan menos. La desventaja es que el movimiento de la bola es menos fluido.

**Delegate SV to BPM** hace que Sliderator use el BPM para establecer el nuevo SV. Así se elimina el límite de 10x de SV de los puntos de timing heredados. También permite activar **Remove slider ticks**, que quita los ticks del slider mediante un punto de timing heredado con SV `NaN`.
