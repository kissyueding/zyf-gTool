const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { webpack } = require('webpack');
// const uglify = require('uglifyjs-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: ['./src/gTool.js', './src/gToolDate.js'], // 合并打包
  output: {
    filename: 'gTool.js',
    path: __dirname + '/dist',
    environment: {
      // 是否使用箭头函数 置output.environment，告诉 webpack 在生成的运行时代码中可以使用哪个版本的 ES 特性
      arrowFunction: false,
    },
    // 自动清空上次打包的内容
    // 在打包前，先清空path整个文件内容，在打包
    clean: true
  },
  // webpack 将生成 web 平台的运行时代码，并且只使用 ES5 相关的特性。
  target: ['web', 'es5'],
  plugins: [
    // clean-webpack-plugin 打包前先清理打包文件
    new CleanWebpackPlugin(),
    // 压缩js 使用 uglifyjs-webpack-plugin
    // new uglify()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // 兼容ie es6处理 安装npm i core-js babel-loader @babel/preset-env @babel/core  -D
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'usage',
                corejs: {
                  version: 3
                },
                targets: {
                  ie: 9,
                  chrome: 50,
                  firefox: 50
                }
              }]
            ],
          } 
        },
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
        new TerserPlugin({
          parallel: 5
        })
      ],
 }
};