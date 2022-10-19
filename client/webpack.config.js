const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

require('dotenv').config();

module.exports = {
  mode: process.env.mode,
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css'],
    alias: {
      src: 'src',
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_module/,
        use: {
            loader: "ts-loader",
        },
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      hash: true,
    }),
    new webpack.DefinePlugin({
      mode: process.env.mode,
      port: process.env.port,
    })
  ],
  devServer: {
    host: 'localhost',
    port: process.env.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  }
};
