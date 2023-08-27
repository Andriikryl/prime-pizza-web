
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Item {
  id: number | string;
  img: string;
  category: string;
  title: string;
  description: string;
  price: string;
  size: string;
  quantity?: number; 
}

interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
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
    },
    removeItem: (state, action: PayloadAction<Item>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearCart: state => {
      state.items = [];
    },
    // increment: (state, { payload }: PayloadAction<string>) => {
    //   const count = state[payload] || 0;
    //   state[payload] = count + 1;
    // },
    // decrement: (state, { payload }: PayloadAction<string>) => {
    //   const count = state[payload];
    //   if (!count) {
    //     return;
    //   }
    //   if (count === 1) {
    //     delete state[payload];
    //     return;
    //   }
    //   state[payload] = count - 1;
    // },
    // reset: () => initialState,
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
