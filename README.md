# boot_project_v1

> 基于vue init webpack脚手架，集成并应用下面工具：
  css预编译scss，
  加载进度条nprogress，
  字体图标库font-awesome,
  初始化样式nomolize.css,
  以及测试，
  eslint，
  vuex,
  vue-router及懒加载路由,
  vue-resource

代码结构： 
```
.
|-- build
|   |-- build.js
|   |-- check-versions.js
|   |-- dev-client.js
|   |-- dev-server.js
|   |-- utils.js
|   |-- vue-loader.config.js
|   |-- vebpack.base.config.js
|   |-- webpack.dev.config.js
|   |-- webpack.prod.config.js
|   |-- webpack.test.config.js
|   |-- vue-loader.config.js
|   |-- vue-loader.config.js
|-- config                           // 项目开发环境配置
|   |-- index.js                     // 项目打包部署配置 
|   |-- dev.env.js
|   |-- prod.env.js
|   |-- test.env.js
|-- dist                              // 项目最终发布版本代码
|   |-- ...
|-- node_modules                      // 依赖包
|   |-- ... 
|-- src                              // 源码目录
|   |-- assets                       // 资源目录 
|   |-- components                   // 公共组件
|       |-- Navigation.vue           // 页面头部公共组件
|       |-- ...
|   |-- fiters                       
|       |-- filters.js
|   |-- config                       // 路由配置和程序的基本信息配置
|       |-- routes.js                // 配置页面路由
|   |-- scss                         // scss文件
|       |-- _clearfix.scss           // 清除浮动
|       |-- ... 
|   |-- pages                        // 页面类
|       |-- Home.vue                 // 首页
|       |-- Login.vue                // 登录
|   |-- vuex                         // vuex的状态管理
|       |-- store.js                 // store存放状态
|       |-- actions.js               // actions显示提交
|       |-- getters.js               // getters获取计算状态
|   |-- app.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|   |-- static                       // 静态资源目录(本地存放json)
|       |--*.json
|   |-- test                         // 测试目录
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig
|-- .eslintignore
|-- .eslintrc.js
|-- .gitignore                       // git忽略
|-- index.html                       // 页面入口
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息，通过执行 npm init 命令创建
.
```
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
 
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
 
## 前言
```
安装node------------>安装webpack-------------->安装vue-cli
```
快速带过官方脚手架初始化新建项目：
``` bash
# vue init
vue init webpack my-project 
``` 
项目名、vue-router、eslint、test等按需要选择


#### 推荐使用cnpm(淘宝镜像)
```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
注： 如果使用cnpm，dos窗口出现header{}，不能下载，设置proxy即可解决

## 使用

下载项目，运行步骤见Build Setup

## 说明

### 1.引用其他库：
```
方法一：在package.json中dependencies栏添加相应的包，执行
        npm install
方法二：使用
        npm install [name] --save
```
### 2.本地json请求
本地json文件需放置在static目录下，并通过
``` bash 
url:"../static/name.json"
``` 
调用

### 3.sass(scss)使用
需在style中使用lang="scss"，如：
``` bash 
<style lang="scss"></style>
``` 
