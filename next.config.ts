import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'docs', // ← GitHub Pages 向けにビルド出力先を変更
  trailingSlash: true, // GitHub Pages でルーティングの問題を避けるために必要
  basePath: '/powerforce_homepage',
  assetPrefix: '/powerforce_homepage',
};

export default nextConfig;
