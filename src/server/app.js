var express = require("express");
var cors = require("cors");
var path = require("path");
var ws = require("ws");

const app = express();
app.use(cors());
app.options("*", cors());
// app.urlencoded()
const w = new ws("wss://api-pub.bitfinex.com/ws/2");
const server = require("http").createServer(app);
const port = 6700;

app.use ((req, res, next) => {
  var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log(fullUrl)
    next();
});
server.listen(port, () => {
  console.log("Server listening at port %d", port);
});

w.on("message", (msg) => console.log(msg));

let msg = JSON.stringify({
  event: "subscribe",
  channel: "ticker",
  symbol: "tBTCUSD",
});

w.on("open", () => w.send(msg));