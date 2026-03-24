import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { aboutPage, processSection } from "@/content/site";
import { JsonLd } from "@/components/JsonLd";
import { aboutPageJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sweepsless in Seattle \u2014 a locally owned cleaning company serving Woodinville, Kirkland, Bellevue, and the greater Eastside with non-toxic, plant-based care.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageJsonLd()} />
      <SiteHeader />
      <main id="main" className="flex-1">
        <PageHero title={aboutPage.heroTitle} subtitle={aboutPage.heroSubtitle} />

        <section className="bg-[var(--background)] py-24 md:py-36">
          <div className="mx-auto grid max-w-5xl gap-12 px-4 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg"
              data-aos="fade-right"
            >
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
                alt="The Sweepsless in Seattle team's approach to home care"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div data-aos="fade-left" data-aos-delay="120">
              {aboutPage.story.map((p, i) => (
                <p
                  key={i}
                  className="mt-6 text-base leading-[1.9] text-[var(--foreground)] first:mt-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--sl-wash)] py-24 md:py-36">
          <div className="mx-auto max-w-5xl px-4">
            <header className="mb-14 max-w-2xl" data-aos="fade-up">
              <p className="text-xs font-bold tracking-[0.25em] text-[var(--sl-red)] uppercase">
                What we believe
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-[1.0] tracking-wider text-[var(--sl-ink)] uppercase md:text-5xl">
                Our values
              </h2>
            </header>
            <div className="grid gap-6 sm:grid-cols-2" data-stagger="true">
              {aboutPage.values.map((v, i) => (
                <article
                  key={v.title}
                  className="card-glow rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)] p-8"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-[var(--sl-red)] uppercase">
                    {v.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.85] text-[var(--foreground)]">
                    {v.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--background)] py-24 md:py-36">
          <div className="mx-auto max-w-5xl px-4">
            <header className="mb-14 max-w-2xl" data-aos="fade-up">
              <p className="text-xs font-bold tracking-[0.25em] text-[var(--sl-red)] uppercase">
                {processSection.eyebrow}
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-[1.0] tracking-wider text-[var(--sl-ink)] uppercase md:text-5xl">
                {processSection.title}
              </h2>
              <p className="mt-6 text-base leading-[1.85] text-[var(--sl-muted)]">
                {processSection.intro}
              </p>
            </header>
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {processSection.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="card-glow rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)] p-8"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <span className="font-[family-name:var(--font-display)] text-4xl text-[var(--sl-red)]/20">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg tracking-wide text-[var(--sl-ink)] uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.85] text-[var(--sl-muted)]">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
