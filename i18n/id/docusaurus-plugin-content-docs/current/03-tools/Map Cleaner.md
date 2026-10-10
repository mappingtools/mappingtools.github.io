---
title: "Map Cleaner"
author: "OliBomby"
id: map-cleaner
---

Map Cleaner membersihkan beatmap yang dipilih dari greenline yang tidak berguna, serta menyediakan operasi lain untuk seluruh beatmap.

Map Cleaner bekerja dengan menyusun ulang semua titik timing. Pertama, fitur ini mencatat semua pengaruh titik timing, lalu menyusunnya kembali dengan teratur. Dengan begitu, greenline akan otomatis disnap ulang ke objek yang menggunakannya dan perubahan yang tidak diperlukan akan dihapus.
Dalam proses ini, isi beatmap dan hitsound pada dasarnya tetap sama, kecuali jika fitur tambahan diaktifkan. Perubahan seharusnya hanya terlihat di editor.

## Pengaturan info map {#map-info-settings}

Pengaturan ini menentukan hal apa yang akan atau tidak akan dihapus Map Cleaner dari titik timing.
Untuk berjaga-jaga, kamu dapat mencentang semua pengaturan ini agar sesedikit mungkin hal yang dihapus.

- **Map uses volume changes in sliders**: Dengan mencentang opsi ini, kamu memberi tahu Map Cleaner bahwa perubahan volume di sepanjang badan slider memang *disengaja* dan tidak boleh dihapus.

- **Map uses sampleset changes in sliders**: Dengan mencentang opsi ini, kamu memberi tahu Map Cleaner bahwa perubahan sample set atau indeks sampel di sepanjang badan slider memang *disengaja* dan tidak boleh dihapus.

- **Map uses volume changes in spinners**: Dengan mencentang opsi ini, kamu memberi tahu Map Cleaner bahwa perubahan volume selama spinner memang *disengaja* dan tidak boleh dihapus.

## Fitur tambahan {#additional-features}

Operasi tambahan berikut dapat dilakukan Map Cleaner selain operasi normalnya.

- **Resnap objects**: Menyetel ulang snap semua hit object dan sliderend selama proses pembersihan map. Snap ulang akan mengikuti pengaturan beat divisor.

- **Resnap bookmarks**: Menyetel ulang snap semua bookmark menggunakan metode default. Kamu mungkin ingin menghapus centangnya jika bookmark-mu disnap ke beat divisor yang tidak biasa.

- **Remove unused samples**: Menghapus semua sampel audio di mapset yang tidak digunakan oleh beatmap atau storyboard mana pun di mapset tersebut. Sampel yang dapat diubah dengan skin beatmap akan diabaikan.

- **Remove muting**: Opsi ini menghapus semua perubahan volume dan perubahan indeks kustom pada hitsound dengan volume 5%. Jika titik timing memiliki volume 5%, perubahan volume dan indeks kustom pada titik tersebut akan dihapus.

- **Mute unclickable hitsounds**: Mengatur volume 5% pada semua event hitsound yang berasal dari hit object yang tidak memerlukan input aktif pemain. Hanya circle, kepala slider, dan kepala hold note yang akan terdengar. Opsi ini dapat membantu memahami ritme map atau cara memainkannya.

## Penynap-an ulang

Proses snap ulang mencari tick terdekat di linimasa, lalu membulatkan waktunya ke bawah menjadi bilangan bulat. Jika terdapat redline dalam jarak 10 ms setelah waktu hit object, objek akan disnap ke redline tersebut. Ini mencegah objek disnap ke tick 3 ms sebelum redline.

Sliderend disnap ulang dengan dua cara. Cara pertama menggunakan durasi slider, lalu mengubahnya menjadi kelipatan beat divisor terdekat. Cara ini mirip dengan menekan `Ctrl+Shift+S` pada slider di editor osu! standar.

Cara kedua hanya digunakan jika ada redline di tengah slider atau hingga 20 ms setelah slider. Waktu akhir slider akan disnap ke tick terdekat pada timing baru. Perhatikan bahwa durasi slider yang dihasilkan akan berupa bilangan bulat, dan panjang persisnya dapat sedikit berbeda karena pembulatan terhadap tick linimasa.

Semua akhir spinner dan hold note juga disnap ulang dengan cara kedua.

Jika beatmap yang dipilih menggunakan mode permainan osu!mania, snap ulang juga akan mengubah posisi X not ke tengah kolom dan posisi Y ke 192.

## Linimasa

Setiap kali kamu menjalankan Map Cleaner, linimasa kecil akan menampilkan semua perubahan yang dibuat program pada titik timing.

- Garis merah menandakan titik timing yang dihapus.
- Garis jingga menandakan titik timing yang diubah.
- Garis hijau menandakan titik timing yang ditambahkan.

Jika titik timing hanya dipindahkan, kamu akan melihat garis merah pada offset sebelumnya dan garis hijau pada offset baru.

Kamu dapat **mengklik dua kali** garis mana pun di linimasa untuk membuka waktu tersebut di editor.
