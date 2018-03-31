let webpack = require('webpack');
let path = require('path');
let webpackMerge = require('webpack-merge');
let HtmlWebpackPlugin = require('html-webpack-plugin');

// Webpack Config
let webpackConfig = {
  entry: {
    'main': './index.ts',
  },

  output: {
    publicPath: '',
    path: path.resolve(__dirname, './dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })

  ],

  module: {
    loaders: [
      // .ts files for TypeScript
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  }

};


// Our Webpack Defaults
let defaultConfig = {
  devtool: 'source-map',

  output: {
    filename: 'js-algorithms.js',
    sourceMapFilename: 'js-algorithms.map',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  resolve: {
    extensions: [ '.ts', '.js' ],
    modules: [ path.resolve(__dirname, 'node_modules') ]
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },

  }

};
module.exports = webpackMerge(defaultConfig, webpackConfig);
