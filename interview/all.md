

1. bootstrap2 和3的区别?

2. bootstrap如何兼容IE9以下浏览器？

* 支持H5（html5shiv.js）
* 兼容媒体查询 response.js
* IE的兼容模式

```js
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
```
* 国产浏览器模式

```js
  <meta name="renderer" content="webkit">
```

[查看详细官方文档](http://v3.bootcss.com/getting-started/#support)

3. bootstrap的概念？

 * 
4. bootstrap的优点？
 
 * 栅格系统
 * css组件化
 * javascript插件

5. bootstrap的缺点？

 * 当风格不同时，需要重新定制样式
 * 会有兼容问题，虽然网上存在很多兼容IE的办法，但需要引入其他文件，有些还不小，势必导致加载速度变慢，影响用户体验。
