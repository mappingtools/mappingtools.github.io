---
title: "Instalasi"
author: "aehrea"
id: installation
description: Cara menginstal Mapping Tools di Windows, Linux, dan macOS.
keywords:
  - dokumentasi
  - mapping tools
  - instalasi
---

Mapping Tools menyediakan build desktop native untuk **Windows, Linux, dan macOS**. Unduh build yang sesuai dengan prosesor perangkatmu dari [halaman unduhan](/download) atau [rilis GitHub](https://github.com/OliBomby/Mapping_Tools/releases/latest).

Semua paket sudah lengkap dan menyertakan runtime .NET 10.

## Pilih paket

- **Windows**: gunakan installer atau ZIP portabel. Pilih x64 untuk kebanyakan sistem; x86 untuk Windows 32-bit.
- **Linux**: gunakan AppImage atau ZIP portabel untuk x64 atau ARM64.
- **macOS**: unduh ZIP portabel untuk Intel (x64) atau Apple silicon (ARM64), lalu buka **Mapping Tools.app** dari folder hasil ekstraksi.

## Integrasi editor menurut platform

Alat untuk file beatmap dapat digunakan di semua build desktop. Beberapa fitur editor langsung bergantung pada sistem operasi dan metode integrasinya:

- **Geometry Dashboard** dan integrasi memori **Editor Reader** memerlukan Windows.
- Di Linux dan macOS, pencarian beatmap yang sedang dibuka menggunakan API lokal **Gosumemory/Tosu** di `127.0.0.1:24050` secara default. Jalankan API yang kompatibel untuk menggunakan **Open current beatmap**. Pembacaan status editor langsung dan pemuatan ulang editor otomatis dinonaktifkan secara default di platform ini.
- Kamu selalu bisa memilih beatmap secara langsung melalui **File > Open beatmap**.

Untuk osu! lazer, gunakan alur kerja **File > Edit externally**. Lihat [panduan lazer](/docs/guides/use-mt-in-lazer).

## Penyiapan {#setup}

Setelah menginstal Mapping Tools, klik tombol di kiri atas untuk membuka menu navigasi, lalu buka **Preferences** untuk mengatur Mapping Tools.

Kolom terpenting yang perlu diisi:

- **osu! folder**: lokasi folder yang berisi _osu!_.
- **Songs folder**: lokasi folder yang berisi semua map-mu. Biasanya folder ini berada langsung di dalam folder _osu!_.
- **osu! config user file**: lokasi file konfigurasi pengguna osu!-mu. Biasanya file ini berada langsung di dalam folder _osu!_ dengan nama `osu.[username].cfg`.

:::note

Pastikan kolom-kolom ini diisi dengan benar jika kamu menggunakan osu!stable. Jika tidak, Mapping Tools mungkin tidak berfungsi dengan baik.

:::
