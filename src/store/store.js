import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../features/showbox";
import showContactReducer from "../features/showBoxContact";
import likeMusicReducer from "../features/likeMusic";

export const store = configureStore({
  reducer: {
    show: showReducer,
    showContact: showContactReducer,
    likeMusic: likeMusicReducer,
  },
});
