/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {
  // 考虑使用二叉树层序遍历，遍历到每层都更新下ret
  const queue = [root]
  let ret = root.val
  while (queue.length) {
    let curLen = queue.length
    const curLevel = []
    while (curLen) {
      const node = queue.shift()
      curLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      curLen--
    }
    ret = curLevel[0]
  }
  return ret
};
// @lc code=end

