"use client";

import { useState } from "react";
import clsx from "clsx";
import { faqItems } from "@/content/site";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="warm-glow bg-[var(--background)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-3xl px-4">
        <header data-aos="fade-up" data-aos-duration="800">
          <span className="retro-eyebrow">Common questions</span>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[1.0] tracking-wider text-[var(--sl-ink)] uppercase md:text-5xl">
            Frequently asked
            <br />
            <span className="text-[var(--sl-gold)]">questions</span>
          </h2>
          <p className="mt-3 font-[family-name:var(--font-script)] font-bold text-xl text-[var(--sl-rose)]">
            Everything you need to know
          </p>
        </header>

        {/* Ornamental divider */}
        <div className="ornament-divider mt-8 mb-6" aria-hidden>
          <span className="text-sm text-[var(--sl-gold)]">&#10038;</span>
        </div>

        <dl className="divide-y-2 divide-[var(--sl-gold)]/10" data-aos="fade-up" data-aos-delay="100">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-6">
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span className="text-base font-bold text-[var(--sl-ink)]">
                      {item.question}
                    </span>
                    <span
                      className={clsx(
                        "mt-0.5 shrink-0 text-[var(--sl-gold)] transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                      aria-hidden
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={clsx(
                    "overflow-hidden transition-[max-height,opacity] duration-300",
                    isOpen ? "mt-4 max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <p className="text-[15px] leading-[1.85] text-[var(--sl-muted)]">
                    {item.answer}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
