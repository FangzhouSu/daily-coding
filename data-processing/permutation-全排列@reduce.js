// 使用归并方法 reduce 实现全排列
const permutation = (arr) => {
  return arr.reduce((pre, cur) => {
    const result = [];
    for (let i = 0; i < pre.length; i++) {
      for (let j = 0; j < cur.length; j++) {
        console.log(`turn${i}&${j}:`, 'pre:', pre, 'cur:', cur, 'result:', result);
        result.push(pre[i] + cur[j]);
      }
    }
    return result;
  });
};

const inputArr = [['a', 'b'], ['A', 'B'], ['1', '2']];

const ans = permutation(inputArr);

console.log('the answer is:', ans);