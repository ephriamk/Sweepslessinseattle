"use client";

import { differenceCards } from "@/content/site";

const featured = differenceCards.slice(0, 3);
const remaining = differenceCards.slice(3);

export function DifferenceSection() {
  return (
    <section
      id="difference"
      className="relative overflow-hidden bg-[var(--background)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-4">
        <header className="max-w-2xl" data-aos="fade-up" data-aos-duration="800">
          <p className="text-xs font-bold tracking-[0.25em] text-[var(--sl-red)] uppercase">
            Why choose us
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-[1.0] tracking-wider text-[var(--sl-ink)] uppercase md:text-5xl lg:text-6xl">
            The Sweepsless
            <br />
            <span className="text-[var(--sl-red)]">difference</span>
          </h2>
        </header>

        {/* 3 featured cards — large, visual, breathing room */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:gap-8">
          {featured.map((card, i) => (
            <div
              key={card.id}
              className="card-glow group rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-surface)] p-8 md:p-10"
              data-aos="fade-up"
              data-aos-delay={i * 120}
              data-aos-duration="700"
            >
              <span className="mb-6 block font-[family-name:var(--font-display)] text-5xl text-[var(--sl-red)]/20 md:text-6xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide text-[var(--sl-ink)] uppercase md:text-2xl">
                {card.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.85] text-[var(--sl-muted)]">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Remaining items — compact horizontal strip */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
          {remaining.map((card, i) => (
            <div
              key={card.id}
              className="flex items-start gap-5 rounded-xl border border-[var(--sl-border)] bg-[var(--sl-surface)] p-6"
              data-aos="fade-up"
              data-aos-delay={360 + i * 120}
              data-aos-duration="700"
            >
              <span className="shrink-0 font-[family-name:var(--font-display)] text-3xl text-[var(--sl-red)]/20">
                {String(i + 4).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-lg tracking-wide text-[var(--sl-ink)] uppercase">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.8] text-[var(--sl-muted)]">
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
