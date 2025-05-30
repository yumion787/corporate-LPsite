## プロジェクト概要
サイト：ペットシッターサービス向けのコーポレートサイト
対象ユーザー：ペットの世話を依頼したい個人向け
制作背景：実際を想定したUI＋機能構築


## 使用技術スタック
【フロントエンド】
Next.js
React 19
TypeScript

【スタイリング】
Tailwind CSS
shadcn/ui

【外部サービス】
EmailJS（メール送信）
Google reCAPTCHA（スパム対策）
Google Analytics（アクセス解析）


## 設計ポリシー
【UI/UX設計】
・LP型コーポレート構成（ヒーロー・サービス・FAQ・CTA）
・カード／アコーディオン対応
【アクセシビリティとUX】
・レスポンシブ対応
・入力バリデーション・送信後のフィードバック（モーダル）
【再利用性の工夫】
・コンポーネント設計


## ページ構成
/：トップページ（ヒーロー・CTA）
/services/[id]：サービス詳細（動的ルーティング）
/contact：お問い合わせフォーム


## スクリーンショット
![portfolio](https://github.com/user-attachments/assets/8d521a22-67f1-473f-a302-0e38312e6e26)

