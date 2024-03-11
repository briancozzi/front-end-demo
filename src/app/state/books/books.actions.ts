import { createActionGroup, props } from '@ngrx/store';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});

export const BooksActionsAPI = createActionGroup({
  source: 'Books API',
  events: {
    'Reterieve Books List': props<{ books: ReadonlyArray<[]> }>(),
  },
});
