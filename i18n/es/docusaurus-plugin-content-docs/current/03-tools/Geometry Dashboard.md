---
title: "Geometry Dashboard"
author: "OliBomby"
id: geometry-dashboard
---

Geometry Dashboard es una potente herramienta que superpone objetos virtuales geométricamente relevantes en el editor de osu!. Puedes ajustar objetos a estos puntos, líneas y círculos virtuales y crear patrones geométricamente perfectos, mucho más difíciles o imposibles de conseguir de otro modo.

:::note Compatibilidad con plataformas

Geometry Dashboard requiere Windows porque su superposición sobre el editor en directo depende de una integración específica de Windows.

:::

:::tip
Para que esta herramienta funcione, debes especificar tu archivo de configuración de usuario en las preferencias de Mapping Tools.
:::

## Conceptos básicos

Geometry Dashboard funciona de esta forma:

1. **Lee el estado actual del editor de osu!** Esto incluye los objetos visibles, el momento del editor y la posición de la ventana del editor.
2. **Genera objetos virtuales a partir de esos objetos.** Para ello usa un conjunto de generadores configurables que crean puntos, líneas y círculos virtuales a partir de los objetos.
3. **Muestra los objetos virtuales en una superposición sobre el editor de osu!** Así puedes ver la geometría generada y ajustar el cursor a ella.

## Interfaz de usuario

La ventana de Geometry Dashboard se divide en varias secciones:

* **Search**: barra de búsqueda para filtrar la lista de generadores y facilitar la navegación.
* **Botones de alternancia**: permiten activar o desactivar distintas funciones.
  * Select All
  * Lock All
  * Usability All
* **Botón Savestates**: abre la [ventana Savestates](#savestates).
* **Botón Preferences**: abre la [ventana Preferences](#preferences).
* **Lista Generators**: muestra los generadores disponibles y permite activarlos, desactivarlos o configurar sus parámetros.

## Geometría virtual

La geometría virtual es la base de esta herramienta. No son objetos reales del editor, sino puntos sobre los que puedes situar el cursor para colocar objetos con precisión mientras mapeas.

### Estados de la geometría virtual

La geometría virtual puede tener varios estados particulares, que puedes activar o desactivar:

* **Selected**: activa el objeto para que pueda servir de base para crear nuevos objetos. Puedes seleccionar objetos virtuales bajo el cursor con la tecla de selección. Los objetos resaltados tienen una superposición de otro color y un brillo en los bordes.
* **Locked**: impide que el objeto desaparezca cuando deje de existir el generador o el objeto del que depende. Es útil para proteger una geometría y evitar borrarla por accidente. La geometría virtual bloqueada aparece atenuada en gris.
* **Usable**: permite que los generadores usen esta geometría virtual para crear geometría adicional. Si está desactivado, los generadores la ignorarán y no crearán objetos a partir de ella. Los objetos virtuales que no se pueden usar aparecen atenuados.
* **Relevancy**: valor de 0 a 1 que indica la relevancia de esta geometría. Cuanto mayor sea, más opaca aparecerá.

## Generadores

Los generadores son el núcleo de Geometry Dashboard. Crean objetos virtuales a partir de los objetos del mapa y de otros objetos virtuales.

### Funcionamiento general de los generadores

Un generador funciona de esta manera:

1. **Selección de entradas**: cada generador tiene un conjunto de *dependencias* (los tipos de entrada requeridos) y *predicados de entrada*. El predicado define reglas adicionales que deben cumplir los objetos virtuales para que el generador los use. Geometry Dashboard busca en las capas anteriores objetos que coincidan con las dependencias y cumplan los predicados. Entre otras cosas, estas reglas pueden exigir que los objetos estén seleccionados o tengan cierto valor de relevancia.
2. **Generación de geometría**: para cada combinación posible de objetos de entrada seleccionados, el generador usa sus métodos para crear objetos virtuales. Estos métodos reciben como parámetros los objetos de entrada y devuelven uno o varios objetos virtuales nuevos.
3. **Capas**: cada conjunto nuevo de objetos virtuales se coloca en una capa nueva. Puedes configurar el número de capas con **Inception Level** en **Preferences**. Los objetos virtuales de las capas inferiores pueden influir en los objetos que se crean en las capas más complejas siguientes.
4. **Actualización**: cada vez que se produce un cambio que requiere recalcular Geometry Dashboard, se vuelven a generar los objetos de la primera capa según la preferencia **Update Mode**. Después se actualiza la segunda capa, luego la tercera, y así sucesivamente.

Para evitar que se acumulen demasiados objetos no deseados, los generadores incluyen una comprobación que combina los objetos de una misma capa si están lo bastante cerca y suma sus valores de relevancia. En **Preferences** puedes cambiar la distancia necesaria para combinar dos objetos.

### Lista de generadores

Esta es la lista de generadores disponibles en Geometry Dashboard:

* **Generadores básicos**: crean objetos virtuales directamente a partir de los objetos del mapa. En todos ellos, la posición temporal se establece en el tiempo medio del objeto de origen.
  * **Points on Circles and Slider Heads**: genera un punto virtual en la posición inicial de círculos y sliders.
  * **Points on Slider Ends**: genera un punto virtual justo al final de los sliders.
  * **Points on Slider Anchors**: genera puntos virtuales en los anclajes rojos y blancos de los sliders.
  * **Points on Last Anchors**: genera puntos virtuales en el último punto de curva de los sliders.
  * **Lines on Linear Sliders**: si el slider es lineal, genera una línea virtual desde Pos hasta Curve Point. El tiempo y la relevancia coinciden con los del slider de origen.
  * **Points on Blanket Centers**: genera un punto en el centro de los sliders con forma de círculo. El tiempo y la relevancia coinciden con los del slider de origen.
  * **Circles on 3-Point Sliders**: crea un círculo a partir de los anclajes de los sliders para generar curvas de tipo blanket o perfect. El tiempo y la relevancia coinciden con los del slider de origen.
  * **Points on Slider Paths**: genera muchos puntos virtuales en los recorridos de los sliders. Cambia **Point Density** para determinar cuántos puntos se crean. Este generador requiere cálculos adicionales.
* **Generadores intermedios**: necesitan generadores básicos para funcionar. Ayudan a formar figuras y crear guías.
  * **Tangent Circles on Circle**: genera círculos virtuales que cortan al círculo de entrada en exactamente un punto.
  * **Circles by Two Points**: recibe dos puntos virtuales y genera dos círculos, uno centrado en cada punto y con un radio igual a la distancia entre ellos.
  * **Equilateral Triangle from Two Points**: recibe dos puntos virtuales y genera otro punto a cada lado para crear dos triángulos equiláteros.
  * **Equilateral Triangle from Two Points (Type II)**: funciona como el generador de triángulos normal, pero usa otra disposición para formar el triángulo.
  * **Square from Two Points**: recibe dos puntos virtuales y genera un punto a cada lado para crear un cuadrado.
  * **Square from Two Points (Type II)**: recibe dos puntos virtuales y genera dos puntos a cada lado para crear dos cuadrados.
  * **Line by Two Points**: recibe dos puntos virtuales y genera una línea virtual que los conecta.
  * **Average of Two Points**: recibe dos puntos virtuales y calcula un punto virtual a partir de su posición media.
  * **Average of Three Points**: recibe tres puntos virtuales y calcula un punto virtual a partir de su posición media.
  * **Scale & Rotate around a Fixed Point**: gira y escala cualquier objeto virtual alrededor de un punto virtual fijo. Puedes configurar el ángulo, el factor de escala y reglas adicionales para elegir el punto fijo.
  * **Parallel Lines**: recibe una línea y un punto, y genera una línea virtual que pasa por el punto y es paralela a la línea de entrada.
  * **Perpendicular Lines**: recibe una línea y un punto, y genera una línea virtual que pasa por el punto y es perpendicular a la línea de entrada.
  * **Bisector of Angles**: recibe dos líneas virtuales y genera la bisectriz del ángulo que forman en su punto de intersección.
  * **Bisector of Two Points**: recibe dos puntos virtuales y genera la mediatriz entre ellos.
  * **Tangent Lines on Circle**: recibe un círculo y un punto virtuales, y genera líneas virtuales tangentes al círculo que pasan por el punto.
* **Generadores avanzados**: son generadores más especializados que requieren configuración adicional y permiten crear patrones recursivos avanzados.
  * **Intersection Points**: recibe dos líneas o círculos virtuales y genera un punto virtual en cada intersección. Es muy útil en combinación con otros métodos de generación geométrica. *Nota:* encontrar intersecciones requiere muchos cálculos; el rendimiento puede verse muy afectado si hay varios dibujos complejos activos en el editor, así que úsalo con cuidado.
  * **Successor of 2 Points**: recibe dos puntos virtuales y calcula el siguiente punto con la misma velocidad. Puede usarse con **Points on Slider Paths** para predecir curvas con más precisión.
  * **Successor of 3 Points**: recibe tres puntos virtuales y calcula el siguiente punto con el mismo ángulo y el mismo cambio de velocidad.
  * **Successor of 3 Points Reversed**: recibe tres puntos virtuales y calcula el siguiente punto con el mismo cambio de velocidad y el ángulo opuesto.
  * **Successor of 4 Points**: recibe cuatro puntos virtuales y calcula el siguiente punto con el mismo ángulo, cambio de ángulo, cambio de velocidad y cambio del cambio de velocidad.
  * **Scale & Rotate around a Fixed Point**: gira y escala cualquier objeto virtual alrededor de un punto virtual fijo. Puedes configurar el ángulo, el factor de escala y reglas adicionales para elegir el punto fijo.
  * **Reflection across a Line**: refleja cualquier objeto virtual sobre una línea virtual que actúa como eje de simetría.

## Opciones de los generadores

Cada generador tiene opciones para controlar su comportamiento:

* **Active**: indica si el generador está activado. Si está desactivado, no crea objetos virtuales.
* **Sequential**: hace que el generador solo use objetos consecutivos como entrada. Cuando está activado, solo genera pares de objetos virtuales consecutivos en el tiempo. Esto reduce mucho la geometría creada y puede evitar que se llene la pantalla.
* **Deep**: indica al generador que revise no solo la capa superior, sino también todas las capas anteriores que correspondan.
* **Relevancy Ratio**: relevancia base de los objetos virtuales que genera, de 0 a 1. La relevancia real puede variar según la relevancia de las demás entradas.
* **Generates Inheritable**: si está activado, los objetos generados se pueden usar en otros generadores. Si está desactivado, ningún otro generador podrá usarlos.
* **Input Selection Collection**: conjunto de reglas que determina qué tipos de objetos virtuales acepta el generador. Consulta [Selección de entradas en detalle](#input-selection-in-detail) para obtener más información.

### Ajustes de generadores especializados

Algunos generadores avanzados tienen opciones especiales.

* **Circle from Single Point**:
  * *Radius*: escala del círculo.
* **Points on Slider Paths**:
  * *Points Density*: cantidad de puntos que se generan por píxel de osu! del recorrido del slider.
* **Scale & Rotate around a Fixed Point**:
  * *Angle*: ángulo de giro en grados.
  * *Scalar*: factor de escala uniforme.
  * *Origin Input Selection*: reglas adicionales que deben cumplir los objetos virtuales para usarse como centro de rotación.
  * *Other Input Selection*: reglas adicionales para seleccionar los objetos que se transformarán alrededor del centro.
* **Reflection across a Line**:
  * *Axis Input Selection*: reglas adicionales que deben cumplir los objetos virtuales para usarse como eje de este generador.
  * *Other Input Selection*: reglas adicionales para seleccionar los objetos que se reflejarán sobre el eje.

### Selección de entradas en detalle {#input-selection-in-detail}

La selección de entradas es el mecanismo principal para controlar qué objetos virtuales considera un generador en sus cálculos. Cada generador define los tipos de entrada requeridos (por ejemplo, puntos o líneas), y puedes usar predicados de entrada para limitar la selección según las propiedades de los objetos. Si las selecciones no están bien configuradas, los generadores crearán demasiados objetos virtuales irrelevantes o no podrán crear los objetos necesarios.

Una colección de predicados de selección contiene varios predicados. Basta con que se cumpla uno para que el objeto virtual pueda usarse como entrada.

Al pasar el cursor sobre **Input Selection**, pulsa el botón más para añadir un predicado de selección. Aparecerán varios ajustes para limitar aún más la geometría generada:

* **Need Selected**: si está activado, el generador solo acepta objetos virtuales seleccionados. Los objetos seleccionados también son los primeros sobre los que se sitúa el cursor. Así puedes controlar con precisión lo que creas.
* **Need Locked**: si está activado, el generador solo acepta objetos bloqueados. Ignorará por completo cualquier objeto que no esté bloqueado. Esto puede ser útil al usar algunos generadores mientras se bloquean otros.
* **Need Generated By This**: comprueba si los objetos virtuales se generaron con este mismo generador. Si se configura correctamente, permite limitar la geometría generada a la que quieres.
* **Need Generated Not By This**: filtro opuesto al anterior; solo se tendrán en cuenta objetos virtuales que no hayan sido generados por este generador.
* **Min Relevancy**: exige que los objetos usados como entradas tengan al menos cierto valor de relevancia. La relevancia va de 0 a 1; el valor 0 desactiva este filtro.

## Preferencias {#preferences}

La ventana **Preferences** de Geometry Dashboard permite personalizar distintos aspectos del comportamiento y la apariencia de la herramienta:

* **Hotkeys**:
  * **Snap Key**: tecla que debes mantener pulsada para ajustar el cursor a objetos virtuales.
  * **Select Key**: tecla que debes mantener pulsada para seleccionar objetos virtuales.
  * **Lock Key**: tecla que debes mantener pulsada para bloquear objetos virtuales.
  * **Usability Key**: tecla que debes mantener pulsada para cambiar si se pueden usar objetos virtuales.
  * **Refresh Key**: tecla que actualiza inmediatamente la lista de objetos de mapa de la capa raíz.
* **Offset**: desplaza todos los objetos virtuales respecto a la pantalla del editor. Puede resolver problemas de escala o posición.
  * **Left**: desplazamiento del borde izquierdo del editor.
  * **Top**: desplazamiento del borde superior del editor.
  * **Right**: desplazamiento del borde derecho del editor.
  * **Bottom**: desplazamiento del borde inferior del editor.
* **Complexity**: número de capas recursivas que se generarán. Puedes reducirlo para evitar problemas de rendimiento.
  * **Inception Level**: cantidad de capas que se generan a partir de los objetos del mapa de origen.
* **Downkey**: cambia qué objetos virtuales se muestran.
  * **Everything**: muestra todos los objetos virtuales, incluidos los objetos del mapa y sus descendientes y antecesores.
  * **Parents and parents of parents**: muestra los antecesores de los objetos a los que se ajusta el cursor, incluidos los antecesores de estos.
  * **Direct parents**: muestra solo los antecesores directos de los objetos a los que se ajusta el cursor.
  * **Children and children of children**: muestra todos los descendientes de los objetos a los que se ajusta el cursor, incluidos los descendientes de estos.
  * **Direct children**: muestra solo los descendientes inmediatos de los objetos a los que se ajusta el cursor.
* **Upkey**: cambia qué objetos virtuales se muestran cuando no está pulsada la tecla Snap Key.
  * **All visible**: muestra todos los objetos del mapa según las opciones de selección configuradas.
  * **Nothing**: oculta todos los objetos cuando no está pulsada Snap Key.
* **Selection**: cambia qué objetos del mapa se usan para generar objetos virtuales.
  * **All visible**: incluye todos los objetos visibles del mapa.
  * **Visible or selected**: usa los objetos visibles, salvo que haya objetos seleccionados; en ese caso, usa todos los objetos seleccionados.
  * **Selected only**: usa los objetos seleccionados en el editor.
* **Updating**: determina cuándo se actualizan los objetos virtuales.
  * **Any change**: actualiza los objetos cuando se produce cualquier cambio.
  * **Time change**: actualiza los objetos cuando cambia el tiempo del editor. Mejora el rendimiento a costa de la rapidez de respuesta.
  * **osu! activated**: actualiza los objetos cuando la ventana actual de osu! pasa a primer plano.
  * **Hotkey down**: actualiza los objetos al pulsar la tecla de actualización.
* **Behavior**: otras opciones de comportamiento de Geometry Dashboard.
  * **Minimal diff**: distancia a la que deben estar dos objetos virtuales para que se combinen.
  * **Keep running**: mantiene Geometry Dashboard en ejecución aunque se abran otras herramientas.
  * **See playfield**: muestra los límites del campo de juego superpuestos en el editor.
  * **Debug**: muestra los límites del editor superpuestos en el editor. Si no puedes verlos ni siquiera al activar esta opción, el editor está fuera del alcance de la herramienta.

### Opciones de la geometría virtual

Puedes personalizar el color, la opacidad, el grosor y el estilo de línea de cada tipo de objeto virtual que aparece en el editor para facilitar su lectura.

* **Color**: color del borde. También puedes copiarlo desde un selector de color (haz clic en el valor HEX para copiarlo).
* **Opacity**: transparencia del objeto.
* **Thickness**: grosor de las líneas que forman el contorno del objeto virtual.
* **Dash**: determina si el contorno es discontinuo o continuo.

## Savestates {#savestates}

Los savestates funcionan como perfiles de teclas de acceso rápido. Puedes alternar entre ellos rápidamente en lugar de cambiar manualmente los ajustes de cada generador y las preferencias. También puedes asignar una tecla de acceso rápido a un savestate para cambiarlo aún más rápido.

Para crear un savestate, pulsa el icono +. Luego puedes darle un nombre y asignarle una tecla de acceso rápido. Los botones para guardar o cargar permiten guardar o cambiar los ajustes actuales.
