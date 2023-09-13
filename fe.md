# 绝望之谷
## 前言
> 面试总结，未来的前端趋向全栈，纯前端毫无竞争力

> 告别浮在表面的东西，拒绝一知半解，沉淀全栈能力
## 希望未来具备的能力
> 把qiankun微应用实践、cicd实践、nodejs koa实践、ssr实践、cprocess自动化测试实践加入到简介中来

> react达到开发水平，尽量熟悉原理

> 课程、源码、算法等学起来，坚持下去（极客时间、掘金我的课程、纸质书籍等等）

> 注意看一下浏览器书签里收藏的文章

> 移动端放弃？不想走这条路了
- vue or react （client）
- nuxt or next (ssr)
- webpack or rollup or vite（build)
- gitlab cicd or jenkins （cicd）
- cdn nginx (server config)
- nodejs 基础与框架（koa）(bff、ssr、cli)
- egg, mysql , redis，mongodb(server端)
- low code 可视化 微前端等等
- 网络(http https tcp udp)
- 数据结构与算法(leetcode)
- 微服务、rpc
- 大模型中前端的作用与实践
## 移动端h5适配
- [Mobile Web Favorites](https://github.com/hoosin/mobile-web-favorites)
- [超详细的移动端适配](https://www.cnblogs.com/songyao666/p/16140840.html)

## 浏览器为什么是同源的
- [同源](https://blog.csdn.net/Galaxy_0/article/details/128685479)

## 字符串转function方式
> eval new Function
- [字符串转function](https://blog.csdn.net/mafan121/article/details/95340284)

## 白屏问题解决
[白屏原因及方案](https://blog.csdn.net/weixin_53058401/article/details/127968765)
## 微前端
[微前端问答]
## qiankun 
[qiankun原理](https://blog.csdn.net/StrongerIrene/article/details/128176299?spm=1001.2101.3001.6650.9&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-9-128176299-blog-128955589.235%5Ev38%5Epc_relevant_anti_vip&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-9-128176299-blog-128955589.235%5Ev38%5Epc_relevant_anti_vip&utm_relevant_index=13)
### js沙箱的实现原理
- proxy沙箱，基于class创建出不同的实例通过传递每个实例唯一的proxy window给到子应用，运行时子应用全部挂载在了这个proxy window上保证隔离
### css隔离
- 基于shdowdom实现
### 应用通信
- 发布订阅
- 借鉴vuex等
- setGlobalState, onGlobalStateChange
## iframe升级到微前端遇到的坑
- 需要改造老项目，入口抛出qiankun的生命周期钩子
- 直接在window上创建的属性方法等，需要改造
- 直接添加到body等的样式需要改造
- 修改打包方式为umd
- activeRule绑定menuid（页面子应用跳转url即为此menuId），注册菜单时绑定每个子应用唯一的menuid与子应用的entry(https://juejin.cn/post/7252342216843296828?utm_source=gold_browser_extension)
## http300状态码
- 301、308是永久重定向；302、303、307是临时重定向
- 301、302是http 1.0的内容，303、307、308是http1.1的内容
- 302，303，307的出现，都是基于HTTP/1.1兼容HTTP/1.0规范和实现的差异性
  - 303的出现是允许重定向时改变请求method,303 通常用于将POST请求重定向到GET请求。例如上传了一份个人信息，服务器返回303响应，将你导向一个上传成功页面。
  - 307、308则不允许重定向时改变请求method
  - 此外303响应禁止被缓存。
  - 
[300状态码详解](https://www.cnblogs.com/OpenCoder/p/16265950.html)
## 宏任务、微任务
    
> 在JavaScript中，有两类异步任务队列：宏任务队列（macrotasks）和微任务队列（microtasks）

> 整体的执行顺序：宏任务 -> 微任务 -> 必要的渲染UI -> 下一轮`Eventloop`

**运行机制:**  
（1）在执行栈中执行一个宏任务。  
（2）执行过程中遇到微任务，将微任务添加到微任务队列中。  
（3）当前宏任务执行完毕，立即执行微任务队列中的任务。  
（4）当前微任务队列中的任务执行完毕，检查渲染，GUI线程接管渲染。  
（5）渲染完毕后，js线程接管，开启下一次事件循环，执行下一次宏任务（事件队列中取）。 
宏任务： `script`主代码、`setTimout`、`setInterval`、事件`I/O`等  
微任务：`promise`等 

## iframe传值

### 不跨域
- iframe.contentWindow
- window.parent
- 使用node中间件服务分转发到跨域的域名内
### 跨域
- 通常使用postMessage，然后坚听message事件获取数据

## 自定义一个只读属性
- 基于Object.defineProperty，配置writable configurable为false（不可写，不可修改配置）
- 通过只配置es6的get，不配置set来实现只读
- 基于Object.defineProperty，freeze
## echarts原理
[echarts底层](https://zhuanlan.zhihu.com/p/533018275)
## vue 2&3
### 3的响应式拦截汇总
> for in等等的拦截如何实现的
- [响应式拦截原理](https://blog.csdn.net/loyd3/article/details/125054666)

## js
### 深拷贝处理循环引用
- 使用weakMap存储当前深拷贝后的引用类型数据，true时直接返回不再次进行拷贝

### JS里面如何实现拖拽的功能
- draggable css cursor move
- 监听mousedown，获取初始父元素offsetLeft
- 在mousedown回调内监听mouseUp、mouseMove事件，通过当前拖动元素的clientX Y坐标 - offsetLeft设置当前相对父元素的left top等位置

### 检测当前用户存储了哪些localStorage，如何防止两个人同时写入一个localStorage发生覆盖
- 通过localStorage.length获取存储的所有localStorage的数量，遍历key(i)得到所有存储的key，clear可以清除所有localStorage
- 可以编写一个同步锁工具类来限制多个人同时写入一个localStorage key

### cookie原理
- 记录用户状态等，同源，存储空间较小

### svg与canvas

#### 一、可扩展性：

-   SVG是基于矢量的点、线、形状和数学公式来构建的图形，该图形是没有像素的，放大缩小不会失真。
-   Canvas是由一个个像素点构成的图形，放大会使图形变得颗粒状和像素化（模糊）。
-   SVG可以在任何分辨率下以高质量的打印，Canvas不适合在任意分辨率下打印。

#### 二、渲染能力：

-   当SVG很复杂时，它的渲染就会变得很慢，因为在很大程度上去使用DOM时，渲染会变得很慢。
-   Canvas提供了高性能的渲染和更快的图形处理能力，例如：适合制作H5小游戏。
-   当图像中具有大量元素时，SVG文件的大小会增长得更快（导致DOM变得复杂），而Canvas并不会增加太多。

#### 三、灵活度：

-   SVG可以通过JavaScript和CSS进行修改，用SVG来创建动画和制作特效都非常方便。
-   Canvas只能通过JavaScript进行修改，创建动画得一帧帧重绘。

#### 四、使用场景：

-   Canvas主要用于游戏开发、绘制图形、复杂照片的合成，以及对图片进行像素级别的操作，如：取色器、复古照片。
-   SVG非常适合显示矢量徽标（Logo）、图标（ICON）和其他几何设计。

## css
### CSS `display` 有哪些值、哪些用法
- `display`属性：规定元素应该生成的框的类型

| display | 解释 |
| --- | --- |
| none| 元素消失，且不占据空间 |
|block | 块级元素，头尾有换行符，有width height |
|inline | 默认属性，默认为行内元素，不具备解析盒模型属性的能力 |
|inline-block | 行内块元素，同时具备行内元素与块元素特性，显示在一行且可正确解析width height等盒模型属性 |
|list-item | 列表元素，类似li标签 |
|table | 块元素，有自己的特点，不设置宽度时根据内容决定宽度 |
|flex | 弹性布局 |
|grid | 网格 |

### 获取相对父元素的位置

- 子元素.offsetTop
- 子元素.getBoundingClientRect()-父.getBoundingClientRect()

> 总结虚拟滚动为每次渲染上下缓冲区，可视区域的dom元素；清除可视区与缓冲区外的dom

## 网络
### HTTP 缓存，协商缓存，强缓存
[http缓存详解](https://juejin.cn/post/6844903593275817998)

### 跨域
#### 两个页签，a页面提交表单跳转到b页面后，a页面怎么拿到b页面数据的回调
- a与b通过postmessage的方式传递，event origin
#### CORS 如何实现跨域？
- access-control-allow-origin *
#### 如何保证每次获取的是最后一次请求的接口数据
- 通过axios的cancelToken取消前面的请求
- 通过设置一个全局flag，每次异步请求采用闭包方式传入此次的值与flag比较，相等时为最后一次请求
## ts
### any unknow
- any即是top Type又是bottom type,unknow是top type
- any在使用时类似编写js，unknow在使用时需要断言一下类型后再访问属性等等，更安全些
### TypeScript，讲一下泛型？
- 泛型指的是在定义函数/接口/类型时，**不预先指定具体的类型，而是在使用的时候在指定类型限制**的一种特性。
### TypeScript，讲一下断言？
- `TypeScript`中的类型断言是一种将变量或表达式的类型强制转换为开发者指定的类型的方式。可以使用尖括号（<>）语法或者`as`语法进行类型断言。
> 使用场景
1. 消除类型检查错误
2. 处理联合类型
3. 处理any类型

### TypeScript，讲一下函数重载？
> 声明多个相同名称的函数，给他们设置多个不同的入参类型和返回类型。在我们调用这个重载函数的时候，TS会把你所传入的参数类型与定义中的参数类型进行比较，决定选用最合适的定义。
### infer 关键字？
`infer`语法的限制如下：
1.  `infer`只能在条件类型的 extends 子句中使用
1.  `infer`得到的类型只能在`true`语句中使用, 即`X`中使用

> 使用场景：
> - 推断数组、元祖的头部，尾部类型
> - 函数的参数、返回值类型
> - promise返回值的类型
> - 通过字符模板匹配推断字符串的头、尾等的类型

### void与never的区别？
- void表示没有返回值，输出null或者undefined
- never表示永远不会返回值，常用于标识error或者无限循环

## 工程化

### webpack原理

Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：

简单来说：

1.  初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler。
1.  编译：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理。
1.  输出：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统。

详细来说：

1.  初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
1.  开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
1.  确定入口：根据配置中的 entry 找出所有的入口文件；
1.  编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
1.  完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
1.  输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
1.  输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。

在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。

### Webpack Vite rollup
[工具对比](https://juejin.cn/post/7248878483329138746?searchId=2023091114062025E5879CF4B9D11029EC)

> import加载对模块的引用，需要顶部声明；required同步加载对模块的拷贝可不用在顶部声明（动态加载）

- webpack更适合应用打包（代码拆分以及动态加载多的场景），rollup更适合js类库（es module）
- vite 由于dev时不需要分析模块间依赖关系，直接利用浏览器的es module只按需加载浏览器请求的模块，故hmr更快
- vite打包使用rollup，避免过多并行请求导致请求阻塞，esbuild对代码切割等支持不友好
参考es module 与打包后再加载的区别

### Webpack 有做过 Loader 和 Plugin 吗？
- test过滤文件类型，use对应loader，loader内传入source文件，最后return回处理后的文件
- plugin是一个class，apply函数，接收complier，通过hooks生命周期钩子来操作文件，最终可能影响打包产物
```js
import path from 'path';

export default function (source) {
  var callback = this.async();
  var headerPath = path.resolve('header.js');

  this.addDependency(headerPath);

  fs.readFile(headerPath, 'utf-8', function (err, header) {
    if (err) return callback(err);
    callback(null, header + '\n' + source);
  });
}
```
```js
class FileListPlugin {
  static defaultOptions = {
    outputFile: 'assets.md',
  };

  // 需要传入自定义插件构造函数的任意选项
  //（这是自定义插件的公开API）
  constructor(options = {}) {
    // 在应用默认选项前，先应用用户指定选项
    // 合并后的选项暴露给插件方法
    // 记得在这里校验所有选项
    this.options = { ...FileListPlugin.defaultOptions, ...options };
  }

  apply(compiler) {
    const pluginName = FileListPlugin.name;

    // webpack 模块实例，可以通过 compiler 对象访问，
    // 这样确保使用的是模块的正确版本
    // （不要直接 require/import webpack）
    const { webpack } = compiler;

    // Compilation 对象提供了对一些有用常量的访问。
    const { Compilation } = webpack;

    // RawSource 是其中一种 “源码”("sources") 类型，
    // 用来在 compilation 中表示资源的源码
    const { RawSource } = webpack.sources;

    // 绑定到 “thisCompilation” 钩子，
    // 以便进一步绑定到 compilation 过程更早期的阶段
    compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
      // 绑定到资源处理流水线(assets processing pipeline)
      compilation.hooks.processAssets.tap(
        {
          name: pluginName,

          // 用某个靠后的资源处理阶段，
          // 确保所有资源已被插件添加到 compilation
          stage: Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
        },
        (assets) => {
          // "assets" 是一个包含 compilation 中所有资源(assets)的对象。
          // 该对象的键是资源的路径，
          // 值是文件的源码

          // 遍历所有资源，
          // 生成 Markdown 文件的内容
          const content =
            '# In this build:\n\n' +
            Object.keys(assets)
              .map((filename) => `- ${filename}`)
              .join('\n');

          // 向 compilation 添加新的资源，
          // 这样 webpack 就会自动生成并输出到 output 目录
          compilation.emitAsset(
            this.options.outputFile,
            new RawSource(content)
          );
        }
      );
    });
  }
}
```
### 说一下使用 Webpack 的优化
[webpack优化](https://juejin.cn/editor/drafts/6946749297295785991)
## vue
### vuex的原理
- [vuex的原理](https://www.qyyshop.com/info/592773.html)
- 执行vue.use，触发vuex内install方法
- install内判断了vuex注册的唯一性，随后执行applyMixin混入函数
- applyMixin内使用vue.mixin混入beforeCreate生命周期钩子内执行vueInit方法
- vueInit内在vue实例上挂载了$store
- vuex内部new Vue data state,实现依赖收集，实现state的响应式
> vuex在各个组件内的映射响应式过程，主要是将state注入到vue实例组件的data内，getters则借助computed计算属性实现响应式
### vue3的优化
- 响应式原理优化
- diff优化
- 函数缓存
- Composition API，降低代码耦合

#### vue3编译优化：

1. 引入了 patchFlag，用来标记动态内容；在编译过程中会根据不同的属性类型打上不同的标识，从而实现了快速diff算法。
2. Block Tree。
3. 静态提升，是将静态的节点或者属性提升出去。
    - 预解析字符串化，当连续静态节点超过10个时，会将静态节点序列化为字符串。
    - 函数缓存；开启cacheHandlers选项后，函数会被缓存起来，后续可直接使用。

#### diff优化
1. 使用最长递增子序列优化了对比流程：Vue2 里在 updateChildren() 函数里对比变更，在 Vue3 里这一块的逻辑主要在 patchKeyedChildren() 函数里，具体看下面

在 Vue2 里 `updateChildren` 会进行

-   头和头比
-   尾和尾比
-   头和尾比
-   尾和头比
-   都没有命中的对比

在 Vue3 里 `patchKeyedChildren` 为

-   头和头比
-   尾和尾比
-   基于最长递增子序列进行移动/添加/删除

看个例子，比如

-   老的 children：`[ a, b, c, d, e, f, g ]`
-   新的 children：`[ a, b, f, c, d, e, h, g ]`

1.  先进行头和头比，发现不同就结束循环，得到 `[ a, b ]`
1.  再进行尾和尾比，发现不同就结束循环，得到 `[ g ]`
1.  再保存没有比较过的节点 `[ f, c, d, e, h ]`，并通过 newIndexToOldIndexMap 拿到在数组里对应的下标，生成数组 `[ 5, 2, 3, 4, -1 ]`，`-1` 是老数组里没有的就说明是新增
1.  然后再拿取出数组里的最长递增子序列，也就是 `[ 2, 3, 4 ]` 对应的节点 `[ c, d, e ]`
1.  然后只需要把其他剩余的节点，基于 `[ c, d, e ]` 的位置进行移动/新增/删除就可以了

使用最长递增子序列可以最大程度的减少 DOM 的移动，达到最少的 DOM 操作，leet-code 第300题(最长递增子序列)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13534691eacf4da4b7ed4fcbb0468706~tplv-k3u1fbpfcp-watermark.image?)
## 算法
### 双指针类型
- 5.最长回文子串
- 42.接雨水
### 滑动窗口
- 3.无重读的字符串
### 栈
- 20.有效的括号
### 动态规划
- 300.最长递增子序列
- 72.编辑距离
- 1143.最长公共子序列
- 62.不同路径
### 二叉树
> 需要掌握dfs方式，栈方式遍历树
- 98.验证二叉搜索树
- 102.二叉树的层序遍历
- 103.二叉树的锯齿形层序遍历
## 编程题
- async add
```js
// 题目要求
function asyncAdd(a, b, cb) {
  setTimeout(() => {
    cb(null, a + b)
  }, Math.floor(Math.random() * 1000))
}
// 需要补全sum函数，需要体现递归，回调，promise
// function sum() { }
; (async () => {
  const result1 = await sum(1, 4, 6, 9, 2, 4)
  const result2 = await sum(3, 4, 9, 2, 5, 3, 2, 1, 7)
  const result3 = await sum(1, 6, 0, 5)
  console.log([result1, result2, result3]) // [26, 36, 12]
})()

// 本题题解
// 通过 ES6 的剩余运算符（...） 接收外部传入长度不固定的参数
async function sum(...nums) {
  // 封装 Promise
  function caculate(num1, num2) {
    return new Promise((resolve, reject) => {
      // 调用 asyncAdd 实现加法
      asyncAdd(num1, num2, (err, rs) => {
        // 处理错误逻辑
        if (err) {
          reject(err)
          return
        }
        // 向外部传递对应的计算结果
        resolve(rs)
      })
    })
  }
  let res = 0
  // 通过遍历将参数一个个进行计算
  for (const n of nums) {
    // 为了避免异步执行顺序问题，使用 await 等待执行结果
    res = await caculate(res, n)
  }
  return res
}
```
- listToTree，时间复杂度要求O(n)
```js
/**
 * 通用列表转树形结构
 * O(n)
 * @param {*} list
 * @param {*} treeProps
 * @param {*} hasEmptyChildren
 * @returns
 */
export default function listToTree(list, treeProps, hasEmptyChildren = true) {
  if (!list || list.length === 0 || list.every(v => typeof v !== 'object')) return []
  // 默认deafult props
  const defaultProps = {
    idKey: 'id',
    parentIdKey: 'parentId',
    childrenKey: 'children',
    rootParentId: null
  }
  const props = Object.assign({}, defaultProps, treeProps)
  // 把原数组转换为hashMap结构
  const group = {}
  list.forEach(item => {
    if (hasEmptyChildren) {
      item[props.childrenKey] = []
    }
    group[item[props.idKey]] = item
  })
  const result = list.filter(item => {
    const parentId = item[props.parentIdKey]
    if (parentId !== props.rootParentId) {
      try {
        if (!group[parentId][props.childrenKey]) {
          group[parentId][props.childrenKey] = []
        }
        group[parentId][props.childrenKey].push(item)
      } catch (e) {
        console.warn(`脏数据！不存在上级节点 {${props.idKey}: ${parentId} ...}, 当前节点：`, item)
      }
      return false
    }
    return true
  })
  return result
}

```
- retry
```js
/**
 * 接口重试
 * @param {Promise} task 
 * @param {Number} count 
 * @returns 
 */
function retry(task, count) {
  console.log('还有' + count + '次')
  return new Promise((resolve, reject) => {
    task()
      .then(res => {
        resolve(res)
      })
      .catch(() => {
        if (count > 0) {
          resolve(retry(task, count - 1)) // 这里使用resolve
        } else {
          reject('次数用完了')
        }
      })
  })
}
```
- emitter
```js
/**
 * 手写实现发布订阅
 */
class Emitter {
  constructor() {
    // 事件回调处理器
    this.handler = {}
  }
  // 订阅，注意区分是否为once
  on(eventName, cb, isOnce) {
    if (!this.handler[eventName]) {
      this.handler[eventName] = []
    }
    this.handler[eventName].push({ cb, isOnce })
  }
  // 执行一次后移除，传入isOnce true标识
  once(eventName, cb) {
    this.on(eventName, cb, true)
  }
  // 解除订阅
  off(eventName, cb) {
    if (this.handler[eventName]) {
      // 移除匹配到的回调
      this.handler[eventName].filter(item => item.cb !== cb)
    }
  }
  // 发布
  emit(eventName, ...args) {
    if (this.handler[eventName]) {
      this.handler[eventName].filter(item => {
        item.cb(...args) // 执行订阅该事件的回调
        return !item.isOnce // 执行一次后，清除once类型的事件回调
      })
    }
  }
}


const eventBus = new EventBus()

const add1 = (x, y) => {
  const ret = x + y
  console.log(ret, 'ret1')
  return ret
}
const add2 = (x, y) => {
  const ret = x - y
  console.log(ret, 'ret2')
  return ret
}
const add3 = (x, y) => {
  const ret = x * y
  console.log(ret, 'ret3')
  return ret
}
const add4 = (x, y) => {
  const ret = x / y
  console.log(ret, 'ret4')
  return ret
}
eventBus.on('event1', add1)

eventBus.on('event1', add2)

eventBus.on('event1', add3)

eventBus.on('event1', add4)

eventBus.emit('event1', 10, 200)

eventBus.off('event1', add2)

eventBus.off('event1', add3)

console.log(eventBus.handler['event1'])
```
- flat
```js
/**
 * 拍平数组
 * 利用concat与递归拍平多层
 * @param {Array} arr 
 */
const flat = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
  }, [])
}

/**
 * 利用栈实现
 * @param {Array} arr
 */

const flat1 = (arr) => {
  const stack = [...arr]
  const ret = []
  while (stack.length) {
    const now = stack.pop()
    if (Array.isArray(now)) {
      // 多层的话，一直解构为一层即可
      stack.push(...now)
    } else {
      ret.unshift(now)
    }
  }
  return ret
}
const arr = flat1([[1, 2, 3, [4, [7]]], 5, 6])
console.log(arr)
```
- bigNum
```js
/**
 * 实现两个超过number最大长度的数相加
 * @param {*} x 
 * @param {*} y 
 */
const add = (x, y) => {
  const maxLength = Math.max(x.length, y.length)
  // 将较小的数用0补齐
  x = x.padStart(maxLength, 0)
  y = y.padStart(maxLength, 0)
  // 从个位逐位加起，需定义进位
  let curSum = 0
  let f = 0
  let sum = ''
  for (let i = maxLength - 1; i >= 0; i--) {
    curSum = parseInt(x[i]) + parseInt(y[i]) + f
    f = Math.floor(curSum / 10)
    // 字符串相加，当前的数需要在前面拼接才能得到正确结果
    // 每次只保留当前位的数值，进位最大为1，在下次计算时加上就好
    sum = curSum % 10 + sum
  }
  // 最后判断下有进位再给结果集拼接加1
  if (f === 1) {
    sum = '1' + sum
  }
  return sum
}

const t = add('12341', '45621211')
console.log(t, 'dssd')
```
