import { experiences } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="pengalaman" className="scroll-mt-20 bg-ink py-24 text-cream sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="03 / Pengalaman" title="Lebih dari satu dekade bertumbuh bersama teknologi." description="Dari operasional sistem rumah sakit hingga memimpin pengembangan solusi berbasis data." light />
        <ol className="mt-16 border-t border-white/15 sm:mt-20">
          {experiences.map((item, index) => (
            <li key={item.role} className="border-b border-white/15">
              <Reveal delay={index * 90}>
                <article className="grid gap-5 py-8 transition sm:grid-cols-[.28fr_.72fr] sm:py-10 lg:grid-cols-[.22fr_.35fr_.43fr]">
                  <div><p className="font-mono text-xs uppercase tracking-[.14em] text-orange">{item.period}</p><p className="mt-2 text-xs text-cream/35">{item.location}</p></div>
                  <div><p className="font-display text-2xl font-semibold leading-tight">{item.role}</p><p className="mt-2 font-medium text-lime">{item.company}</p><p className="mt-3 max-w-sm text-sm leading-6 text-cream/45">{item.companyDescription}</p></div>
                  <div><p className="leading-7 text-cream/55">{item.description}</p><ul className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <li key={tag} className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-wider text-cream/55">{tag}</li>)}</ul></div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
