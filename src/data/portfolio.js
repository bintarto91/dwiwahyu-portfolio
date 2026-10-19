// ============================================================
//  PUSAT DATA PORTOFOLIO
//  Cukup edit file ini untuk mengganti seluruh isi website:
//  nama, peran, tentang, pengalaman, proyek, keahlian, kontak.
// ============================================================

export const profile = {
  name: "Dwi Wahyu Bintarto Prasetyo, S.Kom",
  initials: "DW",
  role: "Database Developer & Project Lead",
  tagline:
    "Profesional IT dengan pengalaman lebih dari 11 tahun, berfokus pada arsitektur data — kini memimpin proyek sambil terus belajar dan membantu pengembangan frontend & backend.",
  location: "Bandung, Indonesia",
  email: "dwahyu47@gmail.com",
  focus: ["Arsitektur Data", "Project Lead", "FE & BE"],
  about: [
    "Halo! Saya Dwi — profesional IT dengan pengalaman lebih dari 11 tahun. Perjalanan karier saya dimulai sebagai system analyst, berlanjut ke IT support, data center, dan PIC database, hingga kini sebagai database developer sekaligus project lead.",
    "Sehari-hari saya banyak berkutat dengan sistem layanan kesehatan: SIMRS, aplikasi berbasis ERP, aplikasi keperawatan, hingga telemedicine. Berfokus pada arsitektur data, saya juga memimpin jalannya proyek dan turut membantu pengembangan frontend & backend.",
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
  { value: "11+", label: "Tahun Pengalaman IT" },
  { value: "3", label: "Perusahaan Tempat Berkarier" },
  { value: "7+", label: "Proyek Dikerjakan" },
];

// Riwayat karier, urut dari yang terbaru.
export const experiences = [
  {
    period: "Jul 2018 – Sekarang",
    role: "Database Developer & Project Lead",
    company: "PT Swamedia Informatika",
    location: "Bandung · Hybrid",
    description:
      "Menangani arsitektur dan pengelolaan database sekaligus memimpin jalannya proyek — dari perencanaan, koordinasi tim, hingga rilis, serta turut membantu pengembangan frontend & backend.",
    tags: ["Database", "Project Lead", "FE & BE"],
  },
  {
    period: "Jan 2015 – Jul 2018",
    role: "Staff IT, Data Center & PIC Database",
    company: "PT Tirta Utama Abadi",
    location: "Bandung · Hybrid",
    description:
      "Mengoptimalkan keandalan infrastruktur IT perusahaan melalui pemantauan sistem proaktif, sekaligus menjadi penanggung jawab database.",
    tags: ["Infrastruktur IT", "Data Center", "Database"],
  },
  {
    period: "Feb 2014 – Agu 2014",
    role: "System Analyst",
    company: "Jasamedika Saranatama",
    location: "Bandung · On-site",
    description:
      "Menerjemahkan kebutuhan bisnis yang kompleks menjadi spesifikasi teknis, serta menjalankan operasional site aplikasi SIMRS.",
    tags: ["Analisis Sistem", "SIMRS"],
  },
];

export const projects = [
  {
    category: "Pribadi",
    title: "NersCare ICU",
    description:
      "Aplikasi asuhan keperawatan untuk unit ICU — membantu perawat mencatat dan memantau kondisi pasien secara terstruktur.",
    tags: ["Laravel", "PHP", "Aplikasi Kesehatan"],
    emoji: "🏥",
    demo: "#",
    repo: "https://github.com/bintarto91/nerscare-icu",
  },
  {
    category: "Pribadi",
    title: "SDEW Screening Risk",
    description:
      "Aplikasi skrining risiko kesehatan untuk membantu deteksi dini faktor risiko pasien.",
    tags: ["Aplikasi Kesehatan", "Skrining"],
    emoji: "🩺",
    demo: "#",
    repo: "#",
  },
  {
    category: "Pribadi",
    title: "TNC Teleheart Nursing Care",
    description:
      "Platform layanan teleheart nursing care — menghubungkan perawat dan pasien secara digital untuk pemantauan jarak jauh.",
    tags: ["Telehealth", "Web App"],
    emoji: "❤️",
    demo: "#",
    repo: "#",
  },
  {
    category: "Pribadi",
    title: "Web Rukun Warga",
    description:
      "Website untuk kebutuhan administrasi dan informasi lingkungan Rukun Warga.",
    tags: ["PHP", "Website", "Komunitas"],
    emoji: "🏘️",
    demo: "#",
    repo: "https://github.com/bintarto91/RW05",
  },
  {
    category: "Kantor",
    title: "Aplikasi ERP KB/GB & Non-KB/GB",
    description:
      "Aplikasi berbasis ERP untuk pengelolaan layanan program KB/GB dan non-KB/GB.",
    tags: ["ERP", "Enterprise"],
    emoji: "🏢",
    demo: "#",
    repo: "#",
  },
  {
    category: "Kantor",
    title: "Aplikasi Distribusi & Inventory",
    description:
      "Sistem distribusi dan inventory untuk mengelola stok serta alur barang secara terpusat.",
    tags: ["Inventory", "Distribusi"],
    emoji: "📦",
    demo: "#",
    repo: "#",
  },
  {
    category: "Kantor",
    title: "Operator Site Aplikasi SIMRS",
    description:
      "Menjalankan dan mendampingi operasional aplikasi SIMRS (Sistem Informasi Manajemen Rumah Sakit).",
    tags: ["SIMRS", "System Analyst"],
    emoji: "🖥️",
    demo: "#",
    repo: "#",
  },
];

export const skillGroups = [
  {
    title: "Data & Database",
    emoji: "🗄️",
    skills: ["SQL", "Desain Database", "Arsitektur Data", "Backup & Recovery"],
  },
  {
    title: "Kepemimpinan & Analisis",
    emoji: "🧭",
    skills: [
      "Project Lead",
      "Koordinasi Tim",
      "Analisis Kebutuhan Bisnis",
      "Dokumentasi",
    ],
  },
  {
    title: "Aplikasi & Infrastruktur",
    emoji: "🖥️",
    skills: ["ERP", "SIMRS", "Data Center", "Troubleshooting"],
  },
  {
    title: "Web Development",
    emoji: "🌐",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "Git & GitHub"],
  },
];

export const contactNote =
  "Punya proyek, kolaborasi, atau sekadar ingin menyapa? Kirim pesan lewat email — saya biasanya membalas dalam 1–2 hari.";
