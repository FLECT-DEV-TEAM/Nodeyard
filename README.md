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

## Development on Local
### Setup

    git clone https://github.com/AKIRA-MIYAKE/Nodeyard.git
    cp -r Nodeyard [app-name]
    cd [app-name]
    npm install
    npm run build

### Build

    npm run build

### Build + Watch

    npm run watch

### Build + Watch + Auto Reload

    npm run serve

Web サーバには `localhost:3000` から、`/src/public` 以下のコンテンツには `localhost:8080/webpack-dev-server/` からアクセスできます。  

### Run

    npm start

デフォルトではポート 3000 で起動します。  

### Unit Test + Lint

    npm run check

### Unit Test + Lint + Watch

    npm run dev

### Create API Document

    npm run jsdoc

### Create Style Guide

    npm run styleguide

## Development on Docker (Beta)
Docker を利用して、PostgreSQL と Redis を含んだ開発環境を構築することができます。  
一部機能は Docker for Mac Beta のみでの利用が可能です。  

### プロジェクトセットアップ

    git clone https://github.com/AKIRA-MIYAKE/Nodeyard.git
    cp -r Nodeyard [app-name]
    cd [app-name]
    docker-compose build
    docker-compose run --rm web npm run build

### Build

    docker-compose run --rm web npm run build

### Build + Watch (Mac Beta Only)

    docker-compose run --rm web npm run watch

### Build + Watch + Auto Reload (Mac Beat Only)

    docker-compose up

Web サーバには `localhost:3000` から、`/src/public` 以下のコンテンツには `localhost:8080/webpack-dev-server/` からアクセスできます。  

### Unit Test + Lint

    docker-compose run --rm web npm run check

### Unit Test + Lint + Watch (Mac Beat Only)

    docker-compose run --rm web npm run dev

### Create API Document

    docker-compose run --rm web npm run jsdoc

### Create Style Guide
**Caution**  
以下のエラーが発生し、`styleguide/index.html` が生成されないことが頻繁にあります。  

    Error: EBADF: bad file descriptor, chmod '/nodeyard/styleguide/bower_components/octicons/*

エラーが発生するファイルは一定でなく、エラーが発生せずにスタイルガイド生成が成功する場合もあります。  

    docker-compose run --rm web npm run styleguide

## Deploy to Heroku
Heroku へアプリケーションをデプロイするための `Procfile` と `app.json` を用意しています。  
デフォルトの設定でもアプリケーションのデプロイ、起動を行うことができますが、必要に応じて修正を行ってください。  
Heroku 上でプロダクションコードをビルドするタスクを実行するため、ビルド後のコードを別途管理する必要はありません。  

なお、production 環境でログをファイルとして出力するための設定を `config/production.js` に記述しています。  
Heroku を利用する際は、標準出力にログを出力するように修正を行ってください。  
