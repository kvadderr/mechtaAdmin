import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Order } from '../../@types/ententy/Order';
import orderApi from '../../api/orderApi';

type OrderState = {
  orders: Order[];
};

const slice = createSlice({
  name: 'orders',
  initialState: {
    orders: []
  } as OrderState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        orderApi.endpoints.getOrders.matchFulfilled,
        (state, { payload }) => {
          state.orders = payload;
        },
      )
  },
});

export const selectOrdersList = (state: RootState): Order[] =>
  state.orderSlice.orders;

export const {
} = slice.actions;

export default slice.reducer;
