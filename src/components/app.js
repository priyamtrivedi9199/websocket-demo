import { getDefaultNormalizer } from "@testing-library/dom";
import React from "react";
var WebSocket = require("isomorphic-ws");
const App = () => {
  const w = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const [socket, setSocket] = React.useState();
  React.useEffect(() => {}, []);
  w.onopen = function (msg) {
    w.send(msg);
  };

  w.onmessage = function (msg) {
    console.log(msg.data)
  };

  function GetData(data) {
    return console.log(data)
  }

  return (
    <div>
      
    </div>
  );
};

export default App;
