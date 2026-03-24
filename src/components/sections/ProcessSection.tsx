"use client";

import Link from "next/link";
import { processSection } from "@/content/site";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-[var(--background)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* Left: header + CTA (sticky on desktop) */}
          <div className="lg:sticky lg:top-32" data-aos="fade-up" data-aos-duration="800">
            <p className="text-xs font-bold tracking-[0.25em] text-[var(--sl-red)] uppercase">
              {processSection.eyebrow}
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-[1.0] tracking-wider text-[var(--sl-ink)] uppercase md:text-5xl">
              {processSection.title}
            </h2>
            <p className="mt-6 text-base leading-[1.85] text-[var(--sl-muted)]">
              {processSection.intro}
            </p>
            <Link
              href={processSection.learnMoreHref}
              className="btn-arrow mt-8 inline-flex border-2 border-[var(--sl-red)] bg-[var(--sl-red)] px-7 py-3.5 font-[family-name:var(--font-display)] text-sm tracking-[0.15em] text-[var(--background)] uppercase transition hover:bg-transparent hover:text-[var(--sl-red)]"
            >
              Get Pricing <span aria-hidden>&rarr;</span>
            </Link>
          </div>

          {/* Right: numbered steps */}
          <div className="space-y-0">
            {processSection.steps.map((step, i) => (
              <div
                key={step.title}
                className="group relative border-l-2 border-[var(--sl-border)] py-8 pl-10"
                data-aos="fade-up"
                data-aos-delay={i * 80}
                data-aos-duration="700"
              >
                <span className="absolute -left-[18px] top-8 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--sl-border)] bg-[var(--background)] font-[family-name:var(--font-display)] text-lg text-[var(--sl-red)] transition-colors group-hover:border-[var(--sl-red)] group-hover:bg-[var(--sl-red)] group-hover:text-[var(--background)]">
                  {i + 1}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-[var(--sl-ink)] uppercase">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.85] text-[var(--sl-muted)]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
