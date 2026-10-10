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

## Compatibilidad de funciones {#editor-integration-by-platform}

✅ Compatible · ❌ No compatible. Algunas funciones compatibles requieren la configuración que se describe a continuación.

<div className="feature-compatibility">

| Sistema operativo | Cliente de osu! | Leer/escribir beatmaps | Obtener beatmap actual | Leer estado del editor en directo | Recarga automática | Atajos de teclado globales | Superposición de Geometry Dashboard |
| --- | --- | :---: | :---: | :---: | :---: | :---: | :---: |
| Windows | stable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Windows | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Windows | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Linux | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| Linux | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| macOS | stable | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | lazer | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ |
| macOS | unstable | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |

</div>

- **osu! stable**: en Windows, la detección del beatmap actual y la lectura del estado del editor en directo usan la integración con la memoria; la recarga automática simula pulsaciones de teclas. En Linux y macOS, ejecuta stable con Wine e inicia una API **Gosumemory/Tosu** compatible en `127.0.0.1:24050` para obtener el beatmap actual. Configura **Songs folder** en Preferences.
- **osu! lazer**: usa **File > Edit externally** para acceder a los archivos del beatmap. Mapping Tools detecta automáticamente el beatmap que se edita externamente, lo que cuenta como obtener el beatmap actual en esta tabla. Usa **Finish editing and import changes** en lazer para aplicar tus cambios. Consulta la [guía de lazer](/docs/guides/use-mt-in-lazer).
- **osu! unstable**: selecciona **MTIPC** en Preferences para obtener el beatmap actual, leer el estado del editor en directo y recargar el editor. Estas funciones requieren el servidor MTIPC del cliente. La lectura del estado del editor en directo y la recarga del editor están desactivadas de forma predeterminada en Linux y macOS.
- **Atajos de teclado globales**: en Linux, la compatibilidad depende de X11 o de un entorno de escritorio con el portal de atajos globales. En macOS, concede los permisos de acceso al teclado que solicite el sistema.

Siempre puedes seleccionar un beatmap directamente con **File > Open beatmap**.

## Configuración {#setup}

Después de instalar Mapping Tools, pulsa el botón de la esquina superior izquierda para abrir el menú de navegación y entra en **Preferences** para configurar la aplicación.

Los campos más importantes son:

- **osu! folder**: ruta a la carpeta que contiene _osu!_.
- **Songs folder**: ruta a la carpeta que contiene tus mapas. Normalmente está dentro de la carpeta de _osu!_.
- **osu! config user file**: ruta al archivo de configuración de usuario de osu!. Normalmente está dentro de la carpeta de _osu!_ y se llama `osu.[username].cfg`.

:::note

Si usas osu!stable, asegúrate de que estas rutas sean correctas; de lo contrario, es posible que Mapping Tools no funcione bien.

:::
