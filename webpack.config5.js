const path = require('path');
const webpack = require('webpack');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main:'./src/index.js',
    vender:[
      'lodash'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins:[
      new CleanWebpackPlugin(['dist']),
      new HTMLWebpackPlugin({
          title: "Caching"
      }),

      new webpack.HashedModuleIdsPlugin(),

      new webpack.optimize.CommonsChunkPlugin({
          name:  'vender'
      }),

      new webpack.optimize.CommonsChunkPlugin({
          name:  'manifest'
      }),
    
  ]
  
};

// 抽取公共的 函数