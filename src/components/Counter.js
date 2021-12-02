import { useSelector, useDispatch } from "react-redux";

import classes from "../features/counter/Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const fiveHandler = () => {
    dispatch({ type: "increment", payload: 5 });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "show" });
  };
  const resetHandler = () => {
    dispatch({ type: "reset" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={fiveHandler}>Increment +5 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={resetHandler}>Reset</button>
    </main>
  );
};

export default Counter;
