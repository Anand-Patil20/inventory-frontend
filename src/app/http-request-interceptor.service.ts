import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestInterceptorService implements HttpInterceptor {
  constructor(private router:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError (err => {
          
          if (err.status == 403) {
            console.log(err.status);
            
            sessionStorage.removeItem('token');
            this.router.navigate(['/login']);
          }
          const error = err.error.message || err.statusText;
          return throwError(error);
      }))
  }
}