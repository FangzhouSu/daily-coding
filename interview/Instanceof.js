/**
 * 原生instanceof的使用方法 & 原理 ⬇️
 * fn instanceof Func 的原理：判断Func（构造函数）的prototype属性是否出现在fn（实例对象）的原型链上
 */
function myInstanceof(fn, Func) {
  const FuncP = Func.prototype;
  let fnP = fn.__proto__; // Object.getPrototypeOf(fn) 也ok～

  while(fnP) {
    // 只要没顺着fn的原型链走到尽头，就一直找下去～
    if (fnP === FuncP) {
      return true;
    }

    fnP = fnP.__proto__;
  }

  return false;
}

// 以下答案全为true
console.log(myInstanceof(Array, Object), Array instanceof Object); 
console.log(myInstanceof({}, Object), {} instanceof Object);
console.log(myInstanceof(Function, Object), Function instanceof Object);
console.log(myInstanceof([], Object), [] instanceof Object);