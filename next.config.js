/** @type {import('next').NextConfig} */
const nextConfig = { 
  images: {
    // your images configuration options here
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, 
      use: ['@svgr/webpack'],
    });

    return config;
  }, 
 
}

module.exports = nextConfig
