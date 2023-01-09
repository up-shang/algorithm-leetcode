/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
  let leftSum = 0
  function dfs(node) {
    if (!node) return
    // 递归终止条件，如果是单边左节点，则直接返回
    let left = node.left
    if (left && !left.left && !left.right) {
      leftSum += left.val
    }
    // 否则为递归节点
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return leftSum
};
// @lc code=end

