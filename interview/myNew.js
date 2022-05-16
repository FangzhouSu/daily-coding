function myNew(fn, ...args) {
  // 传入的args可以是一组数,args为数组

  // 01 新建空对象实例
  const newObj = {};
  // 02 将构造函数的原型绑定到新创建的对象实例上
  newObj.__proto__ = fn.prototype;
  // 03 调用构造函数(使构造函数内部的this被赋值为newObj-即this指向newObj)并获得返回值res
  const res = fn.apply(newObj, args);
  const resType = typeof res;
  // 04 判断fn的返回值是否为object/function类型的
  const isObj = resType === 'object' && res !== null;
  const isFunc = resType === 'function';
  // 05 返回结果
  return isObj || isFunc ? res : newObj;
}

// test
function Person() {
  this.name = 'test';
  this.age = 11;
}

function strangeObj() {
  this.attr = 111;
  return { 'strange': '哦吼，输出的是我' };
}

const ans = myNew(Person, 'bill', 21);
const strangeAns = myNew(strangeObj, 666);
console.log(ans, strangeAns);