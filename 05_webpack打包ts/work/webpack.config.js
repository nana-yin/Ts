// 引入包
const path = require('path')
// webpack的所有配置都写在这里
module.exports = {
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
  moudle: {
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
  }
}