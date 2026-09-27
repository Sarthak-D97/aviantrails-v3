import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75, 85],
    deviceSizes: [390, 640, 828, 1080, 1280, 1600, 1920, 2400],
    imageSizes: [96, 160, 256, 384, 512],
    remotePatterns: [{ protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" }],
  },
  // Old WordPress addresses, so links and search results from the previous site still land somewhere useful.
  async redirects() {
    const to = (source: string, destination: string) => ({ source, destination, permanent: true });
    return [
      to("/customized-tours", "/custom-tours"),
      to("/a-decade-of-birding", "/about"),
      to("/a-decade-of-birding-2", "/about"),
      to("/chasing-rare-birds", "/about"),
      to("/bird-of-the-week-2/chasing-rare-birds", "/about"),
      to("/contact-us", "/enquiry"),
      to("/upcoming-tours", "/departures"),
      to("/category/upcoming-tours", "/departures"),
      to("/category/trip-reports", "/field-reports"),
      to("/costa-rica-wildlife-photography-tour", "/departures/costa-rica"),
      to("/papua-new-guinea-bird-photography-tour", "/departures/papua-new-guinea"),
      to("/bird-of-the-week-2", "/gallery"),
      to("/sighting-of-the-week", "/gallery"),
      to("/avian-fauna", "/gallery"),
      to("/gallery/:path+", "/gallery"),
      to("/location", "/lodges/milieu-villa"),
      to("/birding-trails", "/lodges/milieu-villa"),
      to("/studio", "/lodges/milieu-villa"),
      to("/testimonials/:path*", "/reviews"),
    ];
  },
};

export default nextConfig;
