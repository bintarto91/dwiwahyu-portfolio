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
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
