import { createSlice } from '@reduxjs/toolkit';
import { authInitState } from './auth.state';

const authSlice = createSlice({
  initialState: authInitState,
  name: 'auth',
  reducers: {},
});

export default authSlice;
