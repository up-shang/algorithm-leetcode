/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return []
  const list = []
  // 先排序很重要
  nums.sort((a, b) => a - b)
  // 固定一个数，转为两数求和问题
  // 使用对撞指针
  for (let i = 0; i < nums.length - 2; i++) {
    // 注意去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] > 0) {
        right--
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++
      } else {
        list.push([nums[i], nums[left], nums[right]])
        // 注意去重
        while (nums[left] === nums[left + 1]) {
          left++
        }
        while (nums[right] === nums[right - 1]) {
          right--
        }
        left++
        right--
      }
    }
  }
  return list
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum1 = function(nums) {
  // 注释参见四数之和
  if (nums.length < 3) {
    return []
  }
  const list = []
  const path = []
  const len = nums.length
  nums.sort((a, b) => a - b)
  dfs(0, 3, 0)
  return list

  function dfs(index, count, target) {
    // 结果集
    if (count === 0 && target === 0) {
      list.push([...path])
      return
    }
    // 剪枝1
    if (len - index < count) {
      return
    }
    // 剪枝2
    if (target > nums[len - 1] * count) {
      return
    }
    // 剪枝3
    if (target < nums[index] * count) {
      return
    }
    // 一直往后查找，一直要与index比较
    for (let i = index; i < len; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue
      }
      path.push(nums[i])
      dfs(i + 1, count - 1, target - nums[i])
      path.pop()
    }
  }
};
// @lc code=end

