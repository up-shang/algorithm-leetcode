/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false
  // 如果两棵树根节点val相同，则判断是否全树相等
  if (root.val === subRoot.val) {
    // 根节点val相同情况下，使用isSame函数判断树的左右子树是否全等
    // 全等则表达root与subRoot为同一颗树，return true
    // 不全等，则不return，继续往后执行判断root的子树是否与subRoot相等
    if (isSameTree(root, subRoot)) return true
  }
  function isSameTree(p, q) {
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
  }
  // 当root与subRoot不全等时，判断root子树与subRoot是否全等
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};
// @lc code=end

