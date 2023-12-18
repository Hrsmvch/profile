/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "development" ? undefined : "export",
  basePath: process.env.NODE_ENV === "development" ? undefined : 'https://harasymovych.com/',
  assetPrefix: process.env.NODE_ENV === "development" ? undefined : 'https://harasymovych.com/',
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
  images: {},
  experimental: {},

}

module.exports = nextConfig