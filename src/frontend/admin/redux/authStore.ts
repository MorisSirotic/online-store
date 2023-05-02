import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./AuthSlice";
const initialState: CounterState = { count: 0 };

type CounterAction = { type: "INCREMENT" } | { type: "DECREMENT" };

export interface CounterState {
  count: number;
}

const counterReducer = (
  state = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const increment = (): CounterAction => {
  return { type: "INCREMENT" };
};

export const decrement = (): CounterAction => {
  return { type: "DECREMENT" };
};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
