/**
 * 题目要求——
 * const add = (a, b, c) => a + b + c;
 * const a = currying(add, 1);
 * console.log(a(2, 3)); // 相当于 curry(add, 1)(2, 3) = 1 + 2 + 3 = 6
 */ 

function currying(fn, ...args) {
  const fnArgsLen = fn.length; // 第一次知道可以直接对函数取length Orz
  let allArgs = [...args]; // allArgs存储传入参数，当所有参数都被传入fn之后才能返回结果

  // 这个res(一个函数)是柯里化函数的关键
  const res = (...args2) => {
    allArgs = [...allArgs, ...args2];
    if (allArgs.length === fnArgsLen) {
      // 已经把所有参数都传入了fn，可以返回结果了～
      return fn(...allArgs);
    } else {
      // 返回这个函数，继续接收下一轮的参数（args2）
      return res;
    }
  }

  return res;
}

// test
const add = (a, b, c) => a + b + c;
const a = currying(add, 1);
console.log(a(2, 3)); // 6