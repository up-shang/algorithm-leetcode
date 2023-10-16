/*
 * @lc app=leetcode.cn id=678 lang=javascript
 *
 * [678] 有效的括号字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  const leftStack = [] // 记录有多少个左括号需要匹配，并记录索引位置
  const starStack = [] // 记录有多少个* ，并记录索引位置
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      leftStack.push(i)
    } else if (s[i] === '*') {
      starStack.push(i)
    } else {
      // 有一个),就从leftStack出弹出一个
      if (leftStack.length) {
        leftStack.pop()
        // 有一个），但是没有（，则需要弹出一个*用来匹配
      } else if (starStack.length) {
        starStack.pop()
      } else {
        return false
      }
    }
  }
  // 有可能）匹配完了，还剩余（或者*
  while (leftStack.length && starStack.length) {
    const left = leftStack.pop()
    const star = starStack.pop()
    if (left > star) return false
  }
  // 剩余*不用考虑，需要判断是否剩余了（
  return !leftStack.length
};
// @lc code=end

