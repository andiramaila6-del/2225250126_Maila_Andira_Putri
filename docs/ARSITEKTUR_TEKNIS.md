# Arsitektur Teknis (Tahap *Development* — ADDIE)

## 1. Kenapa PWA?
Aplikasi diminta bisa dibuka di **web** dan di **Android** tanpa Play Store. PWA memenuhi keduanya dengan **satu kode**:
- Dibuka lewat link di browser mana pun.
- Di Android (Chrome): menu ⋮ → **Instal aplikasi / Tambahkan ke layar utama**. Muncul ikon seperti aplikasi biasa.
- Di iPhone (Safari): tombol Bagikan → **Tambah ke Layar Utama**.
- Bisa offline setelah dibuka sekali (service worker).
- Syarat: harus online dengan **HTTPS**. GitHub Pages sudah HTTPS dan gratis.

## 2. Teknologi
| Bagian | Pilihan | Alasan |
|---|---|---|
| Build tool | Vite | Cepat, sesuai arahan memakai Node.js/npm |
| UI | React (JavaScript) | Populer, banyak contoh, mudah dibantu AI |
| Gaya | Tailwind CSS | Cepat membuat tampilan rapi dan responsif |
| Routing | react-router-dom (HashRouter) | URL `#/materi` aman di GitHub Pages |
| PWA | vite-plugin-pwa | Membuat manifest + service worker otomatis |
| Data | File JS di `src/data/` + localStorage | Tanpa server, gratis, offline |
| Tes | Vitest | Memastikan rumus dan kunci jawaban benar |
| Hosting | GitHub Pages + GitHub Actions | Gratis, link bisa dibagikan ke dosen |

## 3. Membuat proyek
```bash
npm create vite@latest aplikasi-pembelajaran-tripel-pythagoras-2225250126 -- --template react
cd aplikasi-pembelajaran-tripel-pythagoras-2225250126
npm install
npm install react-router-dom
npm install -D tailwindcss @tailwindcss/vite vite-plugin-pwa vitest
```
Lalu salin file-file perencanaan ini (README, PRD, CLAUDE, docs/) ke dalam folder proyek.

## 4. Struktur folder
```
aplikasi-pembelajaran-tripel-pythagoras-2225250126/
├─ .github/workflows/deploy.yml
├─ docs/                       # dokumen perencanaan
├─ public/icons/icon-192.png, icon-512.png
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx                  # HashRouter + daftar route
│  ├─ index.css                # @import "tailwindcss";
│  ├─ pages/
│  │  ├─ Beranda.jsx  DaftarMateri.jsx  Materi.jsx
│  │  ├─ Latihan.jsx  Game.jsx  Kuis.jsx  Hasil.jsx  Rekap.jsx
│  ├─ components/
│  │  ├─ KartuMateri.jsx  LangkahDemiLangkah.jsx  InputAngka.jsx  PilihanGanda.jsx
│  │  ├─ UmpanBalik.jsx  SkalaUsaha.jsx  BarProgres.jsx  SegitigaSiku.jsx  TabelKuadrat.jsx
│  ├─ data/  materi.js  latihan.js  kuis.js
│  └─ lib/   pythagoras.js  diagnosis.js  penyimpanan.js  pythagoras.test.js
├─ CLAUDE.md  PRD.md  README.md
├─ index.html  package.json  vite.config.js
```

## 5. Route
| URL | Halaman |
|---|---|
| `#/` | Beranda |
| `#/materi` | Daftar topik |
| `#/materi/:id` | Kartu materi topik |
| `#/latihan` dan `#/latihan/:level` | Latihan |
| `#/game` | Pemburu Tripel |
| `#/kuis` | Kuis 5 soal |
| `#/hasil` | Hasil kuis |
| `#/rekap` | Rekap peneliti (tidak ditautkan dari menu) |

## 6. Model data

### 6.1 Konten materi (`src/data/materi.js`)
```js
export const daftarTopik = [
  {
    id: 'teorema',
    judul: 'Teorema Pythagoras',
    kartu: [
      { teks: 'Rumusnya: c² = a² + b². Kuadrat sisi miring = jumlah kuadrat kedua sisi siku-siku.',
        ilustrasi: { jenis: 'segitiga', a: 6, b: 8, c: '?' } },
    ],
    contoh: {
      soal: 'a = 6 cm, b = 8 cm. Berapa sisi miringnya?',
      langkah: ['c² = 6² + 8²', 'c² = 36 + 64 = 100', 'c = √100 = 10 cm'],
    },
  },
]
```

### 6.2 Soal kuis (`src/data/kuis.js`)
```js
{
  id: 'soal3',
  noKisiKisi: 1,
  indikator: 'Reasoning',
  judul: 'Memilih Rangka Penyangga yang Tepat',
  cerita: 'Seorang siswa akan membuat rangka penyangga ...',
  tahap: [
    { id: 't2a', tanya: 'Rangka A: 6² + 8² = ?', jenis: 'angka', kunci: 100, skor: 1, cek: 'jumlah-kuadrat' },
    { id: 't2b', tanya: 'Rangka B: 11² = ?', jenis: 'angka', kunci: 121, skor: 1, cek: 'kuadrat' },
    { id: 't4', tanya: 'Rangka yang dipilih?', jenis: 'pilihan', opsi: ['Rangka A', 'Rangka B'], kunci: 0, skor: 1 },
    // ...
  ],
}
```

### 6.3 Penyimpanan lokal (`localStorage`, kunci `tripelin:v1`)
```js
{
  nama: 'Raka',
  topikSelesai: ['ingat-lagi', 'segitiga-siku'],
  skalaUsaha: { 'ingat-lagi': 3, teorema: 6 },
  latihan: { level1: { benar: 5, total: 6 } },
  kuis: {
    mulai: '2026-11-20T08:00:00Z', selesai: '...',
    jawaban: [{ soal: 'soal2', tahap: 't2', jawaban: 68, benar: false, percobaan: 1, kesalahan: 'kuadrat-kali-dua' }],
    skor: 24, nilai: 80,
  },
}
```

## 7. Fungsi inti (`src/lib/pythagoras.js`)
```js
// Kuadrat: bilangan dikali dirinya sendiri
export const kuadrat = (x) => x * x

// Sisi miring dari dua sisi siku-siku
export const sisiMiring = (a, b) => Math.sqrt(a * a + b * b)

// Sisi siku-siku jika sisi miring (c) dan satu sisi siku-siku (a) diketahui
export const sisiSiku = (c, a) => Math.sqrt(c * c - a * a)

// Cek tripel: bilangan asli, terbesar sebagai c
export const cekTripel = (x, y, z) => {
  const [a, b, c] = [x, y, z].sort((p, q) => p - q)
  const semuaAsli = [a, b, c].every((n) => Number.isInteger(n) && n > 0)
  return { a, b, c, jumlahKuadrat: a * a + b * b, kuadratC: c * c,
           tripel: semuaAsli && a * a + b * b === c * c }
}

export const tripelDasar = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]]

// Tripel acak: tripel dasar × k (k = 1..maksK)
export const buatTripelAcak = (maksK = 3) => {
  const t = tripelDasar[Math.floor(Math.random() * tripelDasar.length)]
  const k = 1 + Math.floor(Math.random() * maksK)
  return t.map((n) => n * k)
}
```
Tes wajib: kunci kelima soal kuis sama dengan hasil fungsi ini (26; rangka A; 15; 25; dan (a), (c) pada Soal 1).

## 8. Diagnosis kesalahan (`src/lib/diagnosis.js`)
Untuk tiap jawaban salah, hitung "jawaban salah yang umum" lalu cocokkan:
- `kuadrat-kali-dua`: jawaban memakai x × 2 sebagai ganti x²
- `tanpa-kuadrat`: jawaban = a + b
- `lupa-akar`: jawaban = a² + b² (seharusnya c)
- `tanda-salah`: mencari sisi siku-siku tetapi menjawab √(c² + a²)
- `salah-sisi-miring`: perhitungan memakai bilangan bukan terbesar sebagai c
- `salah-hitung`: selisih kecil dari kunci → "caramu benar, cek hitunganmu"
Jika tidak ada yang cocok, tampilkan petunjuk umum.

## 9. Konfigurasi PWA (`vite.config.js`)
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/aplikasi-pembelajaran-tripel-pythagoras-2225250126/', // = nama repo GitHub
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'TRIPELIN - Belajar Tripel Pythagoras',
        short_name: 'TRIPELIN',
        description: 'Aplikasi belajar Teorema dan Tripel Pythagoras untuk SMP kelas VIII',
        lang: 'id',
        theme_color: '#1E3A8A',
        background_color: '#F8FAFC',
        display: 'standalone',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
    }),
  ],
  test: { environment: 'node' },
})
```

## 10. Deploy ke GitHub Pages (`.github/workflows/deploy.yml`)
```yaml
name: Deploy ke GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: npm }
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages }
    steps:
      - uses: actions/deploy-pages@v4
```
Di GitHub: **Settings → Pages → Source: GitHub Actions**. Link aplikasi:
`https://<username>.github.io/aplikasi-pembelajaran-tripel-pythagoras-2225250126/`
