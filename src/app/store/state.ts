import { ActionReducerMap } from '@ngrx/store';
import { ItemsState } from "../interfaces/item.state";
import { itemsReducer } from './reducer';

export interface AppState {
  payload: ItemsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  payload: itemsReducer,
}
