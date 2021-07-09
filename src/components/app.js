import { getDefaultNormalizer } from "@testing-library/dom";
import React from "react";
var WebSocket = require("isomorphic-ws");
const App = () => {
  const w = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const [socket, setSocket] = React.useState();
  React.useEffect(() => {}, []);
  w.onopen = function (msg) {};

  w.onmessage = function (msg) {};

  return <div></div>;
};

export default App;
