/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if(board.length === 0) return false
  if(word.length === 0) return true
  const row = board.length
  const col = board[0].length
  for(let i=0; i<row; i++) {
    for(let j=0; j<col; j++) {
      const res = find(i, j, 0)
      // 只要找到就为true
      if(res) {
        return res
      }
    }
  }
  // 循环完都没有找到则为false
  return false

  function find(i, j, cur) {
    // 超出网格下标为终止条件
    if(i>= row || i<0) return false
    if(j>=col || j<0) return false
    // 当前网格内正在遍历的字符
    const letter = board[i][j]
    // 停止递归的条件，true or false
    if(letter !== word[cur]) return false
    if(cur === word.length - 1) return true
    // 当前循环到的网格内的值置为null，防止重复匹配
    board[i][j] = null
    const res = find(i+1, j, cur+1) || 
                find(i-1, j, cur+1) || 
                find(i, j+1, cur+1) || 
                find(i, j-1, cur+1)
    board[i][j] = letter
    return res
  }
};
// @lc code=end

