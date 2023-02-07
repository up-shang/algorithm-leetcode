/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function (root) {
  const ret = dfs(root)
  // 最后取偷与不偷方案中较大的值返回
  return Math.max(...ret)
  function dfs(node) {
    if (!node) return [0, 0]
    const left = dfs(node.left)
    const right = dfs(node.right)
    // 不偷自身的话，取left与right相加的最大值
    const notSelf = Math.max(...left) + Math.max(...right)
    // 偷自身的话，取自身值+不偷左右的值的和
    const self = node.val + left[0] + right[0]
    return [notSelf, self]
  }
};
// @lc code=end

