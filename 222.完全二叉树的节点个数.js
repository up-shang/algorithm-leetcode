/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function (root) {
  function dfs(root) {
    // 如果没有左右子树，返回0
    if (!root) return 0
    let leftNum = dfs(root.left)
    let rightNum = dfs(root.right)
    // 返回左右子树个数 + 父节点1
    return leftNum + rightNum + 1
  }
  return dfs(root)
};
// @lc code=end

