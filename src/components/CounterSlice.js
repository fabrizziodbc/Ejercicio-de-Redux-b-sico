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

export function fetchCount(amount = 1) {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const asyncIncrement = (value) => {
  return async (dispatch) => {
    const amount = await fetchCount(value);
    dispatch(increment(Number(amount.data)));
  };
};

export const selectCount = (state) => state.counter.value;
export const isShow = (state) => state.counter.show;

export default counterSlice.reducer;
