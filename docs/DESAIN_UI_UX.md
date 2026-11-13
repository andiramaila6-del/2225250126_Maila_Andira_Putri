# Desain UI/UX (Tahap *Design* — ADDIE)

## 1. Prinsip
Tenang, bersih, satu fokus per layar. Setiap elemen harus membantu belajar (mengurangi beban ekstrinsik).

## 2. Gaya visual
| Elemen | Pilihan |
|---|---|
| Warna utama | Biru tua `#1E3A8A` (judul, tombol utama) |
| Warna aksen | Kuning `#F59E0B` (menyorot sisi miring c) |
| Benar / salah | Hijau `#16A34A` / Merah `#DC2626`, **selalu disertai ikon ✔ / ✖ dan teks** |
| Latar | Putih/abu sangat muda `#F8FAFC` |
| Huruf | Sistem (sans-serif), ukuran dasar 16–18 px, angka soal 20 px |
| Tombol | Tinggi ≥ 48 px, sudut membulat, lebar penuh di HP |
| Ilustrasi | Komponen `SegitigaSiku`: segitiga garis sederhana, kotak siku-siku, sisi a & b abu-abu, **sisi c kuning** |

## 3. Peta layar
```
Beranda ──┬── Daftar Materi ── Materi (kartu) ── Contoh Bertahap ── Skala Usaha ── Ringkasan
          ├── Latihan (pilih level) ── Soal ── Umpan Balik / Pembahasan
          ├── Game: Pemburu Tripel
          ├── Kuis Evaluasi (5 soal) ── Hasil
          └── (tersembunyi) Rekap Peneliti
   📋 Tabel Kuadrat — tombol melayang di Latihan & Kuis
```

## 4. Wireframe teks

### 4.1 Halaman Awal
```
┌──────────────────────────────┐
│  📐 TRIPELIN                  │
│  Belajar Tripel Pythagoras    │
│                              │
│  Hai, [Nama]! 👋             │  ← jika belum ada nama: kolom isi nama + tombol Mulai
│  Progres: ███░░░ 3/6 topik   │
│                              │
│  [ 📘 Materi            ]    │
│  [ ✏️ Latihan Soal      ]    │
│  [ 🎮 Game              ]    │
│  [ 📝 Kuis Evaluasi     ]    │
│                              │
│  ℹ️ Cara pakai · Tentang      │
└──────────────────────────────┘
```

### 4.2 Kartu Materi
```
┌──────────────────────────────┐
│ ← Topik 3: Tripel     2/4     │
│ ●●○○                          │
│                              │
│  Cara mengecek tripel:       │
│  ① Bilangan terbesar = c     │
│  ② Hitung a² + b²            │
│  ③ Hitung c²                 │
│  ④ Sama? → Tripel ✔          │
│                              │
│       |\                     │
│     b | \ c   ← (c kuning)   │
│       |_□\                   │
│         a                    │
│                              │
│ [ ← Kembali ]  [ Lanjut → ]  │
└──────────────────────────────┘
```

### 4.3 Contoh Langkah Demi Langkah
```
│ Contoh: Apakah 6, 10, 8 tripel? │
│ Langkah 1 ✔ Terbesar = 10 → c = 10 │
│ Langkah 2 ✔ 6² + 8² = 36 + 64 = 100 │
│ Langkah 3 … (tersembunyi)        │
│ [ Tampilkan langkah berikutnya ] │
```

### 4.4 Soal Latihan + Umpan Balik
```
┌──────────────────────────────┐
│ Level 2 · Soal 3/5   📋       │
│ Sisi siku-siku 9 cm dan 12 cm │
│ [gambar segitiga]             │
│ c² = 9² + 12² = [ ____ ]      │
│ [ 💡 Petunjuk ]  [ Periksa ]  │
├──────────────────────────────┤
│ ✖ Belum tepat                 │
│ Kamu menulis 42. Sepertinya   │
│ kuadrat dihitung dikali 2.    │
│ 9² = 9 × 9 = 81. Coba lagi!   │
│ [ Coba lagi ] [ Lihat pembahasan ] │
└──────────────────────────────┘
```

### 4.5 Soal Cerita dengan Bantuan
```
│ 📖 Lapangan 12 m × 9 m, dibuat jalur diagonal… │
│ Diketahui: p = [  ] m, l = [  ] m      │
│ Ditanya:   (•) panjang diagonal        │
│ Sisi miringnya adalah: ( ) p ( ) l (•) diagonal │
│ Model:  d² = [p²] + [l²]               │
│ Hitung: d² = [   ] → d = [   ]         │
│ Simpulkan: panjang jalur = [   ] m     │
```

### 4.6 Game "Pemburu Tripel"
1. Muncul 9 kartu angka (3 × 3) berisi 3 tripel yang diacak, misalnya 7, 15, 3, 25, 5, 8, 24, 17, 4.
2. Siswa mengetuk **3 kartu** yang menurutnya membentuk Tripel Pythagoras; kartu yang sudah benar terkunci.
3. Aplikasi menampilkan perhitungannya: 8² + 15² = 289 = 17² ✔ (atau penjelasan jika salah).
4. Ronde selesai setelah 3 tripel ditemukan: (3, 4, 5), (8, 15, 17), (7, 24, 25). Bintang ⭐ 1–3 berdasarkan jumlah salah, **tanpa timer**.

### 4.7 Tabel Kuadrat (pop-up)
Tabel 1²–30² dalam 3 kolom, bisa ditutup kapan saja.

### 4.8 Skala Usaha Mental (setelah tiap topik)
```
Seberapa besar usaha pikiranmu untuk memahami topik ini?
 1  2  3  4  5  6  7  8  9
sangat ringan ←→ sangat berat
```

### 4.9 Hasil Kuis
- Nilai besar (mis. **80**), kategori ("Sangat baik"), skor per soal, dan tombol "Lihat pembahasan" tiap soal.
- Kalimat penyemangat netral; tidak membandingkan dengan siswa lain.

## 5. Aturan interaksi
- Tidak ada perpindahan otomatis. Siswa selalu menekan tombol untuk lanjut.
- Petunjuk bertingkat: petunjuk 1 (arah) → petunjuk 2 (langkah) → pembahasan.
- Keyboard angka muncul di HP (`inputmode="decimal"`).
- Progres tersimpan otomatis; siswa bisa melanjutkan dari terakhir.
