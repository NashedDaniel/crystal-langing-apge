'use client'; 

import { useEffect } from 'react';
import AOS from 'aos';
import { useTranslations } from 'next-intl';


export default function About() {
  const t = useTranslations('Index');
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("crystalSoft")}</h2>
          <p>{t('about.title')}</p>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              <strong>{t('about.description.part1')} </strong> {t("about.description.part2")} <strong> {t("about.description.part1")} </strong> 
               {t("about.description.part3")}
            </p>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <ul>
              <li>
                <i className="ri-check-double-line"></i> {t('about.features.stability')}
              </li>
              <li>
                <i className="ri-check-double-line"></i> {t('about.features.backup')}
              </li>
              <li>
                <i className="ri-check-double-line"></i> {t('about.features.accounting')}
              </li>
              <li>
                <i className="ri-check-double-line"></i>  {t('about.features.erp')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
