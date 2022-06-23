// 组合函数compose是 **函数式编程** 中使用较多的一种写法，顾名思义，它可以将一堆函数组合在一起使用，将外部函数依次通过内部函数的加工，最后输出结果。
// 可以把类似于f(g(h(x)))这种写法简化成compose(f, g, h)(x)
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}

function composeV1(...fn) {
  if (fn.length === 0) {
    return (num) => num;
  }
  if (fn.length === 1) {
    return fn[0];
  }

  return fn.reduce((pre, cur) => {
    return (num) => {
      // num为第一个函数（fn1）的入参
      return cur(pre(num));
    } 
  });
}

function composeV2(...fns) {
  return function composed(result){
      // 拷贝一份保存函数的数组
      var list = fns.slice();
      while (list.length > 0) {
          // 将最后一个函数从列表尾部拿出
          // 并执行它
          result = list.pop()( result );
      }
      return result;
  };
}
// ⬆️作者：掘金安东尼
// 链接：https://juejin.cn/post/6989020415444123662 感谢 compose 函数，让我的代码屎山💩逐渐美丽了起来~
// https://juejin.cn/post/6971260867300032525 XDM，JS如何函数式编程？看这就够了！（三）

const a = composeV1(fn1, fn2, fn3);
console.log(a); // (num) => { return next(pre(num)); }
console.log(a(66)); // ( ( (66+1)+2 )+3 )=72