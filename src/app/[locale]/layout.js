import { Cairo } from 'next/font/google';
import './globals.css';
import 'aos/dist/aos.css';
import messages from '../../../messages/messages';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18/routing';


const cairo = Cairo({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'Crystal Soft Admin',
  description: '',
  icons: {
    icon: '/dist/img/favicon.png',
    apple: '/dist/img/favicon.png',
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider messages={messages[locale]}>
      <html lang={locale} className={cairo.className}>
        <head>
          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cabin+Condensed:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Vendor CSS */}
          <link href="/dist/vendor/animate.css/animate.min.css" rel="stylesheet" />
          <link href="/dist/vendor/aos/aos.css" rel="stylesheet" />
          <link href="/dist/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/dist/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
          <link href="/dist/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
          <link href="/dist/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
          <link href="/dist/vendor/remixicon/remixicon.css" rel="stylesheet" />
          <link href="/dist/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
          <link href="/dist/css/flag-icon.min.css" rel="stylesheet" />
          <link href="/dist/css/core.min.css" rel="stylesheet" />
          <link href="/dist/css/style.css" rel="stylesheet" />
        </head>
        <body suppressHydrationWarning={true} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
            {children}
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
