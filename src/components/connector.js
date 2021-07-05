import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

export const  Connector = () => {
    const [connected,setConnected] = useState("")

    const connect = () => {

    }

    const disconnect = () => {

    }

    return (
        <div>
            <button onClick={connect}></button>
            <button onClick={disconnect}></button>
        </div>
    )
}
