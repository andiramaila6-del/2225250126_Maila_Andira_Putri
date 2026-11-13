import { useState } from 'react'
import './App.css'

const menu = [
  { icon: '📚', judul: 'Materi', deskripsi: 'Pelajari Tripel Pythagoras', halaman: 'materi' },
  { icon: '✏️', judul: 'Latihan', deskripsi: 'Asah kemampuanmu', halaman: 'latihan' },
  { icon: '🎮', judul: 'Game', deskripsi: 'Belajar sambil bermain', halaman: 'game' },
  { icon: '🏆', judul: 'Kuis', deskripsi: 'Uji pemahamanmu', halaman: 'kuis' },
]

const daftarMateri = [
  {
    judul: 'Mengingat Kembali Kuadrat dan Akar Kuadrat',
    isi: 'Kuadrat adalah perkalian suatu bilangan dengan dirinya sendiri. Akar kuadrat merupakan kebalikan dari operasi kuadrat.',
    contoh: '6² = 6 × 6 = 36',
    tambahan: '√36 = 6',
    ilustrasi: '🔢',
  },
  {
    judul: 'Mengenal Segitiga Siku-Siku',
    isi: 'Segitiga siku-siku adalah segitiga yang memiliki satu sudut sebesar 90°. Sisi terpanjang yang berada di depan sudut siku-siku disebut sisi miring atau hipotenusa.',
    contoh: 'Sisi siku-siku: a dan b',
    tambahan: 'Sisi miring: c',
    ilustrasi: '📐',
  },
  {
    judul: 'Memahami Teorema Pythagoras',
    isi: 'Teorema Pythagoras menjelaskan hubungan antara ketiga sisi segitiga siku-siku. Kuadrat sisi miring sama dengan jumlah kuadrat kedua sisi lainnya.',
    contoh: 'c² = a² + b²',
    tambahan: 'Jika mencari sisi siku-siku: a² = c² − b²',
    ilustrasi: '📏',
  },
  {
    judul: 'Mengenal Tripel Pythagoras',
    isi: 'Tripel Pythagoras adalah tiga bilangan asli yang memenuhi persamaan a² + b² = c². Bilangan terbesar menjadi sisi miring.',
    contoh: '3² + 4² = 5²',
    tambahan: '9 + 16 = 25, jadi (3, 4, 5) adalah Tripel Pythagoras.',
    ilustrasi: '🔺',
  },
  {
    judul: 'Pola dan Kelipatan Tripel Pythagoras',
    isi: 'Tripel Pythagoras dapat diperoleh dengan mengalikan ketiga bilangan suatu tripel dengan bilangan yang sama.',
    contoh: '(3, 4, 5) × 2',
    tambahan: 'Menghasilkan (6, 8, 10), yang juga merupakan Tripel Pythagoras.',
    ilustrasi: '🔍',
  },
  {
    judul: 'Penerapan dalam Kehidupan Sehari-hari',
    isi: 'Teorema Pythagoras dapat digunakan untuk menghitung panjang diagonal, jarak, atau tinggi dalam berbagai situasi sehari-hari.',
    contoh: 'Tangga bersandar pada dinding.',
    tambahan: 'Jika jarak kaki tangga ke dinding 3 m dan tinggi yang dicapai 4 m, panjang tangga adalah 5 m.',
    ilustrasi: '🪜',
  },
]

const soalLatihan = [
  {
    level: 1,
    judul: 'Mengenal Tripel Pythagoras',
    pertanyaan: 'Apakah (3, 4, 5) merupakan Tripel Pythagoras?',
    pilihan: ['Ya', 'Tidak'],
    jawaban: 'Ya',
    pembahasan: '3² + 4² = 9 + 16 = 25 dan 5² = 25. Jadi, benar merupakan Tripel Pythagoras.',
  },
  {
    level: 1,
    judul: 'Menghitung Kuadrat',
    pertanyaan: 'Berapakah hasil dari 6²?',
    pilihan: ['12', '36', '18', '64'],
    jawaban: '36',
    pembahasan: '6² berarti 6 × 6 = 36, bukan 6 × 2.',
  },
  {
    level: 2,
    judul: 'Menentukan Sisi Miring',
    pertanyaan: 'Jika sisi siku-siku suatu segitiga adalah 3 cm dan 4 cm, berapakah sisi miringnya?',
    pilihan: ['5 cm', '6 cm', '7 cm', '8 cm'],
    jawaban: '5 cm',
    pembahasan: 'c² = 3² + 4² = 9 + 16 = 25. Jadi, c = √25 = 5 cm.',
  },
  {
    level: 2,
    judul: 'Menentukan Sisi Siku-Siku',
    pertanyaan: 'Sisi miring segitiga 13 cm dan salah satu sisi siku-sikunya 5 cm. Berapa sisi lainnya?',
    pilihan: ['8 cm', '10 cm', '12 cm', '15 cm'],
    jawaban: '12 cm',
    pembahasan: 'a² = 13² − 5² = 169 − 25 = 144. Jadi, a = √144 = 12 cm.',
  },
  {
    level: 3,
    judul: 'Penerapan dalam Kehidupan',
    pertanyaan: 'Sebuah tangga bersandar pada dinding. Jarak kaki tangga ke dinding 3 m dan tinggi ujung tangga 4 m. Berapa panjang tangga?',
    pilihan: ['3 m', '4 m', '5 m', '7 m'],
    jawaban: '5 m',
    pembahasan: 'Diketahui sisi siku-siku 3 m dan 4 m. Ditanya sisi miring. c² = 3² + 4² = 25, sehingga c = 5 m.',
  },
]
const rondeGame = [
  {
    angka: [3, 4, 5, 6, 7, 8, 9, 10, 12],
    jawaban: [3, 4, 5],
  },
  {
    angka: [5, 12, 13, 4, 6, 9, 10, 11, 14],
    jawaban: [5, 12, 13],
  },
  {
    angka: [8, 15, 17, 6, 7, 10, 12, 14, 16],
    jawaban: [8, 15, 17],
  },
]

const soalKuis = [
  {
    pertanyaan: 'Berapakah hasil dari 7²?',
    pilihan: ['14', '42', '49', '56'],
    jawaban: '49',
    pembahasan: '7² = 7 × 7 = 49.',
  },
  {
    pertanyaan: 'Manakah yang merupakan Tripel Pythagoras?',
    pilihan: ['2, 3, 4', '3, 4, 5', '4, 5, 6', '5, 6, 7'],
    jawaban: '3, 4, 5',
    pembahasan: '3² + 4² = 9 + 16 = 25 = 5².',
  },
  {
    pertanyaan: 'Sisi siku-siku segitiga adalah 6 cm dan 8 cm. Berapa sisi miringnya?',
    pilihan: ['9 cm', '10 cm', '12 cm', '14 cm'],
    jawaban: '10 cm',
    pembahasan: 'c² = 6² + 8² = 36 + 64 = 100, sehingga c = 10 cm.',
  },
  {
    pertanyaan: 'Sisi miring segitiga 13 cm dan salah satu sisi siku-sikunya 5 cm. Berapa sisi lainnya?',
    pilihan: ['8 cm', '10 cm', '12 cm', '15 cm'],
    jawaban: '12 cm',
    pembahasan: 'a² = 13² − 5² = 169 − 25 = 144, sehingga a = 12 cm.',
  },
  {
    pertanyaan: 'Sebuah tangga panjangnya 13 m dan jarak kaki tangga ke dinding 5 m. Berapa tinggi ujung tangga pada dinding?',
    pilihan: ['8 m', '10 m', '12 m', '15 m'],
    jawaban: '12 m',
    pembahasan: 'b² = 13² − 5² = 144, sehingga b = 12 m.',
  },
]

function App() {
  const [nama, setNama] = useState('')
  const [halaman, setHalaman] = useState('home')
  const [topik, setTopik] = useState(0)
  const [level, setLevel] = useState(1)
  const [nomorSoal, setNomorSoal] = useState(0)
  const [jawaban, setJawaban] = useState('')
  const [hasil, setHasil] = useState('')
  const [skor, setSkor] = useState(0)
  const [rondeAktif, setRondeAktif] = useState(0)
  const [pilihanGame, setPilihanGame] = useState([])
  const [hasilGame, setHasilGame] = useState('')
  const [skorGame, setSkorGame] = useState(0)
  const [gameSelesai, setGameSelesai] = useState(false)
const [nomorKuis, setNomorKuis] = useState(0)
const [jawabanKuis, setJawabanKuis] = useState('')
const [hasilKuis, setHasilKuis] = useState('')
const [skorKuis, setSkorKuis] = useState(0)
const [kuisSelesai, setKuisSelesai] = useState(false)
const [sudahDiperiksa, setSudahDiperiksa] = useState(false)

  function bukaMateri() {
    setTopik(0)
    setHalaman('materi')
  }

  function bukaLatihan() {
    setLevel(1)
    setNomorSoal(0)
    setJawaban('')
    setHasil('')
    setHalaman('latihan')
  }

  function kembaliHome() {
    setHalaman('home')
  }

function mulaiKuis() {
  setNomorKuis(0)
  setJawabanKuis('')
  setHasilKuis('')
  setSkorKuis(0)
  setKuisSelesai(false)
  setSudahDiperiksa(false)
  setHalaman('kuis')
}

function periksaKuis() {
  if (!jawabanKuis) {
    setHasilKuis('Pilih jawaban terlebih dahulu.')
    return
  }

  if (sudahDiperiksa) return

  const soal = soalKuis[nomorKuis]
  const benar = jawabanKuis === soal.jawaban

  if (benar) {
    setSkorKuis((nilai) => nilai + 1)
    setHasilKuis('Benar! 🎉 ' + soal.pembahasan)
  } else {
    setHasilKuis('Belum tepat. ' + soal.pembahasan)
  }

  setSudahDiperiksa(true)
}

function lanjutKuis() {
  if (nomorKuis < soalKuis.length - 1) {
    setNomorKuis((nomor) => nomor + 1)
    setJawabanKuis('')
    setHasilKuis('')
    setSudahDiperiksa(false)
  } else {
    setKuisSelesai(true)
  }
}

  function mulaiGame() {
  setRondeAktif(0)
  setPilihanGame([])
  setHasilGame('')
  setSkorGame(0)
  setGameSelesai(false)
  setHalaman('game')
}

function pilihAngka(angka) {
  if (hasilGame) return

  if (pilihanGame.includes(angka)) {
    setPilihanGame(pilihanGame.filter((item) => item !== angka))
  } else if (pilihanGame.length < 3) {
    setPilihanGame([...pilihanGame, angka])
  }
}

function periksaGame() {
  if (pilihanGame.length !== 3) {
    setHasilGame('Pilih tepat 3 angka terlebih dahulu.')
    return
  }

  const jawabanBenar = rondeGame[rondeAktif].jawaban
  const benar = jawabanBenar.every((angka) =>
    pilihanGame.includes(angka)
  )

if (benar) {
  setHasilGame('Benar! 🎉 Kamu menemukan Tripel Pythagoras!')
  setSkorGame((nilai) => nilai + 1)
} else {
  setHasilGame('Belum tepat. Coba lagi, ya! Perhatikan hubungan a² + b² = c².')
}
}

function lanjutRonde() {
  if (rondeAktif < rondeGame.length - 1) {
    setRondeAktif(rondeAktif + 1)
    setPilihanGame([])
    setHasilGame('')
  } else {
    setGameSelesai(true)
  }
}

  if (halaman === 'materi') {
    const materi = daftarMateri[topik]

    return (
      <main className="container">
        <button className="back-button" onClick={kembaliHome}>
          ← Kembali ke Beranda
        </button>

        <section className="materi-header">
          <span className="tag">MATERI PEMBELAJARAN</span>
          <h1>Tripel Pythagoras</h1>
          <p>Pelajari setiap topik secara bertahap, ya!</p>
        </section>

        <section className="materi-progress">
          <span>Topik {topik + 1} dari {daftarMateri.length}</span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((topik + 1) / daftarMateri.length) * 100}%` }}
            />
          </div>
        </section>

        <section className="materi-card">
          <div className="materi-illustration">{materi.ilustrasi}</div>
          <span className="materi-label">TOPIK {topik + 1}</span>
          <h2>{materi.judul}</h2>
          <p>{materi.isi}</p>

          <div className="contoh-box">
            <strong>Contoh:</strong>
            <p>{materi.contoh}</p>
            <p>{materi.tambahan}</p>
          </div>
        </section>

        <section className="materi-navigation">
          <button
            className="back-button"
            onClick={() => setTopik(topik - 1)}
            disabled={topik === 0}
          >
            ← Sebelumnya
          </button>

          {topik < daftarMateri.length - 1 ? (
            <button
              className="next-button"
              onClick={() => setTopik(topik + 1)}
            >
              Berikutnya →
            </button>
          ) : (
            <button className="next-button" onClick={kembaliHome}>
              Selesai ✓
            </button>
          )}
        </section>

        <section className="daftar-topik">
          <h3>Daftar Topik</h3>
          {daftarMateri.map((item, index) => (
            <button
              key={index}
              className={`topik-item ${topik === index ? 'aktif' : ''}`}
              onClick={() => setTopik(index)}
            >
              <span>{index + 1}. {item.judul}</span>
              <span>→</span>
            </button>
          ))}
        </section>
      </main>
    )
  }

  if (halaman === 'latihan') {
    const soal = soalLatihan.filter((item) => item.level === level)
    const soalAktif = soal[nomorSoal]

    return (
      <main className="container">
        <button className="back-button" onClick={kembaliHome}>
          ← Kembali
        </button>

        <section className="welcome-card">
          <h1>Latihan Tripel Pythagoras</h1>
          <p>Kerjakan soal sesuai level kemampuanmu.</p>
        </section>

        <section className="materi-card">
          <h2>Pilih Level</h2>
          <div className="materi-navigation">
            {[1, 2, 3].map((item) => (
              <button
                key={item}
                className="next-button"
                onClick={() => {
                  setLevel(item)
                  setNomorSoal(0)
                  setJawaban('')
                  setHasil('')
                }}
              >
                Level {item}
              </button>
            ))}
          </div>

          <h3>{soalAktif.judul}</h3>
          <p>{soalAktif.pertanyaan}</p>

          {soalAktif.pilihan.map((pilihan) => (
            <button
              key={pilihan}
              className="topik-item"
              onClick={() => {
                setJawaban(pilihan)
                setHasil('')
              }}
            >
              {jawaban === pilihan ? '🔘' : '⚪'} {pilihan}
            </button>
          ))}

          <button
            className="next-button"
            onClick={() => {
              if (!jawaban) {
                setHasil('Pilih jawaban terlebih dahulu.')
                return
              }

              if (jawaban === soalAktif.jawaban) {
                setHasil('Benar! 🎉 ' + soalAktif.pembahasan)
                setSkor((nilai) => nilai + 1)
              } else {
                setHasil('Belum tepat. ' + soalAktif.pembahasan)
              }
            }}
          >
            Periksa Jawaban
          </button>

          {hasil && <p>{hasil}</p>}

          <p>Soal {nomorSoal + 1} dari {soal.length}</p>

          <button
            className="next-button"
            onClick={() => {
              setNomorSoal((nomor) => (nomor + 1) % soal.length)
              setJawaban('')
              setHasil('')
            }}
          >
            Soal Berikutnya →
          </button>

          <p>Jawaban benar: {skor}</p>
        </section>
      </main>
    )
  }

  if (halaman === 'game') {
  const ronde = rondeGame[rondeAktif]

  return (
    <main className="container">
      <button className="back-button" onClick={kembaliHome}>
        ← Kembali ke Beranda
      </button>

      <section className="welcome-card">
        <h1>🎯 Pemburu Tripel</h1>
        <p>Pilih 3 angka yang membentuk Tripel Pythagoras!</p>
      </section>

      {gameSelesai ? (
        <section className="materi-card">
          <h2>Permainan Selesai! 🎉</h2>
          <h3>Skor kamu: {skorGame} dari 3</h3>
          <p>
            {'⭐'.repeat(skorGame)}
            {'☆'.repeat(3 - skorGame)}
          </p>
          <p>
            {skorGame === 3
              ? 'Hebat! Kamu berhasil menemukan semua tripel!'
              : 'Bagus! Terus berlatih agar semakin mahir.'}
          </p>
          <button className="next-button" onClick={mulaiGame}>
            Main Lagi
          </button>
        </section>
      ) : (
        <section className="materi-card">
          <h2>Ronde {rondeAktif + 1} dari 3</h2>
          <p>Pilih tepat 3 angka yang merupakan Tripel Pythagoras.</p>
          <p>Angka dipilih: {pilihanGame.length} dari 3</p>

          <div className="game-grid">
            {ronde.angka.map((angka) => (
              <button
                key={angka}
                className={`game-number ${
                  pilihanGame.includes(angka) ? 'game-selected' : ''
                }`}
                onClick={() => pilihAngka(angka)}
              >
                {angka}
              </button>
            ))}
          </div>

          {!hasilGame && (
            <button className="next-button" onClick={periksaGame}>
              Periksa Pilihan
            </button>
          )}

          {hasilGame && <p>{hasilGame}</p>}

{hasilGame.startsWith('Belum tepat') && (
  <button
    className="next-button"
    onClick={() => setHasilGame('')}
  >
    Coba Lagi
  </button>
)}
{hasilGame.startsWith('Benar!') && (
  <button className="next-button" onClick={lanjutRonde}>
    {rondeAktif < rondeGame.length - 1
      ? 'Lanjut Ronde →'
      : 'Lihat Hasil →'}
  </button>
)}
</section>
      )}
    </main>
  )
}

if (halaman === 'kuis') {
  const soal = soalKuis[nomorKuis]
  const nilaiAkhir = skorKuis * 20

  return (
    <main className="container">
      <button className="back-button" onClick={kembaliHome}>
        ← Kembali ke Beranda
      </button>

      <section className="welcome-card">
        <h1>🏆 Kuis Tripel Pythagoras</h1>
        <p>Uji pemahamanmu melalui 5 soal.</p>
      </section>

      {kuisSelesai ? (
        <section className="materi-card">
          <h2>Kuis Selesai! 🎉</h2>
          <h3>Nilai Akhir: {nilaiAkhir}</h3>
          <p>Jawaban benar: {skorKuis} dari {soalKuis.length}</p>
          <p>
            {nilaiAkhir >= 80
              ? 'Hebat! Pemahamanmu sangat baik.'
              : nilaiAkhir >= 60
              ? 'Bagus! Terus berlatih, ya.'
              : 'Jangan menyerah. Pelajari kembali materi dan coba lagi.'}
          </p>
          <button className="next-button" onClick={mulaiKuis}>
            Ulangi Kuis
          </button>
        </section>
      ) : (
        <section className="materi-card">
          <span className="materi-label">
            SOAL {nomorKuis + 1} DARI {soalKuis.length}
          </span>
          <h2>{soal.pertanyaan}</h2>

          {soal.pilihan.map((pilihan) => (
            <button
              key={pilihan}
              className={`topik-item ${jawabanKuis === pilihan ? 'aktif' : ''}`}
              onClick={() => {
                if (!sudahDiperiksa) {
                  setJawabanKuis(pilihan)
                  setHasilKuis('')
                }
              }}
              disabled={sudahDiperiksa}
            >
              {jawabanKuis === pilihan ? '🔘' : '⚪'} {pilihan}
            </button>
          ))}

          <button
            className="next-button"
            onClick={periksaKuis}
            disabled={sudahDiperiksa}
          >
            Periksa Jawaban
          </button>

          {hasilKuis && <p>{hasilKuis}</p>}

          {sudahDiperiksa && (
            <button className="next-button" onClick={lanjutKuis}>
              {nomorKuis < soalKuis.length - 1
                ? 'Soal Berikutnya →'
                : 'Lihat Nilai →'}
            </button>
          )}
        </section>
      )}
    </main>
  )
}

  if (halaman !== 'home') {
    return (
      <main className="container">
        <button className="back-button" onClick={kembaliHome}>
          ← Kembali
        </button>
        <section className="welcome-card">
          <h1>{menu.find((item) => item.halaman === halaman)?.judul}</h1>
          <p>Fitur ini sedang kita siapkan. Nantikan ya!</p>
        </section>
      </main>
    )
  }

  return (
    <main className="container">
      <header className="header">
        <div className="brand">
          <span className="brand-icon">📐</span>
          <span>TRIPELIN</span>
        </div>
        <span className="header-label">Belajar Matematika</span>
      </header>

      <section className="welcome-card">
        <div className="welcome-text">
          <span className="tag">YUK, BELAJAR!</span>
          <h1>Halo, {nama || 'teman belajar'}! 👋</h1>
          <p>
            Kenali pola angka dan kuasai Tripel Pythagoras
            dengan cara yang menyenangkan.
          </p>
        </div>
        <div className="triangle-illustration">
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </section>

      <section className="name-section">
        <label htmlFor="nama">Siapa namamu?</label>
        <input
          id="nama"
          type="text"
          placeholder="Masukkan nama panggilan..."
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </section>

      <section className="menu-section">
        <div className="section-heading">
          <h2>Mau belajar apa hari ini?</h2>
          <p>Pilih kegiatan belajarmu</p>
        </div>

        <div className="menu-grid">
          {menu.map((item) => (
            <button
              className="menu-card"
              key={item.halaman}
              onClick={() => {
                if (item.halaman === 'materi') {
  bukaMateri()
} else if (item.halaman === 'latihan') {
  bukaLatihan()
} else if (item.halaman === 'game') {
  mulaiGame()
} else if (item.halaman === 'kuis') {
  mulaiKuis()
}
              }}
            >
              <span className="menu-icon">{item.icon}</span>
              <strong>{item.judul}</strong>
              <small>{item.deskripsi}</small>
              <span className="menu-arrow">→</span>
            </button>
          ))}
        </div>
      </section>

      <section className="progress-card">
        <div>
          <h2>Progres Belajarmu</h2>
          <p>Mulai perjalanan belajarmu sekarang!</p>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" />
        </div>
        <small>0% selesai</small>
      </section>

      <footer>
        <p>TRIPELIN © 2026</p>
        <span>Belajar Tripel Pythagoras jadi lebih mudah.</span>
      </footer>
    </main>
  )
}


export default App