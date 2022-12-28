import { createSlice } from '@reduxjs/toolkit';
import { CartState } from './types';

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, action) {
      state.items = state.items.concat(action.payload);
    },
    updateTotalAmount(state, action) {
      state.totalAmount = state.totalAmount + Number(action.payload);
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeTotalAmount(state, action) {
      if (state.totalAmount === 0) {
        state.totalAmount = 0;
      }
      state.totalAmount = state.totalAmount - action.payload;
    },
  },
});

export const { addItems, updateTotalAmount, removeItem, removeTotalAmount } = cartSlice.actions;


export default cartSlice.reducer;