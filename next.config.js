/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  output: undefined, // これを追加して、VercelでSSRを有効化！
};

module.exports = nextConfig;
