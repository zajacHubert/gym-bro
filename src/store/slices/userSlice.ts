import { defaultUser } from '@/data/user';
import { User } from '@/types/user';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  loggedUser: User | null;
}

const initialState: UserState = {
  loggedUser: defaultUser,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.loggedUser = action.payload;
    },
    logout: (state) => {
      state.loggedUser = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
