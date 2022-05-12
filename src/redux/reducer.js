import { createReducer } from '@reduxjs/toolkit';
import { filter } from './actions';
import { fetchContacts, addContact, deleteContact } from './operations';

export const myReducer = createReducer(
  {
    items: [],
    filter: '',
  },

  {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        items: payload,
      };
    },
    [addContact.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    [deleteContact.fulfilled]: (state, action) => {
      const newState = state.items.filter(
        contact => contact.id !== action.payload
      );
      return {
        ...state,
        items: [...newState],
      };
    },
    [filter]: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  }
);
