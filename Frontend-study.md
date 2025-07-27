# <center style="color: #087aedff">_前端学习_</center>

---

## <span style="color: #00aaffff">一. HTML5</span>

### html 概念

html 是一种超文本标记语言，用于构建和呈现 Web 页面内容

### html 基本骨架

```html
<!-- 文档类型声明(document type缩写) -->
<!DOCTYPE html>
<!-- 根元素 -->
<html lang="en">
  <!-- 元数据(属性和信息) -->
  <head>
    <!-- 网页文档属性 -->
    <meta charset="UTF-8" />
    <!-- 网页标题,有利于SEO(搜索引擎)优化 -->
    <title>Document</title>
  </head>
  <!-- 网页内容 -->>
  <body></body>
</html>
```

### 基本概念

1. 块级元素(block)：包含块，块级元素会独占一行，并垂直对齐，可以设置 width，height 属性，常见的有：`div`,`form`,`h1~h6`,`hr`,`p`,`table`,`ul`等

2. 行内元素(内联元素 inline)：行内元素不会独占一行，只占自身大小，width，height 属性无效，常见的有：`a`,`b`,`em`,`i`,`span`,`strong`等

3. 行内块级元素：不换行，但是能识别宽高，常见的有：`button`,`img`,`input`等

4. 空元素： 没有内容、也不需要闭合标签的元素

5. src：指定图片路径

   - 绝对路径：指向文件在电脑或服务器上的完整位置。 `D:\images\photo.jpg`
   - 相对路径：相对于当前文件的位置。 同级关系`./` 子级关系`/` 父级关系`../`
   - 网络路径：以 http:// 或 https:// 开头，指向互联网上的资源。 `http://www.baidu.com/photo.jpg`

6. URL：统一资源定位符，用于定位和访问互联网上资源（如网页、图片、视频等）的地址

7. SEO：搜索引擎优化，提高网页的排名，提高用户体验

8. `meta`标签：功能有：定义网页字符编码，控制视口，SEO 优化控制页面刷新或重定向等

### html 语法

注释： `<!--  -->`

常用标签：

- 标题 `<h*></h*>`

- 段落 `<p></p>`

- 段落换行 `<br />`

- 水平线 `<hr color="" width="" size="" align="" />`

- 嵌入图像 `<img src="" alt="" width="" height="" title="" />`

- 引入外部资源 `<link />`

- 超链接(锚标签)

  - 跳转目标地址 `<a href="http://"></a>`

  - 跳转页内锚点 `<a href="#这里"></a>`，`<p id="这里">跳转到这里</p>`

  - 返回顶端 `<a href="#"></a>`

- 文本

  - 着重文本 `<em></em>`

  - 粗体文本 `<b></b>`

  - 斜体文本 `<i></i>`

  - 加重语气 `<strong></strong>`

  - 下标文本 `<sub></sub>`

  - 上标文本 `<sup></sup>`

  - 删除字 `<del></del>`

  - 无特殊含义 `<span></span>`

- 列表

  - 有序列表(type=1,a,A,i,I 等)

  ```html
  <ol type="1">
    <li>字节跳动</li>
    <li>阿里</li>
    <li>腾讯</li>
    <li>
      视频平台
      <ol type="a">
        <li>抖音</li>
        <li>bilibili</li>
      </ol>
    </li>
  </ol>
  ```

  - 无序列表(type=disc(默认实心圆),circle(空心圆),square(小方块),none(不显示)等)**常用于导航**

  ```html
  <ul>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
  </ul>
  ```

  - 自定义列表

  ```html
  <dl>
    <dt>腾讯</dt>
    <dd>QQ</dd>
    <dd>微信</dd>
    <dd>游戏</dd>
    <dt>视频平台</dt>
    <dd>抖音</dd>
    <dd>bilibili</dd>
    <dd>优酷</dd>
  </dl>
  ```

- 表格

  - 4x2 表格

  ```html
  <table>
    <caption>
      表格名字
    </caption>
    <thead>
      <!-- 特殊单元格，加粗 -->
      <th>姓名</th>
      <th>年龄</th>
    </thead>
    <tbody>
      <tr>
        <td>张三</td>
        <td>18</td>
      </tr>
      <tr>
        <td>王五</td>
        <td>28</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>平均年龄</td>
        <td>23</td>
      </tr>
    </tfoot>
  </table>
  ```

  - 单元格水平(列)合并 `<td colspan="2">单元格1-2</td>`

  - 单元格垂直(行)合并 `<td rowspan="2">单元格3-6</td>`

- 表单

  - 表单属性 `<form action="url" method="get|post" name="myform"></form>`

  - 表单控件

  ```html
  <!-- 表单标签 -->
  <form>
    <!-- 表单域 -->
    <input type="text" />
    <!-- 表单按钮 -->
    <input type="submit" />
  </form>
  ```

  - 表单元素(文本域)

  ```html
  <form>
    <!-- placeholder：给输入框增加一个占位符(提示词)  -->
    <input type="text" name="user" placeholder="手机号/邮箱" />
    <!-- 定义表单控件 -->
    <label for="password">密码</label>
    <!-- 文本域类型密码框 -->
    <input id="password" type="password" name="password" />
    <!-- 文本域类型单选按钮 -->
    <input type="radio" name="sex" value="male" />男
    <input type="radio" name="sex" value="womale" />女
    <!-- 文本域类型复选框 -->
    <input type="checkbox" name="hobby" value="game" />打游戏
    <input type="checkbox" name="hobby" value="ball" />打球
    <input type="checkbox" name="hobby" value="music" />听音乐
    <!-- 文本域类型文件 -->
    <input type="file" />
    <!-- 文本域类型提交按钮 -->
    <input type="submit" value="确定" />
    <!-- 文本域类型重置按钮 -->
    <input type="reset" />
  </form>
  ```

- 视频`<video></video>`

  - 视频属性

  |    属性    |              描述              |
  | :--------: | :----------------------------: |
  |   `src`    |      要播放的视频的`url`       |
  | `autoplay` |            自动播放            |
  | `controls` |     显示控件，比如播放按钮     |
  |   `loop`   |            循环播放            |
  |  `muted`   |           输出被静音           |
  | `preload`  | 页面加载的时候，自动预加载资源 |
  |  `height`  |         设置播放器高度         |
  |  `width`   |         设置播放器宽度         |
  |  `poster`  |            视频封面            |

- 音频`<audio></audio>`

  - 音频属性

  |    属性    |              描述              |
  | :--------: | :----------------------------: |
  |   `src`    |      要播放的音频的`url`       |
  | `autoplay` |            自动播放            |
  | `controls` |     显示控件，比如播放按钮     |
  |   `loop`   |            循环播放            |
  |  `muted`   |           输出被静音           |
  | `preload`  | 页面加载的时候，自动预加载资源 |

- 媒介

```html
<audio controls>
  <source str="horse.ogg" />
  <source str="horse.mp3" />
  Your browser does not support the audio element.
</audio>
```

- 容器`<div></div>`

- H5 新语义标签

  - 头部`<header></header>`

  - 导航`<nav></nav>`

  - 文档中的节，比如章节、页眉、页脚`<section></section>`

  - 侧边栏`<aside></aside>`

  - 脚部`<footer></footer>`

  - 一个独立的、完整的内容块，如一篇博客`<article></article>`

常用实体字符：

| 显示结果 |      描述       | 实体名称 | 实体编号 |
| :------: | :-------------: | :------: | :------: |
|   ` `    |      空格       | `&nbsp;` | `&#160;` |
|   `<`    |     小于号      |  `&lt;`  | `&#60;`  |
|   `>`    |     大于号      |  `&gt;`  | `&#62;`  |
|   `&`    |      和号       | `&amp;`  | `&#38;`  |
|   `"`    |      引号       | `&quot;` | `&#34;`  |
|   `'`    |      撇号       | `&apos;` | `&#39;`  |
|   `©`    | 版权(copyright) | `&copy;` | `&#169;` |
|   `®`    |    注册商标     | `&reg;`  | `&#174;` |
|   `¥`    |     元(yen)     | `&yen;`  | `&#165;` |

### 更新中... 上次更新时间：2025-07-19

---

## <span style="color: #00aaffff">二. CSS3</span>

### CSS 概念

CSS 称为层叠样式表，又叫级联样式表，用于描述网页的外观和格式

### CSS 语法

注释：`/*  */`

CSS 规则由选择器，以及一条或多条声明两个部分组成

```css
/* 选择器h1 */
h1 {
  /* 两条声明 */
  /* 属性：值，又称为键值对 */
  color: blue;
  font-size: 30px;
}
```

### 基本概念

1. `@import`：导入其他的 CSS 文件，提供加载样式的方式，只用于加载 CSS

2. `@import`与`link`标签的区别：加载顺序的区别，`link`引用的 CSS 会同时被加载，`@import`引用的 CSS 会等到页面全部被下载完再被加载，容易没有样式(闪烁)

3. 文档流(标准流)：网页中按照默认规则排列和布局的方式

### CSS 的引入方式

- 内联样式(行内样式)

```html
<!-- 缺乏整体性和规划性，不利于维护 -->
<p style="color: blue;">CSS</p>
```

- 内部样式

```html
<!-- 单个页面具有统一性和规划性，但在多个页面容易混乱 -->
<style>
  h1 {
    color: blue;
    font-size: 30px;
  }
</style>
```

- 外部样式(**推荐**)

```html
<link rel="stylesheet" href="css/style.css" />
```

- 导入式

```css
/* 影响加载速度 */
@import url("style.css");
p {
  color: blue;
}
```

### CSS 样式特征

- 继承性
  被包含在内部的标签可以拥有外部标签的样式

- 层叠性
  同一个元素被多个选择器选中并设置了相同的属性时，浏览器会根据一定的“层叠规则”决定最终应用哪一个样式。后写的样式会覆盖前面的，权重高的会覆盖权重低的。

- 优先级
  样式定义冲突时，浏览器会根据选择器的“权重”来决定哪个样式生效
  优先级从高到低：行内样式(内联样式) > ID 选择器 > 类选择器 > 元素选择器 > 通配选择器

### CSS 基础选择器

1. 全局选择器
   选择所有元素

```css
/* 通配符：初始化 */
* {
  margin: 0;
  padding: 0;
}
```

2. 元素选择器
   选择所有指定的 HTML 元素

```css
p {
  font-size: 16px;
}
```

3. 类选择器
   选择所有带有指定类的元素，类名前加点号(`.`)

```css
.example {
  color: red;
}
/* html */
<p class="example">This is an example.</p>
```

4. ID 选择器
   针对某一个特定的标签来使用，只能使用一次，CSS 中的 ID 选择器以`#`来定义,**ID 唯一**

```css
#mytitle {
  color: red;
}
/* html */
<h1 id="mytitle">你好</h1>
```

5. 合并选择器
   提取共同的样式，减少重复代码

```css
.box1,
.box2 {
  width: 200px;
  height: 100px;
}
/* html */
<h1 class="box1">这是box1</h1>
<h1 class="box2">这是box2</h1>
```

### CSS 关系选择器

- 后代选择器`E F {}`
  选择所有被 E 元素包含的 F 元素，中间用空格隔开

- 子代选择器`E>F {}`
  选择所有作为 E 元素的直接子元素 F，对更深一层的元素不起作用，用`>`表示

- 相邻兄弟选择器`E+F {}`
  选择紧跟 E 元素后的 F 元素，用`+`表示，选择相邻的第一个兄弟元素

- 通用兄弟选择器`E~F {}`
  选择 E 元素之后的所有兄弟元素 F，作用于多个元素，用`~`隔开

### CSS 伪类选择器

- 超链接相关

  - `:link`“链接”：超链接点击之前(只适用于`a`)

  - `:visited`“访问过的”：超链接点击之后(只适用于`a`)

  - `:hover`“悬停”：鼠标悬停在元素上(适用于所有标签)

  - `:active`“激活”：鼠标点击标签，但是不松手时(适用于所有标签)

    样例：

    ```css
    /* 在 CSS 中，这四种状态必须按照固定的顺序写(爱恨准则) */
    /* 让超链接点击之前是红色 */
    a:link {
      color: red;
    }
    /* 让超链接点击之后是蓝色 */
    a:visited {
      color: blue;
    }
    /* 鼠标悬停在超链接上时变成绿色 */
    a:hover {
      color: green;
    }
    /* 鼠标点击超链接时(不松手)变成黄色 */
    a:active {
      color: yellow;
    }
    ```

- `:first-child`选择器
  匹配其父元素中的第一个子元素

```css
ul li:first-child {
  color: red;
}
```

- `:last-child`选择器
  匹配父元素中最后一个子元素

```css
ul li:last-child {
  color: red;
}
```

- `:nth-child(n)` 选择器
  匹配其父元素中的第 n 个子元素，n 可以是一个数字，一个关键字

```css
/* 匹配第二个子元素 */
ul li:nth-child(2) {
  color: red;
}
/* 匹配偶数的子元素 */
ul li:nth-child(even) {
  color: red;
}
/* 匹配奇数的子元素 */
ul li:nth-child(odd) {
  color: red;
}
```

### CSS 伪对象选择器

- `::before`选择器
  在元素内容之前插入内容

  ```css
  ul li::before {
    content: "*";
  }
  ```

- `::after`选择器
  在元素内容之后插入内容

  ```css
  ul li::after {
    content: "**";
  }
  ```

### CSS 字体属性

- 字体颜色`color`

```css
p {
  color: red;
  color: #ff0000;
  color: rgb(255, 0, 0);
  /* alpha 0 ~ 1 0完全透明，1完全不透明*/
  color: rgba(255, 0, 0, alpha);
}
```

- 字体大小`font-size`，最好**不小于**`12px`

- 字体粗细`font-weight`

  |    值     |                        描述                         |
  | :-------: | :-------------------------------------------------: |
  | `normal`  |                      默认字符                       |
  |  `bold`   |                    定义粗体字符                     |
  | `bolder`  |                   定义更粗的字符                    |
  | `lighter` |                   定义更细的字符                    |
  | 100 ~ 900 | 定义由细到粗，400 等同`normal`，而 700 等同于`bold` |

- 字体样式`font-style`
  默认值`normal` 斜体字`italic`

- 字体`font-family`
  如：`microsoft yahei`，可选多个，每个值用逗号隔开，加引号

- 字体图标

  - 概念
    使用字体图标显示图标，解决失真问题和图片占用资源问题

  - 常用字体图标库
    [阿里字体图标库](https://www.iconfont.cn/)

  - 优点

    1. 轻量性：加载速度快，减少`http`请求
    2. 灵活性：可以利用 CSS 设置大小颜色等
    3. 兼容性：网页字体支持所有现代浏览器等

  - 使用流程

    1. 选择图标
    2. 下载代码
    3. 选择`font-class`引用(推荐)

    ```css
    <span class="iconfont icon-xxx"></span>
    ```

    ```html
    <link rel="stylesheet" href="./css/icofont.css" />
    ```

### CSS 背景属性

- 背景颜色`background-color`

- 背景图像`background-image`
  默认放置左上角，如果不够大，会在垂直和水平方向平铺图像，如果图像大小超过元素大小，从图像的左上角显示元素大小的那部分，用`url("")`引用

- 平铺背景图像`background-repeat`

  |     值      |     说明     |
  | :---------: | :----------: |
  |  `repeat`   |    默认值    |
  | `repeat-x`  | 只向水平平铺 |
  | `repeat-y`  | 只向垂直平铺 |
  | `no-repeat` |    不平铺    |

- 背景图像大小`background-size`

|      值      |                               说明                               |              示例               |
| :----------: | :--------------------------------------------------------------: | :-----------------------------: |
|   `length`   | 设置背景图像的宽度和高度，第一个宽度，第二个高度，不设置为`auto` | `background-size: 100px 200px;` |
| `percentage` |  计算相对位置区域百分比，第一个宽度，第二个高度，不设置为`auto`  |  `background-size: 100% 200%;`  |
|   `cover`    |     保持图片综纵横比并将图片缩放成完全覆盖背景区域的最小大小     |    `background-size: cover;`    |
|  `contain`   |     保持图片综纵横比并将图片缩放成适应背景定位区域的最大大小     |   `background-size: contain;`   |

- 设置背景图像的起始位置`background-position`

|       值        |                             说明                             |
| :-------------: | :----------------------------------------------------------: |
|   `left top`    |                            左上角                            |
|  `left center`  |                            左 中                             |
|  `left bottom`  |                            左 下                             |
|   `right top`   |                            右 上                             |
| `right center`  |                            右 中                             |
| `right bottom`  |                            右 下                             |
|  `center top`   |                            中 上                             |
| `center center` |                            中 中                             |
| `center bottom` |                            中 下                             |
|     `x% y%`     | 左上角是`0% 0%`,如果指定一个值，其他默认`50%`，默认是`0% 0%` |

- 设置背景固定还是随页面滑动`background-attachment`

|    值    |      说明      |
| :------: | :------------: |
| `scroll` | 背景随页面滑动 |
| `fixed`  |  背景图片固定  |

- 简写属性(设置所有背景属性，又称复合属性)`background`

```css
p {
  /* background-image -repeat -positon/-size */
  background: url("1.jpg") no-repeat center center/cover;
}
```

### CSS 文本属性

- 指定元素文本的水平对齐方式`text-align`

|    值    |        描述        |
| :------: | :----------------: |
|  `left`  | 文本左对齐，默认值 |
| `right`  |     文本右对齐     |
| `center` |    文本居中对齐    |

- 添加文本修饰`text-decoration`

|       值       |  描述  |
| :------------: | :----: |
|  `underline`   | 下划线 |
|   `overline`   | 上划线 |
| `line-through` | 删除线 |

- 控制文本大小写`text-transform`

|      值      |        描述        |
| :----------: | :----------------: |
| `capitalize` | 每个单词首字母大写 |
| `uppercase`  |   全部为大写字母   |
| `lowercase`  |   全部为小写字母   |

- 规定文本块中首行文本的缩进`text-indent`

```css
p {
  text-indent: 50px;
  /* 允许负值，将第一行左缩进 */
  text-indent: -50px;
}
```

- 增加或减少字符间距`letter-spacing`

|    值    |             描述             |
| :------: | :--------------------------: |
| `length` | 字符间的固定空间，如：`50px` |

- 设置行高`line-height`

|    值    |         描述         |
| :------: | :------------------: |
| `number` | 设置数字，如：`50px` |

### CSS 元素属性

- 处理元素的超出内容`overflow`

|    值     |                  描述                  |
| :-------: | :------------------------------------: |
| `visible` |        显示超出容器内容，默认值        |
| `hidden`  |        隐藏超出容器内容，被修剪        |
| `scroll`  | 内容会被修剪，但是可以滚动查看剩余内容 |
|  `auto`   |  如果内容被修剪，可以滚动查看剩余内容  |

- 指定元素内的空白怎样处理`white-space`

|    值    |     描述     |
| :------: | :----------: |
|  `pre`   | 空白会被保存 |
| `nowrap` | 文本不会换行 |

```css
p {
  /* 不会换行 */
  white-space: nowrap;
  /* 隐藏内容 */
  overflow: hidden;
  /* 显示... */
  text-overflow: ellipsis;
}
```

- 设置元素的透明度`opacity`
  取值 0 ~ 1，0 表示完全透明，1 表示完全不透明

- 转换元素`transform`
  `transform: [转换函数];`接受一个转换函数，如`transform: rotate(45deg);`顺时针旋转 45 度

  |        值        |                                             描述                                             |
  | :--------------: | :------------------------------------------------------------------------------------------: |
  | `translate(x,y)` |                         元素位移，元素偏移的 x 轴和 y 轴距离，可为负                         |
  |   `scale(x,y)`   | 元素缩放，元素 x 轴和 y 轴缩放的倍数，小于 1 为缩放，大于 1 为放大，小于 0 和等于 0 效果相等 |
  | `rotate(angle)`  |                   元素旋转，旋转的度数，单位`deg`，正数顺时针，负数逆时针                    |

  - 添加阴影效果`box-shadow`

    ```css
    .box {
      /* 必选：水平偏移量 垂直偏移量 可选：模糊半径 颜色 inset(改为内部阴影，不设置为外部阴影) */
      box-shadow: 10px 10px 5px red inset;
    }
    ```

### CSS 列表属性

- 设置列表项标记的类型`list-style-type`

|    值     |  描述  |
| :-------: | :----: |
|  `none`   | 无标记 |
|  `disc`   | 实心圆 |
| `circle`  | 空心圆 |
| `square`  | 正方形 |
| `decimal` |  数字  |

- 使用图像替换列表项的标记`list-style-image`

```css
ul {
  list-style-image: url(images/bullet.gif);
}
```

- 相对于对象内容绘制列表项标记`list-style-position`

|    值     |                  描述                  |
| :-------: | :------------------------------------: |
| `outside` | 默认值，标记在列表项外部，放置在文本外 |
| `inside`  |     标记在列表项内部，放置在文本内     |

- 简写属性(设置所有列表属性，又称复合属性)`list-style`

```css
li {
  /* 一般有type，就不用image，少用到list-style */
  list-style: circle outside url("./images/bullet.gif");
}
```

### CSS 盒子模型

- 包含外边距`margin`、边框`border`、内边距`padding`和实际内容`content`

  - 实际内容`content`：盒子的内容，显示文本和图像

  ```css
  .box {
    /* 宽度和高度：content */
    width: 300px;
    height: 300px;
  }
  ```

  - 内边距`padding`：清楚内容周围的区域，内边距是透明的

  ```css
  .box {
    /* 内边距：padding */
    padding: 20px;
    /* 20px: 上下 40px: 左右 */
    /* padding: 20px 40px; */
    /* 上 右 下 左 */
    /* padding: 20px 30px 40px 50px; */
    /* 指定上 */
    /* padding-top: 50px; */
  }
  ```

  - 边框`border`：围绕在内边距和内容外的边框

  ```css
  .box {
    /* 边框：border */
    /* 10px: 边框的粗细 solid: 边框样式 red: 边框颜色 */
    border: 10px solid red;
    /* 
    dash: 虚线
    solid: 实线
    dotted: 圆点虚线
    double: 双实线
  
    颜色值： 单词 十六进制 rgb rgba
    */
  }
  ```

  1.  `border-radius`属性
      设置元素圆角效果

      ```css
      .box {
        box-radius: 100px 100px 0px 0px;
        /*
        四个值：左上，右上，右下，左下
        两个值：第一个左上和右下 第二个值为右上和左下
        一个值：四个圆角值相同
        50% 和 100% 都能表示圆
        */
      }
      ```

  - 外边距`margin`：清除边框外的区域，外边框是透明的

  ```css
  .box {
    /* 外边距：margin */
    margin: 50px;
    /*
      一个值：四个方向
      两个值：上下 左右
      四个值：上 右 下 左
      指定方向：margin-top
    */
  }
  ```

### CSS 弹性盒子

- 概念
  CSS3 弹性盒是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式，由弹性容器和弹性子元素组成

- 父元素属性

  1. `display`属性
     开启弹性盒`display: flex;`，子元素默认水平排列

  2. `flex-direction`属性
     指定弹性子元素在父容器中的位置

     |       值       |               描述               |
     | :------------: | :------------------------------: |
     |      row       | 横向从左到右排列(左对齐)，默认值 |
     |  row-reverse   |     横向从右到左排列(右对齐)     |
     |     column     |     纵向从上到下排列(上对齐)     |
     | column-reverse |     纵向从下到上排列(下对齐)     |

  3. `justify-content`属性
     内容对齐属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线对齐(水平)

     |      值       |                       描述                       |
     | :-----------: | :----------------------------------------------: |
     |  flex-start   |         弹性项目向行头紧挨着填充(左对齐)         |
     |   flex-end    |         弹性项目向行尾紧挨着填充(右对齐)         |
     |    center     |         弹性项目居中紧挨着填充(水平居中)         |
     | space-between |             弹性项目平均分布在该行上             |
     | space-around  | 弹性项目平均分配在该行上，两边留有一半的间隔空间 |

  4. `align-items`属性
     设置或检索弹性盒子元素在侧轴(纵轴)方向上的对齐方式(垂直)

     |     值     |                   描述                   |
     | :--------: | :--------------------------------------: |
     | flex-start | 元素纵轴起始位置紧靠侧轴起始边界(上对齐) |
     |  flex-end  | 元素纵轴结束位置紧靠侧轴结束边界(下对齐) |
     |   center   |        元素纵轴居中对齐(垂直居中)        |

- 子元素属性

  1. `flex-grow`属性
     根据弹性盒子元素所设的扩展因子作为比例来分配剩余空间，默认为 0，即不放大
     分配**剩余空间**，0.1 即 10%，1 即 100%，超出按 100%

  2. `flex`属性
     分配**容器空间**，按比例分配，可以忽视子元素的`width`和`height`

### 脱离文档流

- 浮动`float`
  定义在哪个方向浮动，任何元素都可以浮动，只能**左右浮动**，不能上下浮动，相当于在页面上面增加一个浮层放置内容

  |  值   |     描述     |
  | :---: | :----------: |
  | left  | 元素向左浮动 |
  | right | 元素向右浮动 |

  所有元素同时浮动时，会变成水平摆放，当容器不足时，会在下一行摆放
  浮动的**副作用**：

  1. 浮动元素会造成父元素高度塌陷
  2. 后续元素会受到影响

- 清除浮动(的副作用)

  - 浮动元素会造成父元素高度塌陷
    解决方案：

    1. 父元素设置高度

       ```css
       .container {
         height: 100px;
       }
       ```

    2. 受影响的元素增加`clear`属性
       如果同级元素受到影响，直接给受到影响的元素增加`clear`属性

       |   值    |       描述       |
       | :-----: | :--------------: |
       | `left`  |    清除左浮动    |
       | `right` |    清除右浮动    |
       | `both`  | 同时清除左右浮动 |

    3. `overflow`清除浮动
       如果由父级塌陷，并且同级元素也受到了影响，可以使用`overflow`清除浮动

       ```css
       .container {
         height: 100px;
         /* 清除浮动 */
         overflow: hidden;
         clear: both;
       }
       ```

    4. 伪对象的方式
       如果由父级塌陷，并且同级元素也受到了影响，还可以使用伪对象方式处理

       ```css
       .container::after {
         /* 为父标签添加伪类after，设置空的内容，并且使用clear: both; */
         content: "";
         display: block;
         clear: both;
       }
       ```

- 定位`position`

  |     值     |   描述   |
  | :--------: | :------: |
  | `relative` | 相对定位 |
  | `absolute` | 绝对定位 |
  |  `fixed`   | 固定定位 |

  绝对定位和相对定位会**脱离文档流**，使用`left`、`top`、`right`、`bottom`属性来设置位置

  1. 相对定位

     ```css
     .box {
       width: 200px;
       height: 200px;
       /* 
       相对定位：不会脱离文档流，相对于父级元素进行定位，父级元素没有限制 
       */
       position: relative;
       top: 100px;
     }
     ```

  2. 绝对定位

     ```css
     .container {
       width: 500px;
       height: 500px;
       background-color: red;
       position: relative;
       top: 100px;
       left: 100px;
     }

     .box {
       width: 200px;
       height: 200px;
       /* 
       绝对定位：相对于父级元素进行定位，父级元素必须存在定位，如果不存在，
                则向上逐级寻找具有定位的元素，如果都没有，则相对于浏览器定位
       */
       position: absolute;
       top: 100px;
     }
     ```

  3. 固定定位

     ```css
     .box {
       width: 200px;
       height: 200px;
       /* 
       固定定位：永远相对于浏览器窗口，页面滚动时不会移动
       */
       position: fixed;
       top: 100px;
     }
     ```

  `z-index`属性
  设置元素的堆叠顺序，拥有更高堆叠顺序的元素会覆盖拥有较低堆叠顺序的元素，常与定位结合使用

  ```css
  /* z-index 值越大，越上层，一般不超过1000 */
  .box1 {
    width: 200px;
    height: 200px;
    background-color: red;
    position: fixed;
    top: 100px;
    left: 50px;
    z-index: 1;
  }
  .box2 {
    width: 200px;
    height: 200px;
    background-color: blue;
    position: fixed;
    top: 200px;
    left: 100px;
    z-index: 2;
  }
  ```

### CSS 动画

- 创建动画`@keyframes`
  定义动画在不同时间点的样式状态，从而实现复杂的动画效果

  ```css
  @keyframes name {
    0% {
      /* 起始状态样式 */
    }
    50% {
      /* 中间状态样式 */
    }
    100% {
      /* 结束状态样式 */
    }
    /* or */
    from {
      /* 起始状态样式 */
    }
    to {
      /* 结束状态样式 */
    }
  }
  ```

- 使用动画`animation`
  实现元素动画效果

  ```css
  element {
    /* 要应用的 @keyframes 动画名称 */
    animation-name: name;
    /* 完成一个周期的时间 */
    animation-duration: 3s;
    /* 
    动画速度曲线，ease(默认，慢-快-慢)，linear(匀速)，ease-in(慢-快，慢开始)，ease-out(快-慢，慢结束)，ease-in-out(慢-快-慢，慢开始-慢结束)，cubic-bezier(0.1, 0.7, 1.0, 0.1)(自定义速度曲线)
    */
    animation-timing-function: ease;
    /* 动画开始前的延迟时间 */
    animation-delay: time;
    /* 
    动画播放次数，数字(3，播放3次)，infinite(无限循环)
    */
    animation-iteration-count: infinite;
    /* 
    动画是否反向播放，normal(默认，正常播放)，reverse(反向播放)，alternate(奇数次正常播放，偶数次反向播放)，alternate-reverse(奇数次反向播放，偶数次正常播放)
    */
    animation-direction: alternate;
    /* 
    动画执行前后如何应用样式，none(默认，不应用样式)，forwards(动画结束，应用最后一帧样式)，backwards(动画开始，应用第一帧样式)，both(动画开始和结束，应用第一帧和最后一帧样式)
    */
    animation-fill-mode: forwards;
    /* 
    控制动画的播放状态，running(默认，播放)，paused(暂停)
    */
    animation-play-state: running;
    /*简写形式 */
    animation: slideIn 1.5s ease-out 0.5s 1 normal forwards;
  }
  ```

### 媒体查询

- 概念
  使页面在不同终端设备下达到不同的效果。根据设备大小自动加载不同的样式

- 设置`meta`标签
  使用设备的宽度作为视图宽度并禁止初始的缩放

  ```html
  <!-- 
   width = device-width 宽度等于当前设备的宽度
   initial-scale = 1.0 初始缩放比例(默认设置为1.0)
   maximum-scale = 1.0 语序用户缩放到的最大比例(默认设置为1.0)
   minimum-scale 用户是否可以手动缩放(默认设置为no)
   -->
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, max-scale=1, user-scalable=no"
  />
  ```

- 语法

  ```css
  @media screen and (max-width: 768px) {
    /* 设备小于768px加载样式 */
    body {
      background-color: red;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    /* 设备大于768px但小于992px加载样式 */
    body {
      background-color: pink;
    }
  }
  @media screen and (min-width: 992px) {
    /* 设备大于992px加载样式 */
    body {
      background-color: green;
    }
  }
  ```

### 雪碧图

- 概念
  CSS Sprite 也叫 CSS 精灵图、 CSS 雪碧图，是一种网页图片应用处理方式，将一个页面涉及到的所有图片都包含到一张大图中去

- 优点

  1. 减少图片的字节
  2. 减少网页的`http`请求，从而大大的提升页面的性能

- 原理

  1. 通过`background-image`引入背景图片
  2. 通过`background-position`把背景图片移动到自己需要的位置

  ```css
  .icon1 {
    dispaly: block;
    width: 45px;
    height: 70px;
    background: url(1.png);
    background-position: -21px -12px;
  }
  .icon2 {
    dispaly: block;
    width: 45px;
    height: 70px;
    background: url(1.png);
    background-position: -308px -84px;
  }
  ```

### 滑动门

- 概念
  创建可伸缩的导航按钮或标签页效果

- 实现

  ```html
  <div class="slide">
    <ul>
      <li>
        <a href="#">手机</a>
        <div class="slide-list">小米1</div>
      </li>
      <li>
        <a href="#">平板</a>
        <div class="slide-list">小米2</div>
      </li>
    </ul>
  </div>
  ```

  ```css
  .slide ul li:hover > .slide-list {
    display: block;
  }
  ```

### 更新中... 上次更新时间：2025-07-23

---

## <span style="color: #00aaffff">三. JS 交互</span>

### JS 简介

JavaScript（简称 JS）是一种轻量级、解释型（或即时编译型）的编程(脚本)语言，主要用于网页开发，为网页添加动态交互功能，也是一种嵌入式语言

### 基本概念

1. 脚本语言：脚本语言是一种解释型编程语言，通常用于自动化任务、快速开发或嵌入其他程序中运行。它无需编译，直接由解释器逐行执行，具有动态类型、语法简洁、开发效率高的特点，但运行速度较慢

2. JS 语句：JavaScript 程序的单位是行( line )，也就是一行一行地执行。一般情况下，每一行就是一个语句，以分号结尾(分号可选，但是一般添加)

3. 标识符：用来识别各种值的合法名称，最常见的标识符就是变量名，由字母、美元符号`$`、下划线`_`和数字组成，其中数字不能开头，中文是合法的标识符，但是不推荐使用

4. CDN(内容分发网络 Content Delivery Network)：是一种分布式的服务器系统，用于全球范围内快速传输内容，加快页面加载速度，网络加速资源

5. 转义：反斜杠`\`在字符串内有特殊含义，用于表示一些特殊字符，又称为转义符，如：`null`:`\0`、`\b`:退格符、`\f`:换页符、`\n`:换行符、`\r`:回车符、`\t`:制表符、`\v`:垂直制表符、`\`:反斜杠、`\'`:单引号、`\"`:双引号、`\\`:转义符

### JS 语法

注释：单行注释`//` 多行注释`/* */`

关键字：

- 变量`let`
- 常量`const`

数据类型：

- 基本类型(原始类型)：

  - 数值：`let a = 1;`

  - 字符串：`let b = 'hello world';`(双引号或单引号)

  - 布尔值：`let c = true;`

  - 空值：`let d = null;`(空对象(object 类型)，用于初始化)

  - 未定义：`let e;`(变量声明但未定义时返回`undefined`)

- 复合类型(合成类型)：

  - 对象：

    ```js
    /**
     * 对象：
     *     狭义对象：键值对的集合
     *     广义对象：在JavaScript中，一切皆对象
     */
    let obj = {
      name: "hello world",
      age: 18,
      isOk: true,
    };
    ```

运算符：

- `typeof`运算符：确定数据类型

  ```js
  typeof 123; // number
  typeof "char"; // string
  typeof true; // boolean
  typeof {}; // object
  typeof null; // object
  ```

- 算术运算符

  - 加法运算符`+`

    ```js
    /*
      两个字符串相加，加法运算符会变成链接运算符，结果为拼接字符串
      如果一个时字符串，另一个是非字符串，非字符串会转换为字符串
    */
    var a = "hello";
    var b = "world";
    console.log(a + b); //helloworld
    var c false;
    console.log(a + c); //hellofalse
    ```

  - 减法运算符`-`

  - 乘法运算符`*`

  - 除法运算符`/`

  - 取余运算符`%`

  - 自增运算符`++`

    ```js
    console.log(5++); //先运算，再++
    console.log(++5); //再++，先运算
    ```

  - 自减运算符`--`

    ```js
    console.log(5--); //先运算，再--
    console.log(--5); //再--，先运算
    ```

- 赋值运算符`=`
  `=`赋值，`x += y`等同于`x = x + y`

- 比较运算符
  用于比较两个值的大小，返回一个布尔值

  | 比较运算符 |           描述           |
  | :--------: | :----------------------: |
  |    `<`     |        小于运算符        |
  |    `<=`    |         小于等于         |
  |    `>`     |           大于           |
  |    `>=`    |         大于等于         |
  |    `==`    |       等于(比较值)       |
  |   `===`    |  严格等于(比较值和类型)  |
  |    `!=`    |      不等于(比较值)      |
  |   `!==`    | 严格不等于(比较值和类型) |

- 布尔运算符

  - 取反运算符`!`
    以下六个值取反为`true`，其他值取反都为`false`
    `undefined`、`null`、`0`、`"" or ''`、`NaN`、`false`

  - 且运算符`&&`
    如果两边都为真，则返回真

  - 或运算符`||`
    如果两边有一个为真，则返回真

- 三元(三目)运算符
  `condition ? expr1 : expr2`

类型转换

- 自动转换

  1. 第一种情况：不同类型的数据互相运算
     `123 + "abc";`

  2. 第二种情况：对非布尔值类型的数据求布尔值
     `!"abc";`

- 强制转换

  1. `Number()`函数
     将任意类型的值转换为数值

     ```js
     //字符串：如果不可以解析为数值，返回 NaN
     Number("123abc"); // NaN
     Number("123"); // 123
     ```

  2. `String()`函数
     将任意类型的值转换为字符串

  3. `Boolean()`函数
     将任意类型的值转换为布尔值，除了以下五个转换结果为`false`，其他值全部为`true`
     `undefined`、`null`、`0`、`"" or ''`、`NaN`

### JS 语句

打印(日志信息)：在浏览器中显示出来

    ```js
    console.log("hello world");
    ```

条件语句

- `if`语句

  ```js
  //推荐
  if (布尔值) {
    语句;
  }

  //不推荐
  if (布尔值) 语句;

  if (布尔值) {
    语句;
  } else {
    语句;
  }
  ```

- `switch`语句

  ```js
  // break 不能少，否则会接着执行下一个语句
  switch (条件) {
    case 值1: {
      语句;
      break;
    }
    case 值2: {
      语句;
      break;
    }
    default: {
      语句;
      break;
    }
  }
  ```

循环语句
重复执行某个操作

- `for`循环

  ```js
  // 三个表达式，可以省略
  for (初始化表达式; 条件; 迭代因子) {
    循环体;
  }

  // or

  for (初始化表达式; 条件; 迭代因子) 循环体;
  ```

- `while`循环

  ```js
  while (条件) {
    循环体;
  }
  ```

循环控制语句
改变循环的正常执行流程

- `break`：跳出代码块或循环

- `continue`：终止本轮循环，返回循环头部，开始下一轮循环

### JS 字符串

- 概念
  字符串：`let b = 'hello world';`(双引号或单引号)

- 单引号字符串内部可以使用双引号，双引号字符串内部可以使用单引号，如果想在单引号括号中使用单引号，则需要使用**转义字符`\`**

- 长字符串想分行，在尾部使用反斜杠

  ```js
  var longString =
    " Long \
  long \
  string";
  ```

- 字符串属性

  - `length`属性
    表示字符串的长度

- 字符串常用方法

  - `concat()`方法
    用于连接两个字符串，返回一个新字符串，不改变原字符串

    ```js
    var str1 = "hello";
    var str2 = "world";
    console.log(str1.concat(str2)); // helloworld
    console.log(str1 + str2); // helloworld
    ```

  - `slice()`方法
    用于从原字符串取出子字符串并返回，不改变原字符串，第一个参数时子字符串的开始位置，第二个参数时子字符串的结束位置(不含该位置)

    ```js
    "hello world".slice(0, 5); // hello
    ```

    如果省略第二个参数，则表示到原字符串结束

    ```js
    "bilibili".slice(4); // bili
    ```

  - `substring()`方法
    `substring()`方法与`slice()`方法类似，唯一的区别是`substring()`方法不能接受负数

    ```js
    "hello world".substring(0, 5); // hello
    ```

  - `indexOf()`方法
    用于确定一个字符串在另一个字符串中第一次出现的位置，返回结果是匹配开始的位置，如果返回`-1`，就表示不匹配

    ```js
    "hello world".indexOf("hello"); // 0
    "hello world".indexOf("world"); // 6
    "hello world".indexOf("j"); // -1
    ```

  - `trim()`方法
    用于去除字符串两端的空格，返回一个新字符串，不改变原字符串

    ```js
    " hello world ".trim(); // 'hello world'
    ```

  - `replace()`方法
    用于替换匹配的子字符串

    ```js
    "hello world".replace("hello", "hi"); // 'hi world'
    ```

  - `split()`方法
    按照给定的规则分割字符串，返回一个由分割出来的子字符串组成的数组

    ```js
    "hello|nice|world".split("|"); // ['hello', 'nice', 'world']
    "hello nice world".split(" "); // ['hello', 'nice', 'world']
    "helloworld".split(""); // ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']
    ```

### JS 数组

- 概念
  数组(array)：是按次序排列的一组值，每个值都有编号(从零开始),整个数组用方括号表示

```js
var arr = ["hello", "world"];

// or

var arr = [];
arr[0] = "hello";
arr[1] = "world";
```

- 任何类型的数据都可以放入数组

```js
var arr = [1, "hello", true, { name: "hello" }];
```

- 数组属性

  - `length`属性
    返回数组的成员数量

  ```js
  var arr = [1, 2, 3, 4, 5];
  console.log(arr.length); // 5
  ```

- 数组遍历

  - 使用`for`循环

    ```js
    var arr = [1, 2, 3, 4, 5];
    for (var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
    ```

  - 使用`while`循环

    ```js
    var arr = [1, 2, 3, 4, 5];
    var i = 0;
    while (i < arr.length) {
      console.log(arr[i]);
      i++;
    }
    ```

- 数组常用方法

  - `isArray()`方法
    返回一个布尔值，表示参数是否为数组

    ```js
    console.log(Array.isArray([1, 2, 3])); // true
    ```

  - `push()`方法
    用于在数组末端添加一个或多个元素，并返回添加新元素后的数组长度，会改变原数组

    ```js
    var arr = [1, 2, 3];
    console.log(arr.push(4, 5)); // 5
    console.log(arr); // [1, 2, 3, 4, 5]
    ```

  - `pop()`方法
    用于删除数组的最后一个元素，并返回该元素，会改变原数组

    ```js
    var arr = [1, 2, 3];
    console.log(arr.pop()); // 3
    console.log(arr); // [1, 2]
    ```

  - `join()`方法
    以指定参数作为分隔符，将所有数组成员连接为一个字符串返回，如果不提供参数，默认用逗号分割

    ```js
    var arr = [1, 2, 3];
    console.log(arr.join()); // 1,2,3
    console.log(arr.join("")); // 123
    console.log(arr.join("-")); // 1-2-3
    console.log(arr.join(" ")); // 1 2 3
    ```

  - `concat()`方法
    用于多个数组的合并，它将新数组的成员添加到原数组成员的后部，然后返回一个新数组，原数组不变

    ```js
    var arr1 = ["hello"];
    var arr2 = ["world"];
    var arr3 = ["!"];
    arr1.concat(arr2); // ['hello', 'world']
    arr1.concat(arr2, arr3); // ['hello', 'world', '!']
    ```

  - `slice()`方法
    用于提取目标数组的一部分，返回一个新数组，原数组不变，第一个参数为起始位置(从 0 开始)，第二个参数为结束位置(本身不包括在内)，如果省略第二个参数，则一直返回到原数组的最后一个成员

    ```js
    var arr = [1, 2, 3, 4, 5];
    arr.slice(0); // [1, 2, 3, 4, 5]
    arr.slice(1, 3); // [2, 3]
    arr.slice(); // [1, 2, 3, 4, 5]
    ```

### JS 函数

- 概念
  函数：一段可以反复调用的代码块

- 函数声明
  function 命令声明的代码区块就是一个函数，function 命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数，函数体放在大括号里面

  ```js
  // function 命令声明函数
  function print(s) {
    console.log(s);
  }

  // or

  // 变量赋值的写法
  var print = function () {
    console.log("print");
  };
  ```

- 函数返回值
  JS 函数提供两个接口实现与外界的交互，其中参数作为入口，接收外界信息；返回值作为出口，把运算结果反馈给外界

  ```js
  function add(a, b) {
    return a + b;
    //return 后语句不会执行
  }
  ```

### HTML 引入 JS

- 内联脚本(嵌入到 HTML 文件中)：

  ```html
  <body>
    <script>
      let num = 10;
    </script>
  </body>
  ```

- 外部脚本(引入本地独立 JS 文件)：

  ```html
  <!-- 可以在 head or body 引入 -->
  <script src=""></script>
  ```

- 引入网络来源文件：

  ```html
  <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js"></script>
  ```

### DOM

- 概念
  DOM(Document Object Model)：文档对象模型，是 HTML 和 XML 文档的编程接口，JS 操作网页的接口，它将网页转为一个 JS 对象，从而可以用脚本进行各种操作

- DOM 节点

  - 概念
    DOM 节点(node)：DOM 的最小组成单位叫做节点，网页中的所有元素都是节点，节点可以是元素节点、属性节点、文本节点、注释节点、文档节点、文档类型节点，文档的树形结构(DOM 树)解释由各种不同类型的节点组成

  - 节点的类型

    - Document：整个文档树的顶层节点

    - DocumentType：doctype 标签

    - Element：网页的各种 HTML 标签

    - Attribute：网页元素的属性(比如`class="right"`)

    - Text：标签之间或标签包含的文本

    - Comment：注释

    - DocumentFragment：文档片段

  - document 对象

    - 概念
      document 对象是文档的根节点，每张网页都有自己的 document 对象，只要浏览器开始载入 HTML 文档，该对象就存在，可以直接使用

    - 方法(获取元素)

      - `createElement()`
        创建一个元素节点

        ```js
        var div = document.createElement("div");
        ```

      - `getElementsByTagName()`
        搜索 HTML 标签名，返回符合条件的元素，他的返回值是一个类似数组对象(HTMLCollection 实例)，可以实时反映 HTML 文档的变化，如果没有任何匹配的元素，则返回空集

        ```js
        // 所有 <p></p>
        var paras = document.getElementsByTagName("p");
        // innerHTML:给元素添加内容
        paras[0].innerHTML = "Hello World!";
        ```

      - `getElementsByClassName()`
        返回一个类似数组的对象(HTMLCollection 实例)，包括了所有`class`名字符合指定条件的元素，元素的变化实时反映在返回结果中

        ```js
        // 类为 <div class="names"></div>
        var paras = document.getElementsByClassName("names");
        ```

      - `getElementById()`
        用于选择拥有`name`属性的 HTML 元素(`<form>`、`<radio>`、`<img>`等)，返回一个类似于数组的对象(NodeList 实例)，因为`name`属性相同的元素可能不止一个

        ```js
        // 表单为 <form name="it"></form>
        var forms = document.getElementsByName("it");
        ```

      - `getElementById()`
        返回匹配指定`id`属性的元素节点，如果没有发现匹配的节点，则返回`null`

        ```js
        // id 唯一 <h1 id="myElement"></h1>
        var element = document.getElementById("myElement");
        ```

      - `querySelector()`
        接受一个 CSS 选择器作为参数，返回匹配该选择器的元素节点，如果有多个节点满足匹配条件，则返回第一个匹配的节点，如果没有发现匹配的节点，则返回`null`

        ```js
        /**
         *  在 CSS 中，匹配 class (.)，匹配 id (#)
         */
        var element = document.querySelector("#myElement");
        ```

      - `querySelectorAll()`
        与`querySelector()`类似，区别是返回一个 NodeList 对象，包含所有匹配给定的选择器的节点

        ```js
        var elements = document.querySelectorAll(".myClass");
        ```

  - Element 对象

    - 概念
      对应网页的 HTML 元素，每一个 HTML 元素，在 DOM 树上都会转化成一个 Element 节点对象

    - 属性

      - Element.id
        返回指定元素的`id`属性，该属性可读写

        ```js
        <p id="foo"></p>;
        var p = document.querySelector("p");
        console.log(p.id); // foo
        p.id = "bar";
        console.log(p.id); // bar
        ```

      - Element.className
        用来读写当前元素节点的`class`属性，它的值是一个字符串，每个`class`之间用空格分隔

        ```js
        <div class="one two three"></div>;
        var div = document.querySelector("div");
        console.log(div.className); // one two three
        div.className = "four five";
        console.log(div.className); // four five
        ```

      - Element.classList
        `add()`：增加一个`class`

        ```js
        <div class="one two three"></div>;
        var div = document.querySelector("div");
        console.log(div.className); // one two three
        div.classList.add("four");
        console.log(div.className); // one two three four
        ```

        `remove()`：删除一个`class`

        ```js
        <div class="one two three"></div>;
        var div = document.querySelector("div");
        console.log(div.className); // one two three
        div.classList.remove("three");
        console.log(div.className); // one two
        ```

      - Element.innerHTML
        返回一个字符串，等同于该元素包含的所有 HTML 代码，该属性可读写，常用来设置某个节点的内容，他能改写所有元素节点的内容，包括`<HTML>`和`<body>`元素

        ```js
        <div class="one two three"></div>;
        var div = document.querySelector("div");
        div.innerHTML = "Hello World!";
        console.log(div.innerHTML); // Hello World!
        ```

      - Element.innerText
        与 innerHTML 类似，不同的是 innerText 无法识别元素，会直接渲染成字符串

        ```js
        <div class="one two three"></div>;
        var div = document.querySelector("div");
        div.innerHTML = '<a href="http://www.baidu.com">Hello World!</a>';
        console.log(div.innerHTML); // Hello World! (会识别标签)
        div.innerText = '<a href="http://www.baidu.com">Hello World!</a>';
        console.log(div.innerText); // <a href="http://www.baidu.com">Hello World!</a> (不会识别标签)
        ```

  - Attribute 属性

    - Element.getAttribute()
      返回当前元素节点的指定属性，如果属性不存在，则返回`null`

      ```js
      <div id="div1" class="demo"></div>;
      var div = document.getElementById("div1");
      div.getAttribute("class"); // demo
      ```

    - Element.setAttribute()
      用于为当前元素节点新增属性，如果同名属性已存在，则相当于编辑已存在的属性

      ```js
      <div id="div1"></div>;
      var div = document.getElementById("div1");
      div.setAttribute("class", "demo1"); // <div id="div1" class="demo1"></div>
      div.setAttribute("class", "demo2"); // <div id="div1" class="demo2"></div>
      ```

    - Element.hasAttribute()
      返回一个布尔值，表示当前元素节点是否包含指定属性

      ```js
      <div id="div1"></div>;
      var div = document.getElementById("div1");
      div.hasAttribute("id"); // true
      div.hasAttribute("class"); // false
      ```

    - Element.removeAttribute()  
      用于从当前元素节点移除属性

      ```js
      <div id="div1" class="demo"></div>;
      document.getElementById("div1").removeAttribute("class");
      ```

  - Node 节点

    - textContent 属性
      返回当前节点和它所有后代节点的文本内容

      ```js
      <div id="box">
        <p>这是一个文本</p>
        <a href="#">这是一个链接</a>
      </div>;
      var div = document.getElementById("box");
      console.log(div.textContent);
      /**
       * 这是一个文本
       * 这是一个链接
       */
      div.textContent = "这是新的文本";
      console.log(div.textContent);
      /**
       * 这是新的文本
       */
      ```

    - appendChild 属性
      接受一个节点对象作为参数，将其作为最后一个子节点，插入当前节点，返回值是插入文档的子节点

      ```js
      <div id="container"></div>;
      var container = document.getElementById("container");
      var p = document.createElement("p");
      p.innerHTML = "Hello World";
      container.appendChild(p);
      ```

- CSS 操作

  - 直接`style`属性
    使用网页元素节点的`setAttribute`方法直接操作网页元素的`style`属性

    ```js
    <div id="box"></div>;
    var div = document.getElementById("box");
    div.setAttribute("style", "color: red; font-size: 20px;");
    ```

  - 元素节点的`style`属性

    ```js
    <div id="box"></div>;
    var div = document.getElementById("box");
    var divStyle = div.style;
    divStyle.color = "red";
    divStyle.fontSize = "20px";
    divStyle.backgroundColor = "yellow";
    ```

  - `cssText`属性

    ```js
    <div id="box"></div>;
    var div = document.getElementById("box");
    var divStyle = div.style;
    divStyle.cssText = "color: red; font-size: 20px; background-color: yellow;";
    ```

### 事件

- 事件类型

  - 鼠标事件
    与鼠标相关的事件

    - `click`
      按下鼠标时触发

      ```js
      <button id="btn"></button>;
      var btn = document.getElementById("btn");
      // + on
      btn.onclick = function () {
        // 弹出提示
        alert("点击了");
      };
      ```

    - `mousedown`
      按下鼠标键时触发

      ```js
      <button id="btn"></button>;
      var btn = document.getElementById("btn");
      // + on
      btn.onmousedown = function () {
        // 弹出提示
        alert("鼠标按下");
      };
      ```

    - `mouseup`
      释放按下的鼠标键时触发

      ```js
      <button id="btn"></button>;
      var btn = document.getElementById("btn");
      // + on
      btn.onmouseup = function () {
        // 弹出提示
        alert("鼠标抬起");
      };
      ```

    - `mousemove`
      当鼠标在节点内部移动时触发，当鼠标持续移动时，该事件会连触发

      ```js
      <button id="btn"></button>;
      var btn = document.getElementById("btn");
      // + on
      btn.onmousemove = function () {
        // 弹出提示
        alert("鼠标移动");
      };
      ```

    - `mouseover`
      鼠标进入一个节点时触发

      ```js
      <button id="btn"></button>;
      var btn = document.getElementById("btn");
      // + on
      btn.onmouseover = function () {
        // 弹出提示
        alert("鼠标移入");
      };
      ```

    - `mouseout`
      鼠标离开一个节点时触发

      ```js
      <button id="btn"></button>;
      var btn = document.getElementById("btn");
      // + on
      btn.onmouseout = function () {
        // 弹出提示
        alert("鼠标移出");
      };
      ```

  - 键盘事件
    键盘事件由用户击打键盘触发

    - `keydown`
      按下键盘时触发

      ```js
      <input type="text" id="input">
      var input = document.getElementById("input");
      // e 表示 event(事件对象) ，有很多属性
      input.onkeydown = function(e) {
        //keycode 表示按键的编码，唯一
        console.log(e.keycode);
        // keycode=13 表示回车键
        if(e.keycode === 13) {
          alert("按下回车键");
        }
      }
      ```

    - `keypress`
      按下有值的键时触发，即按下`Ctrl`、`Alt`、`Shift`、`Meta`这样无值的键，这个事件不会触发，对于有值的键，按下时先触发`keydown`事件，再触发这个事件

      ```js
      <input type="text" id="input">
      var input = document.getElementById("input");
      input.onkeypress = function(e) {
        console.log(e.keycode);
      }
      ```

    - `keyup`
      松开键盘时触发该事件

      ```js
      <input type="text" id="input">
      var input = document.getElementById("input");
      input.onkeyup = function(e) {
        console.log(e.keycode);
      }
      ```

  - 表单事件
    表单事件是在使用表单元素及输入框可以监听的一系列事件

    - `input`

      ```js
      <input type="text" id="input">
      var input = document.getElementById("input");
      input.oninput = function(e) {
        // e.target.value 获取输入框的值
        console.log(e.target.value);
      }
      ```

    - `select`

      ```js
      <input type="text" id="input">
      var input = document.getElementById("input");
      input.onselect = function(e) {
        // e.target.value 获取选中的值
        console.log(e.target.value);
      }
      ```

    - `change`

      ```js
      <input type="text" id="input">
      var input = document.getElementById("input");
      input.onchange = function(e) {
        // e.target.value 按回车或失去焦点的时候，获取输入框的值
        console.log(e.target.value);
      }
      ```

  - Touch 事件
    触摸引发的事件，可以通过`TouchEvent.type`属性查看发生的是哪一种事件

    - `touchstart`
      用户开始触摸时触发，它的`target`属性返回发生触摸的元素节点

      ```js
      <div id="box"></div>
      // 只能用 DOM 2级事件绑定方式
      var box = document.getElementById("box");
      box.addEventListener("touchstart", function (e) {
        console.log(e.target);
      })
      ```

    - `touchend`
      用户不在接触触摸屏时触发

      ```js
      <div id="box"></div>
      // 只能用 DOM2 级事件绑定方式
      var box = document.getElementById("box");
      box.addEventListener("touchend", function (e) {
        console.log(e.target);
      })
      ```

    - `touchmove`
      用户移动触摸点时触发

      ```js
      <div id="box"></div>
      // 只能用 DOM2 级事件绑定方式
      var box = document.getElementById("box");
      box.addEventListener("touchmove", function (e) {
        console.log(e.target);
      })
      ```

- 事件处理程序
  为页面添加事件

  - HTML 事件处理
    
    ```js
    <button id="btn" onclick="demo()">按钮</button>
    function demo() {
      alert("html 事件处理");
    }
    ```

  - DOM 0级事件处理

    ```js
    <button id="btn">按钮</button>   
    var btn = document.getElementById("btn");
    btn.onclick = function () {
      alert("DOM 0级事件处理");
    }
    // 如果再来一个
    btn.onclick = function () {
      console.log("click");
    }
    // 只会执行最后一个，会覆盖上一个
    ```

  - DOM 2级事件处理

    ```js
    <button id="btn">按钮</button>   
    var btn = document.getElementById("btn");
    btn.addEventListener("click", demo1);
    btn.addEventListener("click", demo2);
    btn.addEventListener("click", demo3);
    function demo1() {
      alert("DOM 2级事件处理1");
    } 
    function demo1() {
      alert("DOM 2级事件处理2");
    } 
    function demo1() {
      alert("DOM 2级事件处理3");
    } 
    // 三个都执行
    ```

- 事件代理(事件委托)
  由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件

  ```js
  <ul id="list">
    <li>列表1</li>
    <li>列表2</li>
    <li>列表3</li>
  </ul>  
  var list = document.getElementById("list");
  // 定义父节点的监听函数，处理子元素
  list.onclick = function(e) { 
    if(event.target.nodeName == "LI") {
      // 打印子元素内容
      console.log(event.target.innerHTML);
    }
  }
  ```

- ### 更新中... 上次更新时间：2025-07-27

---

## <span style="color: #00aaffff">四. git 部署</span>

- ### _Git 简介_

Git 是目前世界上最先进的分布式版本控制系统

- ### _使用 Git 目的_

高效管理项目(尤其是代码)的版本历史，并支持团队协作

- ### _Git 基本概念_

1. 工作区(Workspace)：放项目代码的地方，项目代码对应的文件

2. 暂存区(Index/Stage)：也叫索引，是一个文件，保存了下次将提交的文件列表信息

3. 本地仓库(Repository)：就是安全放数据的位置，这里边有你提交的所有版本的数据

- ### _Git 常用操作_

  - 初始化本地仓库

    ```bash
    git init
    ```

  会创建一个名为`.git`的隐藏目录(在文件中用终端打开)

  - 添加文件到暂存区

    ```bash
    git add README.md      # 添加单个文件
    git add .              # 添加所有修改
    ```

  - 提交暂存区到本地仓库

    ```bash
    git commit -m "注释"   # -m 后跟提交描述，"" or ''
    ```

  - 配置远程仓库

    ```bash
    git remote add origin https://github.com/yrs0512/Frontend-study.git # SSH
    ```

  - 推送到远程仓库

    ```bash
    git push -u origin master
    ```

  - 查看提交记录

    ```bash
    git log
    git log --oneline     # 显示简略提交记录
    ```

  - 查看当前所有的远程仓库

    ```bash
    git remote -v
    ```

- ### 更新中... 上次更新时间：2025-07-23

---
