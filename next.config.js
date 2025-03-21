/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  pageExtensions: ["js", "jsx"], // これで page.js を認識するようになる
};

module.exports = nextConfig;
