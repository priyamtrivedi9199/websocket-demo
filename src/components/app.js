import React from "react";
import { connect } from "react-redux";

const App = connect(s => ({ ticker: s.ticker }))((props) => {
  const { ticker } = props;
  const empty_ticker = [0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
  const [
    CHANNEL_ID,
    [
      BID,
      BID_SIZE,
      ASK,
      ASK_SIZE,
      DAILY_CHANGE,
      DAILY_CHANGE_PERC,
      LAST_PRICE,
      VOLUME,
      HIGH,
      LOW,
    ],
  ] = Array.isArray(ticker) ? ticker : empty_ticker;

  return (
    <div>
      <p>{VOLUME}</p>
      <p>{LOW}</p>
      <p>{LAST_PRICE}</p>
      <p>{DAILY_CHANGE}</p>
      <p>{DAILY_CHANGE_PERC}</p>
      <p>{DAILY_CHANGE_PERC}</p>
      <p>{HIGH}</p>
    </div>
  );
});

export default App;