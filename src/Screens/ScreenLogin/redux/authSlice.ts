// src/Screens/ScreenLogin/redux/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { mmkv } from '../../../utils/Storage/mmkv';

// Define the shape of the authentication state
interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

// Define actions and reducers
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

// Define the selector type
export type AuthActions = ReturnType<typeof login> | ReturnType<typeof logout>;

export default authSlice.reducer;
