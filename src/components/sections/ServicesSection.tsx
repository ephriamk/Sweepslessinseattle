"use client";

import Image from "next/image";
import Link from "next/link";
import { services, servicesIntro } from "@/content/site";
import { FloatingStars } from "@/components/FloatingElements";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden night-sky py-24 md:py-36"
    >
      <div className="grain absolute inset-0" />
      <div className="retro-scanline absolute inset-0" />
      <FloatingStars count={10} />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <header className="max-w-2xl" data-aos="fade-up" data-aos-duration="800">
          <span className="retro-eyebrow">{servicesIntro.eyebrow}</span>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[1.0] tracking-wider text-[var(--sl-star)] uppercase md:text-5xl lg:text-6xl">
            {servicesIntro.title}
          </h2>
          <p className="mt-4 font-[family-name:var(--font-script)] font-bold text-xl text-[var(--sl-rose)]">
            Every service designed around magic
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/40">
            {servicesIntro.description}
          </p>
        </header>

        {/* Gold ornamental divider */}
        <div className="ornament-divider my-12" aria-hidden>
          <span className="text-sm text-[var(--sl-gold)]">&#10038;</span>
        </div>

        {/* Stacked service cards */}
        <div className="space-y-8">
          {services.map((s, i) => (
            <article
              key={s.id}
              className="group overflow-hidden border-2 border-[var(--sl-gold)]/15 bg-[var(--sl-night)]/40 backdrop-blur-sm transition-colors hover:border-[var(--sl-gold)]/30 hover:bg-[var(--sl-night)]/60"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-duration="800"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[360px]">
                  <Image
                    src={s.image}
                    alt={`${s.name} — Sweepsless in Seattle`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--sl-night)]/60 via-transparent to-transparent md:bg-gradient-to-l md:from-[var(--sl-night)]/80 md:via-transparent" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="retro-eyebrow inline-block w-fit">
                    {s.subtitle}
                  </p>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl tracking-wide text-[var(--sl-star)] uppercase md:text-3xl">
                    {s.navLabel}
                  </h3>
                  <blockquote className="mt-5 border-l-2 border-[var(--sl-gold)]/30 pl-4">
                    <p className="font-[family-name:var(--font-script)] font-bold text-base text-[var(--sl-rose)]/60">
                      &ldquo;{s.quote}&rdquo;
                    </p>
                  </blockquote>
                  <p className="mt-5 text-[15px] leading-[1.85] text-white/50">
                    {s.blurb}
                  </p>
                  <div className="mt-8">
                    <Link
                      href={s.slug}
                      className="btn-arrow text-sm font-bold tracking-[0.15em] text-[var(--sl-gold)] uppercase transition hover:text-[var(--sl-star)]"
                    >
                      Learn more <span aria-hidden>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
