// ============================================================
//  PUSAT DATA PORTOFOLIO
//  Cukup edit file ini untuk mengganti seluruh isi website:
//  nama, peran, tentang, pengalaman, proyek, keahlian, kontak.
// ============================================================

export const profile = {
  name: "Dwi Wahyu Bintarto Prasetyo",
  formalName: "Dwi Wahyu Bintarto Prasetyo, S.Kom",
  initials: "DW",
  role: "Database Developer & System Analyst",
  tagline:
    "Database developer dengan pengalaman lebih dari 11 tahun pada pengembangan dan pengelolaan database, analisis kebutuhan sistem, serta pengembangan aplikasi bisnis.",
  location: "Bandung, Indonesia",
  email: "dwahyu47@gmail.com",
  // Foto profil: simpan file foto di folder "public", pakai nama foto-profil.jpg
  // (mis. public/foto-profil.jpg). Kosongkan ("") kalau belum ada foto.
  photo: "/foto-profil.jpg",
  focus: ["Database Development", "System Analysis", "Application Development"],
  about: [
    "Saya Dwi Wahyu Bintarto Prasetyo, dengan pengalaman lebih dari 11 tahun di bidang teknologi informasi. Perjalanan karier saya dimulai sebagai System Analyst, kemudian berkembang melalui berbagai tanggung jawab di bidang IT Support, Data Center, dan pengelolaan database, hingga saat ini berfokus sebagai Database Developer.",
    "Sepanjang perjalanan tersebut, saya terlibat dalam pengembangan dan pengelolaan berbagai sistem bisnis, termasuk sistem informasi rumah sakit (SIMRS), aplikasi ERP, serta aplikasi di bidang kesehatan dan keperawatan. Selain pengembangan database, saya juga memiliki pengalaman dalam analisis kebutuhan, koordinasi proyek, dan pengembangan aplikasi, baik pada sisi frontend maupun backend.",
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
  { value: "8", label: "Proyek & Sistem Dikerjakan" },
];

// Riwayat karier, urut dari yang terbaru.
export const experiences = [
  {
    period: "Jul 2018 – Sekarang",
    role: "Database Developer",
    company: "PT Swamedia Informatika",
    companyDescription:
      "Perusahaan Computer Systems Design Services (konsultan TI & software house) yang berbasis di Bandung.",
    location: "Bandung · Hybrid",
    description:
      "Bertanggung jawab pada pengembangan dan pengelolaan database, analisis kebutuhan serta proses bisnis, pengembangan dan pemeliharaan aplikasi, serta koordinasi pekerjaan proyek sesuai penugasan.",
    tags: ["Database", "Analisis Kebutuhan", "Pengembangan Aplikasi", "Koordinasi Proyek"],
  },
  {
    period: "Jan 2015 – Jul 2018",
    role: "Staff IT, Data Center & PIC Database",
    company: "PT Tirta Utama Abadi",
    companyDescription:
      "Perusahaan distributor resmi air mineral dan beverage produksi DANONE (AQUA, Vit, Mizone) untuk wilayah Jawa Barat.",
    location: "Bandung · Hybrid",
    description:
      "Menjalankan operasional IT perusahaan, memantau sistem dan infrastruktur secara berkala, serta menjadi penanggung jawab pengelolaan database.",
    tags: ["Operasional IT", "Data Center", "Database"],
  },
  {
    period: "Feb 2014 – Agu 2014",
    role: "System Analyst",
    company: "Jasamedika Saranatama",
    companyDescription:
      "Perusahaan IT pengembang software medis dan penyedia layanan Sistem Informasi Manajemen Rumah Sakit (SIMRS).",
    location: "Bandung · On-site",
    description:
      "Menganalisis kebutuhan sistem dan menyusun spesifikasi teknis, serta terlibat dalam implementasi dan operasional aplikasi SIMRS di rumah sakit, termasuk migrasi data, pelatihan pengguna, dan penanganan kendala harian.",
    tags: ["Analisis Sistem", "SIMRS", "Implementasi"],
  },
];

export const projects = [
  {
    category: "Pribadi",
    title: "NersCare ICU",
    description:
      "Aplikasi berbasis web dan Android yang dikembangkan untuk mendukung asesmen kesepian pasien ICU, pencatatan hasil asesmen, serta dokumentasi tindak lanjut oleh perawat.",
    highlight: {
      label: "Fitur Utama",
      text: "Asesmen kesepian pasien ICU, pencatatan hasil asesmen, dan dokumentasi tindak lanjut oleh perawat.",
    },
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
      "Aplikasi skrining risiko kedaruratan diabetes yang membantu pengguna mencatat kadar gula darah, gejala, dan faktor risiko serta melihat hasil penilaian awal.",
    highlight: {
      label: "Fitur Utama",
      text: "Pencatatan kadar gula darah dan gejala, penilaian faktor risiko, serta hasil penilaian awal.",
    },
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
    description:
      "Aplikasi pendamping perawatan jantung untuk mencatat tanda vital dan keluhan harian, memantau riwayat kondisi, serta mengakses edukasi dan konsultasi dengan tenaga kesehatan.",
    highlight: {
      label: "Fitur Utama",
      text: "Pemantauan tanda vital dan keluhan harian, riwayat pemantauan, edukasi, serta konsultasi dengan tenaga kesehatan.",
    },
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
    title: "Website RW 05 Citeureup",
    description:
      "Website informasi dan layanan warga untuk lingkungan RW 05 Citeureup, berisi pengumuman, pengaduan warga, dan data kependudukan.",
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
      "Aplikasi manajemen layanan laundry yang mencakup pencatatan pesanan, pemantauan status cucian, dan pengelolaan data pelanggan.",
    tags: ["Web App"],
    emoji: "🧺",
    demo: "#",
    repo: "https://github.com/bintarto91/laundry",
    image: "",
  },
  {
    category: "Perusahaan",
    title: "Revamp Loccana",
    description:
      "Proyek modernisasi sistem bisnis yang mencakup analisis proses, perancangan arsitektur database, dan penyesuaian kebutuhan aplikasi menggunakan Laravel, PostgreSQL, serta komponen integrasi WSO2.",
    highlight: {
      label: "Kontribusi Saya",
      text: "Analisis proses bisnis, perancangan arsitektur database, dan penyesuaian kebutuhan aplikasi.",
    },
    tags: ["Laravel", "PostgreSQL", "WSO2"],
    emoji: "🎨",
    demo: "#",
    repo: "#",
    image: "/loccana-alur.jpg",
    featured: true,
  },
  {
    category: "Perusahaan",
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
    category: "Perusahaan",
    title: "Aplikasi Distribusi & Inventory",
    description:
      "Sistem operasional bisnis terintegrasi yang mencakup master data, administrasi, procurement, inventory, penjualan, cash bank, dan accounting. Berfokus pada alur proses, validasi, serta konsistensi data antarmodul.",
    tags: ["Distribusi", "Procurement", "Inventory", "Accounting", "DBA"],
    emoji: "📦",
    demo: "#",
    repo: "#",
    image: "",
  },
];

export const skillGroups = [
  {
    title: "Database Development",
    emoji: "🗄️",
    skills: ["PostgreSQL", "MySQL / MariaDB", "SQL Server", "DBeaver", "Navicat"],
  },
  {
    title: "System Analysis & Project Coordination",
    emoji: "🧭",
    skills: [
      "System Analysis",
      "Business Process Analysis",
      "Requirements Analysis",
      "Project Coordination",
      "Agile/Scrum",
    ],
  },
  {
    title: "Application Development",
    emoji: "🌐",
    skills: ["PHP", "Laravel", "CodeIgniter", "JavaScript", "Flutter", "React"],
  },
  {
    title: "Infrastructure & Integration",
    emoji: "🖥️",
    skills: [
      "Linux / Ubuntu",
      "Server & Database Administration",
      "Git / GitLab",
      "Data Center",
      "Troubleshooting",
      "Integrasi Sistem (WSO2)",
    ],
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
    type: "Sertifikasi",
  },
  {
    name: "Android Development Training",
    issuer: "Joftra Training Center",
    type: "Pelatihan",
  },
  {
    name: "Extra Large Workshop Merakit dan Instalasi PC",
    issuer: "Universitas Komputer Indonesia",
    type: "Workshop",
  },
  {
    name: "Ready to Clouds Computing with Windows 8 and Office 365",
    issuer: "Seminar Nasional Teknologi Informasi",
    type: "Seminar",
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
  "Terbuka untuk diskusi dan kolaborasi terkait pengembangan database, analisis sistem, serta pengembangan aplikasi bisnis. Silakan hubungi saya melalui email atau LinkedIn.";
