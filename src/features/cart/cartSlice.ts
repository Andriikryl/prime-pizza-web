
import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
    
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
      } else {
        newItem.quantity = 1; // Initialize quantity to 1 if it's a new item
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: state => {
      state.items = [];
    },
    increment: (state, {payload}) => {
      const count = state[payload] || 0;
      state[payload] = count + 1
    },
    decrement: (state, {payload}) => {
      const count = state[payload];
      if(!count){
        return
      }
      if(count === 1){
        delete state[payload]  
        return
      }
     state[payload] = count - 1
    },
    reset: () => initialState
  },
});


export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
