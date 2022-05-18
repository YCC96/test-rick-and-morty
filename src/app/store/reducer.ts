import { createReducer, on } from '@ngrx/store';
import { ItemsState } from '../interfaces/item.state';
import { loadData, loadedItems, loadItems } from './actions';

export const initialState: ItemsState = {};

export const itemsReducer = createReducer(
  initialState,
  on(loadData, (state, data) => {
    return {
      ...state,
      ...data,
    };
  }),
  on(loadItems, (state, data) => {
    return {
      ...state,
      ...data,
    };
  }),
  on(loadedItems, (state, data) => {
    return {
      ...state,
      ...data,
    };
  }),
);
