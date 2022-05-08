import { persistReducer } from 'redux-persist';
import { myReducer } from './reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const persistedReducer = persistReducer(persistConfig, myReducer);
