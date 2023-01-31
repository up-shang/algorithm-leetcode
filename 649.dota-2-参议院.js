/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  const Radiant = []
  const Dire = []
  for (let i = 0; i < senate.length; i++) {
    const s = senate[i]
    // 根据当前索引为R还是D统计下r与d数组的长度，记录下他们的i索引
    if (s === 'R') {
      Radiant.push(i)
    } else {
      Dire.push(i)
    }
  }
  while (Radiant.length > 0 && Dire.length > 0) {
    // 谁小谁可以优先攻击，则push一下小的
    if (Radiant[0] < Dire[0]) {
      Radiant.push(Radiant[0] + senate.length)
    } else {
      Dire.push(Dire[0] + senate.length)
    }
    // 每次都各出一个参议员
    Radiant.shift()
    Dire.shift()
  }
  // 谁还有length就是谁胜利
  return Radiant.length > 0 ? 'Radiant' : 'Dire'
};
// @lc code=end

