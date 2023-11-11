/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root) return false
  // 递归边界,遍历到终止时
  if (!root.left && !root.right) {
    // 最终的root.val与offset对比，如果相等则存在
    return root.val === targetSum
  }
  // 每遍历一层，更新一次offset差值
  let offset = targetSum - root.val
  // 递归公式
  return hasPathSum(root.left, offset) || hasPathSum(root.right, offset)
};
// @lc code=end

