import { profile, stats } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="atas" className="relative overflow-hidden">
      {/* Latar belakang dekoratif */}
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -left-20 -top-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 h-80 w-80 animate-float rounded-full bg-accent-2/15 blur-3xl" />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-6 pb-24 pt-32">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Tersedia untuk proyek &amp; kolaborasi
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-8 font-display text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-7xl">
            Halo, saya <span className="text-gradient">{profile.name}</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 flex items-center gap-1 font-display text-xl font-semibold text-accent sm:text-2xl">
            {profile.role}
            <span className="animate-pulse font-normal">▍</span>
          </p>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#proyek"
              className="rounded-full bg-linear-to-r from-accent to-accent-2 px-7 py-3.5 font-semibold text-zinc-950 transition-opacity hover:opacity-90"
            >
              Lihat Proyek
            </a>
            <a
              href="#kontak"
              className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/5"
            >
              Hubungi Saya
            </a>
          </div>
        </Reveal>

        <Reveal delay={500} className="mt-20">
          <dl className="grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-sm text-zinc-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
