// 实现原生的Ajax请求
// 美团二面时，主管让我写一个ajax请求，当时就懵了，“额 用的都是封装好的” 虽然面试过了 但是现在想想，完全可以表现得更好！
const ajax = {
  get(url, fn) {
    // get方法
    const xhr = new XMLDocumentRequest();
    xhr.open('GET', url, true); // 01 初始化一个请求，第三个参数为 异步：true（默认）/false
    xhr.onreadystatechange = function() {
      // 02 xhr.onreadystatechange： readyState属性变化时的回调
      if (xhr.readyState === 4) {
        // 03 请求的状态码 https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState
        fn(xhr.responseText); // 04 请求被发送后，从服务器端返回的文本
      }
    }
    xhr.send(); // 05 发送请求（如果open方法的第三个参数为默认的true-异步，则send方法不会等待请求的返回值，而是异步地在发送请求之后立即返回）
  },
  post(url, data, fn) {
    // 与get方法区别在于发送请求时要把data带上～
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // 设置http请求头的值
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        fn(xhr.responseText);
      }
    }
    xhr.send(data);
  }
}