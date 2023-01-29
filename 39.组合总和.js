你/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []
  let path = []
  // 先排序,优化时间复杂度
  candidates.sort()
  backtrack(0, 0)
  // 返回结果集
  return res
  /**
   * 
   * @param {*} i 当前的遍历索引
   * @param {*} sum 当前遍历前的数值的和
   */
  function backtrack(i, sum) {
    if (sum > target) return
    // 相等则找到一个正确结果，push进结果集
    if (sum === target) res.push([...path])
    // 否则遍历
    for (let j = i; j < candidates.length; j++) {
      let num = candidates[j]
      // 比结果大，则终止本次循环
      if ((num + sum) > target) continue
      path.push(num)
      sum += num
      // 根据题目，从当前索引开始找和，故传入j
      backtrack(j, sum)
      // 处理完本层回溯后，将path临时变量清除，和清除，继续循环其他结果
      path.pop()
      sum -= num
    }
  }
};
// @lc code=end

