// 引入包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// webpack-dev-server插件可以自动打开浏览器，并且实时更新
// clean-webpack-plugin插件可以清除dist中旧的文件，将新的文件放进去
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// webpack的所有配置都写在这里
module.exports = {
  mode: 'development',
  // 指定入口文件
  entry: './src/index.ts',
  // 指定打包后的文件所在的目录
  output: {
    // 指定打包后文件的目录
    path: path.resolve(__dirname,'dist'),
    // 打包后文件的文件
    filename: 'bundle.js'
  },
  // 指定webapck打包时用到的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定规则生效的文件
        test: /\.ts$/,
        // 用使用的loader
        use: 'ts-loader',
        // 要排除的文件
        exclude: /node-modules/
      }
    ]
  },
  // 配置webpack的插件
  plugins: [
    new CleanWebpackPlugin(),
    // 自动生成html文件，并且自动引入资源
    new HTMLWebpackPlugin(
      {
        // title: '这是一个自定义的title'
        template: "./index.html"
      }
    )
  ],
  // 用来设置引用模块，不设置的话，引用数据将会报错
  resolve: {
    extensions: ['.ts','.js']
  }
}