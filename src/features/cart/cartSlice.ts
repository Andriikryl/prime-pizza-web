
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: number | string;
  img: string;
  category: string;
  title: string;
  description: string;
  price: string;
  size: string;
  quantity: number; 
}

interface CartState {
  items: Item[];
  totalQuantity: number; 
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
  
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        newItem.quantity = 1;
        state.items.push(newItem);
      }
  
      state.totalQuantity += 1; 
    },
    removeItem: (state, action: PayloadAction<Item>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    clearCart: state => {
      state.items = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
