/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false, //strict mode
  generateEtags: false, // no cashe
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    loader: "akamai",
    path: "",
    domains: ["bitrix.pivasikvas.ru"],
  },
};

module.exports = nextConfig;
