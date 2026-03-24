import Link from "next/link";
import { services, serviceAreas, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      id="footer-contact"
      className="grain relative border-t border-white/10 bg-[var(--sl-ink)]"
    >
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl tracking-[0.15em] text-[var(--background)] uppercase">
            {site.name}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--background)]/40">
            {site.tagline}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {serviceAreas.slice(0, 6).map((a) => (
              <span key={a} className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] text-[var(--background)]/40">
                {a}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--background)]/60 uppercase">
            Services
          </p>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.slug}
                  className="text-sm text-[var(--background)]/50 transition hover:text-[var(--background)]"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--background)]/60 uppercase">
            Company
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/about" className="text-sm text-[var(--background)]/50 transition hover:text-[var(--background)]">
                About
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-sm text-[var(--background)]/50 transition hover:text-[var(--background)]">
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-[var(--background)]/50 transition hover:text-[var(--background)]">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/get-pricing" className="text-sm text-[var(--sl-red)] transition hover:text-[var(--background)]">
                Get Pricing
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-[var(--background)]/60 uppercase">
            Reach us
          </p>
          <div className="mt-4 space-y-3 text-sm text-[var(--background)]/50">
            <p>
              <a href={`tel:${site.phoneTel}`} className="transition hover:text-[var(--background)]">
                Call/Text {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="transition hover:text-[var(--background)]">
                {site.email}
              </a>
            </p>
            <p className="text-[var(--background)]/50">{site.hours}</p>
            {site.addresses.map((a) => (
              <p key={a.line1} className="text-[var(--background)]/50">
                {a.line1}, {a.line2}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-4 h-px bg-white/5" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-[var(--background)]/40 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} {site.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="#" className="transition hover:text-[var(--background)]">
            Privacy
          </Link>
          <Link href="#" className="transition hover:text-[var(--background)]">
            Terms
          </Link>
          <a href="#main" className="transition hover:text-[var(--background)]">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
