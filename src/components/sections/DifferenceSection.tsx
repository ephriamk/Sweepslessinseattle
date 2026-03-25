"use client";

import { differenceCards } from "@/content/site";
import { OrnamentDivider } from "@/components/FloatingElements";

const featured = differenceCards.slice(0, 3);
const remaining = differenceCards.slice(3);

const cardIcons = ["&#9733;", "&#9829;", "&#10024;", "&#9826;", "&#10038;"];

export function DifferenceSection() {
  return (
    <section
      id="difference"
      className="warm-glow relative overflow-hidden bg-[var(--background)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-4">
        <header className="max-w-2xl" data-aos="fade-up" data-aos-duration="800">
          <span className="retro-eyebrow">Why choose us</span>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[1.0] tracking-wider text-[var(--sl-ink)] uppercase md:text-5xl lg:text-6xl">
            The Sweepsless
            <br />
            <span className="text-[var(--sl-gold)]">difference</span>
          </h2>
          <p className="mt-3 font-[family-name:var(--font-script)] font-bold text-xl text-[var(--sl-rose)]">
            ...like magic, not a chemistry lab
          </p>
        </header>

        <OrnamentDivider />

        {/* 3 featured cards — retro double-border style */}
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {featured.map((card, i) => (
            <div
              key={card.id}
              className="retro-card group rounded-none p-8 md:p-10"
              data-aos="fade-up"
              data-aos-delay={i * 120}
              data-aos-duration="700"
            >
              <span
                className="mb-4 block text-2xl text-[var(--sl-gold)]/40"
                aria-hidden
                dangerouslySetInnerHTML={{ __html: cardIcons[i] }}
              />
              <span className="mb-2 block font-[family-name:var(--font-display)] text-5xl text-[var(--sl-gold)]/15 md:text-6xl">
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

        {/* Remaining items — compact with gold accent */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 md:gap-8">
          {remaining.map((card, i) => (
            <div
              key={card.id}
              className="flex items-start gap-5 rounded-none border-2 border-[var(--sl-border)] bg-[var(--sl-surface)] p-6"
              data-aos="fade-up"
              data-aos-delay={360 + i * 120}
              data-aos-duration="700"
            >
              <span className="shrink-0 text-xl text-[var(--sl-gold)]/40" aria-hidden dangerouslySetInnerHTML={{ __html: cardIcons[i + 3] }} />
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
