import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
const socket = io();

const App = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState("");
  const [socketvar, setsocketVar] = useState("");
  let uri=
  setsocketVar(
    io(urllive, {
      jsonp: false,
      transports: ["websocket"],
    })
  );

  useEffect(() => {}, []);
  const data = useSelector((state) => state.data);

  return (
    <div>
      <button>Load users</button>
    </div>
  );
};

export default App;
