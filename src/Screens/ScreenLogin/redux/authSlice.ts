import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { storage } from '../../../utils/Storage/mmkv';

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
}

const initialState: AuthState = {
  isAuthenticated: storage.getString('authToken') ? true : false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

export type AuthActions = typeof authSlice.actions;

export type ActionsAuth = ReturnType<typeof login | typeof logout>;
