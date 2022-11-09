
// // 返回数组第一个元素
// type First<T extends any[]> = T extends [infer e, ...infer r] ? e : never

// // 返回元组length
// type Length<T extends readonly any[]> = T['length']

// // 元祖转对象
// type TupleToObject<T extends readonly any[]> = {
//   [key in T[number]]: T[number]
// }

// // Exclude
// type MyExclude<T, U> = T extends U ? never : T

// // Include
// // type myInclude<T extends readonly any[], U> = T extends [infer F, ...infer R] ? (Equal<F, U> extends true ? true : myInclude<R, U>) : false
// function render(obj, root) {
//   const el = document.createElement(obj.tag)
//   if (typeof obj.children === 'string') {
//     const text = document.createTextNode(obj.children)
//     el.appendChild(text)
//   } else {
//     obj.forEach(child => render(child, obj.children))
//   }
//   root.appendChild(el)
// }

/**
 * v3响应式demo
 */
const data = {
  a: 1,
  b: 2,
  c: true
}
let activeEffect

const effectStack = [] // 存储当前执行activeEffect函数,处理嵌套场景的effect

function cleanup(effectFn) {
  // console.log(effectFn, 'cleanup effectFn======')
  // 遍历 effectFn.deps 数组
  for (let i = 0; i < effectFn.deps.length; i++) {
    // deps 是依赖集合
    const deps = effectFn.deps[i]
    // 将 effectFn 从依赖集合中移除
    deps.delete(effectFn)
  }
  // 最后需要重置 effectFn.deps 数组
  effectFn.deps.length = 0
}
// 被代理的对象，会首先触发effect函数，进而进行依赖收集
const effect = (fn) => {
  const effectFn = () => {
    cleanup(effectFn)
    // 当调用 effect 注册副作用函数时，将副作用函数赋值给 activeEffect
    activeEffect = effectFn // 存在对象引用关系，故而会相互影响，后续track给activeEffect deps添加时，effectFn.deps也添加了
    effectStack.push(effectFn)
    fn()
    effectStack.pop()
    if (effectStack.length > 0) activeEffect = effectStack[effectStack.length - 1]
    // console.log(activeEffect, 'activeEffect=====')
  }
  // activeEffect.deps 用来存储所有与该副作用函数相关的依赖集合
  effectFn.deps = []
  // 执行副作用函数
  effectFn()
}

const bucket = new WeakMap()
const track = (target, key) => {
  if (!activeEffect) return
  let depsMap = bucket.get(target)
  if (!depsMap) bucket.set(target, (depsMap = new Map()))
  let deps = depsMap.get(key)
  if (!deps) depsMap.set(key, (deps = new Set()))
  deps.add(activeEffect)
  activeEffect.deps.push(deps)
  console.log('======enter track======', activeEffect)
}

const trigger = (target, key) => {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  const effectsToRun = new Set(effects)
  console.log('enter trigger======', effectsToRun)
  effectsToRun.forEach(effectFn => effectFn())
}
const obj = new Proxy(data, {
  get(target, key) {
    console.log('======enter get')
    track(target, key)
    return target[key]
  },
  set(target, key, newValue) {
    target[key] = newValue
    trigger(target, key)
    return true
  }
})
let ccc = 0
function aaa() {
  console.log('执行了副作用函数aaa=========')
  effect(bbb)
  ccc = obj.c ? obj.a : obj.b
}

function bbb() {
  console.log('执行了副作用函数bbb=========')
  let ok = obj.a
}


effect(aaa)
// console.log(ccc)

obj.c = false
// console.log(ccc)


obj.a = 111
console.log(ccc)

// obj.b = 222
// console.log(ccc)