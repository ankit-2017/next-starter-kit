import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from 'Utils/axiosClient';

export const getPicture = createAsyncThunk(
  'getPicture',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axiosClient({ url: 'https://random.dog/woof.json', method: 'get' });
      return res.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  },
);

const getPictureReducer = createSlice({
  name: 'get-picture',
  initialState: {
    isFetching: false,
    error: null,
    data: {},
  },
  reducers: {
    resetOther: (state) => {
      state.isFetching = false;
      state.data = {};
      state.error = null;
    },
  },
  extraReducers: {
    [getPicture.pending]: (state) => {
      state.isFetching = true;
    },
    [getPicture.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.data = payload;
    },
    [getPicture.rejected]: (state, { payload, error }) => {
      state.isFetching = false;
      state.error = payload?.message || error?.message;
    },
  },
});
export const { resetOther } = getPictureReducer.actions;
export default getPictureReducer.reducer;
