/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'd3501hjdis3g5w.cloudfront.net'
      },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com'
      }
    ]
  }
};

export default nextConfig;
