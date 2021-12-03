import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
  show: true,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increment: (state, action) => {
      state.value += action.payload || 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    show: (state) => {
      state.show = !state.show;
    },
  },
});

export const { increment, decrement, reset, show } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const isShow = (state) => state.counter.show;

export default counterSlice.reducer;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
