/**
 * 拍平数组
 * 利用concat与递归拍平多层
 * @param {Array} arr 
 */
const flat = (arr) => {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
  }, [])
}

/**
 * 利用栈实现
 * @param {Array} arr
 */

const flat1 = (arr) => {
  const stack = [...arr]
  const ret = []
  while (stack.length) {
    const now = stack.pop()
    if (Array.isArray(now)) {
      // 多层的话，一直解构为一层即可
      stack.push(...now)
    } else {
      ret.unshift(now)
    }
  }
  return ret
}
const arr = flat1([[1, 2, 3, [4, [7]]], 5, 6])
console.log(arr)