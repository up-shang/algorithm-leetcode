/**
 * 接口重试
 * @param {Promise} task 
 * @param {Number} count 
 * @returns 
 */
function retry(task, count) {
  console.log('还有' + count + '次')
  return new Promise((resolve, reject) => {
    task()
      .then(res => {
        resolve(res)
      })
      .catch(() => {
        if (count > 0) {
          resolve(retry(task, count - 1)) // 这里使用resolve
        } else {
          reject('次数用完了')
        }
      })
  })
}