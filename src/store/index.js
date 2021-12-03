import { configureStore } from "@reduxjs/toolkit";
import counter from "../components/CounterSlice";

const store = configureStore({
  reducer: {
    counter
  },
});
export default store;
