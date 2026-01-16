/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Configuration pour Docker standalone
  output: 'standalone',
}

module.exports = nextConfig

