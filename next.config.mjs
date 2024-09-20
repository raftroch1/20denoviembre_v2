/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      });
      return config;
    },
  };
  
  export default nextConfig;