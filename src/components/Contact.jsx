import { contactNote, profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="kontak" className="scroll-mt-20 bg-orange py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[.2em]">07 / Kontak</p>
              <h2 className="mt-6 max-w-4xl font-display text-[clamp(3.2rem,8vw,7.5rem)] font-semibold leading-[.86] tracking-[-.065em]">Mari<br /><span className="font-serif font-normal italic">Terhubung.</span></h2>
            </div>
            <div className="lg:pb-2">
              <p className="max-w-md leading-7 text-ink/85">{contactNote}</p>
              <a href={`mailto:${profile.email}`} className="mt-8 inline-flex items-center gap-4 border-b-2 border-ink pb-2 text-lg font-bold transition hover:gap-6">{profile.email}<span aria-hidden="true">↗</span></a>
              <div className="mt-8 flex flex-wrap gap-3">
                {profile.socials.map((social) => <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-ink/30 px-4 py-2 text-sm font-bold transition hover:bg-ink hover:text-orange">{social.label} ↗</a>)}
                <a href="/cv-dwi-wahyu-bintarto-prasetyo.pdf" target="_blank" rel="noopener noreferrer" className="rounded-full border border-ink/30 px-4 py-2 text-sm font-bold transition hover:bg-ink hover:text-orange">Lihat CV ↗</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
