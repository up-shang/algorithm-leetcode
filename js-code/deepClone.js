function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj
  const ret = Array.isArray(obj) ? [] : {}
  for (let i in obj) {
    if (typeof obj[i] === 'object') {
      ret[i] = deepClone(obj[i])
    } else {
      ret[i] = obj[i]
    }
  }
  return ret
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 1
  }
}
const obj1 = deepClone(obj)
obj1.a = 2222222
obj1.d.e = 13313131
console.log(obj, obj1, 'test')