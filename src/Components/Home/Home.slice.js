import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from 'Utils/axiosClient';

export const getPublicIP = createAsyncThunk(
    'getPublicIp',
    async (data, { rejectWithValue }) => {
        try {
            const res = await axiosClient({ url: 'https://api.ipify.org/?format=json', method: 'get' });
            return res.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    },
);

const getPublicIpSlice = createSlice({
    name: 'public-ip',
    initialState: {
        isFetching: false,
        error: null,
        data: {},
    },
    extraReducers: {
        [getPublicIP.pending]: (state) => {
            state.isFetching = true;
        },
        [getPublicIP.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.data = payload;
        },
        [getPublicIP.rejected]: (state, { payload, error }) => {
            state.isFetching = false;
            state.error = payload?.message || error?.message;
        },
    },
});

export default getPublicIpSlice.reducer;
