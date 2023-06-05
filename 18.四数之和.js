/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  // 考虑使用回溯剪枝来解
  /**
   * 
   * @param {number} index 当前索引
   * @param {number} count 匹配的数量
   * @param {number} target 目标值
   */
  const dfs = (index, count, target) => {
    if (count === 0 && target === 0) {
      // 注意此处不能直接push tmp ，注意每次tmp都会完全pop清空
      list.push([...path])
      return
    }
    // 剪枝，优化复杂度
    // 如果剩余遍历数已不足count，直接退出
    if (len - index < count) {
      return
    }
    // 比最小还小，不满足
    if (target < nums[index] * count) {
      return
    }
    // 比最大还大，不满足
    if (target > nums[len - 1] * count) {
      return
    }

    // 每次从index开始，查找到不一样的结果集
    for (let i = index; i < len; i++) {
      // 跳过相同的值
      if (i > index && nums[i] === nums[i - 1]) {
        continue
      }
      path.push(nums[i])
      // 下一次递归
      dfs(i + 1, count - 1, target - nums[i])
      // 由底层逐个推出tmp内的4个值
      path.pop()
    }
  }
  const list = []
  const path = []
  const len = nums.length
  nums.sort((a, b) => a - b)
  dfs(0, 4, target)
  return list
};
// @lc code=end

