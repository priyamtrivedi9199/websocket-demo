import WS from "ws";

function wsconnect({
  saveTicker,
  setConnectionStatus,
  connectionStatus,
}) {
  const w = new WebSocket();
  const pair = "BTCUSD"
  let connected = false
  w.onopen = function open() {
    w.send(
      JSON.stringify({
        event: "subscribe",
        channel: "ticker",
        symbol: "tBTCUSD",
      })
    )
  }

  w.onclose = function open() {
    connected=false;
  }

  w.onmessage = function (message_part) {
    var msg = message_part.data;
    msg = JSON.parse(msg);
    if (msg.event === "subscribed") {
      channels[msg.channel] = msg.chanId;
      console.log({ channels });
    }
    if (msg.event) return;
    if (msg[0] === channels["ticker"]) {
      Array.isArray(msg[1]) && saveTicker(msg);
    }
  };
}

export {connected,wsconnect}