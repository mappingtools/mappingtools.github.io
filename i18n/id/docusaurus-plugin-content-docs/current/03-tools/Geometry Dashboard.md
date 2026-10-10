---
title: "Geometry Dashboard"
author: "OliBomby"
id: geometry-dashboard
---

Geometry Dashboard adalah alat canggih yang menampilkan objek virtual geometris di atas editor osu!. Kamu dapat mengatur snap objek ke titik, garis, dan lingkaran virtual tersebut untuk membuat pola geometris sempurna yang akan jauh lebih sulit atau bahkan mustahil dibuat dengan cara lain.

:::note Dukungan platform

Geometry Dashboard saat ini hanya memerlukan Windows karena overlay editor langsungnya bergantung pada integrasi khusus Windows.

:::

:::tip
Kamu harus menentukan file konfigurasi pengguna di Preferences Mapping Tools agar alat ini berfungsi.
:::

## Konsep utama

Geometry Dashboard bekerja dengan cara:

1. **Membaca status editor osu! saat ini.** Informasi ini mencakup hit object yang sedang terlihat, waktu editor, dan posisi jendela editor.
2. **Membuat objek virtual berdasarkan hit object tersebut.** Proses ini menggunakan sekumpulan generator yang dapat dikonfigurasi untuk membuat titik, garis, dan lingkaran virtual dari hit object.
3. **Menampilkan objek virtual sebagai overlay di atas editor osu!.** Overlay ini memungkinkanmu melihat geometri yang dibuat dan mengatur kursor agar snap ke sana.

## Antarmuka pengguna

Jendela Geometry Dashboard terbagi menjadi beberapa bagian:

*   **Search:** Kolom pencarian untuk memfilter daftar generator agar lebih mudah dinavigasi.
*   **Toggle Buttons:** Memungkinkan pengguna mengaktifkan atau menonaktifkan berbagai fungsi.
    *   Select All
    *   Lock All
    *   Usability All
*   **Savestates Button:** Membuka [jendela Savestates](#savestates).
*   **Preferences Button:** Membuka [jendela Preferences](#preferences).
*   **Generators List:** Menampilkan generator yang tersedia dengan opsi untuk mengaktifkan atau menonaktifkannya, serta mengatur parameternya.

## Geometri virtual

Geometri virtual adalah inti dari alat ini. Objek tersebut bukan hit object sungguhan di editor, melainkan titik-titik yang dapat diarahkan kursor untuk menempatkan objek secara akurat saat mapping.

### Status geometri virtual

Geometri virtual memiliki beberapa status unik yang dapat diaktifkan atau dinonaktifkan:

*   **Selected:** Mengaktifkan objek agar dapat digunakan untuk membentuk objek baru. Kamu dapat memilih objek virtual yang sedang ditunjuk dengan hotkey pilihan. Objek yang disorot memiliki warna overlay berbeda dan cahaya di sepanjang tepinya.
*   **Locked:** Mengunci objek agar tidak menghilang saat generator atau objek sumbernya tidak ada lagi. Ini berguna untuk menjaga geometri agar tidak terhapus secara tidak sengaja. Geometri virtual yang terkunci akan tampak berwarna abu-abu.
*   **Usable:** Geometri virtual dengan status ini dapat digunakan generator untuk membuat geometri tambahan. Jika dinonaktifkan, generator akan mengabaikan objek tersebut dan tidak membuat objek dari geometri terkait. Objek virtual yang tidak dapat digunakan akan tampak lebih redup.
*   **Relevancy:** Nilai antara 0 dan 1 yang menunjukkan seberapa relevan geometri ini. Nilai relevansi yang lebih tinggi membuat objek tampak lebih pekat.

## Generator

Generator adalah inti Geometry Dashboard. Generator bertugas membuat objek virtual dari hit object dan objek virtual lainnya.

### Alur kerja umum generator

Generator bekerja dengan cara:

1. **Pemilihan input:** Setiap generator memiliki sekumpulan *dependensi* (jenis input yang diperlukan) dan *predikat input*. Predikat input menjelaskan aturan tambahan yang harus dipenuhi objek virtual agar dapat digunakan oleh generator. Geometry Dashboard memindai lapisan sebelumnya untuk mencari objek yang sesuai dengan dependensi dan predikat input. Aturan ini mencakup hal-hal seperti apakah objek harus dipilih atau memiliki nilai relevansi tertentu.

2. **Pembuatan geometri:** Untuk setiap kombinasi objek input terpilih yang memungkinkan, generator menggunakan metode pembuatannya untuk menghasilkan objek virtual baru. Metode generator menerima objek input terpilih sebagai parameter dan menghasilkan satu atau beberapa objek virtual.

3. **Pelapisan:** Setiap kumpulan objek virtual baru ditempatkan pada lapisan baru. Jumlah lapisan dapat diatur melalui **Inception Level** di Preferences. Objek virtual di lapisan yang lebih rendah dapat memengaruhi objek virtual yang dibuat di lapisan berikutnya yang lebih kompleks.

4. **Pembaruan:** Setiap kali terjadi perubahan yang mengharuskan Geometry Dashboard menghitung ulang, objek pada lapisan pertama akan dibuat ulang berdasarkan pengaturan **Update Mode**. Setelah itu, lapisan kedua yang lebih kompleks akan diperbarui, kemudian lapisan ketiga, dan seterusnya.

Untuk mencegah terlalu banyak objek yang tidak diinginkan, generator akan menggabungkan dua objek pada lapisan yang sama jika keduanya cukup berdekatan, lalu menjumlahkan nilai relevansinya. Kamu dapat mengatur jarak yang diperlukan agar dua objek digabungkan melalui Preferences.

### Daftar generator

Berikut daftar semua generator yang tersedia di Geometry Dashboard:

*   **Basic Generators:** Generator ini langsung membuat objek virtual dari hit object. Waktu penempatan semuanya ditetapkan pada waktu rata-rata objek sumber.

    *   **Points on Circles and Slider Heads:** Membuat titik virtual pada posisi awal circle dan slider.
    *   **Points on Slider Ends:** Membuat titik virtual di ujung slider.
    *   **Points on Slider Anchors:** Membuat titik virtual di sepanjang anchor (merah dan putih) slider.
    *   **Points on Last Anchors:** Membuat titik virtual pada titik kurva terakhir slider.
    *   **Lines on Linear Sliders:** Jika jenis slider-nya Linear, membuat garis virtual dari Pos ke Curve Point. Waktu dan relevansinya sama dengan slider sumber.
    *   **Points on Blanket Centers:** Membuat titik di tengah slider jenis circle. Waktu dan relevansinya sama dengan slider sumber.
    *   **Circles on 3-Point Sliders:** Membuat lingkaran berdasarkan anchor slider untuk kurva blanket/perfect. Waktu dan relevansinya sama dengan slider sumber.
    *   **Points on Slider Paths:** Membuat banyak titik virtual di sepanjang jalur slider. Gunakan pengaturan Point Density untuk mengubah jumlah titik yang dibuat. Generator ini memerlukan kalkulasi tambahan.
*   **Intermediate Generators:** Generator ini memerlukan Basic Generators agar dapat bekerja. Generator ini membantu membentuk pola atau membuat garis panduan.
    *   **Tangent Circles on Circle:** Membuat lingkaran virtual yang bersinggungan dengan lingkaran input pertama tepat pada satu titik.
    *   **Circles by Two Points:** Menggunakan sepasang titik virtual untuk membuat dua lingkaran virtual yang berpusat pada masing-masing titik. Radiusnya sama dengan jarak antara kedua titik.
    *   **Equilateral Triangle from Two Points:** Menggunakan sepasang titik virtual dan membuat satu titik virtual di tiap sisi sehingga terbentuk dua segitiga sama sisi.
    *   **Equilateral Triangle from Two Points (Type II):** Serupa dengan Triangle Generator biasa, tetapi posisi pembentukan segitiganya berbeda.
    *   **Square from Two Points:** Menggunakan sepasang titik virtual dan membuat satu titik virtual di tiap sisi sehingga terbentuk satu persegi.
    *   **Square from Two Points (Type II):** Menggunakan sepasang titik virtual dan membuat dua titik virtual di tiap sisi sehingga terbentuk dua persegi.
    *   **Line by Two Points:** Menggunakan sepasang titik virtual untuk membuat garis virtual yang menghubungkan keduanya.
    *   **Average of Two Points:** Menggunakan dua titik virtual dan menghitung titik virtual pada posisi rata-rata keduanya.
    *   **Average of Three Points:** Menggunakan tiga titik virtual dan menghitung titik virtual pada posisi rata-rata ketiganya.
    *   **Scale & Rotate around a Fixed Point:** Memutar dan menskalakan objek virtual apa pun terhadap titik virtual tetap. Kamu dapat mengatur sudut, skala, dan aturan tambahan untuk memilih titik tetap.
    *   **Parallel Lines:** Menggunakan sepasang garis dan titik untuk membuat garis virtual melalui titik tersebut yang sejajar dengan garis input.
    *   **Perpendicular Lines:** Menggunakan sepasang garis dan titik untuk membuat garis virtual melalui titik tersebut yang tegak lurus terhadap garis input.
    *   **Bisector of Angles:** Menggunakan sepasang garis virtual dan membuat garis pembagi sudut di antara garis-garis tersebut pada titik perpotongannya.
    *   **Bisector of Two Points:** Menggunakan sepasang titik virtual untuk membuat garis pembagi kedua titik tersebut.
    *   **Tangent Lines on Circle:** Menggunakan sepasang lingkaran virtual dan titik untuk membuat garis virtual yang memanjang ke sisi lingkaran dan melewati titik tersebut.
*   **Advanced Generators:** Generator khusus yang memerlukan konfigurasi tambahan dan dapat digunakan untuk pola rekursif tingkat lanjut.
    *   **Intersection Points:** Menggunakan sepasang garis atau lingkaran virtual dan membuat titik virtual pada setiap titik perpotongannya. Generator ini sangat berguna jika digabungkan dengan metode pembuatan geometri lainnya. *Catatan:* Mengidentifikasi titik perpotongan memerlukan banyak komputasi. Performa dapat sangat terpengaruh jika beberapa gambar kompleks sedang aktif di editor, jadi gunakan dengan hati-hati.
    *   **Successor of 2 Points:** Menggunakan dua titik virtual untuk menghitung titik virtual berikutnya dengan kecepatan yang sama. Dapat digunakan bersama **Points on Slider Paths** untuk memprediksi kurva dengan lebih akurat.
    *   **Successor of 3 Points:** Menggunakan tiga titik virtual untuk menghitung titik virtual berikutnya dengan sudut dan perubahan kecepatan yang sama.
    *   **Successor of 3 Points Reversed:** Menggunakan tiga titik virtual untuk menghitung titik virtual berikutnya dengan perubahan kecepatan yang sama dan sudut yang berlawanan.
    *   **Successor of 4 Points:** Menggunakan empat titik virtual untuk menghitung titik virtual berikutnya dengan sudut, perubahan sudut, perubahan kecepatan, dan perubahan laju perubahan kecepatan yang sama.
    *   **Scale & Rotate around a Fixed Point:** Memutar dan menskalakan objek virtual apa pun terhadap titik virtual tetap. Kamu dapat mengatur sudut, skala, dan aturan tambahan untuk memilih titik tetap.
    *   **Reflection across a Line:** Mencerminkan objek virtual melewati garis virtual, dengan garis tersebut sebagai sumbu simetri.

## Opsi generator

Setiap generator memiliki serangkaian opsi untuk mengatur perilakunya:

*   **Active:** Menentukan apakah generator aktif. Jika dinonaktifkan, generator tidak akan membuat objek virtual.
*   **Sequential:** Membatasi input generator hanya pada objek berurutan. Jika aktif, generator hanya membuat pasangan objek virtual yang berurutan dalam waktu. Ini sangat mengurangi jumlah geometri yang dibuat dan membantu mencegah tampilan terlalu ramai.
*   **Deep:** Meminta generator memeriksa semua lapisan sebelumnya yang berlaku, bukan hanya lapisan di atasnya.
*   **Relevancy Ratio:** Relevansi dasar objek virtual yang dibuat generator, dengan rentang 0 hingga 1. Relevansi aktual objek yang dibuat dapat berbeda berdasarkan Relevancy Ratio input lainnya.
*   **Generates Inheritable:** Jika aktif, objek yang dibuat dapat digunakan. Jika tidak, generator lain tidak dapat menggunakannya.
*   **Input Selection Collection:** Sekumpulan aturan untuk jenis objek virtual yang dapat digunakan sebagai input. Lihat [Pemilihan Input](#input-selection-in-detail) untuk detailnya.

### Pengaturan khusus generator

Beberapa generator tingkat lanjut memiliki opsi khusus:

*   **Circle from Single Point:**
    *   *Radius:* Skala lingkaran.
*   **Points on Slider Paths:**
    *   *Points Density:* Menentukan jumlah titik yang dibuat untuk setiap piksel osu! pada jalur slider.
*   **Scale & Rotate around a Fixed Point:**
    *   *Angle:* Sudut rotasi dalam derajat.
    *   *Scalar:* Nilai skala seragam.
    *   *Origin Input Selection:* Aturan tambahan yang harus dipenuhi objek virtual agar dapat digunakan sebagai titik asal rotasi.
    *   *Other Input Selection:* Aturan tambahan untuk objek yang akan dicerminkan terhadap titik asal.
*   **Reflection across a Line:**
    *   *Axis Input Selection:* Aturan tambahan yang harus dipenuhi objek virtual agar dapat digunakan sebagai sumbu generator ini.
    *   *Other Input Selection:* Aturan tambahan untuk objek yang akan dicerminkan terhadap sumbu.

### Detail pemilihan input {#input-selection-in-detail}

Pemilihan input adalah mekanisme utama untuk menentukan objek virtual yang akan dipertimbangkan generator dalam perhitungannya. Setiap generator menentukan jenis input yang diperlukan (misalnya Points atau Lines), lalu kamu menggunakan predikat input untuk mengatur pemilihan berdasarkan properti objek. Tanpa pemilihan input yang dikonfigurasi dengan benar, generator akan membuat terlalu banyak objek virtual yang tidak relevan atau tidak membuat objek yang diperlukan.

Kumpulan predikat pemilihan adalah serangkaian predikat pemilihan. Cukup satu predikat pemilihan yang terpenuhi agar objek virtual memenuhi syarat sebagai input.

Saat kursor diarahkan ke Input Selection, klik tombol tambah untuk menambahkan predikat pemilihan baru. Sejumlah pengaturan akan muncul untuk mempersempit pembuatan geometri virtual:

*   **Need Selected:** Jika aktif, generator hanya menggunakan objek virtual yang dipilih sebagai input. Objek terpilih juga menjadi objek pertama yang diarahkan. Dengan begitu, kamu dapat memilih objek secara lebih spesifik.

*   **Need Locked:** Jika aktif, generator hanya menggunakan objek yang terkunci untuk membuat geometri. Objek yang tidak terkunci akan diabaikan sepenuhnya. Ini dapat berguna saat menggunakan beberapa generator dengan objek lain dikunci.

*   **Need Generated By This:** Memeriksa apakah semua objek virtual dibuat oleh generator itu sendiri. Jika diatur dengan benar, ini dapat membatasi pembuatan geometri hanya pada geometri yang diinginkan.

*   **Need Generated Not By This:** Filter ini kebalikan dari filter sebelumnya: hanya objek virtual yang tidak dibuat oleh generator ini yang akan dipertimbangkan.

*   **Min Relevancy:** Mengharuskan objek yang digunakan sebagai input memiliki nilai relevansi minimum tertentu. Relevansi bernilai 0 hingga 1; nilai 0 menonaktifkan pengaturan ini.

## Preferences {#preferences}

Jendela Preferences Geometry Dashboard memungkinkanmu menyesuaikan berbagai aspek perilaku dan tampilan alat:

*   **Hotkeys:**
    *   **Snap Key:** Tombol yang ditahan untuk mengaktifkan snap kursor ke objek virtual.
    *   **Select Key:** Tombol yang ditahan untuk memilih objek virtual.
    *   **Lock Key:** Tombol yang ditahan untuk mengunci objek virtual.
    *   **Usability Key:** Tombol yang ditahan untuk mengubah status dapat digunakan pada objek virtual.
    *   **Refresh Key:** Tombol untuk segera memperbarui daftar hit object di lapisan root.
*   **Offset:** Menggeser semua objek virtual relatif terhadap layar editor. Opsi ini dapat memperbaiki masalah skala atau posisi.
    *   **Left:** Offset tepi kiri editor.
    *   **Top:** Offset tepi atas editor.
    *   **Right:** Offset tepi kanan editor.
    *   **Bottom:** Offset tepi bawah editor.
*   **Complexity:** Jumlah lapisan rekursif yang akan dibuat. Opsi ini dapat membantu mengatasi masalah performa.
    *   **Inception Level:** Jumlah lapisan yang dibuat berdasarkan hit object sumber.
*   **Downkey:** Mengatur objek virtual yang ditampilkan.
    *   **Everything:** Menampilkan semua objek virtual, termasuk objek hit object, anak, dan induknya.
    *   **Parents and parents of parents:** Menampilkan leluhur objek yang menjadi target snap.
    *   **Direct parents:** Hanya menampilkan induk langsung objek yang menjadi target snap.
    *   **Children and children of children:** Menampilkan semua turunan objek yang menjadi target snap.
    *   **Direct children:** Hanya menampilkan anak langsung objek yang menjadi target snap.
*   **Upkey:** Mengatur objek virtual yang ditampilkan saat Snap Key tidak ditekan.
    *   **All visible:** Menampilkan semua hit object sesuai pengaturan Selection.
    *   **Nothing:** Menyembunyikan semua objek saat Snap Key tidak ditekan.
*   **Selection:** Mengatur hit object yang digunakan untuk membuat objek virtual.
    *   **All visible:** Menyertakan semua hit object yang tersedia.
    *   **Visible or selected:** Menggunakan hit object yang terlihat, kecuali jika ada hit object terpilih; dalam hal itu, semua hit object terpilih yang digunakan.
    *   **Selected only:** Menggunakan hit object yang dipilih di editor.
*   **Updating:** Mengatur kapan objek virtual diperbarui.
    *   **Any change:** Memperbarui setiap kali terjadi perubahan.
    *   **Time change:** Memperbarui saat timer editor berubah. Lebih baik untuk performa, tetapi mengurangi responsivitas.
    *   **osu! activated:** Memperbarui saat jendela osu! saat ini difokuskan.
    *   **Hotkey down:** Memperbarui saat hotkey refresh ditekan.
*   **Behavior:** Perilaku tambahan Geometry Dashboard.
    *   **Minimal diff:** Jarak objek virtual agar keduanya digabungkan.
    *   **Keep running:** Menjaga Geometry Dashboard tetap berjalan saat alat lain terbuka.
    *   **See playfield:** Menampilkan batas playfield di atas editor.
    *   **Debug:** Menampilkan batas editor di atas editor. Jika editor tidak terlihat meski opsi ini diaktifkan, berarti jendela editor berada di luar jangkauan.

### Opsi geometri virtual

Warna, opasitas, ketebalan, dan gaya garis putus-putus setiap jenis objek virtual yang ditampilkan di editor dapat disesuaikan. Ini membantu meningkatkan keterbacaan.

*   **Color:** Warna garis tepi. Warna juga dapat disalin dari pemilih warna (klik nilai HEX untuk menyalinnya).
*   **Opacity:** Tingkat transparansi objek.
*   **Thickness:** Ketebalan garis pembentuk tepi objek.
*   **Dash:** Menentukan apakah garis tepi putus-putus atau utuh.

## Savestates

Savestates berfungsi seperti profil hotkey. Kamu dapat berpindah profil dengan cepat tanpa harus mengubah pengaturan setiap generator dan Preferences secara manual. Kamu juga dapat menghubungkan hotkey ke savestate agar dapat berpindah lebih cepat.

Untuk membuat savestate baru, tekan ikon +. Kemudian beri nama dan hotkey. Tersedia tombol untuk menyimpan atau memuat; tindakan ini akan menyimpan atau mengubah pengaturan saat ini.
