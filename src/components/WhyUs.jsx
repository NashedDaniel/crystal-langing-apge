'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslations } from 'next-intl';

export default function WhyUs() {
  const t = useTranslations("Index");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 align-items-stretch video-box"
            style={{
              backgroundImage: 'url("/dist/img/home-erp.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            &nbsp;
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-stretch">
            <div className="content colr-contnt">
              <h3>
                {t("erp.title")} <strong>{t("erp.subtitle")}</strong>
              </h3>
              <p>
               {t("erp.intro")}
              </p>
              <br />
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1" href="#">
                        {t("erp.question")}
                  </a>
                  <div
                    id="accordion-list-1"
                    className="collapse show"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                        {t("erp.answer")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}