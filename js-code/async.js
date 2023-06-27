function asyncToGenerator(generatorFunc) {
  // async调用示例，const t = asyncToGenerator(), t().then()
  //所以需要返回一个function
  return function() {
    const gen = generatorFunc.apply(this, arguments)
    // async返回的是一个promise
    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let generatorResult
        try {
          // 迭代器有两个参数，next与throw
          generatorResult = gen[key](arg)
        } catch (err) {
          reject(err)
        }
        const { value, done } = generatorFunc()
        if (done) {
          // 迭代器结束时将最后一步的value抛出返回
          return resolve(value)
        } else {
          return Promise.resolve(value).then(res => {
            // 注意每次将上次结果传入yield给后面next使用，否则会undefined
            step('next', res)
          }, reason => { step('throw', reason) })
        }
      }
      // 起初，自动触发迭代器的next
      step('next')
    })
  }
}
