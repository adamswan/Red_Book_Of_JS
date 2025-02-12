// 我是一个 worker 线程
// 1、接收 js 主线程的数据
self.addEventListener("message", function (data) {
  console.log("来自js主线程的data:", data.data);
});

// 2、执行耗时任务，将结果发给 js 主线程
setTimeout(() => {
  self.postMessage("刘亦菲1");
}, 1000);

setTimeout(() => {
  self.postMessage("刘亦菲2");
}, 2000);

setTimeout(() => {
  self.postMessage("刘亦菲3");
}, 3000);
