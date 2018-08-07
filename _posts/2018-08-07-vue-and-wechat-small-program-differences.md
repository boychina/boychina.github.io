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

### 一、生命周期

#### Vue 生命周期

![Vue生命周期](/img/in-post/vue-and-wechat-small-program-differences/vue-life-cycle.png)

#### 小程序生命周期

![小程序生命周期](/img/in-post/vue-and-wechat-small-program-differences/wechat-small-program-life-cycle.png)

相比之下，小程序的钩子函数要简单得多。

vue 的钩子函数在跳转新页面时，钩子函数都会触发，但是小程序的钩子函数，页面不同的跳转方式，触发的钩子并不一样。

**onLoad：页面加载**

一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。

**onShow：页面显示**

每次打开页面都会调用一次。

**onReady：页面初次渲染完成**

一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。

对界面的设置如 wx.setNavigationBarTitle 请在 onReady 之后设置。详见生命周期。

**onHide：页面隐藏**

当 navigationTo 或底部 tab 切换时调用。

**onUnload：页面卸载**

当 redirectTo 或 navigationBack 的时候调用。

***数据请求***

在页面加载请求数据时，两者钩子的使用有些类似，vue 一般会在 created 或者 mounted 中请求数据，而在小程序中，会在 onLoad 或者 onShow 中请求数据。

### 二、数据绑定

vue: vue 动态绑定一个变量的值为元素的某个属性的时候，会在变量前加上冒号:，如：

```js
<img :src="imgSrc" />
```

小程序：绑定某个变量的值为元素属性时，会用两个大括号括起来，如果不加括号，会被认为是字符串。如：

```js
<image src="{{imgSrc}}"></image>
```

### 三、列表渲染

直接贴代码，两者还是有些相似：

vue:

```js
<ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul>

let example1 = nex Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})
```

小程序：

```js
Page({
  data: [
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  ]
})

<text wx:for="{{items}}">{{item}}</text>
```

