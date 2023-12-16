import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ErrorHandlingService, StorageService } from '@services';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(
    private errorHandlerService: ErrorHandlingService,
    private storageService: StorageService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.storageService.authToken) {
      const token: string = this.storageService.authToken;
      if (token && !request.headers.has('x-auth-token')) {
        request = request.clone({
          headers: request.headers.set('x-auth-token', token),
        });
      }
    }

    return next.handle(request).pipe(
      tap<HttpEvent<any>>({
        next: (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        },
        error: (error) => {
          if (error instanceof HttpErrorResponse) {
            this.errorHandlerService.handleError(error);
          }
        },
      })
    );
  }
}
