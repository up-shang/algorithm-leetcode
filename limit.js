/**
 * 限制最大并发请求数
 * @param {*} urls 请求资源池
 * @param {*} max 允许请求的最大并发数
 * @returns 
 */
function limitMultRequest(urls, max) {
  const len = urls.length
  let count = 0
  const result = new Array(len).fill(false)
  return new Promise((resolve, reject) => {
    while (count < max) {
      next()
    }
    function next() {
      let current = count++
      let url = urls[current]
      // 最后一次next执行后，current === len直接resolve
      if (current >= len) {
        return !result.includes(false) && resolve(result)
      }
      fetch(url).then(res => {
        // 注意返回结果应保存在对应的索引位置
        result[current] = res
        // 注意>=len则不再继续发出请求
        if (current < len) {
          next()
        }
      }).catch(err => {
        result[current] = err
        if (current < len) {
          next()
        }
      })
    }
  })
}