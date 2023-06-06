/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) return 0
  return helper(root, 0)
  function helper(root, cur) {
    if (!root) return 0
    const next = root.val + cur * 10
    if (!root.left && !root.right) return next
    return helper(root.left, next) + helper(root.right, next)
  }
};
// @lc code=end

