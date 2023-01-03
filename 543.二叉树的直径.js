/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  // 采用后续遍历从下往根遍历
  // 最大直径深度为left + right + 根节点（1），可以不经过根
  let len = 0
  function dfs(root) {
    if (!root) return null
    // 后序遍历公式
    let left = dfs(root.left)
    let right = dfs(root.right)
    // 每次递归更新len的值，len为每个子树最大深度的left或right，与另一个子树的最大深度相加得来
    len = Math.max(len, left + right)
    // 此处返回当前遍历树的最大深度的子树，用于上层父级树节点继续自身的最大左右子树深度之和
    return Math.max(left, right) + 1
  }
  dfs(root)
  return len
};
// @lc code=end

