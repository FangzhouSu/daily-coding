// 说实话 感觉这个不是特别有必要XD
function setIntervalTotimeout(fn, delay) {
  const timer = setInterval(() => {
    fn();
    clearInterval(timer); // 好家伙 这实现方式～
  }, delay);
}

setIntervalTotimeout(() => console.log(666), 1000);