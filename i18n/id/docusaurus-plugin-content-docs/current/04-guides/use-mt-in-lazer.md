---
title: "Menggunakan Mapping Tools di osu! lazer"
author: "OliBomby"
id: use-mt-in-lazer
description: Cara menggunakan Mapping Tools dengan osu! lazer.
keywords:
  - dokumentasi
  - mapping tools
  - lazer
  - kompatibilitas
---

[osu! lazer](https://github.com/ppy/osu) memiliki alur kerja pengeditan beatmap yang berbeda dari osu! stable. Mapping Tools dapat mengedit file beatmap dari kedua klien. Di lazer, gunakan alur kerja pengeditan eksternal dan perhatikan bahwa beberapa fitur memiliki keterbatasan.

## Cara menggunakan Mapping Tools di osu! lazer

Di editor osu! lazer, klik **File > Edit externally**. Ini akan membuat folder sementara berisi semua file dari set beatmap yang sedang kamu edit. Mapping Tools akan mendeteksi folder ini secara otomatis dan menetapkannya sebagai beatmap yang dipilih. Setelah selesai mengedit dengan Mapping Tools, klik **Finish editing and import changes** agar osu! lazer mengimpor perubahan tersebut.

![File > Edit externally](assets/osu_TAqF8oqGPr.png)

## Kompatibilitas

Tidak semua fitur Mapping Tools berfungsi di osu! lazer. Bagian ini berupaya mencantumkan kompatibilitas semua fitur Mapping Tools.

Semua fitur yang menggunakan Editor Reader tidak akan berfungsi di osu! lazer. Jika kamu hanya akan menggunakan osu! lazer, sebaiknya buka **Preferences** dan nonaktifkan Editor Reader.

### Umum
- :x: Fitur apa pun yang menggunakan **Open current beatmap** tidak berfungsi.
- :x: Fitur apa pun yang menggunakan **Current editor time** tidak berfungsi.
- :x: Fitur apa pun yang menggunakan **Selected hit objects** tidak berfungsi.
- :white_check_mark: **Generate backup** berfungsi.
- :white_check_mark: **Load backup** berfungsi.
- :white_check_mark: **Slider paths** dengan beberapa jenis segmen didukung sepenuhnya.

### Alat
- :x: **Geometry Dashboard** tidak berfungsi karena bergantung pada Editor Reader.
- :white_check_mark: **Hitsound Copier** berfungsi.
- :large_orange_diamond: **Hitsound Studio** berfungsi, tetapi referensi ke sampel dan beatmap yang diimpor akan rusak setelah folder sementara dihapus.
- :white_check_mark: **Pattern Gallery** berfungsi.
- :white_check_mark: **Property Transformer** berfungsi.
- :white_check_mark: **Sliderator** berfungsi, tetapi sangat lambat di editor lazer.
- :white_check_mark: **Tumour Generator 2** berfungsi.
- :large_orange_diamond: **Auto-fail Detector** berfungsi, tetapi fitur auto-fail tidak ada di lazer.
- :white_check_mark: **Combo Colour Studio** berfungsi.
- :white_check_mark: **Hitsound Preview Helper** berfungsi.
- :white_check_mark: **Map Cleaner** berfungsi.
- :white_check_mark: **Mapset Merger** berfungsi.
- :white_check_mark: **Metadata Manager** berfungsi.
- :white_check_mark: **Rhythm Guide** berfungsi.
- :white_check_mark: **Slider Completionator** berfungsi.
- :white_check_mark: **Slider Merger** berfungsi.
- :large_orange_diamond: **Slider Picturator** berfungsi, tetapi slider gambar tidak ditampilkan di lazer.
- :white_check_mark: **Timing Copier** berfungsi.
- :white_check_mark: **Timing Helper** berfungsi.

## Catatan tentang kompatibilitas lazer ke depannya

osu! lazer masih aktif dikembangkan, sehingga format file dan kliennya kemungkinan berubah. Perubahan itu dapat menyebabkan Mapping Tools tidak berfungsi. Jika kamu mengalami masalah saat menggunakan Mapping Tools di lazer yang tidak tercantum di sini, laporkan masalah melalui **About > Report an issue**.
