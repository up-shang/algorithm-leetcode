/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 快速排序
  quickSort(nums)
  return nums[k - 1]
};

var quickSort = function (arr, left = 0, right = arr.length - 1) {
  if (arr.length > 1) {
    let index = partition(arr, left, right)
    if (left < index - 1) {
      quickSort(arr, left, index - 1)
    }
    if (index < right) {
      quickSort(arr, index, right)
    }
  }
  return arr
}

var partition = function (arr, left, right) {
  // 取基准值
  let pivotValue = arr[Math.floor(left + (right - left) / 2)]
  // 定义左右指针
  let i = left, j = right
  while (i <= j) {
    // 多次遍历筛选
    while (arr[i] > pivotValue) {
      i++
    }
    while (arr[j] < pivotValue) {
      j--
    }
    // 此种情况为碰到左侧大于基准值或者右侧小于基准值的情况
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++
      j--
    }
  }
  return i
}
// @lc code=end

