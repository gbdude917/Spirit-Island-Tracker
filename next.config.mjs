/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "spiritislandwiki.com",
        port: "",
        pathname: "/images/c/c2/**",
      },
    ],
  },
};

export default nextConfig;
