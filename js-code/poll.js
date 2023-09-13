const rollPolling = async (handler, rollCount, wrapCount, wait) => {
  await delay(wait)
  const result = await handler()
  if (result.status === 'COMPLETE') {
    return result
  } else if (result.status === 'FAILURE') {
    return false
  } else {
    if (rollCount >= wrapCount) return // `轮询最大次数${wrapCount}已到，轮询取消`;
    rollCount++
    return rollPolling(handler, rollCount, wrapCount, wait)
  }
}

const delay = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
/**
 * 
 * @param {Function} handler  轮询的function
 * @param {Object} config 包括每次轮询的间隔时间，当前轮询的次数，最大轮询次数
 * @returns 
 */
const poll = (handler, config = {}) => {
  const wait = config.wait || 150
  const wrapCount = config.wrapCount || 100
  const rollCount = 0
  return rollPolling(handler, rollCount, wrapCount, wait)
}

export default poll
