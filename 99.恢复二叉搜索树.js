/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
var recoverTree = function (root) {
  let arr = []
  let first
  let second
  // 采用中序遍历方式，拿到递归后的“递增数组”
  function dfs(node) {
    if (!node) return
    dfs(node.left)
    // 边界条件
    arr.push(node)
    dfs(node.right)
  }
  dfs(root)
  // 注意题干，交换两个值，所以遍历数组查找下,数组正常情况为递增，现在必然有两处arr[i]>arr[i+1]的情况
  // 故first取第一次发现的arr[i]
  // second取第二次发现的小的值，arr[i+1]
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].val > arr[i + 1].val) {
      //第一次遇见的较大值，后续不再更新first
      if (!first) {
        first = arr[i]
      }
      // 一直更新为最后的小的值
      second = arr[i + 1]
    }
  }
  // 对象引用类型，替换first与second后，表示替换了root内节点
  let tmp = first.val
  first.val = second.val
  second.val = tmp
};
// @lc code=end

