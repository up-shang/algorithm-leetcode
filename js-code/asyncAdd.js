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