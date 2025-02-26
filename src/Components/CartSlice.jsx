import { createSlice } from "@reduxjs/toolkit";
//CART is like the universal object that is needed in every component
const CartSlice = createSlice({
 name:'cart',
 initialState,
 reducers:{
    addItemsToCart(state, action){
        const existingItem = state.cartItems.find(item => item.id === action.payload.id);
        if (existingItem){
            existingItem.quantity += 1;
        }else {
            state.cartItems.push({...action.payload, quantity:1});
        }
    },
    removeItemFromCart(state, action){
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    clearCart(state){
        state.cartItems = [];
    },
    increaseitemQuantity(state, action){
        const isThere = state.cartItems.find(item => item.id === action.payload);
        if (isThere){
            isThere.quantity += 1;
        }
    },
    decreaseItemQuantity(state, action){
        const isThere = state.cartItems.find(item => item.id === action.payload);
        if (isThere && isThere.quantity > 1){
            isThere.quantity -= 1;
        }
    }
 }
});
const initialState = {
    cartItems: [],
 };

export const {
    addItemsToCart,
    removeItemFromCart,
    clearCart,
    increaseitemQuantity,
    decreaseItemQuantity
} = CartSlice.actions;
export default CartSlice.reducer;
