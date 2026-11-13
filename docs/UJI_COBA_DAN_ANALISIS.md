# Uji Coba Soal & Analisis (Tahap *Implementation* & *Evaluation* — ADDIE)

## 1. Tujuan
1. Mengetahui apakah siswa S01 mampu mengerjakan 5 soal Tripel Pythagoras.
2. Menemukan **letak kesulitan** siswa per tahap penyelesaian.
3. Menilai kelayakan/validitas soal secara sederhana dan menyesuaikan tingkat kesulitannya.

## 2. Prosedur
| Langkah | Kegiatan | Waktu |
|---|---|---|
| 1 | Minta izin siswa S01 (dan guru/orang tua bila perlu); jelaskan tujuan | 5 menit |
| 2 | Siswa mengerjakan **5 soal di kertas** (versi Word) tanpa bantuan. Tentukan sejak awal boleh/tidaknya kalkulator dan catat | 30–40 menit |
| 3 | Minta siswa **berpikir keras** (*think aloud*): mengucapkan apa yang dipikirkan. Rekam suara jika diizinkan | bersamaan |
| 4 | Siswa mengisi skala usaha mental (1–9) setelah **tiap soal** | 10 detik/soal |
| 5 | Wawancara singkat setelah tes (§4) | 10 menit |
| 6 | Foto lembar jawaban sebagai bukti/artefak (masukkan ke tabel dokumentasi wawancara) | — |
| 7 | (Opsional) Siswa mencoba aplikasi 10–15 menit, lalu ditanya kesannya | 15 menit |

## 3. Lembar analisis hasil

### 3.1 Skor per tahap
| Soal | T1 | T2 | T3 | T4 | T5 | T6 | Skor (maks 6) | Usaha mental (1–9) | Catatan kesalahan |
|---|---|---|---|---|---|---|---|---|---|
| 1 (baru) | /1 | /1 | /1 | /1 | /1 | /1 | | | |
| 2 (kisi no. 3) | /1 | /2 | /2 | /1 | – | – | | | |
| 3 (kisi no. 1) | /1 | /2 | /1 | /1 | /1 | – | | | |
| 4 (kisi no. 2) | /1 | /1 | /1 | /1 | /1 | /1 | | | |
| 5 (kisi no. 4) | /1 | /1 | /1 | /1 | /1 | /1 | | | |
| **Total** | | | | | | | **/30** | | |

**Nilai = total ÷ 30 × 100 = ……** → Kategori: ……

### 3.2 Analisis tingkat kesulitan per soal
Karena subjeknya satu siswa, pakai **persentase skor tiap soal**: P = skor ÷ 6 × 100%.

| P | Tafsiran | Tindakan |
|---|---|---|
| > 70% | Mudah | Pertahankan |
| 30–70% | Sedang | Pertahankan |
| < 30% | Sulit | Pakai versi lebih mudah (`MATERI_DAN_SOAL.md` §6) atau perjelas kalimat soal |

### 3.3 Analisis kesulitan siswa (kualitatif)
| Soal/tahap | Jenis kesulitan | Bukti (kutipan/jawaban) | Jenis beban (IL/EL/GL) | Implikasi untuk aplikasi |
|---|---|---|---|---|
| contoh: 2/T2 | Kuadrat dihitung dikali 2 (24² = 48) | Lembar jawaban: "c² = 20 + 48" | IL | Perkuat Topik 0 + umpan balik `kuadrat-kali-dua` + Tabel Kuadrat |
| contoh: 4/T2 | Tidak mengenali diagonal sebagai sisi miring | "Diagonalnya yang mana kak?" | EL | Tambah gambar lapangan + tahap "pilih sisi miring" |
| | | | | |

Kategori kesulitan yang bisa dipakai: **konsep** (tidak paham arti tripel/sisi miring), **prosedur** (salah langkah, misalnya lupa mengakarkan),
**perhitungan** (salah kuadrat/penjumlahan), **memahami soal cerita** (tidak tahu yang ditanya atau rumus yang dipakai).

### 3.4 Validitas soal (sederhana)
- **Validitas isi:** cocokkan tiap soal dengan indikator dan bahan ajar dosen. Minta dosen/teman sejawat menilai skala 1–4 untuk: kesesuaian dengan indikator, kejelasan bahasa, dan kebenaran kunci.
- **Keterbacaan:** catat kata atau kalimat yang membuat siswa bingung saat *think aloud* (misalnya "rangka penyangga", "berseberangan").
- **Keterbatasan:** satu subjek tidak cukup untuk analisis statistik (validitas butir/reliabilitas). Tuliskan ini di laporan.

## 4. Wawancara lanjutan — memperluas tracking wawancara
Lengkapi identitas: **nama siswa, kode S01, kelas IX.6, sekolah**; **pewawancara: Maila Andira Putri, NIM 2225250126**.
Pertanyaan ini mendalami jawaban yang di wawancara pertama dicatat "masih perlu diperdalam" (IL01).

| Kode | Pertanyaan | Tujuan |
|---|---|---|
| K04 | "Coba jelaskan dengan bahasamu sendiri, apa itu Tripel Pythagoras?" | Pengetahuan awal (konsep) |
| IL01-L | "Tadi waktu ngerjain soal no. 1, langkah mana yang paling bikin bingung?" | Mendalami IL01 |
| IL02-L | "Gimana caramu tahu sisi mana yang sisi miring?" | Konsep sisi miring |
| IL03-L | "Berapa 24²? Gimana cara ngitungnya?" | Prasyarat kuadrat |
| EL05-L | "Di soal lapangan, kalimat mana yang susah dipahami? Kalau ada gambarnya, bantu nggak?" | Soal cerita & beban ekstrinsik |
| GL03-L | "Waktu tahu jawabanmu salah, bantuan apa yang kamu mau?" | Kebutuhan umpan balik |
| DS04 | (setelah mencoba aplikasi) "Bagian mana yang membantu? Mana yang mengganggu atau bikin pusing?" | Evaluasi desain |

Catat dalam format tabel yang sama dengan wawancara pertama: *Waktu/kode · Kutipan verbatim · Kode (IL/EL/GL/K) · Bukti · Interpretasi*.

## 5. Format laporan singkat (untuk presentasi)
1. Identitas & konteks uji coba
2. Tabel skor & nilai
3. Tingkat kesulitan per soal
4. Kesulitan utama siswa + kutipan
5. Revisi soal (jika ada)
6. Implikasi untuk fitur aplikasi
