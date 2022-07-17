// 向林三心学习的比较简短的节流函数 不需要对时间进行计算
function throttle(fn, delay = 2000) {
  let flag = true;
  return function (...args) {
    console.log('flag为false时不会启动一个新的定时器，直接return掉～', flag);
    if (!flag) return;
    flag = false; // 实现节流的关键flag——除非fn执行完成，否则不管点多少次，flag都是false
    // console.log('the arguments are:', arguments); // arguments是个对象： { '0': 'test throttle', '1': 'test2' }
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay)
  }
}

const testFunc = (...args) => {
  console.log('the args of the testFunc:', args);
}

const test = throttle(testFunc);

setInterval(() => {
  test('test throttle', 'test2');
}, 500)
// throttle(testFunc)('test throttle', 'test2');