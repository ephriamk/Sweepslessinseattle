"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { hero, trustBullets } from "@/content/site";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const subtitleWords = hero.subtitle.split(" ");

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="hero" className="relative">
      {/* Full-bleed cinematic hero */}
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
              <p
                className="hero-fade-in font-[family-name:var(--font-script)] text-xl text-[var(--sl-red)] sm:text-2xl"
              >
                {hero.titleLine1}
              </p>
              <h1
                className="hero-fade-in-delay mt-2 font-[family-name:var(--font-display)] text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-wide text-[var(--background)] uppercase"
              >
                {hero.titleAccent}
              </h1>

              <div className="mt-8 h-px w-20 bg-[var(--sl-red)]" />

              <p className="word-reveal mt-8 max-w-xl text-lg leading-relaxed text-[var(--background)]/70 sm:text-xl">
                {subtitleWords.map((word, i) => (
                  <span
                    key={i}
                    style={reducedMotion ? undefined : { animationDelay: `${1.0 + i * 0.1}s` }}
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
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
        <div className="scroll-snap-x mx-auto flex max-w-6xl gap-8 overflow-x-auto px-4 py-8 sm:flex-wrap sm:justify-center sm:gap-10 sm:overflow-visible lg:justify-between">
          {trustBullets.map((b) => (
            <div
              key={b.id}
              className="flex shrink-0 items-center gap-3"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--sl-red)]/10 text-xs text-[var(--sl-red)]">
                &#10003;
              </span>
              <div>
                <span className="block text-sm font-bold text-[var(--sl-ink)]">
                  {b.label}
                </span>
                <span className="text-xs text-[var(--sl-muted)]">
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
