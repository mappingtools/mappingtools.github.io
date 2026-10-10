---
title: FAQ
author: OliBomby, aehrea
---

# FAQ

## ¿Por qué no veo ningún cambio en mi mapa?

Comprueba el **Selected Map** (la barra azul de la parte superior de la aplicación) para asegurarte de que has indicado la ruta correcta a tu beatmap.

Después de ejecutar la herramienta, asegúrate de **recargar el editor sin guardar**. Si guardas el mapa desde el editor, se deshacen los cambios de la herramienta porque el archivo `.osu` se sobrescribe con la versión anterior del beatmap. Puedes recargarlo rápidamente pulsando `Ctrl+L` y `Enter` en el editor.

## Aparece el error «Could not find part of the path» o «Empty path name is not legal» al ejecutar una herramienta.

Pasa el cursor sobre el **nombre del beatmap, en la parte superior de la ventana**, para ver la ruta completa. ¿Existe esa ruta? ¿Está en el lugar correcto la carpeta Songs? Si no está en la ubicación predeterminada de AppData, asegúrate de haber configurado la ruta correcta en **Preferences**.

## Cada vez que ejecuto una herramienta en un mapa concreto aparece un error, pero en otros mapas no.

Es probable que el mapa use un formato de archivo antiguo que ya no es compatible o que esté dañado. Puedes repararlo abriéndolo y guardándolo en el editor. Así osu! actualizará el mapa al formato más reciente, compatible con Mapping Tools.

## Una herramienta ha estropeado mi mapa. ¿Qué hago?

Mapping Tools guarda copias de seguridad de tus beatmaps cada vez que hace un cambio. Puedes encontrarlas en **About > Open backups folder**. También puedes cargar una copia en el mapa actual con **File > Load backup** o usar la tecla de acceso rápido QuickUndo, que puedes activar en **Preferences**.

## «Open Current Beatmap» no funciona o no se obtienen los objetos seleccionados.

Estas funciones dependen de la lectura de memoria del cliente de osu!. A veces esta lectura deja de funcionar; normalmente basta con reiniciar osu! o el equipo para solucionarlo. Estas son otras posibles causas y soluciones:
- El firewall o el antivirus bloquea Mapping Tools: desactiva el antivirus o añade Mapping Tools a las excepciones y vuelve a intentarlo.
- No tienes la versión más reciente de Mapping Tools: quizá necesites una actualización para adaptarte a los cambios de osu!.
- No tienes la versión más reciente de osu!: sal de los servidores privados y actualiza osu! a la versión más reciente.
- osu! ha cambiado de nuevo los desplazamientos de memoria: avísame para poder solucionarlo.
- Usas Mapping Tools en Windows 7 o anterior: asegúrate de tener instalado .NET Framework 4.5.1 o posterior.
- Usas Mapping Tools en un sistema operativo que no es Windows: consulta la [guía de instalación](/docs/mapping-tools/installation).

## ¿Cómo silencio los finales de slider sin copiar hitsounds?

Para silenciar solo los finales de slider, deja vacío el campo **Copy hitsounds from** y añade en **Copy hitsounds to** el mapa cuyos finales quieres silenciar. No se copiará ningún hitsound, pero los finales de slider sí se silenciarán.

Si copias hitsounds mientras silencias finales de slider, la herramienta usará como referencia los objetos del beatmap de origen. Por eso no silenciará los finales en lugares donde hayas añadido hitsounds. Esta es la razón por la que silenciar finales forma parte de Hitsound Copier, en vez de ser una herramienta independiente.

## Al iniciar Mapping Tools se me pide que instale .NET, pero ya lo he instalado.

Las versiones actuales de Mapping Tools se compilan para .NET 10 y se distribuyen como paquetes autónomos, así que no deberían requerir una instalación independiente de .NET.

Si sigues viendo el mensaje, asegúrate de iniciar una versión actual de Mapping Tools y vuelve a instalarla con una descarga nueva desde el sitio web.

## ¿Mapping Tools funciona en lazer?

Sí, la mayoría de las funciones de Mapping Tools funcionan en lazer. Consulta la [guía](/docs/guides/use-mt-in-lazer) para obtener más información.

## Tengo una pregunta que no aparece aquí o he encontrado un error.

Pregunta en el canal mt-techsupport de [Discord](https://discord.gg/YfjKN2yjQV), escríbeme directamente por Discord (olibomby) o abre un issue en [GitHub](https://github.com/OliBomby/Mapping_Tools/issues).
