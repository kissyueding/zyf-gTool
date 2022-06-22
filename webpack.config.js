const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { webpack } = require('webpack');
module.exports = {
  entry: './src/gTool.js',
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, 'dist'),
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
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // 兼容ie es6处理 安装npm i core-js babel-loader @babel/preset-env @babel/core  -D
          options: {},
        },
      }
    ]
  },
  optimization: {
    splitChunks: {
      // chunks: 'all',
      cacheGroups: {
        commons: {
          name: 'static' ,  // 提取出来的文件命名
          // name： ‘common/common’ //  即先生成common文件夹
          chunks: 'all',   // initial表示提取入口文件的公共css及js部分
          // chunks: 'all' // 提取所有文件的公共部分
          // test: '/\.css$/',  // 只提取公共css ，命名可改styles 
          minChunks:2, // 表示提取公共部分最少的文件数
          minSize: 0  // 表示提取公共部分最小的大小 
         // 如果发现页面中未引用公共文件，加上enforce: true
        }
      }
    },
    minimizer:[
    ]
  }
};