/**
 * 手写实现发布订阅
 */
class Emitter {
  constructor() {
    // 事件回调处理器
    this.handler = {}
  }
  // 订阅，注意区分是否为once
  on(eventName, cb, isOnce) {
    if (!this.handler[eventName]) {
      this.handler[eventName] = []
    }
    this.handler[eventName].push({ cb, isOnce })
  }
  // 执行一次后移除，传入isOnce true标识
  once(eventName, cb) {
    this.on(eventName, cb, true)
  }
  // 解除订阅
  off(eventName, cb) {
    if (this.handler[eventName]) {
      // 移除匹配到的回调
      this.handler[eventName].filter(item => item.cb !== cb)
    }
  }
  // 发布
  emit(eventName, ...args) {
    if (this.handler[eventName]) {
      this.handler[eventName].filter(item => {
        item.cb(...args) // 执行订阅该事件的回调
        return !item.isOnce // 执行一次后，清除once类型的事件回调
      })
    }
  }
}


const eventBus = new EventBus()

const add1 = (x, y) => {
  const ret = x + y
  console.log(ret, 'ret1')
  return ret
}
const add2 = (x, y) => {
  const ret = x - y
  console.log(ret, 'ret2')
  return ret
}
const add3 = (x, y) => {
  const ret = x * y
  console.log(ret, 'ret3')
  return ret
}
const add4 = (x, y) => {
  const ret = x / y
  console.log(ret, 'ret4')
  return ret
}
eventBus.on('event1', add1)

eventBus.on('event1', add2)

eventBus.on('event1', add3)

eventBus.on('event1', add4)

eventBus.emit('event1', 10, 200)

eventBus.off('event1', add2)

eventBus.off('event1', add3)

console.log(eventBus.handler['event1'])