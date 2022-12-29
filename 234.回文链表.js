/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  //先反转前半部分，再从中间判断两个链表每个节点值是否相等
  let slow = fast = head
  let prev = null
  while (fast && fast.next) {
    fast = fast.next.next
    let tmp = slow.next
    slow.next = prev
    prev = slow
    slow = tmp
  }
  // 奇数节点slow在正中间节点无需对比，直接next后移一个节点
  if (fast) {
    slow = slow.next
  }
  while (slow && prev) {
    if (slow.val !== prev.val) {
      return false
    }
    slow = slow.next
    prev = prev.next
  }
  return true
};
// @lc code=end

