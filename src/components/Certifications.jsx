import { certifications, education } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="pendidikan" className="scroll-mt-20 bg-ink py-24 text-cream sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="06 / Pendidikan"
          title="Pendidikan dan Pengembangan Kompetensi."
          description="Pendidikan formal, pelatihan, workshop, serta seminar yang mendukung pekerjaan di bidang data, sistem, dan pengembangan aplikasi."
          light
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-orange">Pendidikan</p>
            {education.map((item) => (
              <Reveal key={item.degree} className="mt-5">
                <article className="rounded-[1.75rem] border border-white/15 bg-white/[.04] p-7 sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime font-display text-lg font-bold text-ink" aria-hidden="true">S1</div>
                  <h3 className="mt-7 font-display text-3xl font-semibold leading-tight">{item.degree}</h3>
                  <p className="mt-3 font-semibold text-lime">{item.institution}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[11px] text-cream/60">{item.period}</span>
                    <span className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[11px] text-cream/60">{item.detail}</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[.18em] text-orange">Pelatihan, Workshop &amp; Seminar</p>
            <div className="mt-5 grid gap-px overflow-hidden rounded-[1.75rem] bg-white/15 sm:grid-cols-2">
              {certifications.map((cert, index) => (
                <Reveal
                  key={cert.name}
                  delay={index * 70}
                  className={`h-full ${certifications.length % 2 === 1 && index === certifications.length - 1 ? "sm:col-span-2" : ""}`}
                >
                  <article className="flex h-full min-h-52 flex-col bg-ink p-6 transition hover:bg-white/[.05] sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 font-mono text-[10px] font-bold text-lime" aria-hidden="true">0{index + 1}</span>
                      <span className="rounded-full border border-orange/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-orange">{cert.type}</span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold leading-snug">{cert.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-cream/65">{cert.issuer}{cert.location ? ` · ${cert.location}` : ""} · {cert.year}</p>
                    {cert.completionDate && (
                      <p className="mt-2 text-xs leading-5 text-cream/55">Selesai pada {cert.completionDate}</p>
                    )}
                    {cert.materials && (
                      <p className="mt-3 border-t border-white/10 pt-3 text-sm leading-6 text-cream/70">Materi: {cert.materials}</p>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
