// index.js

const http = require("http");
const SocketService = require("./SocketService");

/* 
  Create Server from http module.
  If you use other packages like express, use something like,
  const app = require("express")();
  const server = require("http").Server(app);

*/
const server = http.createServer((req, res) => {
  res.write("Terminal Server Running.");
  res.end();
});

const ws_port = 1234;

server.listen(ws_port, function() {
  console.log(`Server listening on web socket:  ${ws_port}`);
  const socketService = new SocketService();
  socketService.attachServer(server);
});
