const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: '/dist'
  },
  plugins: [
    new UglifyJsPlugin({ sourceMap: true }),
    new CleanWebpackPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: 'project',
      template: './src/index.html',
      inject: 'body'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.(png|jpe?g|gif)/i,
        use: [
          "file-loader",
          {
            loader: 'image-webpack-loader',
            options: {
              gifsicle: {
              interlanced: false
            },
            optipng: {
              optimizationLevel: 7
            },
            pngquant: {
              quality: "65-90",
              speed: 4
            },
            mozjpeg: {
              progressive: true,
              quality: 65
            }
            }
          },
        ],
      }
    ]
  }
};
