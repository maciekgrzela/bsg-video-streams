import { createSlice } from '@reduxjs/toolkit';
import { mediaPlayInfoInitState } from './mediaPlayInfo.state';

const mediaPlayInfoSlice = createSlice({
  initialState: mediaPlayInfoInitState,
  name: 'mediaPlayInfo',
  reducers: {},
});

export default mediaPlayInfoSlice;
