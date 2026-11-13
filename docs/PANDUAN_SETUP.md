# Panduan Setup untuk Pemula (Windows)

Ikuti berurutan. Tanda ✅ berarti langkah berhasil.

## Langkah 1 — Instal Node.js
1. Buka **https://nodejs.org**, unduh versi **LTS**.
2. Jalankan installer → Next terus (biarkan pilihan default) → Install → Finish.
3. Tutup lalu buka lagi **Terminal** (cari "PowerShell" atau "Command Prompt" di menu Start).
4. Ketik:
   ```bash
   node -v
   npm -v
   ```
   ✅ Muncul angka versi, misalnya `v22.x.x` dan `10.x.x`.
   ❌ Muncul tulisan merah "not recognized" → restart laptop lalu coba lagi. Jika masih gagal, instal ulang Node.js.

> Jika PowerShell menolak menjalankan `npm` (error *running scripts is disabled*), pakai **Command Prompt**, atau jalankan
> `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` di PowerShell lalu ketik `Y`.

## Langkah 2 — Instal Git dan VS Code
- Git: **https://git-scm.com** → instal default. Cek dengan `git --version`.
- VS Code (editor kode): **https://code.visualstudio.com**.

## Langkah 3 — Buat proyek
Di terminal, masuk ke folder tempat kamu ingin menyimpan proyek (misalnya Documents):
```bash
cd Documents
npm create vite@latest aplikasi-pembelajaran-tripel-pythagoras-2225250126 -- --template react
```
- Jika muncul **"Ok to proceed? (y)"** → ketik `y` lalu Enter.
- Jika ditanya framework/variant → pilih **React** lalu **JavaScript**.
- Jika ditanya "Install with npm and start now?" → boleh pilih **No** dulu.

Lanjutkan:
```bash
cd aplikasi-pembelajaran-tripel-pythagoras-2225250126
npm install
npm install react-router-dom
npm install -D tailwindcss @tailwindcss/vite vite-plugin-pwa vitest
```
Salin `README.md`, `PRD.md`, `CLAUDE.md`, dan folder `docs/` ke dalam folder proyek ini (timpa README bawaan).

## Langkah 4 — Jalankan
```bash
npm run dev
```
✅ Muncul alamat `http://localhost:5173/...`. Tekan Ctrl + klik untuk membuka. Hentikan dengan **Ctrl + C**.

**Mencoba di HP (satu Wi-Fi):** jalankan `npm run dev -- --host`, lalu buka alamat **Network** (mis. `http://192.168.1.5:5173`) di browser HP.

## Langkah 5 — Menulis kode dengan bantuan AI
- **Claude Code / Claude:** buka folder proyek. File `CLAUDE.md` memberi tahu AI aturan proyek ini.
- **ChatGPT:** tempelkan isi `CLAUDE.md` dan `PRD.md`, lalu minta **satu fitur per kali**. Contoh perintah:
  > "Sesuai CLAUDE.md, buatkan `src/lib/pythagoras.js` beserta tesnya. Lalu buat halaman Beranda sesuai docs/DESAIN_UI_UX.md §4.1."
- Urutan yang disarankan ada di `docs/RENCANA_KERJA.md`.

## Langkah 6 — Upload ke GitHub
1. Buat akun di **https://github.com**.
2. Klik **New repository** → nama: `aplikasi-pembelajaran-tripel-pythagoras-2225250126` → **Public** → Create (jangan centang "Add README").
3. Di terminal (folder proyek):
   ```bash
   git init
   git add .
   git commit -m "Draft awal aplikasi TRIPELIN"
   git branch -M main
   git remote add origin https://github.com/<username>/aplikasi-pembelajaran-tripel-pythagoras-2225250126.git
   git push -u origin main
   ```
   Jika diminta login, ikuti jendela login GitHub yang muncul.
   Jika muncul error *"Please tell me who you are"*, jalankan:
   ```bash
   git config --global user.name "Maila Andira Putri"
   git config --global user.email "emailmu@contoh.com"
   ```
4. Setiap ada perubahan:
   ```bash
   git add .
   git commit -m "Tambah fitur kuis"
   git push
   ```

## Langkah 7 — Online-kan (GitHub Pages)
1. Pastikan `vite.config.js` berisi `base: '/aplikasi-pembelajaran-tripel-pythagoras-2225250126/'` dan file `.github/workflows/deploy.yml` sudah ada (lihat `ARSITEKTUR_TEKNIS.md` §9–10).
2. GitHub → repo → **Settings → Pages → Source: GitHub Actions**.
3. Push. Tunggu ±2 menit (lihat tab **Actions**, tunggu centang hijau).
4. ✅ Buka `https://<username>.github.io/aplikasi-pembelajaran-tripel-pythagoras-2225250126/`.

## Langkah 8 — Pasang di HP Android
1. Buka link aplikasi di **Chrome** HP.
2. Ketuk **⋮** → **Instal aplikasi** / **Tambahkan ke layar utama**.
3. ✅ Ikon TRIPELIN muncul di layar HP. Coba nyalakan mode pesawat: aplikasi tetap bisa dibuka.

## Langkah 9 — Kirim ke dosen
Bagikan dua link:
- Kode: `https://github.com/<username>/aplikasi-pembelajaran-tripel-pythagoras-2225250126`
- Aplikasi: `https://<username>.github.io/aplikasi-pembelajaran-tripel-pythagoras-2225250126/`

## Masalah umum
| Gejala | Solusi |
|---|---|
| Halaman GitHub Pages putih/kosong | Nilai `base` di `vite.config.js` tidak sama dengan nama repo |
| `npm` tidak dikenali | Node.js belum terinstal atau terminal belum dibuka ulang |
| Port 5173 sudah dipakai | Tutup terminal lain yang menjalankan `npm run dev` |
| Tombol "Instal aplikasi" tidak muncul | Buka dari link https (GitHub Pages), bukan dari alamat lokal; ikon 192 & 512 px harus ada |
| Perubahan tidak muncul di HP | Tutup aplikasi lalu buka lagi (service worker memperbarui otomatis) |
