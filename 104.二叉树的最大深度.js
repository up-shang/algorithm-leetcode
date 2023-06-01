/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  // 每层都从1开始
  let max = 1
  if (root.left) {
    max = Math.max(max, maxDepth(root.left))
  }
  if (root.right) {
    max = Math.max(max, maxDepth(root.right))
  }
  // 最后需要加上跟节点的1
  return max + 1
};
// @lc code=end

