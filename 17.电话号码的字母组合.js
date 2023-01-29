/*
* @lc app=leetcode.cn id=17 lang=javascript
*
* [17] 电话号码的字母组合
*/

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 * 递归公式
 * 终止条件
 * 标记
 * 遍历{backtrack}
 * 推出
 * 
 */
var letterCombinations = function (digits) {
  let len = digits.length
  let map = [
    '', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'
  ]
  if (!len) return []
  // 按照字符串拆分
  if (len === 1) return map[digits].split('')
  // 最终输出的结果集
  let res = []
  // 用于回溯的临时变量
  let path = []
  // 初始化回溯
  backtrack(digits, len, 0)
  // 返回结果集
  return res
  /**
   * 
   * @param {*} digits 输入字符串
   * @param {*} l 当前字符串length
   * @param {*} i 当前遍历的索引
   */
  function backtrack(digits, l, i) {
    if (path.length === l) {
      // 按照字符串合并
      res.push(path.join(''))
      return
    }
    // 如果不满足len相等，则回溯遍历
    for (const v of map[digits[i]]) {
      // 标记结果
      path.push(v)
      // 遍历下一个digits的结果集
      backtrack(digits, l, i + 1)
      // 等待内层结果集处理完，pop出当前上层的val
      // 例如digits为“23”，则先边界跳出3的结果集，d e f，等3结束，跳出当前2的v，a，b,c
      // 最终可得到完整遍历的res
      path.pop()
    }
  }
};
// @lc code=end

