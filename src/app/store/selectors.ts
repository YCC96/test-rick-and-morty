import { createSelector } from '@ngrx/store';
import { ItemsState } from '../interfaces/item.state';
import { AppState } from './state';

export const selectItemsFeature = (state: AppState) => state.payload;

export const selectLoadItems = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state,
)

export const selectTitleList = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.titleList,
)

export const selectListItems = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.listItems,
)

export const selectItemSelected = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.itemSelected,
)

export const selectTableHeaders = createSelector(
  selectItemsFeature,
  (state: ItemsState) => state.tableHeaders,
)
