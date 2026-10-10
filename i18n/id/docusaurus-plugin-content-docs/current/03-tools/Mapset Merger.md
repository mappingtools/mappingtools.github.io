---
title: "Mapset Merger"
author: "OliBomby"
id: mapset-merger
---

Mapset Merger adalah alat untuk menggabungkan beberapa mapset menjadi satu mapset besar.

Alat ini akan mengatasi konflik file secara otomatis dengan memindahkan sebanyak mungkin file ke subfolder terpisah dan menyusun ulang sample set untuk hitsound kustom. Sayangnya, skin beatmap dan hitsound spinner kustom tidak dapat digabungkan karena file-file ini tidak dirujuk secara eksplisit di beatmap. Akibatnya, keberadaannya selalu memengaruhi seluruh mapset.

## Menambahkan mapset {#adding-mapsets}

Untuk menambahkan mapset, tekan tombol tambah di kanan bawah. Mapset baru akan ditambahkan ke koleksi dan informasinya diisi berdasarkan beatmap yang dipilih. Jika kamu **mengklik tombol tambah sambil menekan Shift**, Mapset Merger akan menggunakan mapset yang sedang terbuka di klien osu!.

Semua mapset yang akan digabungkan akan ditampilkan dalam daftar. Tiap mapset memiliki nama dan lokasi folder root mapset. Nama mapset digunakan untuk mengategorikan file di mapset gabungan, jadi pastikan namanya unik dan ringkas. Lokasi dapat diedit di daftar dengan **mengklik dua kali**. Tombol browse juga akan muncul agar kamu bisa memilih lokasi melalui File Explorer.

## Mengekspor {#exporting}

Tekan tombol jalankan untuk menggabungkan mapset dan mengekspor file ke folder pada **Export path**. Pastikan folder ini sudah ada karena jika tidak, proses akan menampilkan error.

Jika kotak **Move storyboard to .osu** dicentang, Mapset Merger akan memindahkan isi setiap file `.osb` dalam mapset ke file `.osu`. Dengan demikian, storyboard akan menjadi khusus untuk tiap beatmap dan tidak bocor ke mapset lain yang telah digabungkan. Opsi ini berguna saat menggabungkan mapset dengan storyboard berbeda. Namun, berhati-hatilah: jika mapset memiliki file storyboard besar dan beberapa tingkat kesulitan, data tersebut akan digandakan dan menghasilkan file `.osu` berukuran besar.
