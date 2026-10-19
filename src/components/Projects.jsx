import { projects } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const hasLink = (project) =>
  [project.demo, project.repo].some((url) => url && url !== "#");

export default function Projects() {
  return (
    <section id="proyek" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Proyek"
          title="Karya yang saya banggakan"
          description="Kumpulan proyek pilihan — dari latihan belajar hingga aplikasi yang saya pakai sehari-hari. Klik Demo atau Kode untuk melihatnya."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={(index % 3) * 100}
              className="h-full"
            >
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:bg-white/[0.05]">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-linear-to-br from-accent/15 to-accent-2/15 text-2xl">
                    {project.emoji}
                  </span>
                  <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {hasLink(project) && (
                  <div className="mt-6 flex items-center gap-5 border-t border-white/10 pt-4 text-sm font-medium">
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-300 transition-colors hover:text-accent"
                      >
                        Demo ↗
                      </a>
                    )}
                    {project.repo && project.repo !== "#" && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zinc-300 transition-colors hover:text-accent"
                      >
                        Kode ↗
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
