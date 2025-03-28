##  单位
### `px` 像素
- px（pixel）是像素的意思，是屏幕上显示的最小单位，是一个点。
- 是**绝对长度**单位——它们与其他任何东西都没有关系，通常被认为总是相同的大小。
- 1px = 1/96英寸  
- 1cm = 37.8px
- 我们通常不会在屏幕上使用 cm（厘米）。惟一一个你经常使用的值，估计就是 px（像素）。

### 相对长度单位
- `em` 相对于本元素的字体大小，或者在用于 `font-size`时相对于`父元素`的字体大小。
- `rem` 相对于`根元素`的字体大小。
- `vh `和 `vw `分别相对于视口的高度和宽度。

## 边距
### `margin` 外边距
- 上 右 下 左  
- 顺时针 
- 单位：px em  rem  百分比
- `auto` 自动居中
### 外边距重叠
- 当两个**垂直**外边距相遇时，它们将合并为一个外边距。合并后的外边距的高度等于两个合并前外边距中的**较大者**。
- 两个外边距相遇时，其中一个外边距是正的，另一个是负的，那么合并的外边距的大小等于两者相加的和。

### `padding` 内边距
- 内容与边框之间的距离
- 元素的宽度 = 内容宽度 + 左内边距 + 右内边距 + 左边框 + 右边框， 也就是元素加上`padding`和`border`的总宽度

### 盒子模型
- `content-box` 默认值，宽度和高度只包括内容，不包括边框和内边距
- `border-box`：设置`border`和`padding`不会改变元素的宽高，而是挤占内容区域。

## 定位
### `position` 属性
- `static` 默认值，元素在正常文档流中的位置
- `relative` 相对定位，相对于元素本身的位置进行定位
- `absolute` 绝对定位，相对于最近的已定位的祖先元素进行定位
- `fixed` 固定定位，相对于浏览器窗口进行定位
- `sticky` 粘性定位，相对于视口或父元素进行定位

## 元素展示格式 
- `block` 块级元素
- `inline` 行内元素
- `inline-block` 行内块级元素


## 选择器
```css
.user-card-body-info-username > a {

}
```
- `>` 选择器，选择子元素
- 空格选择器，选择后代元素

#### `href` 属性

- HyperText Reference的缩写，意为超文本引用，用于指定超链接的目标地址。
- target属性：指定在何处打开链接
  - `_blank` 在新窗口中打开
  - `_self` 默认值，在相同的框架中打开
  - `_parent` 在父框架中打开
  - `_top` 在整个窗口中打开


## flex
### wrap 包裹 换行
- `nowrap` 不换行
- `wrap` 换行
### `justify-content` 主轴对齐方式
- `flex-start` 左对齐
- `flex-end` 右对齐
- `center` 居中
- `space-between` 两端对齐
- `space-around` 两侧对齐
- `space-evenly` 两侧对齐，元素之间的间距相等
- ---

## 响应式布局
- `@media` 媒体查询
- `min-width` 最小宽度
- `max-width` 最大宽度

