import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLove: false,
};

const likeMusic = createSlice({
  name: "like",
  initialState,
  reducers: {
    Like: (state, action) => {
      state.isLove = action.payload;
    },
  },
});

export default likeMusic.reducer;
export const { Like } = likeMusic.actions;
