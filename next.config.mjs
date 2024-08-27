/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'btoys.co',
      },
      {
        protocol: 'https',
        hostname: 'herpo.com.co',
      },
      {
        protocol: 'https',
        hostname: 'www.americadecali.co',
      }
    ]
  }
};

export default nextConfig;
