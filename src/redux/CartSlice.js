import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuCart: [],
  restraunt: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.menuCart = action.payload;
    },
    setRestraunt: (state, action) => {
      state.restraunt = action.payload;
     
    },
  },
});

export const { setCart, setRestraunt } = cartSlice.actions;
export const selectUser = (state) => state.user.user;

export default cartSlice.reducer;
