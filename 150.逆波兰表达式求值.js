/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = []
  let calc = {
    '+': (a, b) => a + b,
    // 需要使用数组前面的值 - 数组后面的值
    '-': (a, b) => b - a,
    '*': (a, b) => a * b,
    // 需要使用数组前面的值 - 数组后面的值
    // 使用截断函数得到整数部分
    '/': (a, b) => Math.trunc(b / a)
  }

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    if (calc[token]) {
      // 如果遇到计算符号，直接弹出符号前面两个数
      const ret = calc[token](stack.pop(), stack.pop())
      // 使用结果替换弹出的两个数值，用于与其他数值、计算符号继续后续计算
      stack.push(ret)
    } else {
      // 将字符串转换为number类型
      stack.push(Number(token))
    }
  }
  return stack.pop()
};
// @lc code=end

