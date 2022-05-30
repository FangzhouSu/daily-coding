function debounce(fn, delay = 500) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      console.log(this, args);
    })
  }
}

const testFunc = (args) => {
  console.log('func', args);
}

debounce(testFunc)('test debouce');