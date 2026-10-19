import { skillGroups } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const techBadges = {
  PostgreSQL: { mark: "PG", className: "bg-[#336791] text-white" },
  MySQL: { mark: "MY", className: "bg-[#00758f] text-white" },
  "SQL Server": { mark: "MS", className: "bg-[#cc2927] text-white" },
  DBeaver: { mark: "DB", className: "bg-[#5b4638] text-white" },
  Navicat: { mark: "NV", className: "bg-[#16a085] text-white" },
  PHP: { mark: "PHP", className: "bg-[#777bb4] text-white" },
  Laravel: { mark: "L", className: "bg-[#ff2d20] text-white" },
  CodeIgniter: { mark: "CI", className: "bg-[#ee4323] text-white" },
  Flutter: { mark: "FL", className: "bg-[#02569b] text-white" },
  React: { mark: "RE", className: "bg-[#087ea4] text-white" },
  "Project Lead": { mark: "PL", className: "bg-ink text-cream" },
  "Agile/Scrum (SFC)": { mark: "AG", className: "bg-orange text-ink" },
  "System Analyst": { mark: "SA", className: "bg-[#6d4aff] text-white" },
  "Data Analyst": { mark: "DA", className: "bg-[#157f6b] text-white" },
};

function SkillBadge({ skill }) {
  const badge = techBadges[skill] ?? {
    mark: skill.slice(0, 2).toUpperCase(),
    className: "bg-ink/10 text-ink/70",
  };

  return (
    <span aria-hidden="true" className={`grid h-8 min-w-8 place-items-center rounded-lg px-1.5 font-mono text-[9px] font-bold tracking-tight shadow-sm ${badge.className}`}>
      {badge.mark}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="keahlian" className="scroll-mt-20 bg-cream py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="05 / Kapabilitas" title="Keahlian yang saling melengkapi." description="Kombinasi pemahaman data, sistem, dan kepemimpinan untuk membawa proyek dari kebutuhan hingga implementasi." />
          </div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 80} className="h-full">
                <article className="h-full bg-paper p-7 transition hover:bg-white sm:p-8">
                  <div className="flex items-center justify-between"><span className="text-3xl">{group.emoji}</span><span className="font-mono text-xs text-orange">0{index + 1}</span></div>
                  <h3 className="mt-7 font-display text-xl font-semibold">{group.title}</h3>
                  <ul className="mt-5 grid gap-2.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex min-h-11 items-center gap-3 rounded-xl border border-ink/8 bg-white/55 px-3 py-2 text-sm font-medium text-ink/70 transition hover:-translate-y-0.5 hover:border-orange/35 hover:bg-white">
                        <SkillBadge skill={skill} />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
