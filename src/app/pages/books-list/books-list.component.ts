import { Component, OnInit, inject } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';
import { Store } from '@ngrx/store';
import { selectBook } from '../../state/books/book.selectors';
import { BooksActionsAPI } from '../../state/books/books.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class BooksListComponent implements OnInit {
  store = inject(Store);
  books: any = this.store.select(selectBook);
  constructor(private booksService: GoogleBooksService) {}

  ngOnInit() {
    this.getBooks();
  }

  private getBooks() {
    this.booksService.getBooks().subscribe({
      next: (res: any) => {
        this.store.dispatch(BooksActionsAPI.reterieveBooksList(res));
      },
    });
  }
}
