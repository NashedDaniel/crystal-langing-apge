// next-intl.config.js
import { locales, defaultLocale } from './i18n';

export default {
  locales,
  defaultLocale,
  // The following are optional configurations:
  // Set to true if you want localized paths (e.g., `/en/about` and `/de/about`).
  localePrefix: 'always',
  
  // Define the domains if you're using domain-based internationalization
  // domains: [
  //   {
  //     domain: 'http://localhost:3000/app',
  //     defaultLocale: 'en'
  //   },
  //   {
  //     domain: 'http://localhost:3000/app.ar',
  //     defaultLocale: 'ar'
  //   }
  // ],
  
  // Pages where next-intl integration is not needed
    // pathnames: {
    //   '/': '/app'
    // }
};