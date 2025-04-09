// eslint-disable-next-line import/no-unresolved
import storage from 'redux-persist/lib/storage';
// eslint-disable-next-line import/no-unresolved
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import { persistStore, persistReducer } from 'redux-persist';

import { reducers } from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['Users'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor = persistStore(store);

// export const store = configureStore({
//   reducer: reducers,
// });
