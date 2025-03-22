import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'google.com' // or photo.com ...etc
      }
    ]
  }
};

export default nextConfig;
