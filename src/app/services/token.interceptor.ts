// token.interceptor.ts
import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpErrorResponse,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  import { AuthService } from './auth.service';
  import { Router } from '@angular/router';
  
  @Injectable()
  export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router) {}
  
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // Skip adding token for /auth endpoints
      if (req.url.includes('/auth')) {
        return next.handle(req);
      }
  
      const token = this.authService.getToken();
      let clonedReq = req;
      if (token) {
        clonedReq = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
  
      return next.handle(clonedReq).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            // Token invalid or expired, attempt re-authentication
            this.authService.initAuth().subscribe({
              next: (success) => {
                if (success) {
                  // Retry the request with new token
                  const newToken = this.authService.getToken();
                  if (newToken) {
                    const retryReq = req.clone({
                      setHeaders: {
                        Authorization: `Bearer ${newToken}`,
                      },
                    });
                    return next.handle(retryReq);
                  }
                }
                // If re-auth fails, redirect to login
                this.authService.logout();
                this.router.navigate(['/login']);
                return throwError(() => new Error('Authentication failed'));
              },
              error: () => {
                this.authService.logout();
                this.router.navigate(['/login']);
                return throwError(() => new Error('Authentication failed'));
              },
            });
          } else if (error.status === 403) {
            return throwError(() => new Error('Access denied: Insufficient permissions'));
          }
          return throwError(() => error);
        })
      );
    }
  }