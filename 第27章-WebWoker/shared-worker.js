// shared-worker.js

// 存储所有连接的端口
const ports = [];

// 监听 connect 事件，当有新的页面连接到这个 SharedWorker 时触发
self.onconnect = function (event) {
  // 获取连接的端口
  const port = event.ports[0];
  // 将新的端口添加到端口数组中
  ports.push(port);

  // 监听端口的消息事件
  port.onmessage = function (event) {
    const message = event.data;
    // 处理接收到的消息，这里简单地将消息广播给所有连接的端口
    ports.forEach((p) => {
      if (p !== port) {
        p.postMessage(`${port}: ${message}`);
      }
    });
  };

  // 启动端口通信
  port.start();
};
