import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth/auth.slice';
import mediaListSlice from './medialist/mediaList.slice';
import mediaPlayInfoSlice from './mediaplayinfo/mediaPlayInfo.slice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  mediaList: mediaListSlice.reducer,
  mediaPlayInfo: mediaPlayInfoSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
