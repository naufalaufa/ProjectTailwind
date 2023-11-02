import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../features/showbox";
import showContactReducer from "../features/showBoxContact";

export const store = configureStore({
  reducer: {
    show: showReducer,
    showContact: showContactReducer,
  },
});
