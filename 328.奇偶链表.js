/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
var oddEvenList = function(head) {
  if (!head) return null
  // 定义奇与偶节点
  let odd = head, even = eventHead = head.next
  while (even && even.next) {
    // 奇指向偶的next
    odd.next = even.next
    // 奇前进到下一个奇（1=》3）
    odd = odd.next
    // 2=>4
    even.next = odd.next
    // 2移动到4
    even = even.next
  }
  // 连接偶数的头节点
  odd.next = eventHead
  return head
};
// @lc code=end

