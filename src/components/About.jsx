import { profile } from "../data/portfolio";
import Reveal from "./Reveal";

const aboutParagraphs = [
  "Saya Dwi Wahyu Bintarto Prasetyo, dengan pengalaman lebih dari 11 tahun di bidang teknologi informasi. Perjalanan karier saya dimulai sebagai System Analyst, kemudian berkembang melalui berbagai tanggung jawab di bidang IT Support, Data Center, dan pengelolaan database, hingga saat ini berfokus sebagai Database Developer.",
  "Sepanjang perjalanan tersebut, saya terlibat dalam pengembangan dan pengelolaan berbagai sistem bisnis, termasuk sistem informasi rumah sakit (SIMRS), aplikasi ERP, serta aplikasi di bidang kesehatan dan keperawatan. Selain pengembangan database, saya juga memiliki pengalaman dalam analisis kebutuhan, koordinasi proyek, dan pengembangan aplikasi, baik pada sisi frontend maupun backend.",
];

const aboutSkills = [
  "Database Development",
  "System Analysis",
  "Application Development",
];

export default function About() {
  return (
    <section id="tentang" className="scroll-mt-20 border-b border-ink/10 bg-cream py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">01 / Tentang</p>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-ink/15 pt-7 text-sm lg:mt-14">
              <div><dt className="font-mono text-[10px] uppercase tracking-widest text-ink/55">Lokasi</dt><dd className="mt-2 font-semibold">{profile.location}</dd></div>
              <div><dt className="font-mono text-[10px] uppercase tracking-widest text-ink/55">Pengalaman</dt><dd className="mt-2 font-semibold">11+ tahun</dd></div>
              <div><dt className="font-mono text-[10px] uppercase tracking-widest text-ink/55">Fokus</dt><dd className="mt-2 font-semibold">Database & System Analysis</dd></div>
              <div><dt className="font-mono text-[10px] uppercase tracking-widest text-ink/55">Status</dt><dd className="mt-2 flex items-start gap-2 font-semibold"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green-600" /> Terbuka untuk Kolaborasi</dd></div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="max-w-3xl text-balance font-display text-[clamp(1.7rem,3.4vw,3rem)] font-semibold leading-[1.1] tracking-[-.04em]">
              <span className="min-[480px]:block">Berawal dari Analisis Sistem,</span>{" "}
              <span className="min-[480px]:block">Berkembang ke Pengelolaan Data</span>{" "}
              <span className="min-[480px]:block">dan <span className="font-serif font-normal italic text-orange">Pengembangan Aplikasi.</span></span>
            </h2>
            <div className="mt-10 grid gap-6 text-base leading-8 text-ink/85 xl:grid-cols-2 xl:gap-8">
              {aboutParagraphs.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}
            </div>
            <ul className="mt-10 flex flex-wrap gap-2.5">
              {aboutSkills.map((item) => <li key={item} className="tag">{item}</li>)}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
