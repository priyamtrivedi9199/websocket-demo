import React from "react";
import ReactDOM from "react-dom";
import App from '../src/components/app'
import { Provider } from "react-redux";
import store from "./redux/store/store";

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById("root")
);