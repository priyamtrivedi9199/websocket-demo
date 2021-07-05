import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import Connector from "../components/connector";

const App = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState("");
  const [socketvar, setsocketVar] = useState("");
  const socket = io('wss://api-pub.bitfinex.com/ws/2' , { transports: ['websocket', 'polling', 'flashsocket'] });

  // let uri = "localhost:6700";
  //port created by the server
  // io.on('message', (msg) => console.log(msg))

  // let msg = JSON.stringify({ 
  //   event: 'subscribe', 
  //   channel: 'ticker', 
  //   symbol: 'tBTCUSD' 
  // })
  // io.on('open', () => io.send(msg))
  useEffect(() => {
    setsocketVar(socket);
  }, []);

  return (
    <div>

    </div>
  );
};

export default App;
