import { configureStore } from "@reduxjs/toolkit";
import fridgeSlice from "./slices/fridgeSlice";

export const  store = configureStore({
    reducer: {
        fridgeSlice: fridgeSlice
    }
});