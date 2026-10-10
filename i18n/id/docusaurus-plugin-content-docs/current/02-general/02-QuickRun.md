---
title: "QuickRun"
author: "OliBomby"
id: quickrun
description: Semua hal tentang QuickRun.
keywords:
  - dokumentasi
  - mapping tools
  - quickrun
  - smartquickrun
  - quickundo
---

QuickRun adalah cara praktis untuk mempercepat penggunaan Mapping Tools. Fitur ini memungkinkanmu menjalankan alat dengan menekan hotkey dan memuat ulang editor secara otomatis, sehingga seluruh proses cukup dilakukan dengan sekali tekan tombol.

Kamu dapat mengaktifkan QuickRun melalui **Preferences**.

```mdx-code-block
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

<ThemedImage
  alt="Contoh QuickRun"
  sources={{
    light: useBaseUrl('./img/quickrun_example_light.png'),
    dark: useBaseUrl('./img/quickrun_example_dark.png'),
  }}
/>
```

## Penyiapan {#setup}

Untuk mengaktifkan QuickRun, buka **Preferences** dan tetapkan hotkey pada kolom **QuickRun hotkey**. Setelah itu, menekan hotkey tersebut akan menjalankan alat yang sedang terbuka di Mapping Tools.

`Alt+M` adalah hotkey yang bagus karena tidak mengganggu hotkey standar editor osu!.

Jika opsi **Auto reload after QuickRun** diaktifkan, setelah alat selesai bekerja Mapping Tools akan otomatis mengirim perintah kepada klien osu!-mu untuk memuat ulang editor. Dengan begitu, kamu tidak perlu memuatnya ulang secara manual.

:::info
Ingat, saat menjalankan alat dengan QuickRun, fitur ini **selalu menggunakan beatmap yang sedang terbuka di editor**, bukan peta yang dipilih di Mapping Tools.
:::

## SmartQuickRun {#smartquickrun}

Centang kotak di sebelah kanan kolom hotkey QuickRun untuk mengaktifkan **SmartQuickRun**. Fitur ini memungkinkanmu menjalankan alat yang berbeda dengan QuickRun berdasarkan jumlah objek yang dipilih di editor.

SmartQuickRun memiliki tiga kategori:
- **None** jika tidak ada hit object yang dipilih. `N=0`
- **Single** jika tepat satu hit object dipilih. `N=1`
- **Multiple** jika lebih dari satu hit object dipilih. `N>1`

## QuickUndo {#quickundo}

**QuickUndo** adalah hotkey yang memuat cadangan terbaru ke editor, sehingga membatalkan proses alat sebelumnya. Fitur ini juga mendukung **muat ulang otomatis**, seperti QuickRun. Sebaiknya gunakan QuickUndo bersama QuickRun.

`Ctrl+Shift+Z` adalah hotkey yang bagus untuk QuickUndo.
