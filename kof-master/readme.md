# [Web应用课中期项目](https://www.acwing.com/activity/content/1150/)

![](https://cdn.acwing.com/media/article/image/2022/04/20/1_a2b760b9c0-微信截图_20220420162643.png)

## KOF
- kof是怎样实现的，在框框里实现一些元素，比如人物。
- 基本逻辑，人物的移动，人物的攻击，人物的受伤，人物的死亡。
- 如何让人物移动，电影的逻辑：实现动画，由静态图片实现，一秒钟内最少闪过24张图片，实现动画效果。帧数越多，动画效果越好。
#### 具体实现
- 每秒钟画60次
- 该函数`requestAnimationFrame(func)`，每秒在浏览器上执行60次。
- 二维运动，坐标值（x,y） 维护两个方向上的速度。
#### 文件结构
> 面向对象编程：把每一个元素都变成一个`class`,整个项目也是一个`class`。
- `staic` `tenplates` 