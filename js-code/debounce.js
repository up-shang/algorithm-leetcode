function debounce(fn, delay) {
  let timer
  return function(...args) {
    const context = this
    // 每次进来都判断下是否执行了delay函数，没执行则清空，重新设置delay
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(context, ...args)
    }, delay)
  }
}