/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV === "development" ? undefined : "export",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, 
      use: ['@svgr/webpack'],
    });

    return config;
  }, 

   experimental: {
      externalDir: true
    },
    // Potential new config flag:
    disableExperimentalFeaturesWarning: true
}

module.exports = nextConfig
