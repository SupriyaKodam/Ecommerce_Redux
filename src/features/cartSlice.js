import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: 'cartslice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.carts.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qnty += 1;
      } else {
        state.carts.push({ ...action.payload, qnty: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.carts.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qnty += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const existingItem = state.carts.find(item => item.id === action.payload.id);
      if (existingItem && existingItem.qnty > 1) {
        existingItem.qnty -= 1;
      } else if (existingItem) {
        state.carts = state.carts.filter(item => item.id !== action.payload.id);
      }
    },
    removeToCart: (state, action) => {
      state.carts = state.carts.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.carts = []; // Clear the entire cart
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
