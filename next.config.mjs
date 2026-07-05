/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Izinkan gambar dari domain eksternal yang mungkin digunakan di menuData
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
