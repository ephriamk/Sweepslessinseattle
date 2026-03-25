"use client";

import { FloatingStars } from "@/components/FloatingElements";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="grain retro-scanline relative overflow-hidden night-sky pt-32 pb-20 md:pt-40 md:pb-28">
      <FloatingStars count={8} />
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,var(--sl-gold)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,var(--sl-rose)_0%,transparent_40%)]" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-4 page-enter">
        <div className="max-w-3xl">
          <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-wider text-[var(--sl-star)] uppercase md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-xl font-[family-name:var(--font-script)] font-bold text-xl text-[var(--sl-rose)]">
              {subtitle}
            </p>
          )}
          <div className="mt-8 flex items-center gap-3">
            <span className="h-px w-12 bg-[var(--sl-gold)]" />
            <span className="text-xs text-[var(--sl-gold)]" aria-hidden>&#10038;</span>
            <span className="h-px w-12 bg-[var(--sl-gold)]" />
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
