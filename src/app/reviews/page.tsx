import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { curatedReviews, reviewsHeading } from "@/content/site";
import { JsonLd } from "@/components/JsonLd";
import { reviewsJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what neighbors say about Sweepsless in Seattle. Real, unedited feedback from clients across Kirkland, Bellevue, Woodinville, Redmond, and more.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={reviewsJsonLd()} />
      <SiteHeader />
      <main id="main" className="flex-1">
        <PageHero
          title={reviewsHeading.title}
          subtitle="Real feedback from real neighbors. No edits, no cherry-picking."
        />

        <section className="bg-[var(--background)] py-24 md:py-36">
          <div className="mx-auto max-w-5xl px-4">
            <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
              {curatedReviews.map((r, i) => (
                <article
                  key={r.name}
                  className="card-glow mb-6 break-inside-avoid rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)] p-8"
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                >
                  <p className="text-base leading-[1.9] text-[var(--foreground)]">
                    &ldquo;{r.excerpt}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-[var(--sl-border)] pt-5">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--sl-ink)] font-[family-name:var(--font-display)] text-sm text-[var(--sl-red)]"
                      aria-hidden
                    >
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--sl-ink)]">
                        {r.name}
                      </p>
                      <p className="text-xs text-[var(--sl-muted)]">
                        {r.neighborhood}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
