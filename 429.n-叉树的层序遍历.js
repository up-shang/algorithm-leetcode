/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let ret = []
  if (!root) return ret
  const queue = [root]
  while (queue.length) {
    let len = queue.length
    const curLevel = []
    while (len > 0) {
      const node = queue.shift()
      curLevel.push(node.val)
      // 遍历子级所有节点，加入队列中
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i]
        child && queue.push(child)
      }
      len--
    }
    // 层序遍历完，push入结果集
    ret.push(curLevel)
  }
  return ret
};
// @lc code=end

