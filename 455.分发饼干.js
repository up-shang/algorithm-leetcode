/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 大饼干满足胃口大的孩子
var findContentChildren = function(g, s) {
  g = g.sort((a,b)=>a-b)
  s = s.sort((a,b)=>a-b)
  let res = 0
  let index = s.length - 1
  // 孩子做判断
  for(let i = g.length - 1; i>=0; i--) {
    // 如果还有饼干且饼干大于孩子胃口
    if(index >=0 && s[index] >= g[i]) {
      res++
      index--
    }
  }
  return res
};
// @lc code=end

