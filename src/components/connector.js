import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledButton } from "./components.styles";
import WebSocket from "isomorphic-ws"; 

export const Connector = () => {
  const w = new WebSocket("wss://api-pub.bitfinex.com/ws/2");
  const [connected, setConnected] = useState("");
  const [disconnected, setDisConnected] = useState("");
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
