function asyncToGenerator(generatorFunc) {
  return function() {
    const gen = generatorFunc.apply(this, arguments)
    return new Promise((resolve, reject) => {
      function step(key, arg) {
        let generatorResult
        try {
          generatorResult = gen[key](arg)
        } catch (err) {
          reject(err)
        }
        const { value, done } = generatorFunc()
        if (done) {
          return resolve(value)
        } else {
          return Promise.resolve(value).then(res => {
            step('next', res)
          }, reason => { step('throw', reason) })
        }
      }
      step('next')
    })
  }
}
