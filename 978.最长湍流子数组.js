/*
 * @lc app=leetcode.cn id=978 lang=javascript
 *
 * [978] 最长湍流子数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function(arr) {
  let pre = '=' // 上次的对比情况，分为= > <三种
  let i = 0 // 当前窗口所在位置
  let ans = 1
  for (let j = 1; j < arr.length; j++) {
    cur = arr[j - 1] === arr[j] ? '=' : arr[j - 1] > arr[j] ? '>' : '<'
    if (cur === pre) i = j - 1 // 如果相同则更新滑动窗口的位置到j-1，此时ans变为2
    if (cur === '=') i = j //如果为=，更新滑动窗口的位置为现在的j，ans变成1
    ans = Math.max(ans, j - i + 1) // 以上两者不满足的话，窗口才会越来越大，否则窗口按照以上两种情况重新开始计数
    // 更新pre，用于迭代后续对比
    pre = cur
  }
  return ans
};
// @lc code=end

