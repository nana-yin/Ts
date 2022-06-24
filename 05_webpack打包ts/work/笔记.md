# 使用 webpack 打包ts
- ### 生成 package.json：`npm init -y`
- ### 安装使用 webpack 使用的依赖(-D表示开发时候的依赖)：
    `npm i -D webapck webpack-cli typescript ts-loader`
- ### 新建一个 webpack.config.js 文件，写入基本的规则
- ### 新建一个 tsconfig.json，写入基本的规则。
- ### 在 package.json 中添加打包命令：
    ```
      {
      "scripts": {
        "build": "webpack"
      }
    }
    ```
    #### 执行 `npm run build` 会在根目录中出现dist文件夹
- ### 自动生成一个html文件，并且引入相关的资源：
  - `npm i -D html-webpack-plugin`
  - 在 webpack.config.js 文件中引入，并且配置。
- ### 安装webpack开发服务器，当项目启动后，文件更改，项目会自己热更新：
  - `npm i -D webpack-dev-server`
  - 在 package.json 中添加启动服务器并且自动打开浏览器的命令：
    ```
      {
        "scripts": {
          "start": "webpack serve --open chrome.exe"
        }
      }
    ```
- ### 编译前将原来的dist文件进行清空：
  - `npm i -D clean-webpack-plugin`
  - 在 webpack.config.js 文件中引入，并且配置。
- ### 对代码的兼容性进行优化：
  - `npm i -D @babel/core @babel/preset-env babel-loader core-js`
  - 在 webpack.config.js 文件中引入，并且配置。
