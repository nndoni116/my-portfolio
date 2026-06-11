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
  静的なHTML/CSSを基盤に、JavaScriptとJSONで動的なコンテンツ（メニュー・お知らせ）を実現しています。

  - メイン：スライド式メインビジュアル、最新ニュース、こだわり紹介、新商品、店舗情報を配置
  - `menu.js` / `news.js` で `menu.json` / `news.json` を読み込み自動表示、`news-display.js` はページネーションを実装
  - 共通ヘッダー・フッターで構造を一貫化し、イートイン・アクセス・SNS情報をビジュアル整理

  技術ポイント：HTML5・CSS・JavaScript（jQuery/AJAX）、JSONによるデータ運用分離、レスポンシブ設計、画像中心のビジュアル訴求

  静的サイト×データ連携の構成により、IT系企業に示せる実装力と設計感を備えています。
impressions: |
  自分がパン屋を経営するなら、という想定でサイトを作成しました。
  ハード系パン屋らしい落ち着いたデザインにこだわり、理想に近い見た目を実現できたことに達成感があります。
  特に苦労したのは JSON を読み込んでコンテンツを自動表示させる部分で、動的データの扱い方を深く学ぶ良い経験になりました。
---