import { createAction } from '@ngrx/store';

export const incrementCounter = createAction('[Counter Component] Increment');
export const decrementCounter = createAction('[Counter Component] Decrement');
export const resetCounter = createAction('[Counter Component] Reset Counter');
