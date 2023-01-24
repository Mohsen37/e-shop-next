/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects(){
    return[
      {source:'/canceled',
      destination:'/',
      permanent:true
    }
    ]
  }
};

module.exports = nextConfig;
