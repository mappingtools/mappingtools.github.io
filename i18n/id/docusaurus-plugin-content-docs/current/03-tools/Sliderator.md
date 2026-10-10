---
title: "Sliderator"
author: "OliBomby"
id: sliderator
---

Sliderator adalah alat untuk membuat slider atau stream yang kecepatannya berubah di tengah jalan.

Untuk mulai, impor slider menggunakan kontrol di kiri atas, lalu mulai mengedit grafik dengan tombol kanan mouse.

:::caution Tidak dapat dirank

Slider yang dibuat dengan Sliderator dianggap tidak dapat dirank. Baca detailnya di [postingan Reddit ini](https://www.reddit.com/r/osugame/comments/xnmcuq/acceldecel_sliders_made_with_mapping_tool_is_now/?utm_source=share&utm_medium=web2x&context=3).

:::

## Mengimpor slider {#importing}

Sebelum menggunakan Sliderator, kamu perlu mengimpor satu atau beberapa slider dengan tombol **Import sliders** di kiri atas.
Ada 3 cara untuk mengimpor slider:

- **Selected** mengimpor slider yang sedang dipilih di editor osu!.
- **Bookmarked** mengimpor slider pada beatmap yang dipilih yang memiliki bookmark.
- **Time** mengimpor slider pada beatmap yang dipilih berdasarkan kode waktu yang kamu masukkan di kolom sebelahnya. Format kode waktunya sama dengan format saat menyalin objek dari editor dan menempelkannya ke kolom teks, misalnya: `00:56:823 (1,2,1,2) -`

Jika kamu mengimpor beberapa slider, gunakan tombol kiri dan kanan untuk berpindah di antaranya. Mengklik tombol tersebut sambil menekan Shift juga akan memproses kecepatan slider saat ini dengan cepat sebelum berpindah ke slider berikutnya.

Memilih slider akan otomatis mengatur nilai **Beat length**, **BPM**, dan **Global SV**.

## Grafik {#graph}

Grafik adalah bagian terpenting Sliderator. Di sinilah kamu menentukan pergerakan sliderball sepanjang waktu.

Sumbu X menunjukkan **waktu** selama keseluruhan durasi slider. Durasi ditentukan di kolom **Beat length**.
Pembagi snap beat untuk garis pada sumbu X dapat diubah dengan slider di bawah grafik.

Sumbu Y memiliki dua mode yang dapat dipilih dengan tombol hijau di bawah grafik:

- **X** adalah mode posisi. Di sini, sumbu Y menunjukkan posisi sepanjang slider sehingga kamu dapat menentukan secara tepat lokasi sliderball pada waktu tertentu.
- **V** adalah mode kecepatan. Di sini, sumbu Y menunjukkan pengali slider velocity. Rentangnya dari SV positif hingga negatif sesuai **SV limit**.

![Grafik Sliderator](./assets/sliderator_graph.png)

### Mengedit grafik {#editing-graph}

Kamu mengedit grafik menggunakan titik kontrol dan interpolasi.

Untuk menambahkan titik kontrol, **klik kanan** di mana saja pada grafik. Mengklik kanan titik kontrol akan membuka menu konteks yang memungkinkanmu menghapus titik atau mengubah metode interpolasinya. Gunakan **Shift+klik kanan** pada titik kontrol untuk langsung menghapusnya. **Klik kiri** titik kontrol untuk menyeretnya. Kamu dapat menggeser dan memperbesar tampilan dengan menyeret latar belakang menggunakan tombol kiri mouse atau menggulir roda mouse.

Di tengah setiap bagian yang diinterpolasi terdapat titik kontrol yang lebih kecil. Seret titik ini ke atas atau ke bawah untuk mengubah bentuk interpolasi. **Klik kanan** titik tersebut untuk mengatur ulang posisinya.

Ada juga beberapa hotkey untuk membantu menggeser titik kontrol:

- **Shift** untuk membatasi gerakan pada bidang horizontal.
- **Ctrl** untuk membatasi gerakan pada bidang vertikal.
- **Alt** untuk menonaktifkan snap.

### Kontrol grafik lainnya {#graph-controls}

Bagian ini menjelaskan beberapa kontrol lain yang terkait dengan grafik.

- **Beat length** adalah durasi slider dalam ketukan. Nilai ini juga memengaruhi lebar grafik.
- **BPM** adalah jumlah ketukan per menit slider. Nilai ini harus sama dengan BPM di lokasi ekspor slider.
- **Global SV** adalah pengali slider pada beatmap. Nilai ini harus sama dengan pengali slider beatmap yang dipilih.
- **SV limit** adalah SV maksimum yang diizinkan pada grafik. Nilai ini juga memengaruhi tinggi grafik dalam mode kecepatan. Secara default nilainya 10 karena itulah SV maksimum yang diizinkan pada titik timing turunan.
- **Scale to completion** memungkinkanmu menskalakan semua titik kontrol secara vertikal agar jarak terjauh yang ditempuh sliderball sepanjang slider sesuai dengan tingkat penyelesaian yang diinginkan.
- **Reset graph** mengatur ulang grafik ke keadaan default.
- **Show red anchors** menampilkan posisi anchor merah slider sebagai garis horizontal merah pada grafik dalam mode posisi.
- **Show graph anchors** menampilkan posisi titik kontrol grafik pada pratinjau slider.
- **Expected segment count** menampilkan perkiraan jumlah anchor slider yang diperlukan untuk konfigurasi saat ini. Jumlah di bawah 10000 seharusnya tidak terlalu memperlambat game.

## Opsi ekspor {#export-options}

Menjalankan Sliderator akan mengekspor slider yang telah diproses ke beatmap yang dipilih pada waktu ekspor. Kamu dapat memilih untuk menambahkan slider ke beatmap atau mengganti objek yang sudah ada menggunakan **Override**.

Jika kamu mencentang **Export as stream instead**, Sliderator tidak akan mengekspor slider, tetapi akan mengekspor stream circle yang mengikuti kecepatan dan durasi slider. Opsi ini menggunakan pembagi snap beat pada grafik untuk menentukan jumlah circle yang ditempatkan pada tiap ketukan.

Kamu dapat memilih **New SV** secara manual untuk slider yang diproses. SV ini sebaiknya mendekati kecepatan maksimum pada grafik. Biasanya nilai otomatis sudah cukup baik, tetapi terkadang nilainya dapat dikurangi sedikit agar jumlah anchor lebih sedikit tanpa mengurangi kualitas slider.

**Minimum tumour length** adalah opsi lain yang dapat mengurangi jumlah anchor pada hasil secara signifikan. Sliderator menggunakan tumour tak terlihat untuk memperlambat sliderball. Menaikkan panjang minimum tumour akan membuat tumour lebih besar, sehingga jumlahnya lebih sedikit. Kekurangannya, tumour yang lebih besar membuat pergerakan sliderball kurang mulus.

**Delegate SV to BPM** membuat Sliderator menggunakan BPM untuk mengatur SV baru slider. Ini menghilangkan batas SV 10x pada titik timing turunan. Opsi ini juga memungkinkanmu mengaktifkan **Remove slider ticks**, yang menghapus tick slider dengan menggunakan titik timing turunan yang memiliki SV `NaN`.
