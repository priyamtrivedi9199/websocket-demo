var express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.options("*", cors());
const path = require("path");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 6700;

server.listen(port, () => {
  console.log("Server listening at port %d", port);
});
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log(socket.id, "socket.id");

  socket.emit("message", messages);

  socket.on("sendMessage", (message) => {
    messages.push({ ...message });
    setTimeout(() => {
      io.emit("message", messages);
    }, 2000);
  });

  socket.on("disconnect", () => {
    console.log("Got disconnect!");
  });
});

// const io = require('socket.io')(80);
// const cfg = require('./config.json');
// const tw = require('node-tweet-stream')(cfg);
// tw.track('socket.io');
// tw.track('javascript');
// tw.on('tweet', (tweet) => {
//   io.emit('tweet', tweet);
// });

// w.on('message', (msg) => console.log(msg))
// w.on('open', () => w.send(msg))
// let msg = JSON.stringify({
//     event: 'subscribe',
//     channel: 'ticker',
//     symbol: 'tBTCUSD'
//   })
// const w = new WebSocket('wss://api-pub.bitfinex.com/ws/2')
