import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { advertsReducer } from './adverts/slice';

const persistConfig = {
    key: 'root',
    storage,
};

export const store = configureStore({ reducer: { adverts: persistReducer(persistConfig, advertsReducer) } });

export const persistor = persistStore(store);
