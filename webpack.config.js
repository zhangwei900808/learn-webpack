const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry:{
    app:'./index.js',
    app2:'./index2.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].[hash].js'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/(node_modules|bower_components)/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['env'],
            plugins:['transform-runtime']
          }
        }
      }
    ]
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ]
}
