import React from "react";
import { Connector } from "../components/connector";
var WebSocket = require("isomorphic-ws");

const App = () => {
  const w = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  w.onOpen = function () {
    console.log(w)
  };
  return (
    <div>
      <Connector />
    </div>
  );
};

export default App;
