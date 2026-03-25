import Link from "next/link";
import { services, serviceAreas, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="footer-contact"
      className="grain retro-scanline relative border-t-2 border-[var(--sl-gold)]/20 night-sky"
    >
      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl tracking-[0.15em] text-[var(--sl-star)] uppercase">
            {site.name}
          </p>
          <p className="mt-2 font-[family-name:var(--font-script)] font-bold text-lg text-[var(--sl-rose)]">
            {site.tagline}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {serviceAreas.map((a) => (
              <span key={a} className="border border-[var(--sl-gold)]/15 px-2.5 py-0.5 text-[10px] text-white/35">
                {a}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--sl-gold)] uppercase">
            Services
          </p>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.slug}
                  className="text-sm text-white/40 transition hover:text-[var(--sl-star)]"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--sl-gold)] uppercase">
            Company
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/about" className="text-sm text-white/40 transition hover:text-[var(--sl-star)]">
                About
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-sm text-white/40 transition hover:text-[var(--sl-star)]">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-white/40 transition hover:text-[var(--sl-star)]">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/get-pricing" className="text-sm text-[var(--sl-gold)] transition hover:text-[var(--sl-star)]">
                Get Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--sl-gold)] uppercase">
            Reach us
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/40">
            <p>
              <a href={`tel:${site.phoneTel}`} className="transition hover:text-[var(--sl-star)]">
                Call/Text {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="transition hover:text-[var(--sl-star)]">
                {site.email}
              </a>
            </p>
            <p>{site.hours}</p>
            {site.addresses.map((a) => (
              <p key={a.line1}>
                {a.line1}, {a.line2}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-4 h-px bg-[var(--sl-gold)]/10" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} {site.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="#" className="transition hover:text-[var(--sl-star)]">
            Privacy
          </Link>
          <Link href="#" className="transition hover:text-[var(--sl-star)]">
            Terms
          </Link>
          <a href="#main" className="transition hover:text-[var(--sl-star)]">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
