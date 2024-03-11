import { createReducer, on } from '@ngrx/store';
import { decrementCounter, incrementCounter, resetCounter } from '../actions';

const IntitalState = 0;

const CounterReducer = createReducer(
  IntitalState,
  on(incrementCounter, (state) => state + 1),
  on(decrementCounter, (state) => state + 1),
  on(resetCounter, (state) => 0)
);

export const CounterReducers = {
  counter: CounterReducer,
};
