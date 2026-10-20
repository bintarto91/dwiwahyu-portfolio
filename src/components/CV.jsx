import { certifications, education, experiences, leadership, profile, projects, skillGroups, stats } from "../data/portfolio";
import Reveal from "./Reveal";

export default function CV() {
  const printCV = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Tombol cetak (hanya di layar) */}
      <div className="print:hidden fixed top-4 right-4 z-50">
        <button
          onClick={printCV}
          className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-sky-700 transition-colors flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5"/><path d="M18 18h2a2 2 0 0 0 2-2v-5"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>
          Cetak / Simpan PDF
        </button>
      </div>

      <main className="mx-auto max-w-4xl px-6 py-12 print:py-0 print:px-0">
        {/* ===== HEADER ===== */}
        <header className="mb-10 pb-6 border-b-2 border-sky-600">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
                {profile.formalName}
              </h1>
              <p className="mt-2 text-lg text-sky-700 font-semibold">{profile.role}</p>
              <p className="mt-1 text-zinc-600">{profile.tagline}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600 print:hidden">
              <button onClick={printCV} className="flex items-center gap-1.5 bg-sky-100 text-sky-800 px-3 py-1.5 rounded-lg hover:bg-sky-200 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5"/><path d="M18 18h2a2 2 0 0 0 2-2v-5"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>
                Cetak
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-6 text-sm text-zinc-600">
            <span className="flex items-center gap-1.5">📍 {profile.location}</span>
            <span className="flex items-center gap-1.5">✉️ <a href={`mailto:${profile.email}`} className="hover:text-sky-600 underline">{profile.email}</a></span>
            <span className="flex items-center gap-1.5">
              <a href={profile.socials[0].url} target="_blank" rel="noopener" className="hover:text-sky-600 underline">GitHub</a>
            </span>
            <span className="flex items-center gap-1.5">
              <a href={profile.socials[1].url} target="_blank" rel="noopener" className="hover:text-sky-600 underline">LinkedIn</a>
            </span>
          </div>
        </header>

        {/* ===== RINGKASAN ===== */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-zinc-950 uppercase tracking-wide border-b border-zinc-200 pb-2 mb-4">Ringkasan Profesional</h2>
          <p className="text-zinc-700 leading-relaxed whitespace-pre-line">{profile.about.join("\n\n")}</p>
        </section>

        {/* ===== FOKUS KEahlian ===== */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-zinc-950 uppercase tracking-wide border-b border-zinc-200 pb-2 mb-4">Fokus Keahlian</h2>
          <div className="flex flex-wrap gap-2">
            {profile.focus.map((item) => (
              <span key={item} className="rounded-full bg-sky-100 text-sky-800 px-3 py-1 text-sm font-medium">
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ===== PENGALAMAN KERJA ===== */}
        <section className="mb-10">
          <h2 className="keep-with-next text-xl font-bold text-zinc-950 uppercase tracking-wide border-b border-zinc-200 pb-2 mb-4">Pengalaman Kerja</h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="avoid-break border-l-2 border-sky-200 pl-6 pb-6 last:pb-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-zinc-950">{exp.role}</h3>
                    <p className="text-sky-700 font-medium">{exp.company}</p>
                    <p className="mt-1 max-w-xl text-xs leading-relaxed text-zinc-500">{exp.companyDescription}</p>
                  </div>
                  <div className="text-right text-sm text-zinc-500 whitespace-nowrap">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <p className="text-zinc-700 leading-relaxed">{exp.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="rounded bg-zinc-100 text-zinc-700 px-2.5 py-0.5 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== LEADERSHIP & COMMUNITY ===== */}
        <section className="mb-10">
          <h2 className="keep-with-next text-xl font-bold text-zinc-950 uppercase tracking-wide border-b border-zinc-200 pb-2 mb-4">Organisasi & Kepemimpinan</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {leadership.map((item) => (
              <div key={item.role} className="avoid-break rounded-lg border border-zinc-200 bg-zinc-50 p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-zinc-950">{item.role}</h3>
                  <span className="whitespace-nowrap text-xs text-zinc-500">{item.period}</span>
                </div>
                {item.description && <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.description}</p>}
                {item.url && <a href={item.url} className="mt-2 inline-block text-xs font-medium text-sky-700 underline">rw05citeureup.my.id</a>}
              </div>
            ))}
          </div>
        </section>

        {/* ===== PROYEK UNGGULAN ===== */}
        <section className="mb-10">
          <h2 className="keep-with-next text-xl font-bold text-zinc-950 uppercase tracking-wide border-b border-zinc-200 pb-2 mb-4">Proyek Unggulan</h2>
          <div className="space-y-4">
            {projects.filter((p) => p.featured || (p.demo && p.demo !== "#")).map((proj, idx) => (
              <div key={idx} className="avoid-break border border-zinc-200 rounded-lg p-4 bg-zinc-50">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{proj.emoji}</span>
                      <h4 className="font-bold text-zinc-950">{proj.title}</h4>
                      <span className="rounded-full bg-sky-100 text-sky-800 px-2 py-0.5 text-xs font-medium">{proj.category}</span>
                    </div>
                    <p className="text-zinc-700 text-sm leading-relaxed">{proj.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="rounded bg-white text-zinc-700 border border-zinc-200 px-2 py-0.5 text-xs">{tag}</span>
                      ))}
                    </div>
                  </div>
                  {proj.demo && proj.demo !== "#" && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whitespace-nowrap text-sky-700 hover:underline font-medium text-sm flex items-center gap-1"
                    >
                      Lihat ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== KEahlian TEKNIS ===== */}
        <section className="mb-10">
          <h2 className="keep-with-next text-xl font-bold text-zinc-950 uppercase tracking-wide border-b border-zinc-200 pb-2 mb-4">Keahlian Teknis</h2>
          <div className="space-y-6">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="avoid-break">
                <h3 className="font-semibold text-zinc-950 flex items-center gap-2 mb-3">
                  <span className="text-xl">{group.emoji}</span>
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-zinc-100 text-zinc-700 px-3 py-1 text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== PENDIDIKAN & SERTIFIKASI ===== */}
        <section className="mb-10">
          <h2 className="keep-with-next text-xl font-bold text-zinc-950 uppercase tracking-wide border-b border-zinc-200 pb-2 mb-4">Pendidikan, Pelatihan &amp; Seminar</h2>
          {education.map((item) => (
            <div key={item.degree} className="avoid-break border-l-2 border-sky-200 pl-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold text-zinc-950">{item.degree}</h3>
                  <p className="text-sky-700 font-medium">{item.institution}</p>
                </div>
                <div className="text-right text-sm text-zinc-500"><p>{item.period}</p><p>{item.detail}</p></div>
              </div>
            </div>
          ))}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert.name} className="avoid-break rounded-lg border border-zinc-200 p-4">
                <span className="inline-block rounded-full bg-sky-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sky-700">{cert.type}</span>
                <h3 className="mt-2 font-semibold text-zinc-950">{cert.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{cert.issuer}{cert.location ? ` · ${cert.location}` : ""} · {cert.year}</p>
                {cert.duration && <p className="mt-1 text-xs text-zinc-500">Durasi: {cert.duration}</p>}
                {cert.completionDate && <p className="mt-1 text-xs text-zinc-500">Selesai pada {cert.completionDate}</p>}
                {cert.evidence && <p className="mt-1 text-xs text-zinc-500">Bukti: {cert.evidence}</p>}
                {cert.materials && <p className="mt-2 text-sm leading-5 text-zinc-600">Materi: {cert.materials}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* ===== STATISTIK ===== */}
        <section className="mb-10">
          <h2 className="keep-with-next text-xl font-bold text-zinc-950 uppercase tracking-wide border-b border-zinc-200 pb-2 mb-4">Statistik Karier</h2>
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4 bg-sky-50 rounded-xl border border-sky-100">
                <div className="text-4xl font-bold text-sky-700">{stat.value}</div>
                <div className="text-sm text-zinc-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="pt-6 border-t border-zinc-200 text-center text-sm text-zinc-500">
          <p>CV ini dibuat otomatis dari data portofolio.</p>
          <p className="mt-1">Terakhir diperbarui: {new Date().toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}</p>
          <p className="mt-1"><a href="https://dwiwahyu-portfolio.vercel.app" className="underline hover:text-sky-600">dwiwahyu-portfolio.vercel.app</a></p>
        </footer>
      </main>
    </div>
  );
}
