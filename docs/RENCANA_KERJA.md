# Rencana Kerja sampai Presentasi

> Arahan menyebut **deadline Sabtu** dan **presentasi minggu depan**. Jadwal di bawah memakai urutan **prioritas**,
> jadi tetap berguna untuk tenggat mana pun. Kerjakan dari atas; yang bertanda ⭐ wajib untuk presentasi.

## Tahap A — Dokumen penelitian (bisa paralel dengan coding)
- [ ] ⭐ Cocokkan 5 soal di `MATERI_DAN_SOAL.md` dengan **bahan ajar dosen**
- [ ] ⭐ Rapikan **instrumen 5 soal** di Word (tambah Soal 1 baru, perbaiki penulisan pangkat ² dan akar √)
- [ ] ⭐ Lengkapi identitas subjek wawancara (nama, kode, kelas) dan identitas pewawancara (nama, NIM)
- [ ] ⭐ Uji coba 5 soal ke siswa S01 + wawancara lanjutan (`UJI_COBA_DAN_ANALISIS.md`)
- [ ] ⭐ Isi lembar analisis; revisi soal yang terlalu sulit
- [ ] Masukkan hasil analisis ke `docs/` (mis. `HASIL_UJI_COBA.md`)

## Tahap B — Aplikasi
| Urutan | Pekerjaan | Hasil | Prioritas |
|---|---|---|---|
| 1 | Instal Node.js, Git, VS Code; cek `node -v`, `npm -v` | Versi muncul | ⭐ |
| 2 | Buat proyek Vite + pasang library | `npm run dev` jalan | ⭐ |
| 3 | Buat repo GitHub, push pertama, aktifkan GitHub Pages | Link online | ⭐ |
| 4 | `lib/pythagoras.js` + tes | Rumus & kunci benar | ⭐ |
| 5 | Beranda (isi nama, menu, progres) | F1 | ⭐ |
| 6 | Komponen `SegitigaSiku` + data materi + halaman kartu + contoh bertahap | F2, F3 | ⭐ |
| 7 | Komponen jawab (input angka, pilihan ganda) + umpan balik + Tabel Kuadrat | F5, F6 | ⭐ |
| 8 | Latihan Level 1–3 | F4 | ⭐ |
| 9 | Kuis 5 soal + halaman hasil | F7 | ⭐ |
| 10 | PWA: ikon + manifest; uji pasang di HP | F8 | ⭐ |
| 11 | Skala usaha mental | S2 | |
| 12 | Game Pemburu Tripel | S1 | |
| 13 | Rekap peneliti (unduh JSON/CSV) | S3 | |
| 14 | Uji di HP siswa, perbaiki, push final | Siap presentasi | ⭐ |

## Contoh jadwal (jika presentasi Sabtu depan)
| Hari | Fokus |
|---|---|
| Jumat–Sabtu | Setup (1–3), rapikan Word instrumen, jadwalkan uji coba |
| Minggu | Rumus + Beranda + Materi (4–6) |
| Senin | Jawab soal, umpan balik, dan Latihan (7–8); **uji coba soal ke siswa** |
| Selasa | Kuis + PWA (9–10); analisis hasil uji coba |
| Rabu | Revisi soal dari hasil uji coba; fitur tambahan (11–13) |
| Kamis | Uji di HP, perbaiki bug, rapikan README |
| Jumat | Siapkan slide presentasi + latihan demo |
| Sabtu | **Presentasi** |

### Jalur kilat (jika tenggat sangat dekat)
Hari 1: langkah 1–5 + Word instrumen. Hari 2: langkah 6–10, uji coba soal, dan analisis singkat. Fitur tambahan dilewati.

## Materi presentasi (± 7 menit)
1. Latar belakang & hasil wawancara (beban kognitif) — 1 menit
2. Prinsip desain dari wawancara → fitur (tabel di `ANALISIS_KEBUTUHAN.md` §3) — 1,5 menit
3. **Demo langsung**: buka link di HP → pasang → materi → latihan dijawab salah (tunjukkan umpan balik "kuadrat dikali 2") → kuis — 3 menit
4. Instrumen 5 soal + hasil uji coba + revisi — 1 menit
5. Rencana pengembangan berikutnya — 0,5 menit
