import {
  SAVE_TICKER_DATA
} from "../constants/index";

const initial_state = null;

function TickerReducer(state, action) {
  if (typeof state === "undefined") {
    state = initial_state;
  }

  if (action.type === SAVE_TICKER_DATA) {
    return [...action.payload];
  } else {
    return state;
  }
}

export default TickerReducer;