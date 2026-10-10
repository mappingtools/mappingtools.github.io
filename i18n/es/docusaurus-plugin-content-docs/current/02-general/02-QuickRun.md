---
title: "QuickRun"
author: "OliBomby"
id: quickrun
description: Todo sobre QuickRun.
keywords:
  - documentación
  - mapping tools
  - quickrun
  - smartquickrun
  - quickundo
---

QuickRun te permite usar Mapping Tools más rápido. Ejecuta herramientas con una tecla de acceso rápido y recarga automáticamente el editor, de modo que el proceso completo requiere pulsar un solo botón.

Puedes activar QuickRun en **Preferences**.

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="Ejemplo de QuickRun"
  sources={{
    light: useBaseUrl('./img/quickrun_example_light.png'),
    dark: useBaseUrl('./img/quickrun_example_dark.png'),
  }}
/>
```

## Configuración {#setup}

Para activar QuickRun, ve a **Preferences** y asigna una tecla al campo **QuickRun hotkey**. Al pulsarla, se ejecutará la herramienta que tengas abierta en Mapping Tools.

`Alt+M` es una buena opción porque no interfiere con las teclas de acceso rápido estándar del editor de osu!.

Si activas **Auto reload after QuickRun**, Mapping Tools enviará un comando al cliente de osu! para recargar el editor cuando termine la herramienta. Así no tendrás que recargarlo manualmente.

:::info
Recuerda que, al usar QuickRun, siempre se usa el beatmap abierto en el editor y no el mapa seleccionado en Mapping Tools.
:::

## SmartQuickRun {#smartquickrun}

Marca la casilla situada a la derecha del campo **QuickRun hotkey** para activar **SmartQuickRun**. Esta función te permite ejecutar herramientas distintas según cuántos objetos tengas seleccionados en el editor.

SmartQuickRun distingue tres casos:
- **None** si no hay objetos seleccionados. `N=0`
- **Single** si hay exactamente un objeto seleccionado. `N=1`
- **Multiple** si hay más de un objeto seleccionado. `N>1`

## QuickUndo {#quickundo}

**QuickUndo** es una tecla de acceso rápido que carga la copia de seguridad más reciente en el editor y, en la práctica, deshace la ejecución anterior de una herramienta. También admite la función de **recarga automática** de QuickRun. Se recomienda usar QuickUndo junto con QuickRun.

`Ctrl+Shift+Z` es una buena tecla de acceso rápido para QuickUndo.
