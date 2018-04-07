const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

// console.log(__dirname)
// console.log(path.resolve(__dirname,'dist'))

module.exports ={
    entry:{
       app:'./src/index.js',
    },
    devtool:'inline-source-map',
    devServer:{
       contentBase:'./dist',
       hot:true,
       inline:true,
    },
    plugins:[
      new CleanWebpackPlugin(['dist']),

      new HtmlWebpackplugin({
       title:'Hot Module Replacement'
      }), 

      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin,
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    }
     
}