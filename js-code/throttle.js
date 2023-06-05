/**
 * 立即执行的，非立即执行可以考虑使用一个timer维护
 * @param {Function} fn 
 * @param {Number} delay 
 * @returns 
 */
function throttle(fn, delay) {
  let last = 0
  return function(...args) {
    const context = this
    let now = Date.now()
    if (now - last > delay) {
      last = now
      fn.call(context, ...args)
    }
  }
}
let ret = 0

function add(x, y) {
  ret = x + y
  return x + y
}

const fn = throttle(add, 3000)
