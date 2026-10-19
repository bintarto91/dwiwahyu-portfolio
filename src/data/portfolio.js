// ============================================================
//  PUSAT DATA PORTOFOLIO
//  Cukup edit file ini untuk mengganti seluruh isi website:
//  nama, peran, tentang, pengalaman, proyek, keahlian, kontak.
// ============================================================

export const profile = {
  name: "Dwi Wahyu Bintarto Prasetyo, S.Kom",
  initials: "DW",
  role: "Project Leader",
  tagline:
    "Perjalanan saya di dunia IT mencakup analisis sistem, dukungan teknis, data, dan database — kini memimpin proyek sambil terus belajar dan membantu pengembangan frontend & backend.",
  location: "Jakarta, Indonesia",
  email: "dwahyu47@gmail.com",
  focus: ["Database", "Project Management", "Frontend & Backend"],
  about: [
    "Halo! Saya Dwi — perjalanan karier saya di dunia IT dimulai sebagai system analyst, lalu berlanjut ke IT support, staff data, PIC database, dan database administrator (DBA). Saat ini saya dipercaya memimpin proyek sebagai project leader.",
    "Meski latar belakang saya kuat di data dan database, saya aktif belajar dan turun tangan membantu pengembangan frontend dan backend. Bagi saya, cara terbaik berkembang di IT adalah terus mau mencoba hal baru.",
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/bintarto91" },
    // Kirim link-nya kalau sudah ada, nanti ditambahkan:
    // { label: "LinkedIn", url: "https://www.linkedin.com/in/..." },
    // { label: "Instagram", url: "https://www.instagram.com/..." },
  ],
};

export const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Proyek", href: "#proyek" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Kontak", href: "#kontak" },
];

export const stats = [
  { value: "2+", label: "Tahun Belajar & Berkarya" },
  { value: "12+", label: "Proyek Selesai" },
  { value: "5+", label: "Teknologi Dikuasai" },
];

// Riwayat karier, urut dari yang terbaru.
// Nama perusahaan & periode akan diisi setelah Anda mengirim datanya.
export const experiences = [
  {
    period: "Saat ini",
    role: "Project Leader",
    company: "Nama Perusahaan",
    description:
      "Memimpin jalannya proyek — dari perencanaan, koordinasi tim, hingga rilis. Turut membantu pengembangan frontend dan backend.",
    tags: ["Leadership", "Koordinasi Tim"],
  },
  {
    period: "20xx – 20xx",
    role: "Database Administrator (DBA)",
    company: "Nama Perusahaan",
    description:
      "Mengelola dan memelihara database perusahaan: desain, backup, hingga menjaga performa tetap optimal.",
    tags: ["Database", "Backup & Recovery"],
  },
  {
    period: "20xx – 20xx",
    role: "PIC Database",
    company: "Nama Perusahaan",
    description:
      "Penanggung jawab utama database — memastikan data selalu tersedia, aman, dan konsisten untuk kebutuhan operasional.",
    tags: ["Database", "Operasional"],
  },
  {
    period: "20xx – 20xx",
    role: "Staff Data",
    company: "Nama Perusahaan",
    description:
      "Mengolah dan menyiapkan data untuk kebutuhan operasional perusahaan serta laporan.",
    tags: ["Pengolahan Data", "Laporan"],
  },
  {
    period: "20xx – 20xx",
    role: "IT Support",
    company: "Nama Perusahaan",
    description:
      "Dukungan teknis harian untuk pengguna: perangkat, software, dan jaringan.",
    tags: ["Troubleshooting", "Helpdesk"],
  },
  {
    period: "20xx",
    role: "System Analyst",
    company: "Nama Perusahaan",
    description:
      "Menganalisis kebutuhan sistem dan menerjemahkannya menjadi solusi teknis yang tepat.",
    tags: ["Analisis Sistem", "Dokumentasi"],
  },
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
    title: "Data & Database",
    emoji: "🗄️",
    skills: ["SQL", "Desain Database", "Backup & Recovery", "Pengelolaan Data"],
  },
  {
    title: "Manajemen & Tools",
    emoji: "🧭",
    skills: ["Project Management", "Koordinasi Tim", "Git & GitHub"],
  },
  {
    title: "Web Development",
    emoji: "🌐",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
];

export const contactNote =
  "Punya proyek, kolaborasi, atau sekadar ingin menyapa? Kirim pesan lewat email — saya biasanya membalas dalam 1–2 hari.";
