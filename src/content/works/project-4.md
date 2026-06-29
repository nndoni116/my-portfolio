---
# src/content/works/project-4.md
title: "建設・運送会社のサイト   jyochi"
description: "個人事業で作成した建設・運送会社のホームページ"
thumbnail: "/images/jyochi.png"
techStack: ["Astro", "Tailwind CSS", "HONO", "Cloudflare", "microCMS", "Resend", "Vitest", "Playwright"]
sortOrder: 4
projectUrl: "https://jyochi.co.jp/"
details: |
  株式会社上智のコーポレートサイトは、個人事業で作成した二件目の案件です。
  運送・解体・土木・農業などの多角事業を営む企業の事業紹介とお問い合わせ機能を中核としたサイトを構築しました。

  主な機能：
  - Astro による静的サイト生成（SSG）とレスポンシブUI（`web/src/pages/`、`web/src/components/`）
  - microCMS 連携でニュース・実績を動的管理（`web/src/lib/microcms.ts`）
  - ニュース・実績の動的ページ対応（`web/src/pages/news/[slug].astro`、`works/[slug].astro`）
  - お問い合わせ・採用フォーム実装とAPI連携（`web/src/components/contact/`、`apps/api/src/routes/contact.ts`、`recruit.ts`）
  - Resend を活用したメール送信とDB操作（`apps/api/src/services/mail.ts`、`db.ts`）
  - Zod による共通入力バリデーション（`packages/shared/validation.ts` でフロント・バック両対応）
  - ミドルウェア設計（レート制限・リクエスト検証 - `apps/api/src/middleware/`）
  - Vitest/Playwright によるテスト（`tests/unit/`、`tests/e2e/`）
  - pnpm Workspaces、Docker Compose、GitHub Actions による開発運用

  技術ポイント：
  Astro/Tailwind CSS による高速かつ保守性の高いフロントエンド、HONO/Cloudflare Workers でのサーバーレスAPI、
  Zod による厳密な入力バリデーション、Resend でのメール配信、pnpm Workspaces で複数アプリを統一管理、
  GitHub Actions による自動テスト・デプロイパイプライン。
impressions: |
  このサイトは個人事業の二件目の案件で、前回よりもサイトの構成規模が大きくなり責任感が増しました。
  依頼者の強みを明確に伝えるための構成にこだわり、ヒアリングでイメージを擦り合わせながら進めました。
  また、初めてメール機能の実装にも挑戦し、クライアント対応を含めた実務経験として非常に有意義なプロジェクトになりました。
---