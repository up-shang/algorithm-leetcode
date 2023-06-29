/*
 * @lc app=leetcode.cn id=1019 lang=javascript
 *
 * [1019] 链表中的下一个更大节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
  // 单调栈场景题型
  let cur = head
  const ans = []
  // stack需要维护当前位置的值与索引
  const stack = []
  let idx = -1
  while (cur) {
    // 每次遍历更新索引的值
    ++idx
    // 先push个0，如果可替换在下面的while中更新值，如不匹配则记录0
    ans.push(0)
    while (stack.length && stack[stack.length - 1][0] < cur.val) {
      // 每次都往前pop,修正多个< cur.val的0为当前val的值
      ans[stack.pop()[1]] = cur.val
    }
    stack.push([cur.val, idx])
    cur = cur.next
  }
  return ans
};
// @lc code=end

