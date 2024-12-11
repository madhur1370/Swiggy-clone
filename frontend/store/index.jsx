import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartslice";
import locationSlice from "./location";

const rootreducer=combineReducers({
    cartSlice:cartSlice.reducer,
    locationSlice:locationSlice.reducer
})

export const store=configureStore({
    reducer:rootreducer
})