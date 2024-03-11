import { BookReducers } from '../books/book.reducers';
import { CounterReducers } from './counter.reducers';

export const Reducers = {
  ...CounterReducers,
  ...BookReducers,
};
