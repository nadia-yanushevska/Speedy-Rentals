import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: [],
};

export const slice = createSlice({
    name: 'favorites',
    initialState,
    selectors: {selectFavorites: state => state.favorites,
},
    reducers: {
        addFavorite(state, { payload }) {
            state.favorites.push(payload);            
        },
        deleteFavorite(state, { payload }) {
            state.favorites = state.favorites.filter(favorite => favorite.id !== payload);
        },
    },
});

export const favoritesReducer = slice.reducer;
export const { addFavorite, deleteFavorite } = slice.actions;
export const {selectFavorites} = slice.selectors
