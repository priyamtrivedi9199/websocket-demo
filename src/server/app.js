var express = require("express");
var cors = require("cors");
var path = require("path");
var ws = require('ws');

const app = express();
app.use(cors());
app.options("*", cors());

const w = new ws('wss://api-pub.bitfinex.com/ws/2')
const server = require("http").createServer(app);

const port = 6700;
server.listen(port, () => {
  console.log("Server listening at port %d", port);
});
app.use(express.static(path.join(__dirname, "public")));
w.on('message', (msg) => console.log(msg))

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'ticker', 
  symbol: 'tBTCUSD' 
})

w.on('open', () => w.send(msg))