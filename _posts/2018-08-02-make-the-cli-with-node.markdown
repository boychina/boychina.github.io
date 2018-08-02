---
layout:     post
title:      "如何用 Node 来制作 CLI"
subtitle:   "How to make CLI with Node"
date:       2018-08-02
author:     "Mr.厉害"
header-img: "img/in-post/about-life-and-survival/life-and-survival.jpg"
header-mask: 0.3
catalog:    true
tags:
    - cli
    - Node
---

### CLI 是什么

提起 CLI ， 不由得会想起 vue-cli 和 angular-cli，它们都是基于 Node 的命令行工具。

### 为什么要开发一个 CLI

假设你现在要简历一个新项目，这个项目配置和之前的项目配置是一样的。在你没有 CLI 的时候，你只能通过复制、粘贴来进行。
然而，当你有了 CLI ，你就可以通过命令来完成这些不走。当然，你可以说就新建一个项目，完全没必要再开发一个 CLI 工具。那如果你要新建 n 个项目呢？这个时候，有 CLI 和没有 CLI 的区别就体验出来了。

### 怎么开发一个 CLI

##### 准备

