import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import TickerReducer from "../reducers/reducers";
import reduxThunk from "redux-thunk";
import {createLogger} from 'redux-logger';

const middleware = [ reduxThunk ];
if (process.env.NODE_ENV !== "production") {
  let logger=createLogger();
  middleware.push(logger);
}

const configureStore = () => {
  const reducers = combineReducers({
    ticker: TickerReducer,
  });

  const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(...middleware)),
  );

  return store;
};

export default configureStore;
