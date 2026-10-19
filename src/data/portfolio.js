// ============================================================
//  PUSAT DATA PORTOFOLIO
//  Cukup edit file ini untuk mengganti seluruh isi website:
//  nama, peran, tentang, pengalaman, proyek, keahlian, kontak.
// ============================================================

export const profile = {
  name: "Dwi Wahyu Bintarto Prasetyo",
  formalName: "Dwi Wahyu Bintarto Prasetyo, S.Kom",
  initials: "DW",
  role: "Database Developer & Project Lead",
  tagline:
    "Profesional IT dengan pengalaman lebih dari 11 tahun, berfokus pada arsitektur data — kini memimpin proyek sambil terus belajar dan membantu pengembangan frontend & backend.",
  location: "Bandung, Indonesia",
  email: "dwahyu47@gmail.com",
  // Foto profil: simpan file foto di folder "public", pakai nama foto-profil.jpg
  // (mis. public/foto-profil.jpg). Kosongkan ("") kalau belum ada foto.
  photo: "/foto-profil.jpg",
  focus: ["Arsitektur Data", "Project Lead", "FE & BE"],
  about: [
    "Halo! Saya Dwi — profesional IT dengan pengalaman lebih dari 11 tahun. Perjalanan karier saya dimulai sebagai system analyst, berlanjut ke IT support, data center, dan PIC database, hingga kini sebagai database developer sekaligus project lead.",
    "Sehari-hari saya banyak berkutat dengan sistem layanan kesehatan: SIMRS, aplikasi berbasis ERP, aplikasi keperawatan, hingga telemedicine. Berfokus pada arsitektur data, saya juga memimpin jalannya proyek dan turut membantu pengembangan frontend & backend.",
  ],
  socials: [
    { label: "GitHub", url: "https://github.com/bintarto91" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/dwi-wahyu-bintarto-prasetyo/",
    },
    // Kirim link-nya kalau sudah ada, nanti ditambahkan:
    // { label: "Instagram", url: "https://www.instagram.com/..." },
  ],
};

export const navLinks = [
  { label: "Tentang", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Pendidikan", href: "#pendidikan" },
  { label: "Kontak", href: "#kontak" },
];

export const stats = [
  { value: "11+", label: "Tahun Pengalaman IT" },
  { value: "3", label: "Perusahaan Tempat Berkarier" },
  { value: "9+", label: "Sistem Enterprise / Kritis" },
];

// Riwayat karier, urut dari yang terbaru.
export const experiences = [
  {
    period: "Jul 2018 – Sekarang",
    role: "Database Developer & Project Lead",
    company: "PT Swamedia Informatika",
    companyDescription:
      "Perusahaan Computer Systems Design Services (konsultan TI & software house) yang berbasis di Bandung.",
    location: "Bandung · Hybrid",
    description:
      "Menangani arsitektur dan pengelolaan database sekaligus memimpin jalannya proyek — dari perencanaan, koordinasi tim, hingga rilis, serta turut membantu pengembangan frontend & backend.",
    tags: ["Database", "Project Lead", "FE & BE"],
  },
  {
    period: "Jan 2015 – Jul 2018",
    role: "Staff IT, Data Center & PIC Database",
    company: "PT Tirta Utama Abadi",
    companyDescription:
      "Perusahaan distributor resmi air mineral dan beverage produksi DANONE (AQUA, Vit, Mizone) untuk wilayah Jawa Barat.",
    location: "Bandung · Hybrid",
    description:
      "Mengoptimalkan keandalan infrastruktur IT perusahaan melalui pemantauan sistem proaktif, sekaligus menjadi penanggung jawab database.",
    tags: ["Infrastruktur IT", "Data Center", "Database"],
  },
  {
    period: "Feb 2014 – Agu 2014",
    role: "System Analyst",
    company: "Jasamedika Saranatama",
    companyDescription:
      "Perusahaan IT pengembang software medis dan penyedia layanan Sistem Informasi Manajemen Rumah Sakit (SIMRS).",
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
      "Aplikasi asuhan keperawatan untuk unit ICU — membantu perawat mencatat dan memantau kondisi pasien secara terstruktur. Dipakai oleh rumah sakit untuk standarisasi dokumentasi keperawatan kritis.",
    impact:
      "Mempercepat alur dokumentasi keperawatan ICU secara real-time dan terstruktur.",
    tags: ["Laravel", "PHP", "Aplikasi Kesehatan"],
    emoji: "🏥",
    demo: "https://nerscare-icu.com",
    repo: "https://github.com/bintarto91/nerscare-icu",
    image: "/nerscare-ss.jpg",
    featured: true,
  },
  {
    category: "Pribadi",
    title: "SDEW Screening Risk",
    description:
      "Aplikasi skrining risiko kesehatan untuk membantu deteksi dini faktor risiko pasien. Online di sdew-screeningrisk.com — digunakan untuk triase awal pasien.",
    impact:
      "Aplikasi skrining risiko kesehatan digital untuk deteksi dini pasien.",
    tags: ["Aplikasi Kesehatan", "Skrining"],
    emoji: "🩺",
    demo: "https://sdew-screeningrisk.com",
    repo: "#",
    image: "/sdew-ss.jpg",
    featured: true,
  },
  {
    category: "Pribadi",
    title: "TNC Teleheart Nursing Care",
    role: "Project Lead",
    description:
      "Aplikasi pendamping perawatan jantung untuk mencatat tanda vital dan keluhan harian, memantau riwayat kondisi, serta mengakses edukasi dan konsultasi dengan tenaga kesehatan.",
    impact:
      "Memfasilitasi pemantauan jarak jauh kondisi jantung pasien secara efisien via mobile & web.",
    tags: ["Flutter", "Mobile App", "Telehealth", "Health Monitoring"],
    emoji: "❤️",
    demo: "#",
    repo: "#",
    image: "/tnc-dashboard.png",
    gallery: [
      "/tnc-dashboard.png",
      "/tnc-monitoring-form.png",
      "/tnc-monitoring-history.png",
    ],
    featured: true,
  },
  {
    category: "Pribadi",
    title: "Web Rukun Warga",
    description:
      "Website untuk kebutuhan administrasi dan informasi lingkungan Rukun Warga. Online di rw05citeureup.my.id — berisi pengumuman, pengaduan warga, dan data kependudukan.",
    tags: ["PHP", "Website", "Komunitas"],
    emoji: "🏘️",
    demo: "https://www.rw05citeureup.my.id",
    repo: "https://github.com/bintarto91/RW05",
    image: "/rw05-ss.jpg",
  },
  {
    category: "Pribadi",
    title: "Aplikasi Laundry",
    description:
      "Aplikasi manajemen layanan laundry — pencatatan pesanan, status cucian, dan data pelanggan. Sederhana tapi lengkap untuk usaha kecil.",
    tags: ["Web App"],
    emoji: "🧺",
    demo: "#",
    repo: "https://github.com/bintarto91/laundry",
    image: "",
  },
  {
    category: "Profesional",
    title: "Revamp Loccana",
    role: "Project Lead · DBA · Frontend Support",
    description:
      "Modernisasi menyeluruh aplikasi dari CodeIgniter 2 dan MySQL ke Laravel, WSO2, dan PostgreSQL. Berfokus pada alur proses, validasi, arsitektur database, serta bagian inti sistem.",
    impact:
      "Berhasil melakukan migrasi arsitektur data tanpa downtime dan meningkatkan kecepatan query hingga 35%.",
    tags: ["Laravel", "WSO2", "PostgreSQL", "Project Lead", "DBA"],
    emoji: "🎨",
    demo: "#",
    repo: "#",
    image: "/loccana-alur.jpg",
    featured: true,
  },
  {
    category: "Kantor",
    title: "Aplikasi ERP Kawasan & Gudang Berikat",
    description:
      "Aplikasi berbasis ERP untuk pengelolaan barang di Kawasan Berikat dan Gudang Berikat (fasilitas kepabeanan), mencakup pula perusahaan non-KB/GB. Terintegrasi dengan bea cukai.",
    tags: ["ERP", "Kawasan Berikat", "Logistik"],
    emoji: "🏢",
    demo: "#",
    repo: "#",
    image: "",
  },
  {
    category: "Profesional",
    title: "Aplikasi Distribusi & Inventory",
    role: "Project Lead · DBA · Frontend Support",
    description:
      "Sistem operasional bisnis terintegrasi yang mencakup master data, administrasi, procurement, inventory, penjualan, cash bank, dan accounting. Berfokus pada alur proses, validasi, serta konsistensi data antarmodul.",
    tags: ["Distribusi", "Procurement", "Inventory", "Accounting", "DBA"],
    emoji: "📦",
    demo: "#",
    repo: "#",
    image: "",
  },
  {
    category: "Kantor",
    title: "Operator Site Aplikasi SIMRS",
    description:
      "Menjalankan dan mendampingi operasional aplikasi SIMRS (Sistem Informasi Manajemen Rumah Sakit). Termasuk migrasi data, pelatihan pengguna, dan troubleshooting harian.",
    tags: ["SIMRS", "System Analyst"],
    emoji: "🖥️",
    demo: "#",
    repo: "#",
    image: "",
  },
];

export const skillGroups = [
  {
    title: "Data & Database",
    emoji: "🗄️",
    skills: ["PostgreSQL", "MySQL", "SQL Server", "DBeaver", "Navicat"],
  },
  {
    title: "Kepemimpinan & Analisis",
    emoji: "🧭",
    skills: ["Project Lead", "Agile/Scrum (SFC)", "System Analyst", "Data Analyst"],
  },
  {
    title: "Aplikasi & Infrastruktur",
    emoji: "🖥️",
    skills: ["ERP", "SIMRS", "Data Center", "Troubleshooting"],
  },
  {
    title: "Web & Mobile",
    emoji: "🌐",
    skills: ["PHP", "Laravel", "CodeIgniter", "Flutter", "React"],
  },
];

export const education = [
  {
    degree: "S1 Sistem Informasi",
    institution: "Universitas Komputer Indonesia (UNIKOM)",
    period: "2009–2013",
    detail: "IPK 3.28",
  },
];

export const certifications = [
  {
    name: "Data Analyst Certification",
    issuer: "Dari Data Menjadi Berdaya",
  },
  {
    name: "Android Development Training",
    issuer: "Joftra Training Center",
  },
  {
    name: "Extra Large Workshop Merakit dan Instalasi PC",
    issuer: "Universitas Komputer Indonesia",
  },
  {
    name: "Ready to Clouds Computing with Windows 8 and Office 365",
    issuer: "Seminar Nasional Teknologi Informasi",
  },
];

export const leadership = [
  {
    role: "Ketua RW 05 Citeureup & Webmaster",
    period: "Aktif",
    description:
      "Mengelola tata kelola lingkungan, digitalisasi layanan warga, dan infrastruktur web komunitas.",
    url: "https://www.rw05citeureup.my.id",
  },
  {
    role: "Ketua Umum Ninja Mono Indonesia",
    period: "2024–Sekarang",
  },
  {
    role: "Pengurus ICMI Muda",
    period: "2024–Sekarang",
  },
  {
    role: "Pengurus Daerah X GM FKPPI",
    period: "2021–Sekarang",
  },
];

export const contactNote =
  "Punya proyek, kolaborasi, atau sekadar ingin menyapa? Kirim pesan lewat email — saya biasanya membalas dalam 1–2 hari.";
