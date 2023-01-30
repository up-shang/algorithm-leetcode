/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let ret = []
  let path = []
  backtrack(n, k, 1)
  return ret

  function backtrack(n, k, i) {
    let len = path.length
    if (len === k) {
      ret.push([...path])
      return
    }
    // i从1开始，
    for (let j = i; j <= n - k + len + 1; j++) {
      path.push(j)
      backtrack(n, k, j + 1)
      path.pop()
    }
  }
};
// @lc code=end

