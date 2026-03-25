import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { QuoteForm } from "@/components/quote/QuoteForm";
import { site, serviceAreas } from "@/content/site";

export const metadata: Metadata = {
  title: "Get Pricing",
  description:
    "Get a free cleaning estimate from Sweepsless in Seattle. Tell us about your home and we\u2019ll follow up with transparent, no-surprise pricing.",
  alternates: { canonical: "/get-pricing" },
};

export default function GetPricingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <PageHero
          title="Get Pricing"
          subtitle={"Tell us about your home and we\u2019ll follow up with a clear, no-surprise estimate."}
        />

        <section className="bg-[var(--background)] py-24 md:py-36">
          <div className="mx-auto max-w-5xl px-4">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
              <div data-aos="fade-right">
                <QuoteForm />
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
