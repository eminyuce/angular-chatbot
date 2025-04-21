// auth.service.ts
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import { catchError, tap, switchMap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';
  private tokenKey = 'jwt_token';
  private jwtHelper = new JwtHelperService();
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Called during app initialization
  initAuth(): Observable<boolean> {
    const token = this.getToken();
    console.log("token:", token);
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      // Existing valid token
      this.isAuthenticatedSubject.next(true);
      return of(true);
    }

    // Attempt authentication with hardcoded credentials
    const credentials = { username: 'angular-user', password: 'angular-pass' };
    return this.login(credentials.username, credentials.password).pipe(
      switchMap(() => {
        this.isAuthenticatedSubject.next(true);
        return of(true);
      }),
      catchError((error) => {
        console.error('Startup authentication failed:', error.message);
        this.isAuthenticatedSubject.next(false);
        return of(false); // Continue app startup even if auth fails
      })
    );
  }

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/login-angular`, { username, password })
      .pipe(
        tap(response => {
          if (response.token) {
            localStorage.setItem(this.tokenKey, response.token);
            this.isAuthenticatedSubject.next(true);
          } else {
            throw new Error('Invalid credentials');
          }
        }),
        catchError(this.handleError)
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }

  getRoles(): string[] {
    const token = this.getToken();
    if (token) {
      const decoded = this.jwtHelper.decodeToken(token);
      return decoded.roles || [];
    }
    return [];
  }

  hasRole(role: string): boolean {
    return this.getRoles().includes(`ROLE_${role}`);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.status === 400) {
      errorMessage = 'Invalid username or password';
    } else if (error.status === 0) {
      errorMessage = 'Network error: Please check your connection';
    }
    return throwError(() => new Error(errorMessage));
  }
}