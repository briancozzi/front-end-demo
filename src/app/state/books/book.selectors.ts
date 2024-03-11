import { createFeatureSelector, createSelector } from '@ngrx/store';

export const SelectBooks = createFeatureSelector<ReadonlyArray<any[]>>('books');
export const SelectBooksCollections =
  createFeatureSelector<ReadonlyArray<string>>('booksCollection');

export const selectBook = createSelector(
  SelectBooks,
  SelectBooksCollections,
  (books, booksCollection) => {
    return booksCollection.map(
      (id) => books.find((book: any) => book.id === id)!
    );
  }
);
