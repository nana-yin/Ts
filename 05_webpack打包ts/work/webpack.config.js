// 引入包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
// webpack-dev-server插件可以自动打开浏览器，并且实时更新
// clean-webpack-plugin插件可以清除dist中旧的文件，将新的文件放进去
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// @babel-core
// @babel/preset-env  使得代码兼容不同的浏览器的环境预设
// core-js  模拟js运行环境，可以让老版本的浏览器使用新标准的技术

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
    filename: 'bundle.js',
    // 告诉webpack，最外层不要使用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  // 指定webapck打包时用到的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定规则生效的文件
        test: /\.ts$/,
        // 用使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设置预定义的环境
              presets:[
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "58",
                      "ie": "11"
                    },
                    // 指定的corejs的版本
                    "corejs": "3",
                    // 使用corejs的方式，"usage"表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
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