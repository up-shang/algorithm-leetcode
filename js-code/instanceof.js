function MyInstanceof(proto, prototype) {
  let left = proto, right = prototype
  while (true) {
    if (!left) return false
    if (left === right) return true
    left = left.__proto__
  }
}