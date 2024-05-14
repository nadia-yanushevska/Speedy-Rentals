import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const initialState = {
    adverts: [],
    pageID: 1,
    length: 12,
    error: '',
    loading: false,
};

const handlePending = state => {
    state.loading = true;
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};

export const slice = createSlice({
    name: 'adverts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
                if (state.pageID === +payload.id) {
                    state.adverts = state.adverts.concat(payload.results);
                    state.pageID = +payload.id + 1;
                }

                state.length = payload.length;
                state.error = '';
                state.loading = false;
            })
            .addCase(fetchAdverts.pending, handlePending)
            .addCase(fetchAdverts.rejected, handleRejected);
    },
});

export const advertsReducer = slice.reducer;
