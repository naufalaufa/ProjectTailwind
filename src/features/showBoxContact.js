import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenContact: false,
};

const showContactSlicing = createSlice({
  name: "showresume",
  initialState,
  reducers: {
    showBoxContact: (state, action) => {
      state.isOpenContact = action.payload;
    },
    closeBoxContact: (state, action) => {
      state.isOpenContact = action.payload;
    },
  },
});

export default showContactSlicing.reducer;
export const { showBoxContact, closeBoxContact } = showContactSlicing.actions;
