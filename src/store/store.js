import { configureStore } from "@reduxjs/toolkit";
import showReducer from "../features/showbox";
import showContactReducer from "../features/showBoxContact";
import likeMusicReducer from "../features/likeMusic";
import techStackBoxReducer from "../features/showBoxTechStack";

export const store = configureStore({
  reducer: {
    show: showReducer,
    showContact: showContactReducer,
    likeMusic: likeMusicReducer,
    techStackShow: techStackBoxReducer,
  },
});
