import { baseApi } from './base-api';
import { User } from '../@types/ententy/User';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: '/user',
        method: 'GET',
      }),
    })
  }),
});

export const {
  useGetUsersQuery
} = userApi;

export default userApi;
