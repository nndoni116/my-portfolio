---
# src/content/works/project-1.md
title: "パン屋のサイト   ハードパン"
description: "職業訓練の個人課題で作成した、ハード系パン屋のサイト"
thumbnail: "/images/hardpan.png"
techStack: ["HTML", "CSS", "Javascript"]
sortOrder: 1
projectUrl: "https://bakery.hardpan.workers.dev/"
details: |
  「ハードパン」は石川県金沢市の自家製酵母パン専門店のコーポレートサイトです。
  静的なHTML/CSSを基盤に、JavaScriptとJSONで動的なコンテンツ（メニュー・お知らせ）を実装しました。

  主な機能:
  - メイン：スライド式メインビジュアルと最新のお知らせを表示
  - `menu.js` / `news.js` で `menu.json` / `news.json` を読み込み自動表示、`news-display.js` はページネーションを実装
  - 共通ヘッダー・フッターで構造を一貫化

  技術ポイント：HTML5・CSS・JavaScript（jQuery/AJAX）、JSONによるデータ運用分離、レスポンシブ設計、画像中心のビジュアル訴求
impressions: |
  自分がパン屋を経営するなら、という想定でサイトを作成しました。
  ハード系パン屋らしい落ち着いたデザインにこだわり、理想に近い見た目を実現できたことに達成感があります。
  特に苦労したのは JSON を読み込んでコンテンツを自動表示させる部分で、動的データの扱い方を深く学ぶ良い経験になりました。
---