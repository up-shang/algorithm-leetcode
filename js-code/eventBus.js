class EventBus {
  constructor() {
    this.handler = {}
  }
  // 发布
  emit(eventName, ...args) {
    if (this.handler[eventName]) {
      this.handler[eventName].forEach(cb => {
        cb(...args)
      })
    }
  }
  // 订阅
  on(eventName, cb) {
    if (!this.handler[eventName]) {
      this.handler[eventName] = []
    }
    this.handler[eventName].push(cb)
  }
  // 解除订阅
  off(eventName, cb) {
    if (this.handler[eventName]) {
      const index = this.handler[eventName].indexOf(cb)
      if (index !== -1) this.handler[eventName].splice(index, 1)
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