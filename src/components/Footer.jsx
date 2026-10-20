import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="section-shell flex flex-col gap-4 py-8 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono uppercase tracking-[.15em]">Dirancang dengan fokus · Dibangun dengan React</p>
        <a href="#atas" className="font-semibold uppercase tracking-wider transition hover:text-orange">Kembali ke atas ↑</a>
      </div>
    </footer>
  );
}
