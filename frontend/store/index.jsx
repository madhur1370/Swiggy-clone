import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartslice";

const rootreducer=combineReducers({
    cartSlice:cartSlice.reducer
})

export const store=configureStore({
    reducer:rootreducer
})