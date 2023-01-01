/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // 埋点法
  // if (!head) return null
  // while (head) {
  //   if (head.flag) return head
  //   head.flag = true
  //   head = head.next
  // }
  // return null

  // 快慢指针法
  if (!head) return null
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    // a入环前的步数，b环的步数
    // slow走 a+b
    // fast走 a+nb后肯定与slow相遇
    // 故fast - slow = a + nb,故head与slow走a步会相遇，此时为环的入口节点
    if (slow === fast) {
      let cur = head
      while (cur !== slow) {
        cur = cur.next
        slow = slow.next
      }
      return cur
    }
  }
  return null
};
// @lc code=end

