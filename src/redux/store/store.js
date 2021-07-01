import { configureStore } from "@reduxjs/toolkit";
import reducers from "../Apislice";

export default configureStore({
  reducer: {
    data: reducers,
  },
});