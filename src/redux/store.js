import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import newUserReducer from "./newUserSlice"
import restaurantSlice from "./restaurantSlice";
import cartReducer from "./CartSlice"
import sorterReducer from "./SorterSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        newUser: newUserReducer,
        restaurantList:restaurantSlice,
        cart:cartReducer,
        sorter:sorterReducer

    }

})