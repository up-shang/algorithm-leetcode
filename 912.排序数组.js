/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */
// 归并排序特点：时间复杂度稳定nlogn,但是空间复杂度较高
// 快速排序特别：时间复杂度最好nlogn但不稳定（基准点选取一直为1或者n-1时复杂度上升为n^2），空间复杂度较低
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if (nums.length <= 1) return nums
  return quickSort(nums)
};
// // 归并排序
// function mergeSort(list) {
//   if (list.length <= 1) return list
//   const mid = Math.floor(list.length / 2)
//   const left = list.slice(0, mid)
//   const right = list.slice(mid, list.length)
//   const leftList = mergeSort(left)
//   const rightList = mergeSort(right)
//   return pivotFn(leftList, rightList)
// }

// function pivotFn(list1, list2) {
//   const result = []
//   while (list1.length && list2.length) {
//     if (list1[0] < list2[0]) {
//       result.push(list1.shift())
//     } else {
//       result.push(list2.shift())
//     }
//   }
//   while (list1.length) {
//     result.push(list1.shift())
//   }
//   while (list2.length) {
//     result.push(list2.shift())
//   }
//   return result
// }
// 快速排序
var quickSort = function(list, left = 0, right = list.length - 1) {
  if (list.length > 1) {
    const pivot = pivotFn(list, left, right)
    if (left < pivot - 1) {
      quickSort(list, left, pivot - 1)
    }
    if (pivot < right) {
      quickSort(list, pivot, right)
    }
  }
  return list
}

var pivotFn = function(list, left, right) {
  let l = left, r = right
  const pivotValue = list[Math.floor(left + (right - left) / 2)]
  while (l <= r) {
    while (list[l] < pivotValue) {
      l++
    }
    while (list[r] > pivotValue) {
      r--
    }
    if (l <= r) {
      swap(list, l, r)
      l++
      r--
    }
  }
  return l
}
var swap = function(list, i, j) {
  [list[i], list[j]] = [list[j], list[i]]
}
// @lc code=end

