import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/150",
        search: "?u=1",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/150",
        search: "?u=2",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/150",
        search: "?u=3",
      },
    ],
  },
};

export default nextConfig;
