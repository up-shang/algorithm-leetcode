function fakeNew() {
  // 创建新对象
  var obj = Object.create(null);
  var Constructor = [].shift.call(arguments);
  // 将对象的 __proto__ 赋值为构造函数的 prototype 属性
  obj.__proto__ = Constructor.prototype;
  // 将构造函数内部的 this 赋值为新对象
  var ret = Constructor.apply(obj, arguments);
  // 返回新对象
  return typeof ret === "object" && ret !== null ? ret : obj;
}

function Group(name, member) {
  this.name = name;
  this.member = member;
}

var group = fakeNew(Group, "hzfe", 17);
console.log(group)