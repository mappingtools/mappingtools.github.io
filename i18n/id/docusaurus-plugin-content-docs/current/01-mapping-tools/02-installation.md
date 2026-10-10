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

## Kompatibilitas fitur {#editor-integration-by-platform}

✅ Didukung · ❌ Tidak didukung. Fitur yang didukung mungkin memerlukan penyiapan di bawah ini.

<div className="feature-compatibility">

| OS | Klien osu! | Baca/tulis beatmap | Dapatkan beatmap saat ini | Baca status editor langsung | Muat ulang otomatis | Tombol pintas global | Overlay Geometry Dashboard |
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

- **osu! stable**: pengambilan beatmap saat ini menggunakan **pembacaan memori** di Windows dan Linux (Wine). Atur **Songs folder** di Preferences ke jalur asli pada sistem berkas. Pembacaan status editor langsung dan muat ulang otomatis hanya tersedia di Windows. Pembacaan memori native tidak didukung di macOS.
- **osu! lazer**: gunakan **File > Edit externally** agar file beatmap dapat diakses. Mapping Tools mendeteksi beatmap yang sedang diedit secara eksternal secara otomatis; ini dihitung sebagai fitur mendapatkan beatmap saat ini pada tabel. Gunakan **Finish editing and import changes** di lazer untuk menerapkan perubahan. Lihat [panduan lazer](/docs/guides/use-mt-in-lazer).
- **osu! unstable**: pilih **MTIPC** di Preferences untuk mengambil beatmap saat ini, membaca status editor langsung, dan memuat ulang editor. Fitur ini memerlukan server MTIPC dari klien. Pembacaan status editor langsung dan pemuatan ulang editor dinonaktifkan secara default di Linux dan macOS.
- **Tombol pintas global**: dukungan di Linux bergantung pada X11 atau desktop dengan portal pintasan global. Di macOS, izinkan aksesibilitas papan ketik yang diminta sistem.

Kamu selalu bisa memilih beatmap secara langsung melalui **File > Open beatmap**.

## Penyiapan {#setup}

Setelah menginstal Mapping Tools, klik tombol di kiri atas untuk membuka menu navigasi, lalu buka **Preferences** untuk mengatur Mapping Tools.

Kolom terpenting yang perlu diisi:

- **osu! folder**: lokasi folder yang berisi _osu!_.
- **Songs folder**: lokasi folder yang berisi semua map-mu. Biasanya folder ini berada langsung di dalam folder _osu!_.
- **osu! config user file**: lokasi file konfigurasi pengguna osu!-mu. Biasanya file ini berada langsung di dalam folder _osu!_ dengan nama `osu.[username].cfg`.

:::note

Pastikan kolom-kolom ini diisi dengan benar jika kamu menggunakan osu!stable. Jika tidak, Mapping Tools mungkin tidak berfungsi dengan baik.

:::
