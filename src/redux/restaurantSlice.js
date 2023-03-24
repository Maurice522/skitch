import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    restaurantList: null,
};

export const restaurantSlice = createSlice({
  name: "investorDeals",
  initialState,
  reducers: {
    setRestaurantList: (state, action) => {
      state.restaurantList = action.payload;
    },

    deleteDeal: (state, action) => {
      state.restaurantList = state.restaurantList.filter(
        (data) => data.id !== action.payload
      );
    },
  },
});

export const {
    setRestaurantList,deleteDeal
} = restaurantSlice.actions;

export default restaurantSlice.reducer;
