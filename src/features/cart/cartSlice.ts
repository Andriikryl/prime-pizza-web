
import { createSlice } from '@reduxjs/toolkit';

// const initialState = {}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  // initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: state => {
      state.items = [];
    },
  },
  // reducers: {
  //   increment: (state, {payload}) => {
  //     const count = state[payload] || 0;
  //     state[payload] = count + 1
  //   },
  //   decrement: (state, {payload}) => {
  //     const count = state[payload];
  //     if(!count){
  //       return
  //     }
  //     if(count === 1){
  //       delete state[payload]  
  //       return
  //     }
  //    state[payload] = count - 1
  //   },
  //   reset: () => initialState
  // }
});

// export const { addItem, removeItem, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
