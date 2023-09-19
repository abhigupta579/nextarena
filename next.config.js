/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    output: 'export',
    compress: true,
    trailingSlash: true, 
  
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;