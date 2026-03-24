import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHero } from "@/components/layout/PageHero";
import { services } from "@/content/site";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd } from "@/lib/json-ld";
import { ServicePageClient } from "./client";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const svc = services.find((s) => s.id === id);
  if (!svc) return {};
  return {
    title: svc.name,
    description: svc.blurb,
    alternates: { canonical: svc.slug },
  };
}

export default async function ServicePage({ params }: Props) {
  const { id } = await params;
  const svc = services.find((s) => s.id === id);
  if (!svc) notFound();

  const otherServices = services.filter((s) => s.id !== id);
  const hasAddOns = "addOns" in svc && svc.addOns;

  return (
    <>
      <JsonLd data={serviceJsonLd(svc)} />
      <SiteHeader />
      <main id="main" className="flex-1">
        <PageHero title={svc.name} subtitle={svc.subtitle} />

        <section className="bg-[var(--background)] py-24 md:py-36">
          <div className="mx-auto grid max-w-5xl gap-12 px-4 lg:grid-cols-2 lg:items-start">
            <div data-aos="fade-right">
              <blockquote className="border-l-2 border-[var(--sl-red)] pl-5">
                <p className="font-[family-name:var(--font-script)] text-xl leading-relaxed text-[var(--foreground)]">
                  &ldquo;{svc.quote}&rdquo;
                </p>
                <cite className="mt-3 block text-sm not-italic text-[var(--sl-muted)]">
                  &mdash; {svc.quoteAttr}
                </cite>
              </blockquote>

              <p className="mt-10 text-base leading-[1.9] text-[var(--foreground)]">
                {svc.longDescription}
              </p>
              <ServicePageClient />
            </div>
            <div
              className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg"
              data-aos="fade-left"
              data-aos-delay="120"
            >
              <Image
                src={svc.image}
                alt={`${svc.name} cleaning service by Sweepsless in Seattle`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </section>

        <section className="bg-[var(--sl-wash)] py-24 md:py-36">
          <div className="mx-auto max-w-5xl px-4">
            <h2
              className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-[var(--sl-ink)] uppercase md:text-4xl"
              data-aos="fade-up"
            >
              What&rsquo;s included
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {svc.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base leading-[1.85] text-[var(--foreground)]"
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sl-red)]/10 text-xs text-[var(--sl-red)]">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {hasAddOns && (
          <section className="grain relative overflow-hidden bg-[var(--sl-ink)] py-24 md:py-36">
            <div className="relative mx-auto max-w-5xl px-4">
              <h2
                className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-[var(--sl-red)] uppercase md:text-4xl"
                data-aos="fade-up"
              >
                The &ldquo;Magic&rdquo; Add-Ons
              </h2>
              <p className="mt-3 text-sm text-[var(--background)]/40" data-aos="fade-up" data-aos-delay="50">
                Included with every Observation Deck booking
              </p>
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {svc.addOns.map((addon, i) => (
                  <article
                    key={addon.name}
                    className="card-glow rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm"
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-[var(--sl-red)] uppercase">
                      {addon.name}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.85] text-[var(--background)]/60">
                      {addon.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-[var(--background)] py-24 md:py-36">
          <div className="mx-auto max-w-5xl px-4">
            <h2
              className="font-[family-name:var(--font-display)] text-3xl tracking-wider text-[var(--sl-ink)] uppercase md:text-4xl"
              data-aos="fade-up"
            >
              Other services
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {otherServices.map((s, i) => (
                <Link
                  key={s.id}
                  href={s.slug}
                  className="card-glow group relative overflow-hidden rounded-2xl border border-[var(--sl-border)]"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={s.image}
                      alt={`${s.name} \u2014 Sweepsless in Seattle`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--sl-ink)]/80 to-transparent" />
                    <div className="absolute right-0 bottom-0 left-0 p-6">
                      <p className="text-xs font-bold tracking-[0.2em] text-[var(--sl-red)] uppercase">
                        {s.subtitle}
                      </p>
                      <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl tracking-wide text-[var(--background)] uppercase">
                        {s.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
