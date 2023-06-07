function MyBind(context) {
  if (typeof this !== 'function') {
    return TypeError('参数错误')
  }
  context = context || window
  const args = [...arguments].slice(1)
  return (...args) => {
    this.apply(context, args)
  }
}