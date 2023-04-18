/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    // NOTE: 以下の理由でビルド時の lint は無効にする
    // - pre- commit hook および CI（予定）でチェックしている
    // - lint コマンド（`next lint --dir . --max-warnings 0`）と同じ設定で実行できない
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
