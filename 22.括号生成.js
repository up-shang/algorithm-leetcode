/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];
  // 注意核心就是字符串为基本类型，每次维护一个新的所以不需要回溯
  // 注意每个内层递归结束后往后执行时都会舍弃当前增加的（或者）括号，然后查找到所有可能
  function dfs(l, r, str) {
    if (l == n && r == n) {
      return res.push(str)
    }
    // l 小于 r 时不满足条件 剪枝
    if (l < r) {
      return
    }
    // l 小于 n 时可以插入左括号，最多可以插入 n 个
    if (l < n) {
      dfs(l + 1, r, str + "(")
    }
    // r < l 时 可以插入右括号
    if (r < l) {
      dfs(l, r + 1, str + ")")
    }
  }
  dfs(0, 0, "")
  return res
};
const ret = generateParenthesis(3)
console.log(ret, 'ret=======')
// @lc code=end

