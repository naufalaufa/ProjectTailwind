import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const showSlicing = createSlice({
  name: "show",
  initialState,
  reducers: {
    ShowBox: (state, action) => {
      state.isOpen = action.payload;
    },
    CloseBox: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { ShowBox, CloseBox } = showSlicing.actions;
export default showSlicing.reducer;
