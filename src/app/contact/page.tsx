import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { contactPage, site, serviceAreas } from "@/content/site";
import { JsonLd } from "@/components/JsonLd";
import { contactPageJsonLd } from "@/lib/json-ld";
import { QuoteForm } from "@/components/quote/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free cleaning estimate from Sweepsless in Seattle. Call, text, or fill out our form. Serving Kirkland, Bellevue, Woodinville, Redmond, and the greater Eastside.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageJsonLd()} />
      <SiteHeader />
      <main id="main" className="flex-1">
        <PageHero title={contactPage.heroTitle} subtitle={contactPage.heroSubtitle} />

        <section className="bg-[var(--background)] py-24 md:py-36">
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
              <div data-aos="fade-right">
                <h2 className="font-[family-name:var(--font-display)] text-2xl tracking-wider text-[var(--sl-ink)] uppercase md:text-3xl">
                  Send us a message
                </h2>
                <p className="mt-4 text-base leading-[1.85] text-[var(--sl-muted)]">
                  {contactPage.intro}
                </p>
                <div className="mt-8">
                  <QuoteForm />
                </div>
              </div>

              <div data-aos="fade-left" data-aos-delay="120" className="space-y-6">
                <a
                  href={`tel:${site.phoneTel}`}
                  className="card-glow flex items-center gap-4 rounded-none border border-[var(--sl-border)] bg-[var(--sl-card)] p-6 transition hover:border-[var(--sl-gold)]/30"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--sl-gold)]/10 text-lg text-[var(--sl-gold)]">
                    &#9742;
                  </span>
                  <div>
                    <span className="block text-sm font-bold text-[var(--sl-ink)]">
                      Call / Text
                    </span>
                    <span className="text-base text-[var(--sl-gold)]">
                      {site.phoneDisplay}
                    </span>
                  </div>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="card-glow flex items-center gap-4 rounded-none border border-[var(--sl-border)] bg-[var(--sl-card)] p-6 transition hover:border-[var(--sl-gold)]/30"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--sl-gold)]/10 text-lg text-[var(--sl-gold)]">
                    &#9993;
                  </span>
                  <div>
                    <span className="block text-sm font-bold text-[var(--sl-ink)]">
                      Questions?
                    </span>
                    <span className="text-base text-[var(--sl-gold)]">
                      {site.email}
                    </span>
                  </div>
                </a>

                <div className="rounded-none border border-[var(--sl-border)] bg-[var(--sl-card)] p-6">
                  <p className="text-sm font-bold text-[var(--sl-ink)]">Hours</p>
                  <p className="mt-2 text-sm text-[var(--sl-muted)]">{site.hours}</p>
                </div>

                <div className="rounded-none border border-[var(--sl-border)] bg-[var(--sl-card)] p-6">
                  <p className="text-sm font-bold text-[var(--sl-ink)]">Address</p>
                  {site.addresses.map((a) => (
                    <p key={a.line1} className="mt-2 text-sm text-[var(--sl-muted)]">
                      {a.line1}, {a.line2}
                    </p>
                  ))}
                </div>

                <div className="rounded-none border border-[var(--sl-border)] bg-[var(--sl-card)] p-6">
                  <p className="text-sm font-bold text-[var(--sl-ink)]">Service area</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {serviceAreas.map((area) => (
                      <span
                        key={area}
                        className="rounded-full border border-[var(--sl-border)] bg-[var(--sl-wash)] px-3 py-1 text-xs text-[var(--sl-ink)]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
