import { profile, stats } from "../data/portfolio";
import Reveal from "./Reveal";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Hero() {
  return (
    <section id="atas" className="relative min-h-svh overflow-hidden bg-ink text-cream">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange/20 blur-[120px]" />

      <div className="relative mx-auto grid min-h-svh w-full min-w-0 max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:px-10 lg:pb-20">
        <div className="w-[calc(100vw-2.5rem)] min-w-0 max-w-full sm:w-auto">
          <Reveal>
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/[.07] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.11em] text-cream/85 backdrop-blur sm:gap-3 sm:px-4 sm:text-xs sm:tracking-[0.18em]">
              <span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_0_5px_rgba(190,242,100,.12)]" />
              Bandung · tersedia untuk kolaborasi
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-9 font-mono text-xs font-semibold uppercase tracking-[0.19em] text-orange sm:text-sm sm:tracking-[0.22em]">Database developer / System analyst</p>
            <h1 className="mt-5 max-w-full text-balance font-display text-[clamp(2.75rem,5.6vw,5.6rem)] font-semibold leading-[.94] tracking-[-0.055em] text-cream sm:max-w-4xl">
              <span className="block">Dari Proses Bisnis.</span>
              Menjadi Sistem yang <span className="font-serif font-normal italic text-orange sm:whitespace-nowrap">Bekerja.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl break-words text-base leading-7 text-cream/78 sm:text-lg sm:leading-8">
              Saya Dwi Wahyu Bintarto Prasetyo. Selama lebih dari 11 tahun, saya berpengalaman dalam pengembangan database, analisis sistem, dan aplikasi bisnis, mulai dari memahami kebutuhan pengguna, merancang solusi, hingga mengembangkan sistem yang mendukung operasional bisnis.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#proyek" className="button-primary">Lihat Proyek <Arrow /></a>
              <a href="#tentang" className="button-secondary !border-white/35 !text-cream/90 hover:!border-white/60 hover:!bg-white/10">Tentang Saya</a>
            </div>
          </Reveal>

          <Reveal delay={400} className="mt-14">
            <dl className="grid w-full min-w-0 max-w-2xl grid-cols-3 border-y border-white/12 py-5">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`min-w-0 pr-2 sm:pr-4 ${index ? "border-l border-white/12 pl-2 sm:pl-7" : ""}`}>
                  <dd className="font-display text-2xl font-semibold text-cream sm:text-3xl">{stat.value}</dd>
                  <dt className="mt-1 text-[10px] uppercase leading-4 tracking-[.14em] text-cream/60 sm:text-xs">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative mx-auto w-full min-w-0 max-w-md lg:max-w-none">
          <div className="relative ml-auto aspect-[4/5] max-h-[72vh] overflow-hidden rounded-[2rem] bg-cream">
            <img
              src={profile.photo}
              alt={`Dwi Wahyu Bintarto Prasetyo, ${profile.role}`}
              width="1000"
              height="1339"
              fetchPriority="high"
              decoding="async"
              className="h-full w-full object-cover object-[50%_28%] saturate-[.9] contrast-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/35 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
              <div>
                <p className="font-display text-xl font-semibold text-white sm:text-2xl">Dwi Wahyu</p>
                <p className="mt-1 text-xs uppercase tracking-[.18em] text-white/70">Bandung, Indonesia</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-4 -z-10 h-36 w-36 rounded-full border border-orange/50" />
        </Reveal>
      </div>

      <a href="#tentang" aria-label="Gulir ke bagian tentang" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[.25em] text-cream/55 transition hover:text-cream md:flex">
        <span className="h-px w-10 bg-current" /> Gulir
      </a>
    </section>
  );
}
