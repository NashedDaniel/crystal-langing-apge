const createNextIntlPlugin = require('next-intl/plugin');
const path = require('path');

// Use absolute path relative to project root
const withNextIntl = createNextIntlPlugin(path.resolve(__dirname, './src/i18/request.ts'));

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);