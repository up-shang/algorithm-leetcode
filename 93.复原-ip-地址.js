/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  let ret = []
  let path = []
  // 从0开始查找
  dfs(0)
  return ret

  function dfs(index) {
    // path内推入第五个索引时，不再满足题意
    if (path.length > 4) return
    // path内有4个且字符使用完后推入结果集
    if (path.length === 4 && index === s.length) {
      ret.push(path.join('.'))
      return
    }
    // 从0传入截取位置后，每次依据此往后截取
    for (let j = index; j < s.length; j++) {
      // 根据题意写好回溯内的标界剪枝逻辑
      const str = s.slice(index, j + 1)
      // 不能超过255
      if (Number(str) > 255) return
      // 超过一位时，不能0开头
      if (str.length > 1 && str[0] === '0') return
      path.push(str)
      // 从上个截取后的索引，继续截取下个串
      dfs(j + 1)
      path.pop()
    }
  }
};
// @lc code=end

