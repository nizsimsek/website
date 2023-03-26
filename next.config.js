/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.reactiongifs.us', 'picsum.photos'],
  },
};

module.exports = nextConfig;
