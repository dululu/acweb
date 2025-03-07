## 对象
- `js`一切皆对象

## 返回 方式
```js
return this.color + ' ' + super.toString();  //调用父类的toString()
return `${this.color} ${super.toString()}`;  //模板字符串
```

## jQuery
- 一般使用方法
- 选择器一般加上`$`符号
```js
let $a = $('div');
$a.click(function(){
    console.log('click');
});
```
也可以直接对**类** **属性** 进行操作

## ajax
一般从服务器获取数据`GET`，然后更新页面

最大好处：异步请求，不会阻塞页面。就是  `在不刷新页面的情况下，只从服务器端获取某些数据，更新页面数据。`。

```js
$.ajax({
    url: url,
    type: "GET",
    data: {
    },
    dataType: "json",
    success: function (resp) {

    },
});
```
---
```js
$.ajax({
    url: url,
    type: "POST",
    data: {
    },
    dataType: "json",
    success: function (resp) {

    },
});
```
- 作用：如第三方登录接口

### `setTimeout`与`setInterval`
- `setTimeout`：延迟执行
- `setInterval`：间隔执行

### requestAnimationFrame
- 与`setInterval`类似，但是更加节省资源
- 一般用于动画效果
- 在浏览系下一次渲染前执行

### `webSocket`
- 一种网络通信协议
- 优点：实时性高，双向通信
- 缺点：不支持低版本浏览器
- 用途：聊天室，直播间
- 与`http`不同，`http`是单向通信(如`ajax`)，`webSocket`是双向通信。
- `http->https`  `ws->wss`

### `canvas`
- 画布，可以绘制图形
- https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial
- 用途：游戏，图表.