/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  // basePath: "/gs-data-representation",
  // images: { unoptimized: true }
  reactStrictMode: true,
  assetPrefix: '/'
};

export default nextConfig;
