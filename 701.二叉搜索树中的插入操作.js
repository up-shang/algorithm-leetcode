/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  // 遍历到合适位置，没有左或者右子树时，则直接插入此节点
  if (!root) return new TreeNode(val)
  if (root.val > val) {
    // 去左边插入
    root.left = insertIntoBST(root.left, val)
  } else if (root.val < val) {
    // 值小，则去右侧寻找插入位置
    root.right = insertIntoBST(root.right, val)
  }
  return root
};
// @lc code=end

