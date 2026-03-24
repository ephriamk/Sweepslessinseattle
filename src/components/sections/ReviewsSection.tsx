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
      className="bg-[var(--sl-wash)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-16 max-w-2xl" data-aos="fade-up" data-aos-duration="800">
          <p className="text-xs font-bold tracking-[0.25em] text-[var(--sl-red)] uppercase">
            {reviewsHeading.eyebrow}
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-[1.0] tracking-wider text-[var(--sl-ink)] uppercase md:text-5xl">
            {reviewsHeading.title}
          </h2>
        </header>

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
                <article className="card-glow flex h-full flex-col rounded-2xl border border-[var(--sl-border)] bg-[var(--sl-card)] p-8">
                  <p className="flex-1 text-[15px] leading-[1.9] text-[var(--foreground)]">
                    &ldquo;{r.excerpt}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-[var(--sl-border)] pt-5">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--sl-ink)] font-[family-name:var(--font-display)] text-sm text-[var(--sl-red)]"
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
            className="btn-arrow text-sm font-bold tracking-[0.1em] text-[var(--sl-red)] uppercase transition hover:text-[var(--sl-accent)]"
          >
            Read all reviews <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
