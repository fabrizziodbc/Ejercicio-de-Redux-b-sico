import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  show,
  selectCount,
  isShow,
  asyncIncrement,
} from "./CounterSlice";
import classes from "../features/counter/Counter.module.css";

const Counter = () => {
  const count = useSelector(selectCount);
  const showHide = useSelector(isShow);
  const dispatch = useDispatch();

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showHide && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(show())}>Toggle</button>
        <button onClick={() => dispatch(increment(5))}>Increment +5 </button>
        <button onClick={() => dispatch(asyncIncrement())}>Async </button>
      </div>
    </main>
  );
};

export default Counter;
