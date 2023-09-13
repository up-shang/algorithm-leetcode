/**
 * 函数防抖封装
 * @param {Function} fn 回调函数（事件处理逻辑）
 * @param {Number} delay  延迟时间，默认1s
 */
export const debounce = (fn, delay = 1000) => {
  //  设置time为定时器，初始为 null
  let time = null
  return function() {
    //定义一个firstClick，判断是否第一次执行，初始值为true
    let firstClick = !time
    let context = this
    let args = arguments
    //第一次会立即执行
    if (firstClick) {
      fn.apply(context, args)
    }
    // 如果定时器存在清空定时器
    if (time) {
      clearTimeout(time)
    }
    // 设置定时器，此时firstClick会变为false，规定时间后time才会为null
    time = setTimeout(() => {
      time = null
    }, delay)
  }
}