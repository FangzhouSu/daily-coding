/**
 * 将拍平对象转换为层级对象
 * 生成新的对象（默认不会出现嵌套情况）
 * 相同父集需要做归并处理
 * 
 * 巧妙利用reduce & 熟练掌握对象的引用
 */ 
const translateObj = (originObj) => {
  const keysArr = Object.keys(originObj);
  return keysArr.reduce((acc, prev) => {
    const attrArr = prev.split('.');

    // 根据a.b: xxx 获取 newObj: { a: { b: xxx } }
    let newObj = attrArr.reverse().reduce((acc, prev) => {
      return { [prev]: acc };
    }, originObj[prev]);

    // 使用pre指针时刻标记要插入newObj的位置
    let pre = acc;
    for (let attr of attrArr.reverse()) {
      // 当pre中没有这个属性时才可以进行插入，否则继续推动指针前进（不然会覆盖原有属性）
      if (pre && !pre.hasOwnProperty(attr)) {
        pre[attr] = newObj[attr];
        break;
      }
      pre = pre[attr];
      newObj = newObj[attr];
    }
    return acc;
  }, {});
}

const test = {
  'a.b.c': 1,
  'a.b.d': 666,
  'a.d': 888,
  'e': 'new attr',
};

console.log(translateObj(test))

// 网友的解法，还是我那个优雅一些吧~
function fn(arr) {
  const values = Object.keys(arr);
  let obj = {};
  for (let i = 0; i < values.length; i++) {
    let value = values[i];
    let keyArr = value.split('.');
    for (let j = 0; j < keyArr.length; j++) {
      if (j == 0) {
        var pre = !obj[keyArr[j]]
        ? (obj[keyArr[j]] = {})
        : obj[keyArr[j]];
      } else if (j != keyArr.length - 1) {
        pre = !pre[keyArr[j]] ? (pre[keyArr[j]] = {}) : pre[keyArr[j]];
      } else {
        pre[keyArr[j]] = arr[value];
      }
    }
    pre = {};
  }
  return obj;
}

// console.log(fn(test))