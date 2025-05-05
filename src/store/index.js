import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++; // still update immutably (handled by redux toolkit)
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload; // payload is the name of the property of any extra data you pass
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  // if many slices, pass an object {counter: counterSlice.reducer}
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
