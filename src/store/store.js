import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../features/showbox";

export const store = configureStore({
  reducer: {
    show: showReducer,
  },
});
