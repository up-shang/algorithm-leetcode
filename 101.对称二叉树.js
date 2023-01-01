/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
  // val要想等，且对比的是left与right的val
  const travese = (root1, root2) => {
    // 边界条件
    if (!root1 && !root2) return true
    if (!root1 || !root2) return false
    if (root1.val === root2.val) {
      // 根节点相同，则递归遍历left与right是否相同
      return travese(root1.left, root2.right) && travese(root1.right, root2.left)
    }
    // 根节点不相同，则返回false
    return false
  }

  return travese(root.left, root.right)
};
// @lc code=end

