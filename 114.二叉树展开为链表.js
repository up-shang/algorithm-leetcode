/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // 收集二叉树结构的数组
  let list = []
  // 递归遍历将二叉树前序塞入数组
  const dfs = (root) => {
    if (root) {
      list.push(root)
      dfs(root.left)
      dfs(root.right)
    }
  }
  // 执行先序遍历遍历
  dfs(root)
  // 遍历数组，调整为单链表结构，prev的left = null,right = cur节点
  for (let i = 1; i < list.length; i++) {
    const prev = list[i - 1]
    const cur = list[i]
    prev.left = null
    prev.right = cur
  }
};

// @lc code=end

