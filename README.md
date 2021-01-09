# とらゼミTypeScriptオンラインブートキャンプ
## 概要
### タイムテーブル
| Time | Content |
| ---- | ---- |
| 13:00-13:30 | 環境構築とAPIの申請 |
| 13:30-14:15 | 検索フォームの作成 |
| 14:15-14:30 | 休憩 |
| 14:30-15:00 | カスタムフックの作成 |
| 15:00-15:45 | APIを叩いて検索結果を表示 |
| 15:45-16:00 | 質疑応答 |

### ディレクトリ構成
```
src
 |- components
 |   |- atoms     button, formなどの最小部品
 |   |- layouts   汎用的なレイアウト用コンポーネント
 |   |- organisms 検索フォームなどコンポーネントの1まとまる
 |   └  templates ページ毎に作成するテンプレート
 |- lib           関数用ファイルをまとめる 
 |- rakuten
 |   └  config.ts 楽天APIの設定値
 |- styles        Scssファイルをまとめる
 └  types         型定義用ファイルをまとめる
```

## 環境構築
### create-react-app
1. `npx create-react-app <DIR_NAME> --template typescript`
2. 要らないファイルを削除

### パッケージインストール
`npm install --save axios` or `yarn add axios`
`npm install --save-dev @types/axios node-sass@4.14.1` or `yarn add --dev @types/axios node-sass@4.14.1`

### tsconfig.jsonの変更
1. `baseUrl: './src'`を設定

## 楽天API
### 利用申請
1. [楽天トラベルキーワード検索API](https://webservice.rakuten.co.jp/explorer/api/Travel/KeywordHotelSearch/)のWebページにアクセス
2. 試しにAPIを使ってみる
3. [アプリID発行](https://webservice.rakuten.co.jp/app/create)にアクセス
4. アプリ名とアプリURLは適当でOK、OAuth用の詳細情報は不要
5. 規約に同意して新規アプリを作成

### 楽天API用の設定ファイルを作成
1. rakutenディレクトリの作成
2. config.tsの作成と設定値のexport
3. .gitignoreにsrc/rakuten/config.tsを追加
