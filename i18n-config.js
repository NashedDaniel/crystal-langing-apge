// i18n.js
import {notFound} from 'next/navigation';

// Define the supported locales
export const locales = ['en', 'ar']; // Add all your supported locales here
export const defaultLocale = 'en';

// Get locale from path function (for use with middleware)
export function getLocale(request) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If no locale is found, use the default locale
  return pathnameIsMissingLocale ? defaultLocale : pathname.split('/')[1];
}

// Internationalization middleware configuration
export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  
  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If it's missing a locale, redirect to the default locale
  if (pathnameIsMissingLocale) {
    const locale = defaultLocale;
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}

// Configure middleware matcher
export const config = {
  // Skip matching specific paths where localization is not needed
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|dist).*)']
};

// Handle locale paths and check for locale validity
export function localePrefix(locale) {
  return locale === defaultLocale ? '' : `/${locale}`;
}

// Validate locale and return 404 if not valid
export function validateLocale(locale) {
  if (!locales.includes(locale)) {
    notFound();
  }
}