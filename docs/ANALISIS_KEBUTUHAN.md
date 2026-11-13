# Analisis Kebutuhan (Tahap *Analysis* — ADDIE)

## 1. Identitas

| | |
|---|---|
| Peneliti/pewawancara | Maila Andira Putri — NIM 2225250126 — Kelas 3A |
| Subjek | Kode **S01**, kelas IX.6 *(lengkapi: nama siswa / NIS / nama sekolah sesuai arahan dosen)* |
| Tanggal wawancara | 6 November 2026 |
| Durasi | 25 menit, direkam atas persetujuan siswa |
| Materi | Tripel Pythagoras (Buku Paket Matematika Kelas VIII) |
| Bukti pernah belajar | Buku Paket Matematika Kelas VIII dan pernyataan siswa |
| Artefak pemicu | Buku paket dan contoh soal |

## 2. Kerangka teori singkat (Cognitive Load Theory)

| Jenis beban | Artinya | Implikasi untuk aplikasi |
|---|---|---|
| **Intrinsik (IL)** | Kerumitan materi itu sendiri, dipengaruhi pengetahuan prasyarat | Pecah materi menjadi bagian kecil, siapkan prasyarat (kuadrat & akar) |
| **Ekstrinsik (EL)** | Beban dari cara penyajian yang buruk | Kurangi teks, tempo diatur siswa, tampilan bersih |
| **Germane (GL)** | Usaha yang membangun pemahaman | Contoh bertahap, umpan balik, latihan bertingkat |

## 3. Pemetaan temuan wawancara → keputusan desain

| Kode | Kutipan siswa (ringkas) | Masalah | Keputusan desain di aplikasi |
|---|---|---|---|
| K01/K03 | "Kayanya sih tentang 3 angka gitu yang dihitung sama rumus Pythagoras. Tapi udah agak lupa." | Ingatan materi lemah | Topik **0. Ingat Lagi** dan **1. Segitiga Siku-siku** sebelum masuk tripel; kartu ringkasan di akhir tiap topik |
| IL01 | "Suka bingung kalau dikasih angka yang beda-beda." | Kesulitan menerapkan prosedur pada angka baru | Latihan **cek tripel** dengan angka acak (generator), termasuk urutan yang diacak dan *near-miss* seperti (6, 8, 11) |
| IL01 | "Belum terlalu paham." | Konsep tripel belum kokoh | Topik 3 dimulai dari pengertian sederhana + 1 gambar segitiga |
| IL03 | "Kalo dikuadratin masih suka salah." | Prasyarat kuadrat lemah | Topik 0 + latihan Level 1 khusus kuadrat + **Tabel Kuadrat** yang selalu bisa dibuka + umpan balik "kuadrat = dikali dirinya sendiri" |
| EL03/EL04 | "Kalo ngejelasinnya kecepatan suka bingung terus ketinggalan." | Tempo terlalu cepat | **Tidak ada auto-play**, tombol Lanjut/Kembali, langkah dibuka sendiri |
| EL01/EL05 | "Kalo udah soal cerita suka bingung harus apa dan rumusnya yang mana." | Kesulitan memodelkan soal cerita | Kerangka **Diketahui → Ditanya → Gambar → Rumus → Hitung → Simpulkan**; gambar segitiga dari cerita (lapangan, tangga) |
| GL01 | "Kalo ada contoh soal yang dijelasin pelan-pelan kak." | Butuh *worked example* | **Contoh soal langkah demi langkah** di tiap topik |
| GL03 | "Bingung juga salahnya dimana." | Tidak tahu letak kesalahan | **Umpan balik diagnostik** (deteksi kesalahan umum) |
| DS01 | "Penjelasan materi yang gampang dimengerti, terus ada contoh soal, cara ngerjainnya dijelasin satu-satu." | Butuh materi sederhana + contoh bertahap | Kartu ≤ 60 kata + contoh bertahap |
| DS01/GL03 | "Biar bisa latihan sendiri. Tapi kalo jawabannya salah, saya pengen tau salahnya kenapa." | Butuh latihan mandiri + umpan balik penjelas | Latihan dengan pesan *apa yang salah → petunjuk → coba lagi* + pembahasan |
| DS01/EL02 | "Mungkin perlu 1 biar kebayang, tapi jangan kebanyakan juga." | Ilustrasi berlebih memecah perhatian | **Maks. 1 ilustrasi per kartu** (segitiga siku-siku sederhana) |
| DS03/EL02 | "Jangan kebanyakan tulisan… soalnya jangan langsung dikasih yang susah." | Teks panjang & lompatan kesulitan | **≤ 60 kata per kartu**, latihan dan kuis **mudah → sulit** |

## 4. Analisis materi dan kesalahan umum yang diantisipasi

| Konsep | Kesalahan umum siswa | Cara aplikasi mendeteksi |
|---|---|---|
| Kuadrat | 6² dihitung 6 × 2 = 12 | Jawaban = bilangan × 2 |
| Sisi miring | Memilih sisi yang bukan terpanjang sebagai c | Jawaban = hasil perhitungan dengan c yang keliru |
| Teorema Pythagoras | Menjumlahkan sisi tanpa kuadrat (a + b = c) | Jawaban = a + b |
| Mencari sisi miring | Lupa mengakarkan (berhenti di c² = 676) | Jawaban = a² + b² |
| Mencari sisi siku-siku | Menjumlahkan padahal harus mengurangkan (c² + b²) | Jawaban = √(c² + b²) |
| Cek tripel | Menganggap tiga bilangan sebagai tripel tanpa menghitung, atau hanya karena "polanya mirip" (7, 24, 26) | Pilihan Ya/Tidak + kolom hasil a² + b² dan c² |
| Tripel | Menganggap hasil desimal (√41) sebagai tripel | Pilihan ganda dengan alasan |
| Soal cerita | Tidak mengenali diagonal/tangga sebagai sisi miring | Tahap "Sisi mana yang merupakan sisi miring?" |

## 5. Analisis pengguna dan konteks
- Perangkat: HP Android, kuota terbatas → aplikasi ringan dan bisa offline (PWA).
- Waktu belajar: sesi pendek 10–20 menit → tiap topik selesai ≤ 10 menit.
- Kemandirian: siswa belajar sendiri di rumah → umpan balik harus menggantikan peran "tanya teman/guru".

## 6. Kesimpulan kebutuhan
Aplikasi harus: (1) mengingatkan prasyarat kuadrat & akar, (2) menyajikan materi dalam potongan kecil,
(3) membiarkan siswa mengatur tempo, (4) memberi contoh bertahap, (5) menyediakan latihan dari mudah ke sulit dengan angka bervariasi,
(6) menjelaskan letak kesalahan, (7) membantu soal cerita dengan kerangka langkah dan gambar, (8) bisa dipakai di HP dan offline.
