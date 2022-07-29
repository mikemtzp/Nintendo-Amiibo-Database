import { createSlice } from '@reduxjs/toolkit';
import getAmiibos from './api';

const initialState = {
  amiibos: [],
  status: null,
};

const amiibos = createSlice({
  name: 'amiibos',
  initialState,
  extraReducers: {
    [getAmiibos.pending]: (state) => ({
      ...state,
      status: 'pending',
    }),
    [getAmiibos.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      amiibos: action.payload,
    }),
    [getAmiibos.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export default amiibos.reducer;
