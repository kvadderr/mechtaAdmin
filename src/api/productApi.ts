import { baseApi } from './base-api';
import { Product } from '../@types/ententy/Product';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => ({
        url: '/product',
        method: 'GET',
      }),
    })
  }),
});

export const {
  useGetProductsQuery
} = productApi;

export default productApi;
