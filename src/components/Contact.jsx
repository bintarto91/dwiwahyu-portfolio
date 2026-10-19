import { contactNote, profile } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="kontak" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Kontak" title="Mari bekerja sama" centered />

        <Reveal delay={150} className="mx-auto mt-12 max-w-3xl">
          <div className="rounded-3xl bg-linear-to-br from-accent/50 via-white/10 to-accent-2/50 p-px">
            <div className="rounded-[calc(1.5rem-1px)] bg-zinc-950 px-8 py-12 text-center sm:px-12">
              <p className="mx-auto max-w-xl leading-relaxed text-zinc-400">
                {contactNote}
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="mt-8 inline-block rounded-full bg-linear-to-r from-accent to-accent-2 px-8 py-3.5 font-semibold text-zinc-950 transition-opacity hover:opacity-90"
              >
                {profile.email}
              </a>

              <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {profile.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {social.label} ↗
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <a
                  href="/cv.html"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-sky-500 text-sky-400 px-6 py-3 font-semibold transition-colors hover:bg-sky-500/10 hover:text-sky-300"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Unduh CV (PDF)
                </a>
                <p className="mt-2 text-xs text-zinc-500 text-center">Buka di tab baru → Ctrl+P → Simpan sebagai PDF</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
