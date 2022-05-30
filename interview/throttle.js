// 向林三心学习的比较简短的节流函数 不需要对时间进行计算
function throttle(fn, delay = 500) {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false; // 实现节流的关键flag——除非fn执行完成，否则不管点多少次，flag都是false
    const args = arguments;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay)
  }
}