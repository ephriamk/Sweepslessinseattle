"use client";

import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { curatedReviews, reviewsHeading } from "@/content/site";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export function ReviewsSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="reviews"
      className="warm-glow bg-[var(--sl-wash)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-6 max-w-2xl" data-aos="fade-up" data-aos-duration="800">
          <span className="retro-eyebrow">{reviewsHeading.eyebrow}</span>
          <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl leading-[1.0] tracking-wider text-[var(--sl-ink)] uppercase md:text-5xl">
            {reviewsHeading.title}
          </h2>
          <p className="mt-3 font-[family-name:var(--font-script)] font-bold text-xl text-[var(--sl-rose)]">
            Real neighbors, real words
          </p>
        </header>

        {/* Gold divider */}
        <div className="ornament-divider mb-12" aria-hidden>
          <span className="text-sm text-[var(--sl-gold)]">&#9829;</span>
        </div>

        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            autoplay={
              reducedMotion
                ? false
                : { delay: 5000, disableOnInteraction: true }
            }
            loop
            className="reviews-swiper pb-14"
          >
            {curatedReviews.map((r) => (
              <SwiperSlide key={r.name}>
                <article className="retro-card flex h-full flex-col rounded-none p-8">
                  {/* Decorative quote mark */}
                  <span className="block font-[family-name:var(--font-script)] text-4xl leading-none text-[var(--sl-gold)]/30" aria-hidden>
                    &ldquo;
                  </span>
                  <p className="mt-2 flex-1 text-[15px] leading-[1.9] text-[var(--foreground)]">
                    {r.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t-2 border-[var(--sl-gold)]/15 pt-5">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--sl-ink)] font-[family-name:var(--font-display)] text-sm text-[var(--sl-gold)]"
                      aria-hidden
                    >
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--sl-ink)]">
                        {r.name}
                      </p>
                      <p className="text-xs text-[var(--sl-muted)]">
                        {r.neighborhood}
                      </p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-4 text-center" data-aos="fade-up" data-aos-delay="200">
          <Link
            href="/reviews"
            className="btn-arrow text-sm font-bold tracking-[0.1em] text-[var(--sl-gold)] uppercase transition hover:text-[var(--sl-accent)]"
          >
            Read all reviews <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
