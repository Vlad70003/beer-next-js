/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: 'akamai',
    path: '',
    domains: ["bitrix.pivasikvas.ru"],
  },
};

module.exports = nextConfig;
