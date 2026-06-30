"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { TESTIMONIALS } from "@/constants/site";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-section py-24 lg:py-32">
      <div className="container">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary">Testimonials</span>
          <h2 className="mt-4 text-balance text-4xl font-extrabold leading-tight tracking-tighter2 text-primary lg:text-5xl">
            What our clients say
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            className="!pb-12"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="glass h-full rounded-3xl p-8 shadow-glass">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-cta text-cta" />
                    ))}
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-ink/75">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-6">
                    <p className="font-bold text-primary">{t.name}</p>
                    <p className="text-sm text-ink/50">{t.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
