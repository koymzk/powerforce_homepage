# ───── build stage ─────
FROM node:18-alpine AS builder
WORKDIR /app

# 依存だけ先にインストール（キャッシュ活用）
COPY package*.json ./
RUN npm ci

# ソースをコピーしてビルド & 静的エクスポート
COPY . .
RUN npm run build && npm run export

# ───── deploy stage ─────
FROM node:18-alpine AS deploy
WORKDIR /app

# gh-pages CLI をグローバルに
RUN npm install -g gh-pages

# 静的出力だけコピー
COPY --from=builder /app/out ./out

# デフォルトのエントリポイントをデプロイに設定
ENTRYPOINT ["gh-pages", "-d", "out"]