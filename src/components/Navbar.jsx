import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));

    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Garis progres baca di bagian paling atas
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);

      // Sorot menu sesuai bagian yang sedang dibaca
      const pos = window.scrollY + 140;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + window.scrollY <= pos) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-white/10 bg-zinc-950/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#atas"
          className="flex items-center gap-2.5 font-display text-lg font-bold text-white"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-accent to-accent-2 text-sm font-bold text-zinc-950">
            {profile.initials}
          </span>
          <span className="hidden whitespace-nowrap lg:block">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block py-2 text-sm transition-colors ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-linear-to-r from-accent to-accent-2 transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="hidden whitespace-nowrap rounded-full border border-accent/40 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/10 md:inline-block"
          >
            Hubungi Saya
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-zinc-300 transition-colors hover:bg-white/5 md:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Garis progres baca — menampilkan seberapa jauh halaman sudah dibaca */}
      <div
        aria-hidden="true"
        className="h-0.5 w-full origin-left bg-linear-to-r from-cyan-400 via-accent to-accent-2 transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />

      {open && (
        <div className="border-t border-white/10 bg-zinc-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white/5 hover:text-white ${
                    active === link.href.slice(1)
                      ? "bg-white/5 text-white"
                      : "text-zinc-300"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg border border-accent/40 px-3 py-2.5 text-center text-sm font-medium text-accent"
              >
                Hubungi Saya
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
