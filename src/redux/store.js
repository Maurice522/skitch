import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import newUserReducer from "./newUserSlice"
import restaurantSlice from "./restaurantSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        newUser: newUserReducer,
        restaurantList:restaurantSlice

    }

})