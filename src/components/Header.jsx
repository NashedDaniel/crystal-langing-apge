"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
//import Link from 'next/link';

const MAIN_APP_URL = process.env.NEXT_PUBLIC_MAIN_APP_URL || 'https://www.crystalviewerp.com';
const RETURN_TO_KEY = 'crystal.returnTo';

// Only a tenant's own ERP host may be returned to; anything else would turn
// ?returnTo= into an open redirect. This site's own host is excluded.
// Any depth of subdomain is a tenant: the ERP strips a leading `www.`, so
// www.<alias>.crystalviewerp.com is the same tenant as <alias>.crystalviewerp.com.
const TENANT_HOST = /^([a-z0-9-]+\.)+crystalviewerp\.com$/i;

function safeReturnUrl(value) {
  if (!value) return null;
  try {
    const url = new URL(value);
    const isTenant = url.protocol === 'https:'
      && TENANT_HOST.test(url.hostname)
      && url.hostname.toLowerCase() !== window.location.hostname.toLowerCase();
    const isLocalDev = process.env.NODE_ENV !== 'production'
      && (url.hostname === 'localhost' || url.hostname === '127.0.0.1');
    return isTenant || isLocalDev ? url.href : null;
  } catch {
    return null;
  }
}

// Where the visitor came from: ?returnTo= sent by the ERP login page, else the
// referrer. Kept in sessionStorage because switching language drops the query.
function resolveLoginUrl() {
  const rawQuery = new URLSearchParams(window.location.search).get('returnTo');
  const fromQuery = safeReturnUrl(rawQuery);
  const fromReferrer = safeReturnUrl(document.referrer);
  // A fresh arrival (returnTo present) replaces whatever an earlier tenant left
  // in this tab, even when the new value is rejected — never fall back to
  // another tenant's login page.
  let stored = null;
  if (rawQuery === null) {
    try { stored = safeReturnUrl(sessionStorage.getItem(RETURN_TO_KEY)); } catch {}
  }

  const resolved = fromQuery || fromReferrer || stored;
  try {
    if (resolved) sessionStorage.setItem(RETURN_TO_KEY, resolved);
    else sessionStorage.removeItem(RETURN_TO_KEY);
  } catch {}
  return resolved || MAIN_APP_URL;
}

export default function Header() {
    const t = useTranslations("Index");

    const locale = useLocale();

    // Starts at the default so server and client render the same markup.
    const [loginUrl, setLoginUrl] = useState(MAIN_APP_URL);
    useEffect(() => { setLoginUrl(resolveLoginUrl()); }, []);
    
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
            <a href={loginUrl} className="getstarted scrollto" > {t("LOGIN")} </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
