# ワークメイトAI

## プロジェクト概要

ワークメイトAIは、Queue株式会社が提供する次世代型AI業務支援ソリューションです。

## 開発環境のセットアップ

このプロジェクトをローカルで開発するには、以下の手順に従ってください：

### 必要条件
- Node.js & npm（[nvm](https://github.com/nvm-sh/nvm#installing-and-updating)でインストール可能）
- Git
- SSHキー（GitHubへのプッシュ用）

### セットアップ手順

```sh
# 1. リポジトリをクローン
git clone git@github.com:QueueCorpJP/chat-berry-copy.git

# 2. プロジェクトディレクトリに移動
cd workmate-ai

# 3. 依存パッケージのインストール
npm i

# 4. 開発サーバーの起動
npm run dev
```

### 変更のプッシュ方法

```sh
# 1. 変更をステージングエリアに追加
git add .

# 2. 変更をコミット
git commit -m "コミットメッセージ"

# 3. 変更をリモートリポジトリにプッシュ
git push origin main
```

## 使用技術

このプロジェクトは以下の技術スタックで構築されています：

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## デプロイ

このプロジェクトは、Netlifyなどのホスティングサービスを使用してデプロイすることができます。

## カスタムドメインについて

カスタムドメインの使用については、Netlifyなどのホスティングサービスをご利用ください。
