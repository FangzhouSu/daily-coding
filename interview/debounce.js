function debounce(fn, delay = 2000) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
      // console.log(this, args);
    }, delay)
  }
}

const testFunc = (...args) => {
  console.log('the args of the testFunc:', args);
}

const test = debounce(testFunc);

// 模拟每半秒会触发一次事件，但是使用防抖函数包了一层之后，只有[最后一次触发结束后，隔delay的时间]才会真正触发，避免触发次数过多带来的性能损耗
let time = 0;
const timer = setInterval(() => {
  test('test debouce', 'test2');
  time++;
  console.log('flag每增加一下，说明触发了事件，不过因为有防抖函数，time为6 & 过了delay的时间后会开启定时器', time);
  if (time === 6) {
    clearTimeout(timer);
  }
}, 500);
