"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

export default function Header() {
    const t = useTranslations("Index");

    const locale = useLocale(); 
    
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <Link href="/" className="logo">
            <Image
              src={locale === "en" ? "/dist/img/Crystal-Logo.png" :"/dist/img/Ar/Logo-Crystal-ar.png"}
              alt="Crystal Logo"
              width={200}
              height={60}
              className="img-fluid"
            />
          </Link>
        </h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li className="dropdown">
              <a
                className="dropdown-toggle"
                href="#"
                id="Dropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
              { locale === "en" ?  <i className="flag-united-states flag m-0"></i> :   <i className="flag-egypt flag"></i> } &nbsp; {locale === "en" ? "English" :  "العربية"}
              </a>
              <ul className="dropdown-menu" aria-labelledby="Dropdown">
                <li>
                  <Link href={"/en"} className="dropdown-item">
                    <i className="flag-united-states flag"></i> <span className='px-2'> {t("English")}</span>
                    <i className="fa fa-check text-success ms-2"></i>
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link  href={"/ar"} className="dropdown-item ">
                    <i className="flag-egypt flag"></i> <span className='px-2'>  {t("Arabic")}</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
             <Link href="https://localhost:5174/" className="getstarted scrollto">
                {t("LOGIN")}
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
