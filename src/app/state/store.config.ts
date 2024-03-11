import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { Reducers } from './reducers';

export interface State {}

export const reducers: ActionReducerMap<State> = { ...Reducers };

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
