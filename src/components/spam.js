// const saveTicker = useCallback(throttle((b) => props.dispatch(TickerActions.saveTicker(b)), 500))
// const [connectionStatus, setConnectionStatus] = useState(true)
// const TICKER_CHANNEL_ID = 245143
// const pair = "BTCUSD"

// const conf = {
//   wshost: 'wss://api.bitfinex.com/ws/2'
// }
//   const startConnection = () => !connectionStatus && setConnectionStatus(true)
//   const stopConnection = () => connectionStatus && setConnectionStatus(false)
//   client.onOpen=function open () {
//     connecting = false
//     connected = true
//     setConnectionStatus(true)
//     cli.send(JSON.stringify({ event: 'conf', flags: 65536 + 131072 }))
//     cli.send(JSON.stringify({ event: 'subscribe', channel: 'ticker', symbol: 'tBTCUSD'}))
//   }
//   client.onclose = function open () {
//     seq = null
//     connecting = false
//     connected = false
//     setConnectionStatus(false)
//   }
//   client.onmessage = function (message_event){
//     var msg = message_event.data
//     msg = JSON.parse(msg)
//     if(msg.event === "subscribed") {
//         channels[msg.channel] = msg.chanId
//         console.log({channels})
//       }
//     if(msg.event) return
//     if(msg[0] === channels["ticker"]){
//         Array.isArray(msg[1]) && saveTicker(msg)
//      }
//   }
//   //////////
//   const Ticker = connect(s => ({ ticker: s.ticker }))((props) => {
//     const { ticker } = props
//     const empty_ticker = [0,[0,0,0,0,0,0,0,0,0,0]]
//   const [ CHANNEL_ID,[BID,BID_SIZE,ASK,ASK_SIZE,DAILY_CHANGE,DAILY_CHANGE_PERC,LAST_PRICE,VOLUME,HIGH,LOW]] = Array.isArray(ticker) ? ticker : empty_ticker
//   { VOLUME && numberWithCommas(VOLUME.toFixed(2)) }
//   { LOW && numberWithCommas(LOW.toFixed(1)) }
//   { LAST_PRICE && numberWithCommas(LAST_PRICE.toFixed(1)) }
//   { DAILY_CHANGE && numberWithCommas(DAILY_CHANGE.toFixed(2)) } 
//             { DAILY_CHANGE_PERC < 0 ? <FaCaretDown /> : <FaCaretUp />} 
//             ({DAILY_CHANGE_PERC})
//             { HIGH && numberWithCommas(HIGH.toFixed(1)) } 
//   }