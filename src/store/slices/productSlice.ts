import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Product } from '../../@types/ententy/Product';
import productApi from '../../api/productApi';

type ProductState = {
  products: Product[];
};

const slice = createSlice({
  name: 'products',
  initialState: {
    products: []
  } as ProductState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        productApi.endpoints.getProducts.matchFulfilled,
        (state, { payload }) => {
          state.products = payload;
        },
      )
  },
});

export const selectProductList = (state: RootState): Product[] =>
  state.productSlice.products;

export const {
} = slice.actions;

export default slice.reducer;
