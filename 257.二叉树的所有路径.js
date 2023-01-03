/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  const res = []
  function dfs(root, path) {
    if (!root) return
    // 当遍历无左右子树时，则是底节点，直接push
    if (!root.left && !root.right) {
      res.push(path + root.val)
    }
    // 不管左还是右子树，都要从跟节点出发取当前root.val
    dfs(root.left, path + root.val + '->')
    dfs(root.right, path + root.val + '->')
  }
  // 初始path传入''，空字符
  dfs(root, '')
  return res
};
// @lc code=end

