# Nodeyard
Development foundation of Node.js application  

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)  

Nodeyard は Node.js を用いて、小規模な Web アプリケーションを迅速に構築するためのベースプロジェクトです。  
[Express](http://expressjs.com/) フレームワークの基本的な設定やディレクトリ構造を提供するとともに、アプリケーション開発で重要度の高い以下のような機能やタスクを用意しています。  

+ ロガー: [log4js](http://stritti.github.io/log4js/)
+ 設定ファイル: [node-config](https://github.com/lorenwest/node-config)
+ JavaScript トランスパイラ: [Babel](https://babeljs.io/)
+ フロントエンドモジュール管理: [Webpack](http://webpack.github.io/)
+ Future CSS syntax: [PostCSS](http://postcss.org/) + [cssnext](http://cssnext.io/)
+ ユニットテスト: [Mocha](https://mochajs.org/) + [power-assert](https://github.com/power-assert-js/power-assert)
+ 構文チェック: [ESLint](http://eslint.org/)
+ ライブリロード: [nodemon](http://nodemon.io/) + [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)
+ API ドキュメント: [JSDoc](http://usejsdoc.org/)
+ スタイルガイド: [mdcss](https://github.com/jonathantneal/mdcss)

用意しているタスクは `package.json` の `scripts` 、もしくは `npm run` コマンドで確認することができます。  

Node.js の v4.x、v5.x、v6.x の最新版での動作を確認しています。  

## Usage
### プロジェクトセットアップ

    git clone https://github.com/AKIRA-MIYAKE/Nodeyard.git
    cp -r Nodeyard [app-name]
    cd [app-name]
    npm install

### ビルド

    npm run build

### ビルド + ファイル監視

    npm run watch

### ビルド + ファイル監視 + オートリロード

    npm run serve

### ユニットテスト + 構文チェック + ファイル監視

    npm run dev

### API ドキュメント

    npm run jsdoc

### スタイルガイド

    npm run styleguide

## Heroku へのデプロイ
Heroku へアプリケーションをデプロイするための `Procfile` と `app.json` を用意しています。  
デフォルトの設定でもアプリケーションのデプロイ、起動を行うことができますが、必要に応じて修正を行ってください。  
Heroku 上でプロダクションコードをビルドするタスクを実行するため、ビルド後のコードを別途管理する必要はありません。  

なお、production 環境でログをファイルとして出力するための設定を `config/production.js` に記述しています。  
Heroku を利用する際は、標準出力にログを出力するように修正を行ってください。  
