import { leadership } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function LeadershipCommunity() {
  return (
    <section id="leadership" className="scroll-mt-20 bg-paper py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading
          eyebrow="04 / Leadership & Community"
          title="Memimpin juga berarti melayani."
          description="Pengalaman kepemimpinan yang mempertemukan tata kelola, kolaborasi komunitas, dan transformasi digital."
        />

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2">
          {leadership.map((item, index) => (
            <Reveal key={item.role} delay={index * 80} className="h-full">
              <article className={`flex h-full flex-col rounded-[1.75rem] border border-ink/10 p-7 transition hover:-translate-y-1 hover:shadow-xl sm:p-8 ${index === 0 ? "bg-ink text-cream sm:col-span-2" : "bg-cream"}`}>
                <div className="flex items-start justify-between gap-5">
                  <span className={`font-mono text-xs font-bold ${index === 0 ? "text-lime" : "text-orange"}`}>0{index + 1}</span>
                  <span className={`rounded-full border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${index === 0 ? "border-white/20 text-cream/60" : "border-ink/15 text-ink/50"}`}>{item.period}</span>
                </div>
                <h3 className="mt-8 max-w-2xl font-display text-2xl font-semibold leading-tight sm:text-3xl">{item.role}</h3>
                {item.description && <p className={`mt-4 max-w-3xl leading-7 ${index === 0 ? "text-cream/60" : "text-ink/60"}`}>{item.description}</p>}
                {item.url && (
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 border-b border-lime pb-1 text-sm font-bold text-lime">
                    rw05citeureup.my.id <span aria-hidden="true">↗</span>
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
