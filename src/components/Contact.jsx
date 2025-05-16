'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import { useTranslations } from 'next-intl';


export default function Contact() {
    const t = useTranslations("Index.Contact");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact" className="contact section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{t("company")}</h2>
          <p>{t("title")}</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-12">
                <div className="info-box">
                  <i className="bx bx-map"></i>
                  <h3>{t("addressTitle")}</h3>
                  <p>{t("address")}</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-box mt-4">
                  <i className="bx bx-envelope"></i>
                  <h3>{t("emailTitle")}</h3>
                  <a href="mailto:info@crystalsoft.com.eg">info@crystalsoft.com.eg</a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-box mt-4 mb-4">
                  <i className="bx bx-phone-call"></i>
                  <h3>{t("callTitle")}</h3>
                  <p>
                    <a href="tel:+201279120686">+2 01279120686</a> /{' '}
                    <a href="tel:+201001643439">01001643439</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.4706352953663!2d31.339498374460113!3d30.10934361549487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815c2a86c153b%3A0xafe532000ccd057c!2s147%20El%20Hegaz%20St%2C%20Al%20Matar%2C%20El%20Nozha%2C%20Cairo%20Governorate%204470402!5e0!3m2!1sen!2seg!4v1701632767469!5m2!1sen!2seg"
              width="100%"
              height="365"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
