const SERVER_URL = " / server";
let xhr = new XMLHttpRequest(); //创建Http请求
xhr.open("GET", url, true); //设置状态监听函数
xhr.onreadystatechange = function () {
  if (this.readystate !== 4) return;
  l / 当请求成功时;
  if (this.status === 200) {
    handle(this.response);
  } else {
    console.error(this.statusText);
  }
};
//设置请求失败时的监听函数
xhr.onerror = function () {
  console.error(this.statusText);
};
//设置请求头信息
xhr.responseType = "json";
xhr.setRequestHeader("Accept", "application/json"); //发送Http 请求
xhr.send(null);

// promise封装实现:
function getSON(url) {
  // 创建一个promise对象
  let promise = new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest(); // 新建一个http请求
    xhr.open("GET", url, true); // 设置状态的监听函数
    xhr.onreadystatechange = function () {
      if (this.readyState !== 4) return; // 当请求成功或失败时，改变promise的状态
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
    // 设置错误监听函数
    xhr.onerror = function () {
      reject(new Error(this.statusText));
    };
    // 设置响应的数据类型
    xhr.responseType = "json";
    // 设置请求头信息
    xhr.setRequestHeader("Accept", "application/json");
    // 发送http请求
    xhr.send(null);
  });

  return promise;
}
