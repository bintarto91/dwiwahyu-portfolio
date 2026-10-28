import { projects } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const featured = projects.filter((project) => project.featured).slice(0, 4);
const more = projects.filter((project) => !featured.includes(project));
const valid = (url) => url && url !== "#";

// Dimensi intrinsik gambar (untuk mencegah pergeseran layout saat gambar dimuat).
const imageSize = {
  "/nerscare-ss.webp": [741, 404],
  "/sdew-ss.webp": [800, 396],
  "/rw05-ss.webp": [800, 366],
  "/loccana-alur.webp": [800, 333],
  "/tnc-dashboard.webp": [600, 1333],
  "/tnc-monitoring-form.webp": [600, 1333],
  "/tnc-monitoring-history.webp": [600, 1333],
};
const sizeOf = (src) => imageSize[src] ?? [null, null];

function LinkArrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}

function ErpLogisticsVisual() {
  return (
    <div className="absolute inset-0 bg-[#d6e6e0] p-4 sm:p-6">
      <div className="flex h-full overflow-hidden rounded-xl bg-[#f8fbfa] text-[#173d3d] shadow-2xl">
        <aside className="flex w-[30%] min-w-28 flex-col bg-[#173d3d] px-3 py-4 text-cream sm:w-[27%] sm:px-4">
          <div className="flex items-center gap-2 border-b border-cream/15 pb-4">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-lime text-[10px] font-black text-[#173d3d]">KB</span>
            <span className="font-mono text-[9px] font-bold tracking-wide">ERP LOGISTIK</span>
          </div>
          <div className="mt-5 space-y-2 font-mono text-[8px] font-medium text-cream/65 sm:text-[9px]">
            <p className="rounded-md bg-cream/15 px-2 py-1.5 text-cream">Dashboard</p>
            <p className="px-2 py-1">Barang Masuk</p>
            <p className="px-2 py-1">Mutasi Barang</p>
            <p className="px-2 py-1">Gudang Berikat</p>
            <p className="px-2 py-1">Dokumen Pabean</p>
          </div>
          <p className="mt-auto font-mono text-[7px] uppercase tracking-wider text-cream/40">Kawasan Berikat</p>
        </aside>
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex items-center justify-between border-b border-[#173d3d]/10 pb-3">
            <div>
              <p className="font-mono text-[8px] font-bold uppercase tracking-[.14em] text-[#173d3d]/50">Dashboard Operasional</p>
              <p className="mt-1 text-sm font-bold sm:text-base">Kawasan &amp; Gudang Berikat</p>
            </div>
            <span className="rounded-full bg-lime/30 px-2 py-1 font-mono text-[7px] font-bold text-[#173d3d]">TERINTEGRASI</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-[#173d3d]/10 bg-white p-2 sm:p-3"><p className="font-mono text-[7px] uppercase text-[#173d3d]/55">Barang Masuk</p><p className="mt-1 text-base font-bold sm:text-xl">126</p><p className="font-mono text-[7px] text-emerald-700">Bulan ini</p></div>
            <div className="rounded-lg border border-[#173d3d]/10 bg-white p-2 sm:p-3"><p className="font-mono text-[7px] uppercase text-[#173d3d]/55">Stok Gudang</p><p className="mt-1 text-base font-bold sm:text-xl">2.480</p><p className="font-mono text-[7px] text-emerald-700">Terkelola</p></div>
          </div>
          <div className="mt-3 rounded-lg border border-[#173d3d]/10 bg-white p-3">
            <div className="flex items-center justify-between"><p className="font-mono text-[8px] font-bold">STATUS DOKUMEN</p><span className="font-mono text-[7px] text-[#173d3d]/45">Hari ini</span></div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /><span className="flex-1 font-mono text-[7px]">Penerimaan barang</span><span className="font-mono text-[7px] text-[#173d3d]/50">Selesai</span></div>
              <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange" /><span className="flex-1 font-mono text-[7px]">Mutasi antar gudang</span><span className="font-mono text-[7px] text-[#173d3d]/50">Diproses</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="proyek" className="scroll-mt-20 bg-paper py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="02 / Proyek" title="Proyek yang Saya Kerjakan." description="Berikut beberapa proyek pengembangan aplikasi dan sistem bisnis yang saya kerjakan, baik secara mandiri maupun bersama tim." />

        <div className="mt-16 space-y-8 sm:mt-20">
          {featured.map((project, index) => (
            <Reveal key={project.title}>
              <article className="group grid overflow-hidden rounded-[2rem] border border-ink/10 bg-cream lg:grid-cols-2">
                <div className={`relative min-h-64 overflow-hidden sm:min-h-80 lg:min-h-[430px] ${index % 2 ? "lg:order-2" : ""}`}>
                  {project.gallery ? (
                    <div className="absolute inset-0 grid grid-cols-3 items-center gap-2 bg-[#dbe9e2] p-4 sm:gap-3 sm:p-6">
                      {project.gallery.map((image, imageIndex) => {
                        const [w, h] = sizeOf(image);
                        return (
                          <img
                            key={image}
                            src={image}
                            alt={`Tampilan ${imageIndex + 1} proyek ${project.title}`}
                            width={w}
                            height={h}
                            loading="lazy"
                            decoding="async"
                            className={`max-h-full w-full rounded-xl object-contain shadow-xl transition duration-700 group-hover:-translate-y-1 ${imageIndex === 1 ? "translate-y-3" : "-translate-y-1"}`}
                          />
                        );
                      })}
                    </div>
                  ) : project.visual === "erp-logistics" ? (
                    <ErpLogisticsVisual />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#dbe9e2] p-4 sm:p-6">
                      <img src={project.image} alt={`Tampilan proyek ${project.title}`} width={sizeOf(project.image)[0]} height={sizeOf(project.image)[1]} loading="lazy" decoding="async" className="max-h-full w-full rounded-xl object-contain shadow-xl transition duration-700 group-hover:scale-[1.02]" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-ink/30 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-ink backdrop-blur">{project.category}</span>
                </div>
                <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                  <div>
                    <p className="font-mono text-xs text-orange">0{index + 1} / Proyek Unggulan</p>
                    <h3 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-4xl">{project.title}</h3>
                    {project.role && <p className="mt-3 font-mono text-xs font-semibold uppercase tracking-[.12em] text-orange">{project.role}</p>}
                    <p className="mt-5 max-w-xl leading-7 text-ink/70">{project.description}</p>
                    {project.highlight && (
                      <div className="mt-6 border-l-2 border-lime bg-lime/10 px-4 py-3">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[.16em] text-ink/45">{project.highlight.label}</p>
                        <p className="mt-1.5 text-sm font-semibold leading-6 text-ink/80">{project.highlight.text}</p>
                      </div>
                    )}
                    <ul className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <li key={tag} className="tag">{tag}</li>)}</ul>
                  </div>
                  <div className="mt-10 flex flex-wrap gap-3 border-t border-ink/10 pt-6">
                    {valid(project.demo) && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold hover:text-orange">Kunjungi proyek <LinkArrow /></a>}
                    {valid(project.repo) && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="ml-auto text-sm font-semibold text-ink/50 hover:text-orange">GitHub ↗</a>}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="mb-7 flex items-end justify-between border-b border-ink/15 pb-5">
            <h3 className="font-display text-2xl font-semibold">Proyek lainnya</h3>
            <span className="font-mono text-xs text-ink/55">{more.length} proyek</span>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((project, index) => (
              <article
                key={project.title}
                className={`flex min-h-72 flex-col bg-cream p-7 transition hover:bg-white ${
                  more.length % 2 === 1 && index === more.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="flex items-start justify-between"><span className="text-2xl">{project.emoji}</span><span className="font-mono text-[10px] uppercase tracking-wider text-ink/55">{project.category}</span></div>
                <h4 className="mt-8 font-display text-xl font-semibold">{project.title}</h4>
                {project.role && <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-[.1em] text-orange">{project.role}</p>}
                <p className="mt-3 flex-1 text-sm leading-6 text-ink/65">{project.description}</p>
                <div className="mt-6 flex gap-4 text-xs font-bold uppercase tracking-wider">
                  {valid(project.demo) && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-orange">Demo ↗</a>}
                  {valid(project.repo) && <a href={project.repo} target="_blank" rel="noopener noreferrer" className="hover:text-orange">Kode ↗</a>}
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
