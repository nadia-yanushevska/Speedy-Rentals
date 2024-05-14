import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';
import { getPriceNumber } from '../../helpers/filterHelper';

const initialState = {
    adverts: [],
    filter: '',
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
    reducers: {
        filterAdverts(state, { payload }) {
            state.filter = state.adverts.filter(
                adv =>
                    (payload.make === 'All' ? adv : adv.make === payload.make) &&
                    getPriceNumber(adv.rentalPrice) <= payload.price &&
                    adv.mileage >= payload.mileageFrom &&
                    adv.mileage <= payload.mileageTo
            );
        },
        clearFilter(state) {
            state.filter = [];
        },
    },
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
export const { filterAdverts, clearFilter } = slice.actions;
