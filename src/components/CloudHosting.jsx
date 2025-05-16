"use client";

import { useEffect } from "react";
import AOS from "aos";
import { useTranslations } from "next-intl";

export default function CloudHosting() {
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
              backgroundImage: 'url("/dist/img/home-cloud-hosting.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            &nbsp;
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-stretch">
            <div className="content colr-contnt">
              <h3>
                {t("cloud.title_part1")}
                <strong> {t("cloud.title_part2")} </strong>
              </h3>
              <p>{t("cloud.intro")}</p>
              <br />
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a
                    href="#accordion-cloud"
                    className="collapse"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-cloud"
                  >
                    {t("cloud.question")}
                  </a>
                  <div
                    id="accordion-cloud"
                    className="collapse show"
                    data-bs-parent=".accordion-list"
                  >
                    <p>{t("cloud.answer")}</p>
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
