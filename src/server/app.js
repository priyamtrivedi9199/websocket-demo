var express = require("express");
var cors = require("cors");
var path = require("path");
var ws = require("ws");
const app = express();
app.use(cors());
app.options("*", cors());
const w = new ws("wss://api-pub.bitfinex.com/ws/2");
const server = require("http").createServer(app);
const port = 6700;

let msg = JSON.stringify({
  event: "subscribe",
  channel: "ticker",
  symbol: "tBTCUSD",
});
app.get("/", (req, res) => {
  w.on("message", (msg) => res.send(msg));
  // w.on("message", (msg) => msg);
  w.on("open", () => res.send(msg));
});

server.listen(port, (req, res) => {
  console.log("Server listening at port %d", port);
})
