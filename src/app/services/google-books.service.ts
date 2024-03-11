import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<any>> {
    return new Observable((observer) => {
      this.http
        .get<{ items: any[] }>(
          'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
        )
        .subscribe({
          next: (res) => {
            console.log(res);
            observer.next(res.items || []);
          },
        }),
        (err: any) => {
          observer.error(err);
        };
    });
  }
}
