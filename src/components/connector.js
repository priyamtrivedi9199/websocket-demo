import React, { useEffect } from "react";
import { StyledButton } from "./components.styles";
import WebSocket from "isomorphic-ws"; 

export const Connector = () => {
  const w = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  // const [connected, setConnected] = React.useState("");
  // const [disconnected, setDisConnected] = React.useState("");
  
  useEffect(() => {});
  const connect = () => {
    w.on =function open(event) {
      if (event.wasClean) {
        w.send();
      } else {
        console.log("connected");
      }
    };
  };

  const disconnect = () => {
    w.on = function close() {
      console.log("disconnected");
    };
  };
  return (
    <div>
      <StyledButton onClick={connect}>Connect</StyledButton>
      <StyledButton onClick={disconnect}>Disconnect</StyledButton>
    </div>
  );
};
