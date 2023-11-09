import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenBoxTechStack: false,
};

const showBoxTechStackReducer = createSlice({
  name: "showBoxTechStack",
  initialState,
  reducers: {
    showBox: (state, action) => {
      state.isOpenBoxTechStack = action.payload;
    },
  },
});

export default showBoxTechStackReducer.reducer;
export const { showBox } = showBoxTechStackReducer.actions;
