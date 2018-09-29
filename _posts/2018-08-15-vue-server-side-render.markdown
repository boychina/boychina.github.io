---
layout:     post
title:      "Vue 服务端渲染"
subtitle:   "Vue Server Side Render"
date:       2018-08-15
author:     "Mr.厉害"
header-img: "img/post-bg/2018-08-11-05.jpg"
header-mask: 0.3
catalog:    true
tags:
  - Vue
  - SSR
---

什么是服务端渲染，简单理解就是将组件或页面通过服务器生成html字符串，在发送到浏览器，最后将讲台标记“混合”为客户端上完全交互的应用程序。于传统的SPA（单页应用）相比，服务端渲染能更好的的有利于SEO，减少页面首屏加载时间，当然对开发来讲我们就不得不多学一些知识来支持服务端渲染。同事服务端渲染对服务器的压力也是相对比较大的，和服务器简单输出静态文件相比，通过node去渲染出页面再传递给客户端显然开销是比较大的，需要注意准备好相应的服务器负载。

### 一、一个简单的例子

```js
// 第1步：穿件一个vue实例
const Vue = require('vue')
const app = new Vue({
  template: `<div>Hello World</div>`
})
// 第2步：穿件一个renderer
const renderer = require('vue-server-renderer').createRenderer()
// 第3步：将Vue实例渲染为HTML
renderer.renderToString(app, (err, html) => {
  if (err) throw err
  console.log(html)
  // => <div data-server-renderer="true">Hello World</div>
})
```

上面例子利用 vue-server-renderer npm 包将一个vue示例最后渲染出了一段html。将这段html发送给客户端就轻松的实现了服务器渲染了。

```js
const servr = require('express')()
server.get('*', (req, res) => {
  // ... 生成 html
  res.end(html)
})
server.listen(8080)
```

### 二、官方渲染步骤

上面例子虽然简单，但在实际项目中往往需要考虑路由，数据，组件化等等，所以服务端渲染不是只用给一个 vue-server-renderer npm包就能轻松搞定的，下面给出一张Vue官方的服务器渲染示意图：

![](https://user-gold-cdn.xitu.io/2018/3/5/161f3e369a32ba11?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

流程图大致意思是：将 Source（源码）通过 webpack 打包出两个 bundle，其中一个 Server Bundle 是给服务端用的，服务端通过渲染器 bundleRenderer 将 bundle 生成 html 给浏览器用；另一个Client Bundle是给浏览器用的，别忘了服务端只是生成前期首屏页面所需的html，后期的交互和数据处理还是需要能支持浏览器脚本的 Client bundle 来完成。

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