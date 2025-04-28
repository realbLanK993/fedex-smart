/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "web1.iitm.ac.in",
      "doms.iitm.ac.in",
      "cse.iitm.ac.in",
      "www.cse.iitm.ac.in",
      "dsai.iitm.ac.in",
      "home.iitm.ac.in",
      "civil.iitm.ac.in",
      "www.ieor.iitb.ac.in",
      "www.fedex.com",
    ],
    unoptimized: true,
  },
};

export default nextConfig;
