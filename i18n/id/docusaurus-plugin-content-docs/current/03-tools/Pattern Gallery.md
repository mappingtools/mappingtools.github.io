---
title: "Pattern Gallery"
author: "OliBomby"
id: pattern-gallery
description: Impor dan ekspor pola dari beatmap osu!, serta buat koleksi pola yang dapat dibagikan kepada teman.
keywords:
  - dokumentasi
  - mapping tools
  - pattern gallery
---

Pattern Gallery memungkinkanmu mengimpor dan mengekspor pola dari beatmap osu!, serta membuat koleksi pola yang dapat dibagikan. Alat ini cocok untuk memindahkan susunan hit object atau bagian beatmap dari satu beatmap ke beatmap lain dengan cepat.

## Deskripsi alat

Pattern Gallery memungkinkanmu:

*   Mengimpor dan mengekspor pola dari beatmap osu!, sehingga kamu dapat memindahkan kelompok hit object ke beatmap lain.
*   Membuat koleksi pola untuk dibagikan kepada teman.
*   Menambahkan atau menghapus pola menggunakan tombol di bagian bawah.
*   Mengekspor pola ke beatmap yang dipilih dengan memilih satu atau beberapa pola lalu menekan tombol jalankan, atau dengan mengklik dua kali sebuah pola.
*   Menggunakan opsi ekspor untuk memproses pola lebih lanjut saat diekspor.
*   Menyimpan, memuat, mengganti nama, mengimpor, dan mengekspor koleksi pola melalui menu **Project**.

## Penggunaan

1. Buka Pattern Gallery di Mapping Tools.
2. Tambahkan pola ke koleksimu menggunakan opsi impor.
3. Pilih pola dari galeri.
4. Tekan tombol jalankan untuk mengekspor pola ke beatmap yang dipilih.

## Fungsi dan pengaturan

Alat ini menyediakan fungsi berikut:

*   **Pengelolaan pola**: Menambahkan, menghapus, mengganti nama, dan mengatur pola dalam koleksi.
*   **Opsi impor**: Mengimpor pola dari berbagai sumber, seperti objek yang dipilih, file beatmap, atau kode pola.
*   **Opsi ekspor**: Mengatur ekspor pola dengan opsi skala, rotasi, dan pemfilteran.

## Opsi ekspor

Saat mengekspor pola, kamu dapat mengatur opsi berikut:

*   **Export Offset**: Menentukan waktu penempatan pola. Kamu dapat memilih waktu asli pola, waktu kustom, atau waktu editor saat ini.
    *   **Custom export offset**: Menentukan waktu penempatan pola untuk mode offset kustom.
*   **Deletion margin**: Tambahan rentang waktu dalam milidetik di sekitar pola untuk menghapus bagian map asli.
*   **Parting distance**: Jumlah minimum ketukan yang diperlukan dalam jeda agar pola dipecah menjadi bagian yang lebih kecil.
*   **Beat divisors**: Masukkan sejumlah beat divisor di sini, pisahkan dengan koma. Contoh: 1/4, 1/12, 1/7, 4/5, 0.13435622499.
*   **Custom Scale**: Ubah ukuran pola dengan menentukan nilai skala.
*   **Custom Rotate**: Putar pola searah jarum jam sebanyak derajat yang ditentukan.
*   **Pattern Overwrite Mode**: Menentukan cara menangani objek yang saling tumpang tindih antara pola dan beatmap tujuan. Mode yang tersedia:
    *   **NoOverwrite**: Mempertahankan semua objek yang ada di beatmap. Pola ditambahkan tanpa menghapus apa pun.
    *   **PartitionedOverwrite**: Menghapus objek dari beatmap asli hanya pada bagian pola yang padat.
    *   **CompleteOverwrite**: Menghapus semua objek dari beatmap asli di antara waktu mulai dan waktu akhir pola.
*   **Timing Overwrite Mode**: Menentukan cara menggabungkan timing beatmap asli dengan timing pola.
*   **Include hitsounds**: Mengekspor pola dengan efek hitsound dari titik timing pola.
*   **Include kiai**: Mengekspor pola dengan kiai dari pola tersebut.
*   **Scale to new circle size**: Menskalakan pola agar jarak relatif terhadap ukuran circle tetap sama.
*   **Scale to new timing**: Menskalakan waktu pola agar jumlah ketukan di antara objek tetap sama pada timing baru. Snap yang keliru dapat terjadi jika timing memiliki redline yang tidak disnap. Jangan gunakan opsi ini jika terdapat redline dengan BPM 0 atau BPM tak terhingga.
*   **Snap to new timing**: Menynap objek pola ke timing baru menggunakan beat divisor yang ditentukan.
*   **Manualify stacks**: Menumpuk objek pola secara manual.
*   **Fix global SV**: Menyesuaikan SV greenline dalam pola ke slider velocity global yang baru agar SV slider tetap sama di beatmap baru.
*   **Fix BPM SV**: Menyesuaikan SV greenline dalam pola ke BPM baru agar SV slider tetap sama di beatmap baru. Sebaiknya nonaktifkan fitur ini jika kamu menggunakan **Scale to new timing**.
*   **Fix colourhax**: Menyesuaikan color skip agar indeks warna objek pada pola tetap sama seperti di beatmap asli.
*   **Fix slider tick rate**: Mengalikan BPM pada pola agar laju tick slider dalam pola tetap sama.

## Menu konteks pola

Menu konteks pola di galeri (klik kanan pada pola) menyediakan opsi berikut:

*   **Properties**: Melihat detail tambahan pola, seperti nama, waktu pembuatan, waktu terakhir digunakan, dan jumlah penggunaan.
*   **Delete**: Menghapus pola yang dipilih. Tahan Shift untuk melewati dialog konfirmasi.
*   **Open in File Explorer**: Membuka file sumber pola yang dipilih di File Explorer.
*   **Group**: Opsi untuk mengelompokkan pola.

## Opsi impor

Tombol impor memungkinkanmu mengimpor pola dari berbagai sumber.

*   **Import Selected**: Membuat pola dari hit object yang sedang dipilih di editor.
    *   **Name**: Nama pola.
*   **Import from .osu File**: Mengimpor pola dari file `.osu` di perangkatmu.
    *   **Name**: Nama pola.
    *   **Pattern file path**: Lokasi file pola yang akan diimpor.
    *   **Filter**: Filter untuk file `.osu`.
    *   **Start Time**: Waktu mulai pola di dalam file `.osu`.
    *   **End Time**: Waktu akhir pola di dalam file `.osu`.
*   **Import from Code**: Mengimpor pola dari kode, berguna untuk berbagi pola secara daring.
    *   **Name**: Nama pola.
    *   **Hit Objects**: Kode hit object.
    *   **Timing Points**: Kode titik timing.
    *   **Global SV**: Menetapkan slider velocity global untuk hit object dalam pola.
    *   **Game Mode**: Menetapkan mode permainan khusus untuk pola.

## Menu Project

Menu **Project** di Pattern Gallery memungkinkanmu:

*   Menyimpan koleksi pola.
*   Memuat koleksi pola.
*   Mengganti nama koleksi pola.
*   Mengimpor koleksi pola.
*   Mengekspor koleksi pola.
