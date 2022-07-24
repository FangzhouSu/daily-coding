/**
 * 永远不要使用eval()!!
 * eval() 是一个危险的函数， 它使用与调用者相同的权限执行代码。
 * 如果你用 eval() 运行的字符串代码被恶意方（不怀好意的人）修改，
 * 您最终可能会在您的网页/扩展程序的权限下，在用户计算机上运行恶意代码。
 * 更重要的是，第三方代码可以看到某一个 eval() 被调用时的作用域，这也有可能导致一些不同方式的攻击。
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval
 */
// function badParse(json) {
//   return eval('(' + json + ')');
// }

function parse(json) {
  return Function('"use strict";return (' + json + ')')();
}

const testObj = {
  a: (4-1),
  b: function() {},
  c: new Date(),
}

const testJson = JSON.stringify(testObj);
console.log(testJson, parse(testJson)); // "{"a":3,"c":"2022-07-24T16:01:17.754Z"}" { a: 3, c: '2022-07-24T16:01:17.754Z' }