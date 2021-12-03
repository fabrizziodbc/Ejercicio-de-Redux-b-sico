import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
