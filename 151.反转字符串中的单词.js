/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let queue = []
  // 双指针遍历
  let left = 0
  let right = s.length - 1
  let word = ''
  // 跳过前导空格
  while (s.charAt(left) === ' ') {
    left++
  }
  // 跳过尾随空格
  while (s.charAt(right) === ' ') {
    right--
  }

  while (left <= right) {
    let ch = s.charAt(left)
    // 遇到空格，则将当前单词推入队列中
    // 否则追加单词
    if (ch === ' ' && word) {
      // 头部加入则相当于反转字符串单词
      queue.unshift(word)
      // 每次加完队列，需要清空word
      word = ''
    } else if (ch !== ' ') {
      word += ch
    }
    left++
  }
  // 遍历完如果还有word，直接push
  // 这种情况出现在right处字符不是空格时，所以最后一个word需要主动unshift一下
  queue.unshift(word)
  return queue.join(' ')
};
// @lc code=end

