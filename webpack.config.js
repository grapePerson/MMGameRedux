const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
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
          plugins: ['transform-class-properties', 'transform-object-rest-spread', 'transform-async-to-generator']
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
       test: /\.(mp3|wav)$/,
       use: [
         {
           loader: 'file-loader',
           options: {
              name: 'audio/[name].[ext]'
           }
         }
       ]
     },
     {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
               name: "fonts/[name].[ext]"
            }
          }
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
