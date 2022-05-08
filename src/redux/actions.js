import { createAction } from '@reduxjs/toolkit';

export const add = createAction('contacts/items/add');
export const remove = createAction('contacts/items/remove');
export const filter = createAction('contacts/filter');
