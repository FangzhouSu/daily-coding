function debounce(fn, delay = 1000) {
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

debounce(testFunc)('test debouce', 'test2');