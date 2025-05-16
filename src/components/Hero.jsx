'use client';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocale, useTranslations } from "next-intl";


export default function Hero() {
  const [selectedIndex, setSelectedIndex] = useState(0);
    const t = useTranslations("Index");
  const locale = useLocale(); 
  const isArabic = locale.startsWith('ar');
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


const slides = isArabic ? [
    {
      src:   "/dist/img/Ar/slide-1-ar.jpg",
      title: "Welcome",
      text: "Crystal Soft",
    },
    { src: "/dist/img/Ar/slide-2-ar.jpg" , title: "", text: "" },
    {
      src: "/dist/img/Ar/slide-3-ar.jpg",
      title: "Welcome",
      text: "Crystal Soft",
    },
    { src:  "/dist/img/Ar/slide-4-ar.jpg", title: "", text: "" },
  ] :
  [
    {
      src:  "/dist/img/slide/slide-1.jpg" ,
      title: "Welcome",
      text: "Crystal Soft",
    },
    { src:"/dist/img/slide/slide-2.jpg", title: "", text: "" },
    {
      src: "/dist/img/slide/slide-3.jpg",
      title: "Welcome",
      text: "Crystal Soft",
    },
    { src: "/dist/img/slide/slide-4.jpg", title: "", text: "" },
  ]
  
  return (
    <section id="hero" style={{direction: "ltr"}}>
      <Carousel
        autoPlay
        infiniteLoop
        selectedItem={selectedIndex}
        onChange={setSelectedIndex}
        interval={5000}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        transitionTime={800}
        swipeable
        emulateTouch
        showIndicators={false}
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <button
              onClick={clickHandler}
              className="carousel-control-prev"
              aria-label="Previous Slide"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              ></span>
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <button
              onClick={clickHandler}
              className="carousel-control-next"
              aria-label="Next Slide"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              ></span>
            </button>
          )
        }
      >
    
        {slides.map((slide, i) => (
          <div key={i}>
            <Image
              src={slide.src}
              alt={`Slide ${i + 1}`}
              width={1920}
              height={800}
              layout="responsive"
              priority={i === 0}
            />
            {(slide.title || slide.text) && selectedIndex === i && (
              <div
                key={i} 
                style={{ direction: isArabic ? "rtl" : "ltr" }}
                className="carousel-container animate__animated animate__fadeIn"
              >
                <div className="container">
                  <h2  className="animate__animated animate__fadeInDown" style={{ textAlign: isArabic ? "right" : "left" }}>
                      {t("hero.title_part1")}  <span>  {t("hero.title_part2")} </span>
                  </h2>
                  <p className="animate__animated animate__fadeInUp" style={{ textAlign: isArabic ? "right" : "left" }}>
                    <strong>{t("hero.title_part2")} </strong> 
                    {t("hero.description")}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))
      }
      </Carousel>

      <ul className="carousel-indicators">
        {slides.map((_, index) => (
          <li
            key={index}
            className={selectedIndex === index ? "active mx-1" : "mx-1"}
            aria-current={selectedIndex === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </ul>
    </section>
  );
}
