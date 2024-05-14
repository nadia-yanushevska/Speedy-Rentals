import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { advertsReducer } from './adverts/slice';
import { favoritesReducer } from './favorites/slice';

const persistConfig = {
    key: 'root',
    storage,
};

export const store = configureStore({
    reducer: {
        adverts: advertsReducer,
        favorites: persistReducer(persistConfig, favoritesReducer),
    },
});

export const persistor = persistStore(store);
