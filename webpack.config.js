const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  performance: {
  maxEntrypointSize: 512000,
  maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
          plugins: ['transform-class-properties','transform-object-rest-spread']
        }
      },
      {
       test: /\.scss$/,
       use: [
               'css-hot-loader',
               MiniCssExtractPlugin.loader,
               'css-loader',
               'sass-loader'
           ]
     },
     {
       test: /\.(jpe?g|png|gif)$/i,
       loader:"file-loader",
       query:{
         name:'[name].[ext]',
         outputPath:'images/'
       }
     }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
    new MiniCssExtractPlugin({
    filename: "index.css"
  })
  ]
};
