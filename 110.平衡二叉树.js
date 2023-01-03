/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // 递归函数
  function dfs(root) {
    if (!root) return 0
    let leftDepth = dfs(root.left)
    // 如果左子树子级不符合条件直接return false
    if (leftDepth === -1) return -1
    let rightDepth = dfs(root.right)
    if (rightDepth === -1) return -1
    // 判断绝对值是否大于1
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1
    } else {
      // 如果满足条件，则抛出当前子树最大高度，给上级父节点判断绝对值 》 1用
      return 1 + Math.max(leftDepth, rightDepth)
    }
  }
  // 如果等于-1则不满足条件
  return dfs(root) !== -1
};
// @lc code=end

