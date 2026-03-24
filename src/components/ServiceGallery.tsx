"use client";

import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface ServiceGalleryProps {
  images: readonly string[];
  alt: string;
}

export function ServiceGallery({ images, alt }: ServiceGalleryProps) {
  const reducedMotion = useReducedMotion();

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={
        reducedMotion
          ? false
          : { delay: 4000, disableOnInteraction: true }
      }
      loop
      className="service-gallery-swiper h-full w-full rounded-2xl"
    >
      {images.map((src, i) => (
        <SwiperSlide key={src}>
          <div className="relative aspect-[4/5] w-full">
            <Image
              src={src}
              alt={`${alt} — photo ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={i === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
