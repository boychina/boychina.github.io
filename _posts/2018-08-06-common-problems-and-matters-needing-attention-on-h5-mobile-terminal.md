---
layout:     post
title:      "H5移动端常见问题及注意事项"
subtitle:   "Common problems and matters needing attention on h5 mobile terminal"
date:       2018-08-06
author:     "Mr.厉害"
header-img: "img/in-post/make-the-cli-with-node/make-the-cli-with-node-bg.jpg"
header-mask: 0.3
catalog:    true
tags:
  - H5
  - 移动端
---

# Meta 基础知识

## H5 页面窗口自动调整到设备宽度，并禁止用户缩放页面

```js
// 一、HTML页面结构
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
// width            设置 viewpoint 宽度，为一个正整数，或字符串‘device-width’
// height           设置 viewpoint 高度，一般设置了宽度，会自动解析出高度，可以不用设置
// initial-scale    设置缩放比例，为一个数字，可以带小数
// minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数
// maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数
// user-scalabel    是否允许手动缩放

// 二、JS动态判断
var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth/640;
var ua = navigator.userAgent;
if(/Android (\d+\.\d+)/.test(ua)){
  var version = parseFloat(RegExp.$1);
  if(version > 2.3) {
    document.write('<meta name="viewport" content="width=640,minimum-scale='+phoneScale+',maximum-scale='+phoneScale+',target-densitydpi=device-dpi" />');
  } else {
    document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
  }
} else {
  document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}
```

## 空白页基本 meta 标签

```html

```