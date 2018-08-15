---
layout:     post
title:      "React 新的生命周期钩子"
subtitle:   "React new life cycle hook"
date:       2018-08-18
author:     "Mr.厉害"
header-img: "img/in-post/make-the-cli-with-node/make-the-cli-with-node-bg.jpg"
header-mask: 0.3
catalog:    true
tags:
  - React
  - 生命周期
---

在 React 16.3 中，Facebook 的工程师们给 React 带了来一系列的新特性，如 suspense 和 time slicing 等，这些都为 React 接下来即将到来的异步渲染机制做准备。

像 time slicing 等 React 内部优化特性，在 API 层面不会有太大变化，而 API 层面最大的变化应该在生命周期钩子。

React