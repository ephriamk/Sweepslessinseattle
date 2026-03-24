"use client";

import Image from "next/image";
import Link from "next/link";
import { services, servicesIntro } from "@/content/site";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[var(--sl-ink)] py-24 md:py-36"
    >
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-4">
        <header className="max-w-2xl" data-aos="fade-up" data-aos-duration="800">
          <p className="text-xs font-bold tracking-[0.25em] text-[var(--sl-red)] uppercase">
            {servicesIntro.eyebrow}
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-[1.0] tracking-wider text-[var(--background)] uppercase md:text-5xl lg:text-6xl">
            {servicesIntro.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--background)]/50">
            {servicesIntro.description}
          </p>
        </header>

        {/* Stacked service cards */}
        <div className="mt-20 space-y-8">
          {services.map((s, i) => (
            <article
              key={s.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--sl-ink)]/60 via-transparent to-transparent md:bg-gradient-to-l md:from-[var(--sl-ink)]/80 md:via-transparent" />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="text-xs font-bold tracking-[0.2em] text-[var(--sl-red)] uppercase">
                    {s.subtitle}
                  </p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-wide text-[var(--background)] uppercase md:text-3xl">
                    {s.name}
                  </h3>
                  <blockquote className="mt-5 border-l-2 border-[var(--sl-red)]/30 pl-4">
                    <p className="font-[family-name:var(--font-script)] text-lg text-[var(--background)]/40">
                      &ldquo;{s.quote}&rdquo;
                    </p>
                  </blockquote>
                  <p className="mt-5 text-[15px] leading-[1.85] text-[var(--background)]/60">
                    {s.blurb}
                  </p>
                  <div className="mt-8">
                    <Link
                      href={s.slug}
                      className="btn-arrow text-sm font-bold tracking-[0.15em] text-[var(--sl-red)] uppercase transition hover:text-[var(--background)]"
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
