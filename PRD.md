# PRD — TRIPELIN: Aplikasi Pembelajaran Tripel Pythagoras

**Versi:** 1.0 (draft untuk presentasi)  ·  **Pemilik:** Maila Andira Putri (2225250126)  ·  **Status:** Perencanaan

---

## 1. Latar belakang

Wawancara dengan siswa (kode S01, 6 November 2026, 25 menit) tentang beban kognitif saat belajar Tripel Pythagoras menunjukkan hal-hal berikut:

- Siswa **cepat lupa**. Ia hanya ingat "tentang 3 angka yang dihitung pakai rumus Pythagoras" (K).
- Siswa **bingung menentukan apakah angka-angka membentuk tripel**, apalagi jika angkanya berbeda-beda (IL).
- Siswa masih sering **salah menghitung kuadrat**, padahal itu prasyarat utama (IL).
- Penjelasan guru **terlalu cepat** sehingga siswa tertinggal (EL).
- Soal angka masih bisa, tetapi pada **soal cerita** siswa bingung harus berbuat apa dan memakai rumus yang mana (EL).
- Siswa **tidak tahu letak kesalahannya**, jadi bergantung pada teman atau guru (GL).
- Siswa meminta **tulisan sedikit**, **ilustrasi secukupnya (cukup 1)**, **contoh dijelaskan satu per satu**, **soal dimulai dari yang mudah**, dan **penjelasan kenapa jawabannya salah** (Kebutuhan desain).

Detail lengkap ada di `docs/ANALISIS_KEBUTUHAN.md`.

## 2. Tujuan produk

| # | Tujuan | Ukuran keberhasilan |
|---|---|---|
| T1 | Siswa dapat menentukan sisi miring/sisi siku-siku dengan Teorema Pythagoras dan memeriksa Tripel Pythagoras | Skor kuis evaluasi ≥ 70 pada siswa uji coba |
| T2 | Siswa dapat menerapkan Tripel Pythagoras pada soal cerita | Skor soal cerita (Soal 3–5) ≥ 60% |
| T3 | Menurunkan beban kognitif ekstrinsik | Rata-rata skala usaha mental (1–9) ≤ 5 per topik |
| T4 | Siswa bisa belajar mandiri dan tahu letak kesalahannya | Setiap jawaban salah menampilkan umpan balik spesifik |
| T5 | Bisa dipakai di HP Android tanpa Play Store | Bisa dipasang ke layar utama dan dibuka saat offline |
| T6 | Memenuhi tugas mata kuliah | Kode di GitHub, aplikasi online, siap dipresentasikan |

## 3. Pengguna

**Persona utama — "Raka", siswa kelas VIII**
- Memakai HP Android kelas menengah dengan kuota terbatas.
- Malas membaca teks panjang, lebih suka contoh yang dijelaskan pelan-pelan.
- Sering keliru menghitung kuadrat (misalnya 6² ditulis 12).
- Bingung memilih rumus pada soal cerita.
- Butuh tahu *kenapa* jawabannya salah.

**Pengguna sekunder — peneliti (Maila)**
- Butuh rekap jawaban siswa per soal dan per tahap untuk analisis kesulitan dan validitas soal.

## 4. Ruang lingkup

### 4.1 Wajib ada (MVP, untuk presentasi)

| ID | Fitur | Keterangan |
|---|---|---|
| F1 | **Halaman awal** | Nama aplikasi, input nama siswa (tanpa login), tombol Materi, Latihan, Game, dan Kuis. Menampilkan progres. |
| F2 | **Materi bertopik** | 6 topik (lihat §5), tiap topik 3–5 kartu pendek (≤ 60 kata per kartu), tombol *Lanjut/Kembali*, dan 1 ilustrasi per konsep. |
| F3 | **Contoh soal langkah demi langkah** | Langkah dibuka satu per satu dengan tombol "Tampilkan langkah berikutnya". |
| F4 | **Latihan bertingkat** | Level 1: kuadrat & cek tripel → Level 2: mencari sisi yang belum diketahui → Level 3: soal cerita dengan bantuan "Diketahui–Ditanya–Model–Hitung–Simpulkan". |
| F5 | **Fitur menjawab soal** | Input angka dan pilihan ganda (Ya/Tidak, pilih rangka, dll.). Tombol *Periksa*. |
| F6 | **Umpan balik spesifik** | Mendeteksi kesalahan umum (kuadrat = dikali 2, salah memilih sisi miring, lupa diakarkan, dll.) lalu menjelaskannya. Ada tombol "Lihat pembahasan". |
| F7 | **Kuis evaluasi 5 soal** | Instrumen penelitian. Bertahap per soal, skor mengikuti rubrik (maks 30), nilai akhir 0–100. |
| F8 | **PWA** | Bisa dipasang ke layar utama Android dan berjalan offline setelah dibuka sekali. |
| F9 | **Online & di GitHub** | Repo publik dan aplikasi online di GitHub Pages. |

### 4.2 Sebaiknya ada (jika waktu cukup)

| ID | Fitur |
|---|---|
| S1 | **Mini-game "Pemburu Tripel"**: dari 9 kartu angka, ketuk 3 angka yang membentuk Tripel Pythagoras. Bintang berdasarkan ketepatan, bukan kecepatan. |
| S2 | **Skala beban kognitif** (Paas, 1–9) setelah tiap topik: "Seberapa besar usaha pikiranmu untuk memahami bagian ini?" |
| S3 | **Rekap untuk peneliti**: halaman tersembunyi (`#/rekap`) untuk mengunduh hasil sebagai JSON/CSV. |
| S4 | **Tabel kuadrat 1–30** yang bisa dibuka kapan saja (tombol "📋 Tabel Kuadrat") sebagai alat bantu prasyarat. |

### 4.3 Tidak termasuk
- Login/akun, server, dan database online.
- Leaderboard antarsiswa (menambah tekanan dan beban ekstrinsik).
- Video panjang dan animasi berlebihan.
- Segitiga istimewa (30°-60°-90°, 45°-45°-90°) dan Pythagoras pada bangun ruang. Ini bisa menjadi pengembangan berikutnya.

## 5. Struktur materi

| Topik | Isi | Prasyarat |
|---|---|---|
| 0. Ingat Lagi | Kuadrat (6² = 6 × 6 = 36, **bukan** 6 × 2) dan akar kuadrat (√36 = 6) | — |
| 1. Segitiga Siku-siku | Sisi siku-siku (a, b) dan sisi miring/hipotenusa (c): sisi **terpanjang**, di depan sudut siku-siku | — |
| 2. Teorema Pythagoras | c² = a² + b²; mencari sisi miring dan mencari sisi siku-siku (a² = c² − b²) | Topik 0, 1 |
| 3. Tripel Pythagoras | Tiga bilangan asli yang memenuhi a² + b² = c²; cara mengecek (bilangan **terbesar** sebagai c) | Topik 2 |
| 4. Pola Tripel | Tripel dasar (3,4,5), (5,12,13), (8,15,17), (7,24,25) dan kelipatannya (6,8,10), (9,12,15), … | Topik 3 |
| 5. Tripel dalam Kehidupan | Diagonal lapangan, tangga bersandar, rangka siku-siku; langkah menyelesaikan soal cerita | Topik 2–4 |

Isi kartu, contoh, latihan, dan kuis ada di `docs/MATERI_DAN_SOAL.md`.

## 6. Alur pengguna utama

```
Buka aplikasi → Isi nama → Halaman Awal
   ├─ Materi → pilih topik → kartu 1..n → contoh langkah demi langkah → skala usaha (1–9) → selesai ✔
   ├─ Latihan → pilih level → jawab → Periksa → (benar: lanjut | salah: umpan balik + coba lagi / lihat pembahasan)
   ├─ Game → Pemburu Tripel
   └─ Kuis → 5 soal bertahap → skor + rangkuman → (peneliti) unduh rekap
```

## 7. Kebutuhan non-fungsional

| Aspek | Target |
|---|---|
| Perangkat | Nyaman di layar 360 px (HP Android) sampai laptop |
| Kinerja | Halaman pertama < 3 detik di 4G, ukuran build < 1 MB |
| Offline | Semua materi, latihan, dan kuis bisa dipakai offline setelah kunjungan pertama |
| Bahasa | Bahasa Indonesia sederhana, kalimat pendek, sapaan "kamu" |
| Notasi | Pangkat ditulis dengan superskrip (6², bukan 62 atau 6^2) |
| Aksesibilitas | Huruf ≥ 16 px, kontras cukup, tombol ≥ 44 px, tidak bergantung pada warna saja |
| Privasi | Hanya nama panggilan yang disimpan di perangkat (localStorage), tanpa data dikirim ke server |

## 8. Risiko dan mitigasi

| Risiko | Mitigasi |
|---|---|
| Waktu pengerjaan sempit | Kerjakan MVP (F1–F9) dulu, S1–S4 menyusul |
| Siswa uji coba sudah kelas IX | Tetap sah karena siswa pernah belajar materi kelas VIII (dibuktikan dengan buku paket); catat sebagai keterbatasan |
| Soal terlalu sulit | Ada versi yang lebih mudah di `docs/MATERI_DAN_SOAL.md` §6 |
| Kesalahan kuadrat menutupi pemahaman konsep | Tabel kuadrat (S4) + latihan Level 1 khusus kuadrat; umpan balik membedakan salah hitung dan salah konsep |

## 9. Kriteria siap presentasi
- [ ] Aplikasi online (link GitHub Pages) dan bisa dibuka di HP
- [ ] Bisa dipasang ke layar utama Android
- [ ] Halaman awal, 6 topik materi, latihan, dan kuis 5 soal berfungsi
- [ ] Umpan balik salah muncul dan masuk akal
- [ ] Repo GitHub berisi kode, README, dan dokumen perencanaan
- [ ] Instrumen 5 soal (Word) dan hasil analisis uji coba siap ditunjukkan
