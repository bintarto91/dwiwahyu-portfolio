import { useEffect, useState } from "react";
import { navLinks } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-white/10 bg-ink/90 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Navigasi utama">
        <a href="#atas" className="flex items-center gap-3 text-cream">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-orange font-display text-sm font-extrabold text-ink">DW</span>
          <span className="hidden font-display text-sm font-bold leading-tight sm:block">Dwi Wahyu<br /><span className="font-normal text-cream/45">Portfolio</span></span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-xs font-semibold uppercase tracking-[.13em] text-cream/55 transition hover:text-orange">{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="/cv-dwi-wahyu-bintarto-prasetyo.pdf" target="_blank" rel="noopener noreferrer" className="hidden rounded-full border border-cream/25 px-5 py-2.5 text-xs font-bold uppercase tracking-[.12em] text-cream transition hover:border-orange hover:text-orange sm:block">Lihat CV ↗</a>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? "Tutup menu" : "Buka menu"} className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-cream lg:hidden">
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="menu-mobile" className="border-t border-white/10 bg-ink px-5 py-6 lg:hidden">
          <ul className="space-y-1">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="flex items-center gap-4 rounded-xl px-3 py-3 font-display text-xl font-semibold text-cream hover:bg-white/5 hover:text-orange">
                  <span className="font-mono text-[10px] text-cream/35">0{index + 1}</span>{link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a href="/cv-dwi-wahyu-bintarto-prasetyo.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex items-center justify-between rounded-xl bg-orange px-4 py-3 font-bold text-ink">
                Lihat CV <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
