'use client';

import { useEffect } from 'react';
import AOS from 'aos';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslations } from 'next-intl';

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const t = useTranslations("Index.testimonials");

const testimonials = [
  {
    image: '/dist/img/testimonials/Dr.Mohamed.jpg',
    name: t("testimonials.0.name"),
    title: t("testimonials.0.title"),
    text: t("testimonials.0.text"),
  },
  {
    image: '/dist/img/testimonials/MonayAlaska.jpg',
    name: t("testimonials.1.name"),
    title: t("testimonials.1.title"),
    text: t("testimonials.1.text"),
  },
  {
    image: '/dist/img/testimonials/Mostafa-Abbas.jpg',
    name: t("testimonials.2.name"),
    title: t("testimonials.2.title"),
    text: t("testimonials.2.text"),
  },
];

  return (
    <section id="testimonials" className="testimonials mt-4">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>

        <div className="testimonials-slider" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img src={t.image} className="testimonial-img" alt={t.name} />
                    <h3>{t.name}</h3>
                    <h4>{t.title}</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left" />
                      {t.text}
                      <i className="bx bxs-quote-alt-right quote-icon-right" />
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
