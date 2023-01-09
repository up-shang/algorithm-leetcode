/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function (root) {
  // 采用中序遍历，从左到右依次递增
  let prev = -Infinity
  function dfs(node) {
    if (!node) return true
    const left = dfs(node.left)
    // 边界条件
    if (prev >= node.val) return false
    // 满足则将prev值更新为当前节点val
    prev = node.val
    const right = dfs(node.right)
    // left与right遍历完均为true才是二叉搜索树
    return left && right
  }
  return dfs(root)
};
// @lc code=end

