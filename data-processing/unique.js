// 数组去重
let arr=[NaN, NaN, { a: 1 }, { a: 1 }, [], [], 6, '6', '6', 6, false, false];

// 1.轻轻松松for循环版本
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

// 2.更加优雅，filter版本
Array.prototype.uniqV2 = function() {
  const map = {};
  return this.filter((item) => {
    const key = typeof item + JSON.stringify(item); // 独一无二的key可以帮助我们区分不同的元素
    return map.hasOwnProperty(key) ? false : map[key] = true; // map[key] = true; 返回true 应该不会有人不知道吧（好吧看到这个解法之前的我就是不知道
  });
}

// 3.reduce也是不错的选择～
Array.prototype.uniqV3 = function() {
  const ans = []; // ans记录答案数组
  this.reduce((acc, cur) => {
    const key = typeof pre + JSON.stringify(cur);
    if (!acc.hasOwnProperty(key)) {
      ans.push(cur);
      acc[key] = 666;
    }

    return acc;
  }, {});

  return ans;
}

// 4.个人认为这个reduce方法更直接一些～
Array.prototype.uniqV4 = function() {
  const map = {}; // 使用map记录哪些元素是重复的
  const ans = this.reduce((acc, cur) => { 
    const key = typeof cur + JSON.stringify(cur);
    if(!map.hasOwnProperty(key)){ 
      acc.push(cur); // 如果符合【不重复】的前提 则将元素归并进来
    } 
    map[key] = 111;
    return acc; 
  }, []);

  return ans;
}


console.log('1.for循环版本', arr.uniqV1());
console.log('2.filter版本', arr.uniqV2());
console.log('3.reduce版本', arr.uniqV3());
console.log('4.reduce 2.0版本', arr.uniqV4());