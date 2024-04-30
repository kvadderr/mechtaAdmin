import { baseApi } from './base-api';

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<any, void>({
      query: () => ({
        url: '/order',
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetOrdersQuery
} = orderApi;

export default orderApi;
