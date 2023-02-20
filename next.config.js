/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.reactiongifs.us'],
  },
};

module.exports = nextConfig;
