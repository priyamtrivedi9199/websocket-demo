import { SAVE_TICKER_DATA } from "../constants/index";
export const saveTicker = (payload) => ({ type: SAVE_TICKER_DATA, payload });