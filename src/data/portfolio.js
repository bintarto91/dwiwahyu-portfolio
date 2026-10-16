// ============================================================
//  PUSAT DATA PORTOFOLIO
//  Cukup edit file ini untuk mengganti seluruh isi website:
//  nama, peran, tentang, proyek, keahlian, dan kontak.
// ============================================================

export const profile = {
  name: "Dwi Wahyu Bintarto Prasetyo, S.Kom",
  initials: "DW",
  role: "Web Developer",
  tagline:
    "Saya membangun website yang cepat, rapi, dan nyaman dipakai — dari desain hingga deploy.",
  location: "Jakarta, Indonesia",
  email: "nama@email.com",
  focus: ["UI rapi", "Performa", "Aksesibilitas"],
  about: [
    "Halo! Saya Dwi Wahyu Bintarto Prasetyo, seorang web developer yang senang mengubah ide menjadi produk digital yang nyata. Fokus saya adalah membangun antarmuka yang bersih, responsif, dan mudah digunakan oleh siapa pun.",
    "Saat ini saya terus memperdalam React, Tailwind CSS, dan ekosistem JavaScript modern. Di luar coding, saya suka mengeksplorasi desain, membaca artikel teknologi, dan mengerjakan proyek sampingan.",
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/usernameanda" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/usernameanda" },
    { label: "Instagram", url: "https://www.instagram.com/usernameanda" },
  ],
};

export const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Kontak", href: "#kontak" },
];

export const stats = [
  { value: "2+", label: "Tahun Belajar & Berkarya" },
  { value: "12+", label: "Proyek Selesai" },
  { value: "5+", label: "Teknologi Dikuasai" },
];

export const projects = [
  {
    title: "Web Toko Online",
    description:
      "Katalog produk dengan keranjang belanja, filter kategori, dan halaman checkout sederhana.",
    tags: ["React", "Tailwind", "Vite"],
    emoji: "🛍️",
    demo: "#",
    repo: "#",
  },
  {
    title: "Aplikasi Catatan",
    description:
      "To-do list dengan penyimpanan lokal, pencarian cepat, dan mode gelap. Fokus pada UX yang minim distraksi.",
    tags: ["React", "LocalStorage"],
    emoji: "📝",
    demo: "#",
    repo: "#",
  },
  {
    title: "Dashboard Cuaca",
    description:
      "Prakiraan cuaca dari API publik, lengkap dengan grafik suhu dan pencarian kota favorit.",
    tags: ["JavaScript", "REST API"],
    emoji: "🌤️",
    demo: "#",
    repo: "#",
  },
  {
    title: "Landing Page Produk",
    description:
      "Halaman promosi responsif dengan animasi scroll, bagian testimoni, dan formulir kontak.",
    tags: ["HTML", "Tailwind"],
    emoji: "🚀",
    demo: "#",
    repo: "#",
  },
  {
    title: "Kalkulator Keuangan",
    description:
      "Simulasi cicilan dan tabungan dengan visualisasi hasil secara real-time.",
    tags: ["React", "Chart"],
    emoji: "💰",
    demo: "#",
    repo: "#",
  },
  {
    title: "Blog Pribadi",
    description:
      "Blog statis dengan artikel markdown, kategori, dan pencarian. Latihan struktur konten yang rapi.",
    tags: ["Next.js", "Markdown"],
    emoji: "✍️",
    demo: "#",
    repo: "#",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    emoji: "🎨",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend & Tools",
    emoji: "🛠️",
    skills: ["Node.js", "Express", "REST API", "Git & GitHub"],
  },
  {
    title: "Sedang Dipelajari",
    emoji: "📚",
    skills: ["TypeScript", "Next.js", "Testing"],
  },
];

export const contactNote =
  "Punya proyek, kolaborasi, atau sekadar ingin menyapa? Kirim pesan lewat email — saya biasanya membalas dalam 1–2 hari.";
