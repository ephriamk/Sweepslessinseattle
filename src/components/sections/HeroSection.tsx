"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { hero, trustBullets } from "@/content/site";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="hero" className="relative">
      <div className="grain relative min-h-[100svh] overflow-hidden bg-[var(--sl-ink)]">
        <Image
          src={hero.videoPoster}
          alt="A warm, beautifully styled living room with soft golden light"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--sl-ink)]/60 via-transparent to-[var(--sl-ink)]" />

        <div className="relative flex min-h-[100svh] flex-col justify-center px-4">
          <div className="mx-auto w-full max-w-6xl">
            <div className="max-w-3xl">
              {/* "Cleaning Made Charming" */}
              <div className="sparkle-container">
                <span aria-hidden className="sparkle-star" />
                <span aria-hidden className="sparkle-star" />
                <span aria-hidden className="sparkle-star" />
                <span aria-hidden className="sparkle-star" />
                <span aria-hidden className="sparkle-star" />
                <div className="hero-fade-in">
                  <p className="text-lg italic text-[var(--sl-red)] sm:text-xl">
                    {hero.titleLine1}
                  </p>
                  <h1 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-wide text-[var(--background)] uppercase">
                    {hero.titleAccent}
                  </h1>
                </div>
              </div>

              <div className="hero-fade-in-delay mt-8 h-px w-20 bg-[var(--sl-red)]" />

              {/* Subtitle */}
              <p className="hero-subtitle-roll mt-8 max-w-2xl font-[family-name:var(--font-display)] text-lg tracking-[0.25em] uppercase text-[var(--background)]/70 sm:text-xl md:text-2xl">
                {hero.subtitle}
              </p>

              <div className="hero-cta-fade mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="/get-pricing"
                  className="btn-arrow rounded-none border-2 border-[var(--sl-red)] bg-[var(--sl-red)] px-8 py-4 font-[family-name:var(--font-display)] text-base tracking-[0.15em] text-[var(--background)] uppercase transition hover:bg-transparent hover:text-[var(--sl-red)]"
                >
                  {hero.cta} <span aria-hidden>&rarr;</span>
                </Link>
                <a
                  href="#services"
                  className="text-sm tracking-wide text-[var(--background)]/50 transition hover:text-[var(--background)]"
                >
                  Explore services
                </a>
              </div>
            </div>

            {/* Floating testimonial */}
            <div className="mt-16 max-w-md lg:absolute lg:right-8 lg:bottom-32 lg:mt-0 xl:right-16">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={
                  reducedMotion
                    ? false
                    : { delay: 6000, disableOnInteraction: true }
                }
                className="hero-testimonial-swiper pb-8"
              >
                {hero.testimonials.map((t) => (
                  <SwiperSlide key={t.author}>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                      <StarRow />
                      <p className="mt-3 text-sm leading-[1.8] text-[var(--background)]/60">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <p className="mt-3 text-xs font-medium text-[var(--sl-red)]">
                        &mdash; {t.author}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-[var(--sl-border)] bg-[var(--background)]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
          {trustBullets.map((b) => (
            <div key={b.id} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--sl-red)]/10 text-xs text-[var(--sl-red)]">
                &#10003;
              </span>
              <div className="min-w-0">
                <span className="block text-sm font-bold leading-snug text-[var(--sl-ink)]">
                  {b.label}
                </span>
                <span className="block text-xs leading-snug text-[var(--sl-muted)]">
                  {b.short}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarRow() {
  return (
    <ul className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <li key={i}>
          <svg width="14" height="13" viewBox="0 0 24.814 23.599" aria-hidden>
            <path
              d="M147.17,629.89,150.1,638.9h9.478l-7.668,5.571,2.929,9.014-7.668-5.571-7.668,5.571,2.929-9.014-7.668-5.571h9.478Z"
              transform="translate(-134.763 -629.89)"
              fill="var(--sl-red)"
            />
          </svg>
        </li>
      ))}
    </ul>
  );
}
