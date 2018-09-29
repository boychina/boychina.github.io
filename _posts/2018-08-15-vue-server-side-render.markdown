---
layout: post
title: "Vue 服务端渲染"
subtitle: "Vue Server Side Render"
date: 2018-08-15
author: "Mr.厉害"
header-img: "img/post-bg/2018-08-11-05.jpg"
header-mask: 0.3
catalog: true
tags:
  - Vue
  - SSR
---

什么是服务端渲染，简单理解就是将组件或页面通过服务器生成 html 字符串，在发送到浏览器，最后将讲台标记“混合”为客户端上完全交互的应用程序。于传统的 SPA（单页应用）相比，服务端渲染能更好的的有利于 SEO，减少页面首屏加载时间，当然对开发来讲我们就不得不多学一些知识来支持服务端渲染。同事服务端渲染对服务器的压力也是相对比较大的，和服务器简单输出静态文件相比，通过 node 去渲染出页面再传递给客户端显然开销是比较大的，需要注意准备好相应的服务器负载。

### 一、一个简单的例子

```js
// 第1步：穿件一个vue实例
const Vue = require("vue");
const app = new Vue({
  template: `<div>Hello World</div>`
});
// 第2步：穿件一个renderer
const renderer = require("vue-server-renderer").createRenderer();
// 第3步：将Vue实例渲染为HTML
renderer.renderToString(app, (err, html) => {
  if (err) throw err;
  console.log(html);
  // => <div data-server-renderer="true">Hello World</div>
});
```

上面例子利用 vue-server-renderer npm 包将一个 vue 示例最后渲染出了一段 html。将这段 html 发送给客户端就轻松的实现了服务器渲染了。

```js
const servr = require("express")();
server.get("*", (req, res) => {
  // ... 生成 html
  res.end(html);
});
server.listen(8080);
```

### 二、官方渲染步骤

上面例子虽然简单，但在实际项目中往往需要考虑路由，数据，组件化等等，所以服务端渲染不是只用给一个 vue-server-renderer npm 包就能轻松搞定的，下面给出一张 Vue 官方的服务器渲染示意图：

![](https://user-gold-cdn.xitu.io/2018/3/5/161f3e369a32ba11?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

流程图大致意思是：将 Source（源码）通过 webpack 打包出两个 bundle，其中一个 Server Bundle 是给服务端用的，服务端通过渲染器 bundleRenderer 将 bundle 生成 html 给浏览器用；另一个 Client Bundle 是给浏览器用的，别忘了服务端只是生成前期首屏页面所需的 html，后期的交互和数据处理还是需要能支持浏览器脚本的 Client bundle 来完成。

### 三、具体怎么实现

实现过程就是将上面的示意图转化成代码实现，不过这个过程还是有点小复杂的，需要多点耐心去推敲每个细节。

#### 1、先实现一个基本版

项目结构示例：

```js
├── build
│   ├── webpack.base.config.js     # 基本配置文件
│   ├── webpack.client.config.js   # 客户端配置文件
│   ├── webpack.server.config.js   # 服务端配置文件
└── src
    ├── router
    │    └── index.js              # 路由
    └── views
    │    ├── comp1.vue             # 组件
    │    └── copm2.vue             # 组件
    ├── App.vue                    # 顶级 vue 组件
    ├── app.js                     # app 入口文件
    ├──  client-entry.js           # client 的入口文件
    ├──  index.template.html       # html 模板
    ├──  server-entry.js           # server 的入口文件
├──  server.js           # server 服务
```

其中：

##### (1) comp1.vue 和 copm2.vue 组件

```js
<template>
  <section>组件1</section>
</template>
<script>
  export default {
    data () {
      return {
        msg: ''
      }
    }
  }
</script>
```

##### (2) App.vue 顶级 Vue 组件

```js
<template>
  <div id="app">
    <h1>vue-ssr</h1>
    <router-link class="link" to="/comp1">to comp1</router-link>
    <router-link class="link" to="/comp2">to comp2</router-link>

    <router-view class="view"></router-view>
  </div>
</template>

<style lang="stylus">
  .link
      margin 10px
</style>
```

##### (3) index.template.html 模板

```html
<!DOCTYPE html>
<html lang="zh_CN">
<head>
    <title>{{ title }}</title>
    <meta charset="utf-8"/>
    <meta name="mobile-web-app-capable" content="yes"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1"/>
    <meta name="renderer" content="webkit"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"/>
    <meta name="theme-color" content="#f60"/>
</head>
<body>
<!--vue-ssr-outlet-->
</body>
</html>
```

##### (4) 路由 router

```js
import Vue from "vue";
import Router from "vue-router";
import comp1 from "../views/comp1.vue";
import comp2 from "../views/comp2.vue";
Vue.use(Router);
export function createRouter() {
  return new Router({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: "/comp1",
        component: comp1
      },
      {
        path: "/comp2",
        component: comp2
      },
      { path: "/", redirect: "/comp1" }
    ]
  });
}
```

#### (5) app.js app 入口文件

```js
import Vue from "vue";
import App from "./App.vue";
import { createRouter } from "./router";

export function createApp(ssrContext) {
  const router = createRouter();
  const app = new Vue({
    router,
    ssrContext,
    render: h => h(App)
  });
  return { app, router };
}
```

我们通过 createApp 暴露一个根 Vue 实例，这是为了确保每个用户能得到一份新的示例，避免状态污染，所以我们写了一个可以重复执行的工厂函数 createApp。同样路由 router 我们也是一样的处理方式 createRouter 来暴露一个 router 实例

##### (6) client-entry.js client 的入口文件

```js
import { createApp } from "./app";

const { app, router } = createApp();
router.onReady(() => {
  app.$mount("#app");
});
```

客户端代码是在路由解析完成的时候将 app 挂载到 #app 标签下

##### (7) server-entry.js server 的入口文件

```js
import { createApp } from "./app";

export default context => {
  // 因为这边 router.onReady 是异步的，所以我们返回一个 Promis
  // 确保路由或组件准备就绪
  return new Promise((resolve, reject) => {
    const { app, router } = createApp(context);
    router.push(context.url);
    router.onReady(() => {
      resolve(app);
    }, reject);
  });
};
```

服务器的入口文件我们返回了一个 promise

#### 2、打包

在第一步我们大费周章实现了一个带有路由的日常功能模板代码，接着我们需要利用 webpack 将上面的代码打包出服务端和客户端 key 的代码，入口文件分别是 server-entry.js 和 client-entry.js

##### (1) webpack 构建配置

一般配置分为是哪个文件：base，client 和 server。基本配置（base config）包含在两个环境共享的配置，例如，输出路径（output path），别名（alias）和 loader。服务器配置（server config）和客户端配置（client config），可以通过使用 webpack-merge 来简单地扩展基本配置。

###### a. webpack.base.config 配置文件

```js
const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: '#cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name]-[chunkhash].js'
  },
  resolve: {
    alias: {
      'public': path.resolve(__dirname, '../public'),
      'components': path.resolve(__dirname, '../src/components')
    },
    extensions: ['.js', '.vue']
  },
  module: {
    noParse: /es6-promise\.js$/,
    rules: [
      {
        test: /\.(js|vue)/,
        use: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            preserveWhitespace: false,
            postcss: [
              require('autoprefixer')({
                browsers: ['last 3 versions']
              })
            ]
          }
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.css$/,
        use:['vue-style-loader', 'css-loader']
      },
      {
        test: /\.json/,
        use: 'json-loader'
      }
    ]
  },
  performance: {
    maxEntrypointSize: 300000,
    hints:'warning'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warning: false }
    }),
    new ExtractTextPlugin({
      filename: 'common.[chunkhash].css'
    })
  ]
}
```

###### b. webpack.client.config.js 配置文件

```js




```





