"use client";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="grain relative overflow-hidden bg-[var(--sl-ink)] pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,var(--sl-red)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,var(--sl-accent)_0%,transparent_40%)]" />
      </div>
      <div className="relative mx-auto max-w-5xl px-4 page-enter">
        <div className="max-w-3xl">
          <h1 className="font-[family-name:var(--font-display)] text-5xl leading-[0.95] tracking-wider text-[var(--background)] uppercase md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--background)]/60">
              {subtitle}
            </p>
          )}
          <div className="mt-8 h-px w-16 bg-[var(--sl-red)]" />
        </div>
        {children}
      </div>
    </section>
  );
}
