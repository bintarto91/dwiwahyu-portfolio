import { useState } from "react";
import { profile } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const keyword = "text-violet-400";
const variable = "text-sky-300";
const string = "text-emerald-300";
const punct = "text-zinc-500";

export default function About() {
  // Kalau file foto belum ada, tampilkan bingkai cadangan (tidak error).
  const [fotoTampil, setFotoTampil] = useState(Boolean(profile.photo));

  return (
    <section id="tentang" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Tentang Saya"
          title="Di balik layar"
          description="Sedikit cerita tentang siapa saya dan apa yang saya kerjakan sehari-hari."
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
          {/* ---------------- Kolom kiri: foto + info singkat ---------------- */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              {/* cahaya lembut di belakang foto */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[28px] bg-linear-to-br from-accent/25 via-transparent to-accent-2/25 blur-2xl"
              />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-accent/10">
                {fotoTampil ? (
                  <>
                    <img
                      src={profile.photo}
                      alt={`Foto ${profile.name}`}
                      decoding="async"
                      className="aspect-[4/5] w-full object-cover"
                      onError={() => setFotoTampil(false)}
                    />
                    {/* sentuhan halus supaya foto menyatu dengan tema gelap */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-zinc-950/40 via-transparent to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 ring-inset"
                    />
                  </>
                ) : (
                  <div className="grid aspect-[4/5] w-full place-items-center bg-linear-to-br from-accent/15 via-zinc-900 to-accent-2/10">
                    <div className="px-6 text-center">
                      <span className="mx-auto grid h-20 w-20 place-items-center rounded-2xl bg-linear-to-br from-accent to-accent-2 font-display text-2xl font-bold text-zinc-950">
                        {profile.initials}
                      </span>
                      <p className="mt-4 text-sm text-zinc-400">
                        Foto belum ditambahkan
                      </p>
                      <p className="mt-1 font-mono text-xs text-zinc-500">
                        public{profile.photo}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <ul className="mx-auto mt-8 w-full max-w-sm space-y-3 text-sm lg:max-w-none">
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5">
                  📍
                </span>
                <span className="text-zinc-300">{profile.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5">
                  ✉️
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-zinc-300 transition-colors hover:text-accent"
                >
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5">
                  🟢
                </span>
                <span className="text-zinc-300">
                  Terbuka untuk peluang &amp; kolaborasi
                </span>
              </li>
            </ul>
          </Reveal>

          {/* ---------------- Kolom kanan: cerita + kartu kode ---------------- */}
          <Reveal delay={150}>
            <div className="space-y-5 leading-relaxed text-zinc-400">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-accent/5">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-xs text-zinc-500">tentang-saya.js</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-zinc-300 sm:text-sm">
                <code>
                  <span className={keyword}>const</span>{" "}
                  <span className={variable}>tentangSaya</span>{" "}
                  <span className={punct}>= {"{"}</span>
                  {"\n"}
                  {"  "}
                  <span className={variable}>nama</span>
                  <span className={punct}>:</span>{" "}
                  <span className={string}>"{profile.name}"</span>
                  <span className={punct}>,</span>
                  {"\n"}
                  {"  "}
                  <span className={variable}>peran</span>
                  <span className={punct}>:</span>{" "}
                  <span className={string}>"{profile.role}"</span>
                  <span className={punct}>,</span>
                  {"\n"}
                  {"  "}
                  <span className={variable}>lokasi</span>
                  <span className={punct}>:</span>{" "}
                  <span className={string}>"{profile.location}"</span>
                  <span className={punct}>,</span>
                  {"\n"}
                  {"  "}
                  <span className={variable}>fokus</span>
                  <span className={punct}>: [</span>
                  {profile.focus.map((item, index) => (
                    <span key={item}>
                      <span className={string}>"{item}"</span>
                      {index < profile.focus.length - 1 ? (
                        <span className={punct}>, </span>
                      ) : null}
                    </span>
                  ))}
                  <span className={punct}>],</span>
                  {"\n"}
                  <span className={punct}>{"};"}</span>
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
