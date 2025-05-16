"use client";

import { useEffect } from "react";
import AOS from "aos";
import { useTranslations } from "next-intl";

export default function AccessDevices() {
  const t = useTranslations("Index");
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-stretch">
            <div className="content colr-contnt">
              <h3>
                {t("access.title_part1")} <strong>    {t("access.title_part2")}</strong>
              </h3>
              <p>
              {t("access.intro")}
              </p>
              <br />
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a
                    href="#accordion-list-1"
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#accordion-list-1"
                  >
                    {t("access.question")}
                  </a>
                  <div
                    id="accordion-list-1"
                    className="collapse show"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                    {t("access.answer")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-6 align-items-stretch video-box"
            style={{
              backgroundImage: 'url("/dist/img/home-multiple-devices.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            &nbsp;
          </div>
        </div>
      </div>
    </section>
  );
}
