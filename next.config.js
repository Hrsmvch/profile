/** @type {import('next').NextConfig} */
const nextConfig = { 
    output: process.env.NODE_ENV === "development" ? undefined : "export",
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
     experimental: {
    // your experimental configuration
  },
 
}

module.exports = nextConfig
