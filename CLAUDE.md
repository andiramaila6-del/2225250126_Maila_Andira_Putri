# CLAUDE.md — Panduan untuk AI Coding Assistant

File ini dibaca otomatis oleh Claude Code. Kalau memakai ChatGPT, salin isi file ini ke awal percakapan.
Baca juga `PRD.md` (apa yang dibangun) dan `docs/MATERI_DAN_SOAL.md` (isi konten) sebelum menulis kode.

## Ringkasan proyek
TRIPELIN adalah PWA pembelajaran **Teorema dan Tripel Pythagoras** untuk siswa SMP kelas VIII. Desainnya berbasis
**Cognitive Load Theory** dari hasil wawancara siswa. Pemilik proyek adalah mahasiswa pendidikan matematika
yang masih pemula dalam pemrograman, jadi **kode harus sederhana, mudah dibaca, dan diberi komentar dalam Bahasa Indonesia**.

## Teknologi (jangan diganti tanpa alasan kuat)
- **Vite + React** dengan **JavaScript** (bukan TypeScript), komponen fungsi + hooks
- **Tailwind CSS** untuk gaya
- **vite-plugin-pwa** untuk manifest + service worker (offline & bisa dipasang)
- **react-router-dom** dengan **HashRouter** (aman untuk GitHub Pages)
- Penyimpanan: **localStorage** saja. Tanpa backend, tanpa database, tanpa login.
- Tes: **Vitest** untuk fungsi matematika di `src/lib/`
- Jangan menambah library lain (UI kit, state manager, animasi, library rumus) kecuali diminta.

## Perintah
```bash
npm install        # pasang dependensi
npm run dev        # server pengembangan
npm run build      # build produksi ke dist/
npm run preview    # cek hasil build
npm test           # jalankan tes vitest
```

## Struktur folder
```
src/
  main.jsx, App.jsx          # entry + routing
  pages/                     # Beranda, DaftarMateri, Materi, Latihan, Game, Kuis, Hasil, Rekap
  components/                # KartuMateri, LangkahDemiLangkah, InputAngka, PilihanGanda, UmpanBalik,
                             # SkalaUsaha, SegitigaSiku (SVG), TabelKuadrat, BarProgres
  data/                      # KONTEN saja (materi.js, latihan.js, kuis.js) — tanpa logika
  lib/
    pythagoras.js            # kuadrat, sisiMiring, sisiSiku, cekTripel, tripelDasar, buatTripelAcak
    diagnosis.js             # deteksi kesalahan umum → pesan umpan balik
    penyimpanan.js           # baca/tulis localStorage (dengan try/catch)
    pythagoras.test.js
public/icons/                # ikon PWA 192 & 512 px
```

## Aturan matematika (WAJIB konsisten)
- Sisi siku-siku ditulis **a** dan **b**, sisi miring **c**. Sisi miring adalah **sisi terpanjang**, di depan sudut siku-siku.
- **Teorema Pythagoras:** c² = a² + b².
  - Mencari sisi miring: c = √(a² + b²).
  - Mencari sisi siku-siku: a = √(c² − b²).
- **Tripel Pythagoras:** tiga **bilangan asli** (bulat positif) yang memenuhi a² + b² = c².
  - Cara cek: urutkan, jadikan bilangan **terbesar** sebagai c, lalu bandingkan a² + b² dengan c².
  - Urutan penulisan tidak berpengaruh: (6, 10, 8) tetap tripel.
  - Jika hasil akar bukan bilangan bulat (misalnya √41), ketiganya **bukan** tripel.
- Kelipatan tripel adalah tripel: (3,4,5) × k.
- Tulis pangkat dengan superskrip **²** dan akar dengan **√**. Jangan tampilkan `6^2` ke siswa.
- Desimal ditampilkan dengan **koma** (`6,4`). Input siswa menerima koma atau titik.
- Bandingkan jawaban angka dengan toleransi 0,01.
- Setiap soal di `src/data/` harus lolos cek otomatis: kunci jawaban = hasil fungsi di `pythagoras.js`.

## Aturan desain (dari hasil wawancara — jangan dilanggar)
1. **Teks pendek**: ≤ 60 kata per kartu materi, satu ide per kartu.
2. **Tempo dikendalikan siswa**: tidak ada auto-slide atau timer yang memaksa. Selalu ada tombol Kembali.
3. **Contoh soal dibuka langkah demi langkah**, bukan semuanya sekaligus.
4. **Ilustrasi secukupnya**: maksimal 1 gambar per kartu. Gunakan komponen `SegitigaSiku` (SVG sederhana, sisi berlabel a, b, c, kotak kecil di sudut siku-siku).
5. **Mudah → sulit**: urutan level latihan tidak boleh dilompati di urutan default.
6. **Umpan balik menjelaskan kesalahan**, bukan hanya "Salah". Format: apa yang salah → petunjuk → coba lagi.
   Setelah 2 kali salah, tawarkan "Lihat pembahasan".
7. **Soal cerita diberi bantuan**: Diketahui → Ditanya → Gambar/Model → Hitung → Simpulkan.
8. **Prasyarat selalu tersedia**: tombol "📋 Tabel Kuadrat" di halaman latihan dan kuis.
9. Hindari dekorasi yang tidak membantu belajar (efek berlebihan, suara otomatis, banyak warna).
10. Bahasa santai, jelas, menyapa "kamu".

## Gaya kode
- Nama variabel/fungsi dalam **Bahasa Indonesia** bila berkaitan dengan domain (`hitungSisiMiring`, `cekTripel`).
- Komponen kecil (< 150 baris). Konten selalu di `src/data/`, jangan di-hardcode di komponen.
- Mobile-first: rancang untuk lebar 360 px dulu.
- Semua akses `localStorage` dibungkus `try/catch`; aplikasi tetap jalan walau penyimpanan gagal.
- Jangan pakai `alert()`/`confirm()`; tampilkan pesan di halaman.

## Definisi selesai (Definition of Done) untuk setiap fitur
- Berjalan di `npm run dev` tanpa error di console.
- Tampil baik di lebar 360 px dan 1280 px.
- `npm run build` berhasil dan `npm test` lulus.
- Teks sudah dalam Bahasa Indonesia yang benar.

## Deploy
GitHub Pages lewat GitHub Actions (`.github/workflows/deploy.yml`). Di `vite.config.js`, isi `base` dengan
`'/<nama-repo>/'`. Detail di `docs/ARSITEKTUR_TEKNIS.md`.
