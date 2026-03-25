"use client";

import Image from "next/image";
import Link from "next/link";
import { familyBand } from "@/content/site";
import { FloatingStars, FloatingHearts, EmpireStateSilhouette } from "@/components/FloatingElements";

export function FamilyBandSection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src={familyBand.image}
        alt="A welcoming home serviced by Sweepsless in Seattle"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 night-sky opacity-85" />
      <div className="grain absolute inset-0" />
      <div className="retro-scanline absolute inset-0" />

      {/* Floating romantic elements */}
      <FloatingStars count={8} />
      <FloatingHearts count={3} />
      <EmpireStateSilhouette className="left-[5%] h-[200px] text-white/[0.03] hidden lg:block" />

      <div className="relative z-10 flex min-h-[70vh] items-center">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-36">
          <div className="max-w-2xl" data-aos="fade-up" data-aos-duration="900">
            <span className="retro-eyebrow">Our promise</span>
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[1.0] tracking-wider text-[var(--sl-star)] uppercase md:text-5xl lg:text-6xl">
              {familyBand.title}
            </h2>
            {/* Gold ornamental line */}
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px w-12 bg-[var(--sl-gold)]" />
              <span className="text-xs text-[var(--sl-gold)]" aria-hidden>&#9829;</span>
              <span className="h-px w-12 bg-[var(--sl-gold)]" />
            </div>
            <p className="mt-8 text-lg leading-[1.9] text-white/60">
              {familyBand.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/get-pricing"
                className="btn-arrow border-2 border-[var(--sl-gold)] bg-[var(--sl-gold)] px-8 py-4 font-[family-name:var(--font-display)] text-sm tracking-[0.15em] text-[var(--sl-night)] uppercase transition hover:bg-transparent hover:text-[var(--sl-gold)]"
              >
                {familyBand.cta} <span aria-hidden>&rarr;</span>
              </Link>
              <Link
                href="/about"
                className="text-sm font-bold tracking-[0.1em] text-white/50 uppercase transition hover:text-white"
              >
                Our story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
