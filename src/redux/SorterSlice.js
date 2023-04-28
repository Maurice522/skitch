import { createSlice } from "@reduxjs/toolkit";


const initialState = "";

export const sorterSlice = createSlice({
  name: "sorter",
  initialState,
  reducers: {
    setSorter: (state, action) => {
      return action.payload;
    },
  },
});

export const {setSorter} = sorterSlice.actions;

export default sorterSlice.reducer;
