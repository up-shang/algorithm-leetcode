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
var threeSum = function (nums) {
  // 注释参见四数之和
  if (nums.length < 3) {
    return []
  }
  const list = []
  const tmp = []
  const len = nums.length
  nums.sort((a, b) => a - b)
  dfs(0, 3, 0)
  return list

  function dfs(index, count, target) {
    if (count === 0 && target === 0) {
      list.push([...tmp])
      return
    }
    if (len - index < count) {
      return
    }
    if (target > nums[len - 1] * count) {
      return
    }
    if (target < nums[index] * count) {
      return
    }
    for (let i = index; i < len; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue
      }
      tmp.push(nums[i])
      dfs(i + 1, count - 1, target - nums[i])
      tmp.pop()
    }
  }
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum1 = function (nums) {
  if (nums.length < 3) {
    return []
  }
  let list = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1
    let rigth = nums.length - 1
    while (left < rigth) {
      if (nums[i] + nums[left] + nums[rigth] === 0) {
        list.push([nums[i], nums[left], nums[rigth]])
        while (nums[left] === nums[left + 1]) {
          left++
        }
        while (nums[rigth] === nums[rigth - 1]) {
          rigth--
        }
        left++
        rigth--
      } else if (nums[i] + nums[left] + nums[rigth] > 0) {
        rigth--
      } else {
        left++
      }
    }
  }
  return list
};
// @lc code=end

