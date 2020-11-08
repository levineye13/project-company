const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, 'src'),
  entry: { main: './pages/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules',
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader?name=./images/[name].[ext]',
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './images/header-logo.ico',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin(),
  ],
};
