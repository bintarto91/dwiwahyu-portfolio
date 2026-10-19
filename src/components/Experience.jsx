import { experiences } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="pengalaman" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Pengalaman"
          title="Perjalanan karier"
          description="Jejak langkah saya di dunia IT — dari analisis sistem, dukungan teknis, dan data, hingga memimpin proyek."
        />

        <ol className="relative mt-14 space-y-10 border-l border-white/10 pl-8 sm:pl-10">
          {experiences.map((item, index) => (
            <li key={item.role} className="relative">
              <Reveal delay={index * 80}>
                <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-zinc-950 bg-linear-to-br from-accent to-accent-2 sm:-left-[49px]" />

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {item.period}
                </p>

                <div className="mt-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/40 sm:p-6">
                  <h3 className="font-display text-lg font-bold text-white">
                    {item.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-accent">
                    {item.company}
                    {item.location ? (
                      <span className="text-zinc-500"> · {item.location}</span>
                    ) : null}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                  {item.tags?.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
