/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let curIndex = 0
  let maxIndex = 0
  let step = 0
  // 题意为可以到达最后，所以不考虑最后一步
  for (let i = 0; i < nums.length - 1; i++) {
    // 贪心，对比上次max与当前所处索引的值，取大的值达到每次的最优解
    // nums[i]为当前索引的value,i为从上次maxindex位置到当前索引的步数，所以需要i+nums[i]
    maxIndex = Math.max(maxIndex, nums[i] + i)
    if (i === curIndex) {
      // 如果遍历到当前跳跃到的位置，则需要继续往后跳跃
      curIndex = maxIndex
      step++
    }
  }
  return step
};
// @lc code=end

