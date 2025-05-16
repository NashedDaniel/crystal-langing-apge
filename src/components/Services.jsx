'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import { useTranslations } from 'next-intl';


export default function Services() {
  const t = useTranslations("Index");

useEffect(() => {
  AOS.init({ duration: 500, once: true });
  AOS.refresh();
}, []);

  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("crystalSoft")}</h2>
          <p>{t('featuresTitle')}</p>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-dribbble"></i>
              </div>
              <h4><a>{t('features.integratedSystem.title')}</a></h4>
              <p>{t('features.integratedSystem.description')}</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" >
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-database"></i>
              </div>
              <h4><a>{t('features.dataQuality.title')}</a></h4>
              <p>{t('features.dataQuality.description')}</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer"></i>
              </div>
              <h4><a>{t('features.saveTime.title')}</a></h4>
              <p>{t('features.saveTime.description')}</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in">
            <div className="icon-box">
              <div className="icon">
                <i className="bi bi-cpu"></i>
              </div>
              <h4><a>{t('features.easeOfUse.title')}</a></h4>
              <p>{t('features.easeOfUse.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
