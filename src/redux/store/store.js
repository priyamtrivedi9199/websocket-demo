import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import TickerReducer from "../reducers/reducers";
import reduxThunk from 'redux-thunk';
const middleware = [ reduxThunk ];

if (process.env.NODE_ENV !== 'production') {
  let redux_logger = require('redux-logger').createLogger
  middleware.push(redux_logger());
}

 const configureStore = () => {
  { 
    const reducers = combineReducers({
      ticker: TickerReducer,
    })

    const store = createStore(
      reducers,{},compose(applyMiddleware(...middleware))
    )

    return store;
  }
}

export default configureStore;