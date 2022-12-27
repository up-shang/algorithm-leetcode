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
var lengthOfLIS = function (nums) {
  //1 dp解法
  // let len = nums.length
  // if (len === 0) {
  //   return 0
  // }
  // let dp = Array(len).fill(1)
  // // 循环遍历找出最长递增数列，每次j+1统计
  // for (let i = 0; i < len; i++) {
  //   for (let j = 0; j < i; j++) {
  //     if (nums[i] > nums[j]) {
  //       dp[i] = Math.max(dp[i], dp[j] + 1)
  //     }
  //   }
  // }
  // return Math.max(...dp)

  //2贪心算法 + 二分查找
  // 让序列增长变慢
  // 比如 1，2，3 好于 1，3，5
  let len = nums.length
  if (len === 0) {
    return 0
  }

  let arr = [nums[0]]

  for (let i = 0; i < len; i++) {
    if (nums[i] > arr[arr.length - 1]) {
      arr.push(nums[i])
    } else {
      // 找到第一个nums[i]大于的值，替换为nums[i]
      let left = 0
      let right = arr.length - 1
      while (left < right) {
        // left与right一直动态变化
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] < nums[i]) {
          left = mid + 1
        } else {
          right = mid
        }
      }
      // 替换后，后续循环则有机会生成更长的子序列；
      // 举例nums [1,3,5,4,5]
      // 例如【1，3，5】,此时将mid+1 也就是第一个5替换为4继续往后循环就有可能出现更长递增序列
      arr[left] = nums[i]
    }
  }
  return arr.length
};
// @lc code=end

