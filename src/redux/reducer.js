import { createReducer } from '@reduxjs/toolkit';
import { filter } from './actions';

export const myReducer = createReducer(
  {
    filter: '',
  },

  {
    [filter]: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  }
);
