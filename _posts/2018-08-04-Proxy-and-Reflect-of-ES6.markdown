---
layout:     post
title:      "ES6 的 Proxy 和 Reflect"
subtitle:   "Proxy and Reflect of ES6"
date:       2018-08-04
author:     "Mr.厉害"
header-img: "img/in-post/make-the-cli-with-node/make-the-cli-with-node-bg.jpg"
header-mask: 0.3
catalog:    true
tags:
  - ES6
  - Proxy
  - Reflect
---

### Proxy

Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。

Proxy 可以理解成，在目标对象之间架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供一种机制，可以对外界的访问进行过滤和改写。 Proxy 这个词的原意就是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。

```js
let obj = new Proxy({}, {
  get: (target, key, receiver) => {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: (target, key, value, receiver) => {
    console.log(`getting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});
```

上面代码对一个空对象架设一层拦截，重定义了属性的读取（get）和设置（set）行为。这里展示先不解释具体的语法，只看运行结果。

```js
obj.count = 1;
// setting count!
++obj.count
// getting count!
// setting count!
// 2
```
ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。

```js
let proxy = new Proxy(target, handler);
```

Proxy 对象的所有用法，都是上面这种形式，不同的只是 handler 参数的写法。其中，nex Proxy() 表示生成一个 Proxy 实例，target 参数表示所要拦截的目标对象，handler 参数也是一个对象，用来控制拦截行为。

```js
let proxy = new Proxy({}, {
  get: (target, property) => {
    return 35;
  }
});

proxy.time // 35
proxy.name // 35
proxy.title // 35
```

### Reflect