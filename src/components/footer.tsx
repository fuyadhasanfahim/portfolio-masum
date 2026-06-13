import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--primary)]/8 bg-[var(--background)]">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display flex items-center gap-2 text-[var(--primary)] text-xl font-semibold">
              <span className="inline-flex size-8 items-center justify-center rounded-full gradient-accent text-white text-sm font-bold">
                M
              </span>
              {SITE.name}
            </div>
            <p className="mt-3 max-w-sm text-sm text-[var(--text)]/70 leading-relaxed">
              Graphic designer crafting brand identities, social media creatives, and print design with care.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.18em] text-[var(--primary)]/70">
              Navigate
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[var(--text)]/75 hover:text-[var(--accent)] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.18em] text-[var(--primary)]/70">
              Contact
            </h4>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 block text-base font-medium text-[var(--primary)] hover:text-[var(--accent)] transition-colors"
            >
              {SITE.email}
            </a>
            <p className="mt-2 text-sm text-[var(--text)]/65">{SITE.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--primary)]/8 pt-6 text-xs text-[var(--text)]/60 sm:flex-row">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Designed & built with intention.</span>
        </div>
      </div>
    </footer>
  );
}
