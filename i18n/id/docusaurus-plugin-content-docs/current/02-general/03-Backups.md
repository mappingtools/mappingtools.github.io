---
title: "Cadangan"
author: "OliBomby"
id: backups
description: Semua hal tentang pencadangan di Mapping Tools.
keywords:
  - dokumentasi
  - mapping tools
  - cadangan
---

Mapping Tools menyimpan cadangan beatmap di folder cadangan yang telah dikonfigurasi. Buka folder melalui **About > Open backups folder** atau ubah lokasinya di **Preferences**.

Jika pembacaan status editor langsung telah dikonfigurasi, cadangan dapat menyertakan status terbaru yang belum disimpan dari editor. Jika tidak, Mapping Tools mencadangkan file beatmap yang dapat diakses di disk.

## Cadangan otomatis {#automatic-backups}

Jika diaktifkan, Mapping Tools membuat cadangan sebelum alat mengubah beatmap. Cadangan ini menjadi titik pemulihan jika kamu ingin membatalkan proses alat. Kamu dapat mengatur folder cadangan dan batas penyimpanannya di **Preferences**. Saat batas tercapai, cadangan yang paling lama akan dihapus.

## Cadangan berkala {#periodic-backups}

Jika diaktifkan, Mapping Tools mencadangkan beatmap saat ini secara berkala selama status editor langsung dapat dibaca. Cadangan dilewati jika beatmap tidak berubah sejak pencadangan sebelumnya. Nama file cadangan berkala memuat `PB`.

## Cadangan manual {#manual-backups}

Gunakan menu **File** untuk membuat cadangan beatmap yang dipilih atau memuat cadangan ke beatmap tersebut. Nama file cadangan manual memuat `UB`. **QuickUndo** memulihkan cadangan nonperiodik terbaru ke beatmap yang sedang terbuka di osu!.
