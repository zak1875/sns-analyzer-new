/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  pageExtensions: ["tsx", "ts", "jsx", "js"],
};

module.exports = nextConfig;
