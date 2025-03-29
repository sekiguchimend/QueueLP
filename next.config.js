/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ビルド時にESLintエラーを無視する
  },
  experimental: {}, // 不要な experimental 設定を削除
};

export default nextConfig;
