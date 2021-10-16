import { createSlice } from '@reduxjs/toolkit';
import { mediaListInitState } from './mediaList.state';

const mediaListSlice = createSlice({
  initialState: mediaListInitState,
  name: 'mediaList',
  reducers: {},
});

export default mediaListSlice;
