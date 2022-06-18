// 数组去重
let arr=[NaN, NaN, { a: 1 }, { a: 1 }, [], [], 6, '6', '6', 6, false, false];

// 轻轻松松for循环版本
Array.prototype.uniqV1 = function() {
  const map = {};
  for (let i = 0; i < this.length; i++) {
    // 关键逻辑：给每一个元素独一无二的“身份证”，并根据“身份证”对元素进行去重; 利用的原理：对象的属性是字符串
    const key = typeof this[i] + JSON.stringify(this[i]);
    if (!map.hasOwnProperty(this[i])) {
      map[key] = this[i]; // 这里并不关心属性值为多少 只是利用对象属性为字符串的原理保存独一无二的值
    }
  }
  console.log('map------', map);
  return Object.values(map);
}

// 更加优雅，filter版本
Array.prototype.uniqV2 = function() {
  const map = {};
  return this.filter((item) => {
    const key = typeof item + JSON.stringify(item); // 独一无二的key可以帮助我们区分不同的元素
    return map.hasOwnProperty(key) ? false : map[key] = true; // map[key] = true; 返回true 应该不会有人不知道吧（好吧看到这个解法之前的我就是不知道
  })
}

console.log(arr.uniqV1(), arr.uniqV2());