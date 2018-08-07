---
layout:     post
title:      "Vue 和微信小程序的区别、比较"
subtitle:   "Vue and WeChat small program differences"
date:       2018-08-07
author:     "Mr.厉害"
header-img: "img/in-post/make-the-cli-with-node/make-the-cli-with-node-bg.jpg"
header-mask: 0.3
catalog:    true
tags:
  - Vue
  - 微信
  - 小程序
---

写了vue项目和小程序，发现二者有许多相同之处，在此总结一下二者共同点和区别。

# 一、生命周期

* Vue 生命周期

![](/img/in-post/vue-and-wechat-small-program-differences/vue-life-cycle.png)

* 小程序生命周期

![](/img/in-post/vue-and-wechat-small-program-differences/wechat-small-program-life-cycle.png)

相比之下，小程序的钩子函数要简单得多。

vue 的钩子函数在跳转新页面时，