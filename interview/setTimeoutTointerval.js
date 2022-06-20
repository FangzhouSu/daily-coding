// setInterval用来实现循环定时调用可能会有一些问题，使用setTimeout来实现循环定时调用呗～
  // 就比如useState🪝在setInterval中就有闭包问题导致的状态更新错误（不知道换setTimeout实现是不是会好一些呢？）

// 之前在京东实习时候，写过类似的，当时是要做页面的定时刷新，我看mentor的代码 就是这么写的～setTimeout实现的setInterval
  // 下面的cancel方法的使用时机：useEffect(() => { return () => { cancel(); } }) 
function mySetTimeout(fn, delay) {
  let timer = null;
  const interval = () => {
    fn();
    timer = setTimeout(interval, delay);
  }
  setTimeout(interval, delay);
  return {
    cancel: () => {
      clearTimeout(timer); // 调用mySetTimeout函数，返回函数cancel，调用cancel可以结束计时
    }
  }
}

const { cancel } = mySetTimeout(() => console.log(666), 1000); // 1s循环调用一次
setTimeout(() => {
  cancel(); // 4s后取消定时
}, 4000);