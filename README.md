# BookBox
Sharing of book reviews and management of book lending and borrowing records.

__[toc]__

## コンセプト
本好き・チーム・友人グループ内での書評の共有と貸し借りの記録を管理するためのサービス。　　
LINEや既存のSNSでは流れてしまうような、「この本よかったよ」「貸してあげるよ」を記録・整理できる。

## 想定ユーザーシナリオ
- 新しく本を買ったので感想を共有したい →　アプリに登録
- 特定ジャンルでおすすめの本を探したい →　タグ検索・レビュー閲覧
- 他ユーザーの持っている本を借りたい →　貸し出し申請・承認
- 借りた本の返却期限が近い →　リマインダー通知

## 機能概要
|機能|説明|
|---|---|
|本の登録|ISBN検索(Google Books API)|
|レビュー|スター評価・感想・タグ・レビューの一覧表示・レビューへのコメント|
|貸し借り管理|貸し出し申請・返却予定日設定・リマインダー・返却|
|ユーザー管理|ログイン(OAuth)・マイ本棚・貸借履歴|

## 技術選定
|分類|技術|選定理由|
|---|---|-------|
|フロントエンド|Next.js(App Router)|サーバーサイドレンダリング・APIルーティング両方に対応し柔軟|
||TypeScript|型安全、GraphQLとの親和性が高い|
||TailwindCss|モダンなUIを効率よく構築|
||Appolo Client|GraphQLクライアントとして定番、キャッシュ制御も充実|
|バックエンド|Go(gglgen)|高速、型安全、GraphQLスキーマ駆動開発が可能|
||PostgreSQL|リレーショナルで複雑なクエリに対応しやすい|
|外部API|Google Books API|書籍情報取得、書影や著者名取得に便利|
|認証|Auth0/Firebase Auth/Clerk|検討中|
|デプロイ|Vercel(フロント)+Railway(API)|検討中|
|テスト|Jest/Playwright、Go標準テスト|単体・E2Eどちらも導入しやすい|
