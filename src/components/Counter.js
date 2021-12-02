import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./CounterSlice";
import classes from "../features/counter/Counter.module.css";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const incrementValue = 5;

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Increment +5{" "}
        </button>
      </div>
    </main>
  );
};

export default Counter;
