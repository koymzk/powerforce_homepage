import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  ...(isProd
    ? {
        output: 'export',
        distDir: 'docs', // ← GitHub Pages 向けにビルド出力先を変更
        trailingSlash: true, // GitHub Pages でルーティングの問題を避けるために必要
        basePath: '/powerforce_homepage',
        assetPrefix: '/powerforce_homepage',
      }
    : {}),
  // ...他の設定があればここに追加...
};

export default nextConfig;
