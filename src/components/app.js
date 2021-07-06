import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Connector} from "../components/connector";
import StyledButton from './components.styles';
import WebSocket from "isomorphic-ws";
// var http = require('http');
// const server = http.createServer(8080);
// const wss = WebSocket.Server();

const App = () => {
  const ws = new WebSocket('wss://echo.websocket.org/');
  const dispatch = useDispatch();
  const [getData, setGetData] = useState("");
  const [socketvar, setsocketVar] = useState("");

  ws.onopen= function connection(ws, request, client) {
    ws.on = function message(msg) {
      console.log(`Received message ${msg}`);
    };
  };

  return (
    <div>
      <Connector />
    </div>
  );
};

export default App;
