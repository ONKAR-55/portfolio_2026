import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "gitlab.com" },
      { protocol: "https", hostname: "www.chip.de" },
      { protocol: "https", hostname: "play-lh.googleusercontent.com" },
      { protocol: "https", hostname: "lide.uhk.cz" },
      { protocol: "https", hostname: "p1.hiclipart.com" },
      { protocol: "https", hostname: "icon2.cleanpng.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "icon-icons.com" },
      { protocol: "https", hostname: "cdn-icons-png.flaticon.com" },
      { protocol: "https", hostname: "image.pngaaa.com" },
      { protocol: "https", hostname: "e7.pngegg.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
    ],
  },
};

export default nextConfig;
