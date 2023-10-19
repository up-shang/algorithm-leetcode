/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // 1 dp解法
  // let len = nums.length
  // if (len === 0) {
  //   return 0
  // }
  // let dp = new Array(len).fill(1)
  // // 循环遍历找出最长递增数列，每次j+1统计
  // for (let i = 0; i < len; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[i] > nums[j]) {
  //       dp[i] = Math.max(dp[i], dp[j] + 1)
  //     }
  //   }
  // }
  // return Math.max(...dp)

  // 2贪心算法 + 二分查找
  // 让序列增长变慢
  // 比如 1，2，3 好于 1，3，5
  let len = nums.length
  if (len === 0) {
    return 0
  }

  let arr = [0]

  for (let i = 1; i < len; i++) {
    if (nums[i] > nums[arr[arr.length - 1]]) {
      arr.push(i)
    } else {
      // 找到第一个nums[i]大于的值，替换为nums[i]
      let left = 0
      let right = arr.length - 1
      while (left < right) {
        // left与right一直动态变化
        let mid = Math.floor((left + right) / 2)
        if (nums[arr[mid]] < nums[i]) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      // 替换后，后续循环则有机会生成更长的子序列；
      // 举例nums [1,3,5,4,5]
      // 例如【1，3，5】,此时到遍历到4时，通过二分找到4插入到3和5之间来延长子序列，以此最后得到最长的子序列
      arr[left] = i
    }
  }
  return arr.length // 如果需要返回索引就直接返回arr
};
// @lc code=end

