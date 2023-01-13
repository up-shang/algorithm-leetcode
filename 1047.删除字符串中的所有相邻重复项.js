/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    let str = s[i]
    let c
    if (stack.length && str === (c = stack.pop())) {
      // 此时命中了两个一样的字符串，直接弹出后continue终止本次循环
      continue
    }
    // 如果str与c不等则把c放回stack中
    c && stack.push(c)
    // stack push
    stack.push(str)
  }
  return stack.join("")
};
// @lc code=end

