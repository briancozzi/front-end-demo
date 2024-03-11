import { createReducer, on } from '@ngrx/store';
import { BooksActions, BooksActionsAPI } from './books.actions';

const InititalState: ReadonlyArray<any[]> = [];
const InitialBookIdState: ReadonlyArray<string> = [];

export const bookListReducers = createReducer(
  InititalState,
  on(BooksActionsAPI.reterieveBooksList, (state) => state)
);

export const bookCollectionReducers = createReducer(
  InitialBookIdState,
  on(BooksActions.addBook, (state, { bookId }) => {
    return state.filter((id) => id !== bookId);
  }),
  on(BooksActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  })
);

export const BookReducers = {
  books: bookListReducers,
  booksCollection: bookCollectionReducers,
};
