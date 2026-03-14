/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    formats: ['image/webp'],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  // Vercel optimizations
  swcMinify: true,
  compress: true,
}

module.exports = nextConfig
