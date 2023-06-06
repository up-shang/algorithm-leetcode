/**
 * 
 * @param {Array} arr 
 */
Promise.prototype.myAll = function(arr) {
  if (!Array.isArray(arr)) {
    return new TypeError('不支持的参数类型')
  }
  let count = 0
  const ret = []
  return new Promise((resolve, reject) => {
    // 每一个执行时都是一个promise
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then(res => {
        count++
        ret[i] = res
        if (count === arr.length) {
          resolve(ret)
        }
      })
    }
  })
}
/**
 * 
 * @param {Array} arr 
 */
Promise.prototype.myRace = function(arr) {
  if (!Array.isArray(arr)) {
    return new TypeError('不支持的参数类型')
  }
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      // 第一个返回结果后直接resolve
      Promise.resolve(arr[i]).then(res => {
        resolve(res)
      })
    }
  })
}