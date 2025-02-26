import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Components/CartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer, //key must be the same with the slice
    },
});

export default store;