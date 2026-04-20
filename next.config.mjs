const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "three",
    "@react-three/fiber",
    "@react-three/drei",
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      react: "react",
      "react-dom": "react-dom",
    };
    return config;
  },
};

export default nextConfig;