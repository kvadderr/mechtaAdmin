import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { User } from '../../@types/ententy/User';
import userApi from '../../api/userApi';

type UserState = {
  users: User[];
};

const slice = createSlice({
  name: 'users',
  initialState: {
    users: []
  } as UserState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        userApi.endpoints.getUsers.matchFulfilled,
        (state, { payload }) => {
          state.users = payload;
        },
      )
  },
});

export const selectUsersList = (state: RootState): User[] =>
  state.userSlice.users;

export const {
} = slice.actions;

export default slice.reducer;
