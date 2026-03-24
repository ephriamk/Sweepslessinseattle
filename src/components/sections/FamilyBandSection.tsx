"use client";

import Image from "next/image";
import Link from "next/link";
import { familyBand } from "@/content/site";

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
      <div className="absolute inset-0 bg-[var(--sl-ink)]/80" />
      <div className="grain absolute inset-0" />

      <div className="relative flex min-h-[70vh] items-center">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-36">
          <div className="max-w-2xl" data-aos="fade-up" data-aos-duration="900">
            <h2 className="font-[family-name:var(--font-display)] text-4xl leading-[1.0] tracking-wider text-[var(--background)] uppercase md:text-5xl lg:text-6xl">
              {familyBand.title}
            </h2>
            <div className="mt-6 h-px w-16 bg-[var(--sl-red)]" />
            <p className="mt-8 text-lg leading-[1.9] text-[var(--background)]/70">
              {familyBand.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/get-pricing"
                className="btn-arrow border-2 border-[var(--sl-red)] bg-[var(--sl-red)] px-8 py-4 font-[family-name:var(--font-display)] text-sm tracking-[0.15em] text-[var(--background)] uppercase transition hover:bg-transparent hover:text-[var(--sl-red)]"
              >
                {familyBand.cta} <span aria-hidden>&rarr;</span>
              </Link>
              <Link
                href="/about"
                className="text-sm font-bold tracking-[0.1em] text-[var(--background)]/60 uppercase transition hover:text-[var(--background)]"
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
