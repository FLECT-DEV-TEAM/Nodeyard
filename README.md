# Nodeyard
Development foundation of Node.js application  

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)  

Nodeyard は、Node.js を用いたアプリケーションを開発するためのベースプロジェクトです。  
すぐにアプリケーション開発を始めることができるように、以下を提供しています。    

+ プロジェクトで頻繁に用いられる gulp タスク
  + ECMAScript 6 でコードを記述するための Babel、Browserify によるコンパイル
  + ESLint による静的検証
  + Mocha による単体テスト
  + Sass、PostCSS による CSS のコンパイル
  + フロントエンドのプレビューとオートリロード
  + プロダクションコードの出力
+ Express を用いた Web サーバの定義とディレクトリ構成
+ Heroku にデプロイするための定義ファイルとビルドタスク
+ log4js を用いたログ出力のための設定

Node.js の v4.x、v5.x での動作を確認しています。  

## Usage

    git clone https://github.com/AKIRA-MIYAKE/Nodeyard.git
    cp -r Nodeyard app-name
    cd app-name
    npm install

基本的な gulp タスクは `package.json` の `scripts` から実行できるようにしているため、gulp のグローバルインストールは必要ありません。  
`gulp/tasks` 以下に定義した個別のタスクを実行する場合は、gulp をグローバルにインストールするか、`node_modules/.bin/gulp [task name]` で実行してください。  

## データベースの利用
[sequelize/cli](https://github.com/sequelize/cli) が参照する `.sequelizerc` を用意しています。  
sequelize のコマンドを実行すると、定義されたディレクトリにファイルが出力されます。  
model 定義のファイルは `src/models` 以下に出力され、それ以外のファイルは `sequelize` ディレクトリが作成され、その下にまとめられます。  

[mongoose](http://mongoosejs.com/) を利用する際も、sequelize と同様に、`src/models` 以下に model 定義と DB 接続を行うコードを配置することを想定しています。  

## Heroku へのデプロイ
Heroku へアプリケーションをデプロイするための `Procfile` と `app.json` を用意しています。  
デフォルトの設定でもアプリケーションのデプロイ、起動を行うことができますが、必要に応じて修正を行ってください。  
Heroku 上でプロダクションコードをビルドするタスクを実行するため、ビルド後のコードを別途管理する必要はありません。  

なお、production 環境でログをファイルとして出力するための設定を `config/production.js` に記述しています。  
Heroku を利用する際は、標準出力にログを出力するように修正を行ってください。  
