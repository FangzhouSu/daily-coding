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

// 模拟每半秒会触发一次事件，但是使用节流函数包了一层之后，只有[隔delay的时间]才会真正触发此事件，避免触发次数过多带来的性能损耗
setInterval(() => {
  test('test throttle', 'test2');
}, 500)
