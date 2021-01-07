# Setup
## パッケージインストール
`npm install --save axios` or `yarn add axios`
`npm install --save-dev @types/axios node-sass` or `yarn add --dev @types/axios node-sass`

## tsconfig.jsonの変更
1. `baseUrl: './src'`を設定


## 楽天APIの利用申請

## 楽天API用の設定ファイルを作成
1. rakutenディレクトリの作成
2. config.tsの作成と設定値のexport
3. .gitignoreにsrc/rakuten/config.tsを追加

# プロジェクト概要
## ディレクトリ構成
```
src
 |- components
 |   |- atoms     button, formなどの最小部品
 |   |- layouts   汎用的なレイアウト用コンポーネント
 |   |- organisms 検索フォームなどコンポーネントの1まとまる
 |   └  templates ページ毎に作成するテンプレート
 └  rakuten
     └  config.ts 楽天APIの設定値

```
