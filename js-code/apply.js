function MyApply(context) {
  if (typeof this !== 'function') {
    return TypeError('类型错误')
  }
  context = context || window
  const args = arguments[1]
  let fn = Symbol('fn')
  context[fn] = this
  let ret
  if (args) {
    ret = context[fn](...args)
  } else {
    ret = context[fn]
  }
  delete context[fn]
  return ret
}