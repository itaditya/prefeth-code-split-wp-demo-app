const path = require('path');
const glob = require('glob');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const cssPlugin = new MiniCssExtractPlugin({
  filename: 'style.[contenthash].css',
});

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html',
});

const cleanPlugin = new CleanWebpackPlugin();

const purgeCssPlugin = new PurgecssPlugin({
  paths: glob.sync(`./dist/**/*`),
});

const pluginsMap = {
  development: [htmlPlugin, cssPlugin],
  production: [htmlPlugin, cssPlugin, cleanPlugin, purgeCssPlugin],
};

module.exports = (env, options) => {
  const { mode } = options;

  return {
    output: {
      filename: '[name].[chunkhash].js',
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'babel-loader',
            },
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true, // true outputs JSX tags
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
      ],
    },
    plugins: pluginsMap[mode],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    devServer: {
      historyApiFallback: true,
    },
  };
};
