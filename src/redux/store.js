import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsApi } from './api/contacts';
import { usersApi } from './api/users';
import { myReducer } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: myReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});
