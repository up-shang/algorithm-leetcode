/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let ret = []
  let path = []
  // 从第0个索引开始回溯
  backtrack(0)
  return ret
  /**
   * 
   * @param {*} index nums的索引
   */
  function backtrack(index) {
    // 首次执行push[]
    // 后续执行push进去[1],[1,2]等等
    // 全部结果都需要，所以没有终止的边界条件，直接push所有结果
    ret.push([...path])
    for (let i = index; i < nums.length; i++) {
      const num = nums[i]
      path.push(num)
      backtrack(i + 1) // 下一个值
      path.pop() //用完后在临时变量内弹出
    }
  }
};
// @lc code=end

