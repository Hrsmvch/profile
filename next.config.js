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
    generateStaticParams: async () => {
      // Implement the logic to generate static params here
      // For example, you can fetch data from an API and return an array of paths
      const paths = ['/blog/mastering-ui-consistency-designing-seamless-interfaces', '/blog/agile-methodology-in-software-development-explanation'];
      return paths;
    },
 
}

module.exports = nextConfig
