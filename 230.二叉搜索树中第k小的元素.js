/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let count = 0
  // 自底向上，后入先出，采用栈结构
  const stack = []
  // 开始的stack为空，需要增加root条件
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      // 寻找k先从左边开始，向左侧底部靠近
      root = root.left
    }
    root = stack.pop()
    count++
    if (count === k) return root.val
    // 如果左侧没有找到，在右侧继续寻找
    root = root.right
  }
};
// @lc code=end

