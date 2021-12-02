/* import { createStore } from "redux";

const counterReducer = (state = { counter: 0, show: true }, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + (action.payload || 1),
    };
  }
  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "show") {
    return {
      ...state,
      show: !state.show,
    };
  }
  if (action.type === "reset") {
    return {
      ...state,
      counter: 0,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
 */

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
