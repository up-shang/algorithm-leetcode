/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head) return null
  const result = []
  while (head) {
    // 推入val的链表到数组内
    result.push(new ListNode(head.val))
    head = head.next
  }
  // 根据数据内链表的val排序，再指定next
  result.sort((a, b) => a.val - b.val)
  for (let i = 0; i < result.length - 1; i++) {
    result[i].next = result[i + 1]
  }
  // 数组索引0为头节点
  return result[0]
};
// @lc code=end

