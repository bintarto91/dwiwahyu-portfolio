import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Dibuat dengan React +
          Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href="/cv.html" target="_blank" rel="noopener" className="transition-colors hover:text-accent flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            CV
          </a>
          <a href="#atas" className="transition-colors hover:text-accent">
            Kembali ke atas ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
