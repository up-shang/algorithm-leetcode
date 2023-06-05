/**
 * 实现两个超过number最大长度的数相加
 * @param {*} x 
 * @param {*} y 
 */
const add = (x, y) => {
  const maxLength = Math.max(x.length, y.length)
  // 将较小的数用0补齐
  x = x.padStart(maxLength, 0)
  y = y.padStart(maxLength, 0)
  // 从个位逐位加起，需定义进位
  let curSum = 0
  let f = 0
  let sum = ''
  for (let i = maxLength - 1; i >= 0; i--) {
    curSum = parseInt(x[i]) + parseInt(y[i]) + f
    f = Math.floor(curSum / 10)
    // 字符串相加，当前的数需要在前面拼接才能得到正确结果
    // 每次只保留当前位的数值，进位最大为1，在下次计算时加上就好
    sum = curSum % 10 + sum
  }
  // 最后判断下有进位再给结果集拼接加1
  if (f === 1) {
    sum = '1' + sum
  }
  return sum
}

const t = add('12341', '45621211')
console.log(t, 'dssd')