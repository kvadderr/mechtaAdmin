import { combineReducers } from 'redux';
import categoriesApi from '../api/categoriesApi';
import categoriesSlice from './slices/categoriesSlice';
import userSlice from './slices/userSlice';
import productSlice from './slices/productSlice';
import orderSlice from './slices/orderSlice';

export const rootReducer = combineReducers({
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  categoriesSlice,
  userSlice,
  productSlice,
  orderSlice
});
