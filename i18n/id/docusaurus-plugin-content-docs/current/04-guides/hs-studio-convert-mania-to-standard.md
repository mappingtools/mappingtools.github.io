---
title: "Mengubah hitsound mania menjadi standard"
author: "OliBomby"
id: convert-mania-to-standard-hs
description: Cara mengubah hitsound osu!mania menjadi hitsound osu!standard dengan Hitsound Studio.
keywords:
  - dokumentasi
  - mapping tools
  - hitsound studio
  - hitsound
  - konversi hitsound
---

osu!mania memungkinkan beberapa not berada pada tick yang sama. Hal ini memberi lebih banyak kebebasan dalam mengatur hitsound osu!mania karena kamu dapat menggunakan beberapa sample set atau sampel kustom sekaligus. Namun, menyalin hitsound dari osu!mania ke osu!standard menjadi lebih sulit karena osu!standard hanya mengizinkan satu not per tick. Hitsound Studio memungkinkanmu mengubah hitsound osu!mania menjadi hitsound osu!standard dan membuka lebih banyak kemungkinan dalam pengaturan hitsound.

## Langkah 1: Siapkan Hitsound Studio {#1}

Buka Hitsound Studio di Mapping Tools. Klik menu **Project**, lalu pilih **New project**. Jika tidak ingin kehilangan konfigurasi Hitsound Studio saat ini, simpan terlebih dahulu dengan **Save project**.

## Langkah 2: Impor lapisan hitsound {#2}

Klik tombol tambah di kanan bawah jendela untuk membuka jendela impor. Buka tab **Import hitsounds** untuk mengimpor semua hitsound dari beatmap. Pada **Source beatmap**, pilih beatmap berisi hitsound osu!mania yang ingin kamu ubah. Centang juga **Detect duplicate samples** dan **Remove duplicate hitsounds**. Centang **Include storyboarded samples** jika map-mu menggunakan sampel storyboard untuk mengisi bagian hitsound yang kosong. Kemudian klik **Accept** untuk mengimpor hitsound. Daftar lapisan hitsound akan muncul di Hitsound Studio.

## Langkah 3: Konfigurasi {#3}

Di bagian bawah ada dua hal lain yang perlu diatur: **Base beatmap** dan **Default sample**. Untuk base beatmap, pilih map yang akan diubah. Metadata, timing, dan tingkat volumenya akan digunakan.

Ada beberapa opsi untuk default sample, pilih sesuai preferensimu. Default sample akan digunakan saat tidak ada hitsound hitnormal yang ditentukan pada lapisan hitsound, sedangkan osu!standard selalu memerlukan suara hitnormal. Kamu dapat membiarkannya kosong, memilih Soft sample set, dan memasukkan volume `-1`.

## Langkah 4: Ekspor {#4}

Klik tombol jalankan di kanan bawah jendela. Dialog dengan opsi ekspor akan terbuka. Pastikan **Export mode** dan **Export gamemode** sama-sama diatur ke **Standard**. Kamu juga dapat mengubah **Sample file format** dan **Mixed sample file format** menjadi **Vorbis (.ogg)** untuk mengubah semua sampel menjadi `.ogg` dan menghemat ukuran file. Kemudian klik **Accept** untuk mulai mengekspor hitsound.

Setelah Hitsound Studio selesai mengekspor, folder ekspor akan berisi file `.osu` berisi diff hitsound osu!standard dan beberapa file audio yang diperlukan hitsound. Sekarang kamu dapat menyalin semua file ini ke mapset osu!standard-mu, lalu menyalin hitsound dari diff tersebut dengan Hitsound Copier.
