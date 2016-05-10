var ExtractTextPlugin = require('extract-text-webpack-plugin');

var env = (process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';

module.exports = {
  context: `${__dirname}/src/public`,
  entry: {
    bundle: './index'
  },
  output: {
    path: `${__dirname}/dist/public`,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel' },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader')
      },
      { test: /\.(jpe?g|png|gif|svg)$/, loader: 'file?name=[path][name].[ext]' },
      { test: /\.htm?l$/, loader: 'file?name=[path][name].[ext]' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)(\?[ -~]+)?$/, loader: 'url?limit=100000' }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./stylesheets/style.css')
  ],
  postcss: (webpack) => {
    if (env === 'production') {
      return {
        plugins: [
          require('postcss-import')({
            addDependencyTo: webpack
          }),
          require('postcss-url'),
          require('postcss-extend'),
          require('postcss-cssnext'),
          require('cssnano')
        ]
      };
    } else {
      return {
        plugins: [
          require('postcss-import')({
            addDependencyTo: webpack
          }),
          require('postcss-url'),
          require('postcss-extend'),
          require('postcss-cssnext')
        ]
      };
    }
  },
  debug: true,
  devtool: '#source-map',
  devServer: {
    contentBase: `${__dirname}/dist/public`,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  }
}
