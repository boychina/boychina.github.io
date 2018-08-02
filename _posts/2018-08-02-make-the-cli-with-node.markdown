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

开发一个 CLI ，需要用到一下工具：

 * commander.js
 * ShellJS
 * download-git-repo
 * chalk
 * inquirer
 * ora

##### 开始

新建一个文件夹，名称起做 demo-cli ，并在文件夹内 npm init 。在 demo-cli 文件夹内，新建 bin 文件夹，并在该文件夹内新建 index.js 文件。 紧接着，打开 demo-cli 文件夹内的 package.json 文件，在里边新增加如下命令。

```
{
    "bin": {
        "demo": "./bin/index.js"
    }
}
```

这句代码的意思是指，在你使用 demo 命令的时候，会去执行 bin 文件夹下的 index.js 文件。

这时候，我们在 index.js 文件，写入一下代码。

```
#!/usr/bin/env node

console.log('Hello CLI');
```
