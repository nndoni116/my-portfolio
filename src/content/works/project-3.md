---
# src/content/works/project-3.md
title: "理容店のサイト   Hair famille"
description: "個人事業で作成した。理容店のホームページ"
thumbnail: "/images/hair.png"
techStack: ["Astro", "Tailwind CSS", "Typescript", "microCMs", "Cloudflare", "Vitest", "Playwright", "sanitize-html"]
sortOrder: 3
projectUrl: "https://hair-famille.pages.dev/"
details: |
  Hair Famille公式サイトは、訓練の仲間と始めた個人事業で最初に作成した個人経営理容室のWebサイトです。
  Astro + TypeScript を核に、実務レベルの静的サイト生成とコンテンツ管理、テスト設計を実装しました。

  主な機能：
  - microCMS 統合による動的なニュース・ブログコンテンツの自動取得・表示（`lib/microcms.ts`、`types/microcms.ts`）
  - SEO 対策（メタタグ管理、OGP、構造化データ対応 - `components/seo`、`utils/seo.ts`）
  - Tailwind CSS ベースのレスポンシブデザイン（モバイル最適化）
  - 入力サニタイズと日付処理ユーティリティ（`lib/sanitize.ts`、`utils/date.ts`）
  - Playwright による E2E・アクセシビリティテスト、Vitest によるユニットテスト（`playwright/`、`tests/`）
  - Cloudflare Pages への自動デプロイ対応

  技術ポイント：
  Astro による高速な静的サイト生成、TypeScript による型安全性、Tailwind CSS で統一したスタイル管理、
  microCMS からのコンテンツ取得、テスト駆動型の設計（E2E/Unit テスト、アクセシビリティ検証）、
  実務的なデプロイパイプライン。
impressions: |
  このサイトは個人事業で初めて制作したもので、実際にヒアリングを行い現地を訪問したりと非常に良い経験になりました。
  私は主にデザインを担当し、理容店らしい落ち着いた雰囲気を大切にしました。
  依頼者の意見をサイトに反映させることに苦労しましたが、初めての実務経験として非常に学びの多いプロジェクトでした。
---