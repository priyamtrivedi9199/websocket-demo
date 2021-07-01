import React, {useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/Apislice";

const App = () => {
    const dispatch=useDispatch()
    const [getData,setGetData] = useState("")
    // let socket = new WebSocket("ws://");
    // socket.onopen = function(e) {
    //     alert("Connection established");
    //     socket.send("hello world!!");
    //   };
    //   socket.onmessage = function(event) {
    //     alert(`hello: ${event.data}`);
    //   };
    useEffect(() => {
    dispatch(fetchData())
    }, [])
    const data=useSelector((state)=>state.data.data)
    console.log(data)
    return (
        <div>
            {/* {data.length!==0 && data.map((listings)=>console.log(listings))} */}
        </div>
    )
}

export default App;