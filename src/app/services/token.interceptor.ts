import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {
    console.log('TokenInterceptor instantiated');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('TokenInterceptor engaged:', req.url);

    // Skip auth header for login or auth endpoints
    if (req.url.includes('/auth')) {
      return next.handle(req);
    }

    const token = this.authService.getToken();
    console.log('Token:', token);  // Make sure the token is being retrieved

    const authReq = token
      ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
      : req;

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('Error caught in interceptor:', error);

        if (error.status === 401) {
          console.log('Unauthorized access detected');
          this.router.navigate(['/login']);
        }
        
        // Handle 403 or other errors if necessary
        return throwError(() => error);
      })
    );
  }
}