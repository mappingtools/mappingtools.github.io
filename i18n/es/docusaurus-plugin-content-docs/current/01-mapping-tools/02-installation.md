---
title: "Instalación"
author: "aehrea"
id: installation
description: Cómo instalar Mapping Tools en Windows, Linux y macOS.
keywords:
  - documentación
  - mapping tools
  - instalación
---

Mapping Tools ofrece versiones nativas para **Windows, Linux y macOS**. Descarga la versión para tu procesador desde la [página de descargas](/download) o desde las [versiones de GitHub](https://github.com/OliBomby/Mapping_Tools/releases/latest).

Todos los paquetes son autónomos e incluyen el entorno de ejecución de .NET 10.

## Elige un paquete

- **Windows**: usa el instalador o el ZIP portable. Elige x64 para la mayoría de los equipos; x86 es para Windows de 32 bits.
- **Linux**: usa AppImage o el ZIP portable para x64 o ARM64.
- **macOS**: descarga el ZIP portable para Intel (x64) o Apple silicon (ARM64) y abre **Mapping Tools.app** desde la carpeta extraída.

## Integración con el editor según la plataforma

Las herramientas que trabajan con archivos de beatmap funcionan en todas las versiones de escritorio. Algunas funciones que interactúan con el editor en directo dependen del sistema operativo y del método de integración:

- **Geometry Dashboard** y la integración de memoria de **Editor Reader** requieren Windows.
- En Linux y macOS, la detección del beatmap actual usa de forma predeterminada la API local **Gosumemory/Tosu** en `127.0.0.1:24050`. Inicia una API compatible para usar **Open current beatmap**. En estas plataformas, la lectura del estado del editor en directo y su recarga automática están desactivadas de forma predeterminada.
- Siempre puedes seleccionar un beatmap directamente con **File > Open beatmap**.

Para osu! lazer, usa el flujo **File > Edit externally**. Consulta la [guía de lazer](/docs/guides/use-mt-in-lazer).

## Configuración {#setup}

Después de instalar Mapping Tools, pulsa el botón de la esquina superior izquierda para abrir el menú de navegación y entra en **Preferences** para configurar la aplicación.

Los campos más importantes son:

- **osu! folder**: ruta a la carpeta que contiene _osu!_.
- **Songs folder**: ruta a la carpeta que contiene tus mapas. Normalmente está dentro de la carpeta de _osu!_.
- **osu! config user file**: ruta al archivo de configuración de usuario de osu!. Normalmente está dentro de la carpeta de _osu!_ y se llama `osu.[username].cfg`.

:::note

Si usas osu!stable, asegúrate de que estas rutas sean correctas; de lo contrario, es posible que Mapping Tools no funcione bien.

:::
