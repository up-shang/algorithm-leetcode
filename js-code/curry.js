/**
 * 函数柯里化
 * @param {*} fn 
 * @param  {...any} args 
 */
const curry = (fn, ...args) => args.length >= fn.length ? fn(...args) : (..._args) => curry(fn, ...args, ..._args)

const add1 = (x, y, z) => x + y + z

const add = curry(add1)
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));