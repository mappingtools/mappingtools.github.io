---
title: FAQ
author: OliBomby, aehrea
---

# FAQ

## Mengapa saya tidak melihat perubahan pada map?

Periksa **Selected Map** (bilah biru di bagian atas aplikasi) untuk memastikan kamu telah menetapkan lokasi beatmap yang benar.

Pastikan juga untuk **memuat ulang editor tanpa menyimpan** setelah menjalankan alat. Jika map disimpan di editor, perubahan dari alat akan dibatalkan karena proses penyimpanan menimpa file `.osu` dengan versi beatmap yang lama. Kamu dapat memuat ulang map dengan cepat dengan menekan `Ctrl+L`, lalu `Enter` di editor.

## Saya mendapat error "Could not find part of the path" atau "Empty path name is not legal" saat menjalankan alat.

Arahkan kursor mouse ke **nama beatmap di bagian atas jendela** untuk melihat lokasi lengkapnya. Apakah lokasi itu ada? Apakah folder Songs berada di tempat yang benar? Jika folder Songs tidak berada di lokasi AppData default, pastikan kamu telah menetapkan lokasi folder Songs yang benar di **Preferences**.

## Saya mendapat error setiap kali menjalankan alat pada map tertentu, tetapi tidak pada map lain.

Map yang sedang kamu edit mungkin menggunakan format file lama yang tidak didukung atau file-nya rusak. Buka map di editor dan simpan. Tindakan ini akan memaksa osu! memperbarui map ke format file terbaru yang kompatibel dengan Mapping Tools.

## Alat merusak map saya. Apa yang harus saya lakukan?

Mapping Tools menyimpan cadangan beatmap setiap kali membuat perubahan. Kamu dapat menemukan cadangan tersebut melalui **About > Open backup folder**. Kamu juga dapat memuat cadangan ke Current Map dengan **File > Load backup**, atau menggunakan hotkey QuickUndo yang dapat diaktifkan di **Preferences**.

## 'Open Current Beatmap' tidak berfungsi atau hit object terpilih tidak terdeteksi.

Fitur-fitur ini bergantung pada pembacaan memori klien osu!. Pembacaan memori terkadang dapat berhenti berfungsi secara acak. Biasanya, memulai ulang osu! atau komputer akan memperbaikinya. Berikut penyebab dan solusi lain yang mungkin:

- Firewall atau antivirus memblokir Mapping Tools: Nonaktifkan antivirus atau kecualikan Mapping Tools, lalu coba lagi.
- Mapping Tools yang digunakan bukan versi terbaru: Terkadang Mapping Tools perlu diperbarui agar sesuai dengan perubahan di osu!.
- osu! yang digunakan bukan versi terbaru: Keluar dari server privat dan perbarui osu! ke versi terbaru.
- osu! telah diperbarui dan mengubah offset memori lagi: Beri tahu saya agar masalah ini dapat diperbaiki.
- Mapping Tools dijalankan di Windows 7 atau versi lebih lama: Pastikan .NET Framework 4.5.1 atau versi yang lebih baru sudah terinstal.
- Mapping Tools dijalankan di sistem operasi selain Windows: Lihat [panduan instalasi](/docs/mapping-tools/installation).

## Bagaimana cara membisukan sliderend tanpa menyalin hitsound?

Untuk hanya membisukan sliderend, kosongkan kolom **Copy hitsounds from** dan tambahkan map yang sliderend-nya ingin dibisukan di kolom **Copy hitsounds to**. Tidak ada hitsound yang akan disalin, tetapi sliderend tetap akan dibisukan.

Jika kamu menyalin hitsound sambil membisukan sliderend, alat akan menggunakan objek dari beatmap sumber sebagai referensi. Karena itu, sliderend pada bagian yang sudah kamu tambahkan hitsound tidak akan dibisukan. Inilah alasan fitur pembisuan sliderend menjadi bagian dari Hitsound Copier dan bukan alat mandiri.

## Mapping Tools meminta saya menginstal .NET saat dijalankan, padahal .NET sudah terinstal.

Versi Mapping Tools saat ini menargetkan .NET 10 dan dikemas secara mandiri, sehingga seharusnya tidak memerlukan instalasi .NET terpisah.

Jika permintaan .NET masih muncul, pastikan kamu menjalankan rilis Mapping Tools terbaru. Unduh ulang dari situs web dan lakukan instalasi baru.

## Apakah Mapping Tools berfungsi di lazer?

Ya, sebagian besar fungsi Mapping Tools dapat digunakan di lazer. Detail selengkapnya tersedia di [panduan ini](/docs/guides/use-mt-in-lazer).

## Saya memiliki pertanyaan yang tidak tercantum di sini atau menemukan bug.

Ajukan pertanyaan di kanal `mt-techsupport` pada [Discord](https://discord.gg/YfjKN2yjQV), hubungi saya langsung di Discord (`olibomby`), atau buat issue baru di [GitHub](https://github.com/OliBomby/Mapping_Tools/issues).
