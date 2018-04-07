const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index:'./src/index.js',
    another:'./src/another-module.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
      new HTMLWebpackPlugin({
        title:"Code Splitting"
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name:'common' //z指定公共的 bundle 的名称
      })
  ]
  
};

// 抽取公共的 函数