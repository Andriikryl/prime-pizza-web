// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import {cartReducer} from './cart/cartSlice';
// import cartSlice from './cart/cartSlice';

const store = configureStore({
  reducer: {
    // cart: cartReducer,
    cart: cartReducer
  },
});

export default store;
