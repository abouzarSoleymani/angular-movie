import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => this.handleError(err)));
  }

  private handleError(error): Observable<any> {
    /*if (error.status == 401) {
      window.location.reload();
      return;
    }*/

    if (error.error && error.error.errors) {
      error.error.errors.forEach(e => this.showError(e));
    } else {
      this.showError(error);
    }

    return throwError(error);
  }

  showError(error) {
      console.log(error)
  }
}
