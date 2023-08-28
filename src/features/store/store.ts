import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {cartReducer} from '../cart/cartSlice'; // Update the path

const rootReducer = combineReducers({
  cart: cartReducer,
  // ... other reducers
});

export type RootState = ReturnType<typeof rootReducer>; // Define RootState type

const store = configureStore({
  reducer: rootReducer,
  // ... other store configurations
});

export default store;