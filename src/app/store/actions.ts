import { createAction, props } from '@ngrx/store';

export const loadData = createAction(
  'loadData',
  props<any>()
);

export const loadItems = createAction(
  'loadItems',
  props<any>()
);

export const loadedItems = createAction(
  'loadedItems',
  props<{listItems:any}>()
);
