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
      {
        source: "/contact",
        destination: "/contact-us",
        statusCode: 301,
      },
      {
        source: "/about",
        destination: "/about-us",
        statusCode: 301,
      },
      {
        source: "/the-cost-of-studying-in-the-usa",
        destination: "/blogs/the-cost-of-studying-in-the-usa",
        statusCode: 301,
      },
      {
        source: "/5-reasons-to-study-in-australia",
        destination: "/blogs/5-reasons-to-study-in-australia",
        statusCode: 301,
      },
      {
        source: "/how-to-prepare-for-the-ielts-exam",
        destination: "/blogs/how-to-prepare-for-the-ielts-exam",
        statusCode: 301,
      },
      {
        source: "/affordable-universities-in-canada",
        destination: "/blogs/affordable-universities-in-canada",
        statusCode: 301,
      },
      {
        source: "/best-fashion-designing-courses-in-abroad",
        destination: "/blogs/best-fashion-designing-courses-in-abroad",
        statusCode: 301,
      },
      {
        source: "/what-to-expect-when-studying-in-japan",
        destination: "/blogs/what-to-expect-when-studying-in-japan",
        statusCode: 301,
      },
      {
        source: "/top-5-best-japanese-language-institutes-in-pokhara",
        destination:
          "/blogs/top-5-best-japanese-language-institutes-in-pokhara",
        statusCode: 301,
      },
      {
        source: "/study-in-japan-as-a-nepalese-student",
        destination: "/blogs/study-in-japan-as-a-nepalese-student",
        statusCode: 301,
      },
      {
        source: "/study-in-japan",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/blog/page/2",
        destination: "/blogs",
        statusCode: 301,
      },
    ];
  },
};

const mdxWrapper = withMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
  },
});

export default mdxWrapper(nextConfig);
