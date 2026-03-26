"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { hero, trustBullets } from "@/content/site";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { FloatingStars } from "@/components/FloatingElements";

export function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="hero" className="relative">
      {/* ── Night-sky banner — full viewport, flex centered ── */}
      <div className="grain relative min-h-[100svh] overflow-hidden night-sky flex flex-col justify-center px-6 py-20">
        {/* Background image for visual texture */}
        <Image
          src={hero.videoPoster}
          alt=""
          fill
          className="object-cover opacity-15 pointer-events-none"
          sizes="100vw"
          priority
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C0A14]/80 via-[#14102A]/50 to-[var(--sl-night)] pointer-events-none" />

        {/* Subtle twinkling stars */}
        <FloatingStars count={25} />

        {/* ── Content ── */}
        <div className="relative z-10 mx-auto w-full max-w-5xl lg:max-w-3xl">
          {/* Space Needle — left of content, full height */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <div
            className="absolute right-0 top-0 h-full w-[350px] needle-fade sm:right-auto sm:-left-[50px] sm:w-[600px]"
            aria-hidden
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-contain mix-blend-screen opacity-25"
              style={{ filter: "contrast(3) brightness(0.8)" }}
            >
              <source src="/space-needle-video.webm" type="video/webm" />
              <source src="/space-needle-video.mov" type="video/quicktime" />
            </video>
          </div>
          {/* Eyebrow — simple italic text */}
          <p className="hero-fade-in italic text-lg text-[var(--sl-rose)] sm:text-xl drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            {hero.titleLine1}
          </p>

          {/* Main heading with sparkles */}
          <div className="sparkle-container mt-2">
            <span aria-hidden className="sparkle-star" />
            <span aria-hidden className="sparkle-star" />
            <span aria-hidden className="sparkle-star" />
            <span aria-hidden className="sparkle-star" />
            <span aria-hidden className="sparkle-star" />
            <span aria-hidden className="sparkle-star" />
            <span aria-hidden className="sparkle-star" />
            <span aria-hidden className="sparkle-star" />
            <span aria-hidden className="sparkle-star" />
            <h1 className="hero-fade-in font-[family-name:var(--font-display)] text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-wide text-[var(--sl-surface)] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" style={{ WebkitTextStroke: "1px rgba(0,0,0,0.3)" }}>
              {hero.titleAccent}
            </h1>
          </div>

          {/* Gold ornamental divider */}
          <div className="hero-fade-in-delay mt-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--sl-gold)]" />
            <span className="text-xs text-[var(--sl-gold)]" aria-hidden>&#10038;</span>
            <span className="h-px w-10 bg-[var(--sl-gold)]" />
          </div>

          {/* Subtitle in script font */}
          <p className="hero-subtitle-roll mt-4 max-w-md font-[family-name:var(--font-script)] font-bold text-2xl text-[var(--sl-gold)] sm:text-3xl" style={{ WebkitTextStroke: "0.5px var(--sl-gold)", textShadow: "0 0 10px rgba(197,153,62,0.4), 0 2px 4px rgba(0,0,0,0.8)" }}>
            {hero.subtitle}
          </p>

          {/* CTA row */}
          <div className="hero-cta-fade mt-6 flex flex-wrap items-center gap-5">
            <Link
              href="/get-pricing"
              className="btn-arrow border-2 border-[var(--sl-gold)] bg-[var(--sl-gold)] px-7 py-3 font-[family-name:var(--font-display)] text-sm tracking-[0.15em] text-[var(--sl-night)] uppercase transition hover:bg-transparent hover:text-[var(--sl-gold)]"
            >
              {hero.cta} <span aria-hidden>&rarr;</span>
            </Link>
            <a
              href="#services"
              className="text-sm tracking-wide text-white/50 transition hover:text-white/80"
            >
              Explore services
            </a>
          </div>
        </div>

        {/* ── Testimonial carousel — desktop only, bottom-right ── */}
        <div className="hidden lg:block absolute right-8 bottom-20 z-10 w-80 xl:right-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
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
                <blockquote className="bg-white/[0.07] backdrop-blur-sm border border-white/10 p-5">
                  <StarRow />
                  <p className="mt-2 text-sm leading-relaxed text-white/60 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-3 text-xs font-medium text-[var(--sl-gold)]">
                    &mdash; {t.author}
                  </footer>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* ── Trust strip ── */}
      <div className="border-t-2 border-[var(--sl-gold)]/20 bg-[var(--background)]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-6 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
          {trustBullets.map((b) => (
            <div key={b.id} className="flex items-start gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--sl-gold)]/10 text-xs text-[var(--sl-gold)]">
                &#10038;
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
              fill="var(--sl-gold)"
            />
          </svg>
        </li>
      ))}
    </ul>
  );
}
