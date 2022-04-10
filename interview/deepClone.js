const deepClone = (target) => {
  if (typeof target === 'object') {
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (const attr in target) {
      cloneTarget[attr] = deepClone(target[attr]);
    }
    return cloneTarget;
  } else {
    return target;
  }
};

const testTarget = {
  a: 666,
  b: [1, 2, 3],
  c: { d: '666' },
};

// 基础版本的deepClone无法解决循环引用问题，会爆栈~
// testTarget.testTarget = testTarget;

const copy = deepClone(testTarget);
copy.b = ['修改深拷贝过来的引用数据类型', '也没有关系~'];

console.log('deepClone:', copy);
console.log('origin:', testTarget);