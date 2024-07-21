import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
//https://www.npmjs.com/package/jwt-decode

import { AuthResponse } from '../../models/authResponse.model';
import { Volunteer } from '../../models/volunteer.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/api/authenticate';
  private currentUserKey = 'current_volunteer';
  private currentUser: Volunteer | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<AuthResponse>(this.loginUrl, {email, password}).pipe(
      tap(response => {
        localStorage.setItem('access_token', (response as any).token);
      })
    );
  }


  // Méthode pour récupérer le jeton JWT stocké
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/connexion']);
  }
  

}
