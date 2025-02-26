/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [16, 32, 48, 64, 96],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Vary",
            value: "Accept-Encoding",
          },
        ],
      },
    ];
  },
  webpack(config, { isServer }) {
    if (process.env.NODE_ENV === "production") {
      config.devtool = false;

      if (!isServer) {
        config.optimization.minimize = true;
        config.optimization.splitChunks = {
          chunks: "all",
          maxInitialRequests: 5,
          minSize: 0,
        };
      }
    }

    return config;
  },
  experimental: {
    scrollRestoration: true,
    esmExternals: true,
  },
};

export default nextConfig;

//   /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true, // Helps identify potential problems
//   images: {
//     domains: ['images.unsplash.com'], // Add any additional image domains you use
//     deviceSizes: [320, 420, 768, 1024, 1200], // Optimize images for different device sizes
//     imageSizes: [16, 32, 48, 64, 96], // Optimize common image sizes
//     formats: ['image/avif', 'image/webp'], // Enable modern image formats
//   },
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'Cache-Control',
//             value: 'public, max-age=31536000, immutable', // Cache static assets for a long time
//           },
//         ],
//       },
//     ];
//   },
//   webpack(config) {
//     // Remove unnecessary source maps in production to improve build performance
//     if (process.env.NODE_ENV === 'production') {
//       config.devtool = false;
//     }
//     return config;
//   },
// };

// export default nextConfig;
