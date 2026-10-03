const createNextIntlPlugin = require('next-intl/plugin');
const path = require('path');

// Use absolute path relative to project root
const withNextIntl = createNextIntlPlugin(path.resolve(__dirname, './src/i18/request.ts'));

/** @type {import('next').NextConfig} */
const nextConfig = {
    devIndicators: false
};

module.exports = withNextIntl(nextConfig);

const MAIN_APP_URL = process.env.NEXT_PUBLIC_MAIN_APP_URL || 'https://www.crystalviewerp.com';

//window.location.href = `${MAIN_APP_URL}/`;

//module.exports = {
//    reactStrictMode: true,
//    env: {
//      // Set your domain URL depending on environment
//      BASE_URL: process.env.NODE_ENV === 'production' 
//        ? 'https://www.crystalviewerp.com' 
//        : 'http://localhost:3000',
//    },
//    basePath: '/app', // adjust to your actual subpath, // Use a base path if the app is served under a sub-path
//    assetPrefix: '', // Set this if serving static files from a CDN or subdomain
//  };


  