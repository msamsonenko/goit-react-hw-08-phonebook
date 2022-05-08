import { createReducer } from '@reduxjs/toolkit';
import { add, remove, filter } from './actions';

export const myReducer = createReducer(
  {
    items: [],
    filter: '',
  },
  {
    [add]: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    [remove]: (state, action) => {
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
