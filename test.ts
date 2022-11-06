
// 返回数组第一个元素
type First<T extends any[]> = T extends [infer e, ...infer r] ? e : never

// 返回元组length
type Length<T extends readonly any[]> = T['length']

// 元祖转对象
type TupleToObject<T extends readonly any[]> = {
  [key in T[number]]: T[number]
}

// Exclude
type MyExclude<T, U> = T extends U ? never : T

// Include
// type myInclude<T extends readonly any[], U> = T extends [infer F, ...infer R] ? (Equal<F, U> extends true ? true : myInclude<R, U>) : false
function render(obj, root) {
  const el = document.createElement(obj.tag)
  if (typeof obj.children === 'string') {
    const text = document.createTextNode(obj.children)
    el.appendChild(text)
  } else {
    obj.forEach(child => render(child, obj.children))
  }
  root.appendChild(el)
}

/**
 * v3响应式demo
 */
const data = {}
let activeEffect = null
const effect = (fn) => {
  activeEffect = fn
  fn()
}
const bucket = new WeakMap()
const track = (target, key) => {
  if (!activeEffect) return
  let depsMap = bucket.get(target)
  if (!depsMap) bucket.set(target, (depsMap = new Map()))
  let deps = depsMap.get(key)
  if (!deps) depsMap.set(key, new Set())
  deps.add(activeEffect)
}

const trigger = (target, key) => {
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)
  effects && effects.forEach(fn => fn())
}
const obj = new Proxy(data, {
  get(target, key) {
    track(target, key)
    return target[key]
  },
  set(target, key, newValue): boolean {
    target[key] = newValue
    trigger(target, key)
    return true
  }
})