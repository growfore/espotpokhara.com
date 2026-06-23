import type { NextConfig } from "next";
import withMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/the-cost-of-studying-in-the-usa", destination: "/blogs/the-cost-of-studying-in-the-usa", permanent: true },
      { source: "/5-reasons-to-study-in-australia", destination: "/blogs/5-reasons-to-study-in-australia", permanent: true },
      { source: "/how-to-prepare-for-the-ielts-exam", destination: "/blogs/how-to-prepare-for-the-ielts-exam", permanent: true },
      { source: "/affordable-universities-in-canada", destination: "/blogs/affordable-universities-in-canada", permanent: true },
      { source: "/best-fashion-designing-courses-in-abroad", destination: "/blogs/best-fashion-designing-courses-in-abroad", permanent: true },
      { source: "/what-to-expect-when-studying-in-japan", destination: "/blogs/what-to-expect-when-studying-in-japan", permanent: true },
      { source: "/top-5-best-japanese-language-institutes-in-pokhara", destination: "/blogs/top-5-best-japanese-language-institutes-in-pokhara", permanent: true },
      { source: "/study-in-japan-as-a-nepalese-student", destination: "/blogs/study-in-japan-as-a-nepalese-student", permanent: true },
      { source: "/study-in-japan", destination: "/", permanent: true },
      { source: "/blogs/page/2", destination: "/blogs", permanent: true },
    ];
  },
};

export default withMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
  },
})(nextConfig);
