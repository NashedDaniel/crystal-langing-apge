'use client';

import { useTranslations } from "next-intl";

export default function Footer() {
   const t = useTranslations("Index.footer");
  return (
    <footer id="footer" className="footer2">
      <div className="container">
        <div className="row copyright">
          <div className="col-lg-6 col-md-6">
            <div className="copy-soft2">
              <p>{t("line1")}</p>
              <p>
                {t("line2_part1")} <strong>{t("line2_part2")}</strong>.  {t("line2_part3")}
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="social-links copy-social">
              <a
                href="https://www.facebook.com/crystalsoft.com.eg?mibextid=ZbWKwL"
                className="facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a
                href="https://twitter.com/ciseg"
                className="twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://www.instagram.com/crystal.soft.accounting/?igshid=ZDdkNTZiNTM%3D"
                className="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/crystal-soft-06b85bb6/"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/@crystalsoft7792"
                className="youtube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-youtube"></i>
              </a>
              <a
                href="https://api.whatsapp.com/message/J3TKJJCT4BXSJ1?autoload=1&app_absent=0"
                className="whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
