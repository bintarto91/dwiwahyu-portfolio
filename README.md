# Portofolio — Dwi Wahyu Bintarto Prasetyo, S.Kom

Website portofolio pribadi.
Dibangun dengan **React 19 + Vite 8 + Tailwind CSS 4**.

🌐 **Live:** https://portfolio-brown-six-tnq7e82s1v.vercel.app

## Menjalankan di komputer

```powershell
npm install
npm run dev        # lalu buka http://localhost:5173
```

## Mengubah isi konten

Semua teks dipusatkan di satu file: **`src/data/portfolio.js`**

| Bagian | Isi |
|--------|-----|
| `profile` | nama, peran, tagline, tentang, lokasi, email, sosial media |
| `stats` | angka statistik di hero |
| `experiences` | riwayat pengalaman kerja (timeline) |
| `projects` | daftar proyek (kategori, deskripsi, tag, link) |
| `skillGroups` | grup keahlian |
| `navLinks` | menu navigasi |

## Build & deploy

```powershell
npm run build              # hasil build ada di folder dist/
npx vercel --prod --yes    # deploy ulang ke Vercel (setelah edit konten)
```

## Struktur folder

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx     # timeline pengalaman kerja
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Reveal.jsx         # pembungkus animasi scroll
│   └── SectionHeading.jsx
├── data/
│   └── portfolio.js       # ⬅ SEMUA KONTEN DI SINI
├── hooks/
│   └── useReveal.js
├── App.jsx
├── index.css
└── main.jsx
```

## Warna & tema

Tema diatur di `src/index.css` bagian `@theme`:

```css
--color-accent: #38bdf8;   /* biru langit */
--color-accent-2: #60a5fa; /* biru */
```
