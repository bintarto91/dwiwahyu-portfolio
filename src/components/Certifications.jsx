import { certifications } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  if (!certifications.length) return null;

  return (
    <section id="sertifikasi" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Sertifikasi"
          title="Bukti keahlian formal"
          description="Sertifikasi dan pelatihan yang mendukung praktik kerja sehari-hari."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal key={cert.name} delay={(index % 3) * 100} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-white/[0.05]">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-white">{cert.name}</h3>
                    <p className="mt-1 text-sm text-sky-400">{cert.issuer}</p>
                    <p className="mt-1 text-sm text-zinc-500">{cert.year}</p>
                    {cert.credentialId && (
                      <p className="mt-1 text-xs text-zinc-600 font-mono">ID: {cert.credentialId}</p>
                    )}
                  </div>
                  <span className="shrink-0 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-linear-to-br from-accent/15 to-accent-2/15 text-2xl">
                    🏅
                  </span>
                </div>

                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition-colors hover:text-accent"
                  >
                    Verifikasi ↗
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}