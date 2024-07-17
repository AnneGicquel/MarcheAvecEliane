import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { Volunteer } from '../../models/volunteer.model';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  private apiUrl = 'http://localhost:8080/api/volunteers';

  constructor(private http: HttpClient) {}


  getVolunteerByEmail(email: string): Observable<Volunteer> {
    const url = `${this.apiUrl}/getVolunteerByEmail/${email}`;
    const cachedVolunteer = localStorage.getItem('volunteer');

    if (cachedVolunteer) {
      return of(JSON.parse(cachedVolunteer));
    } else {
      return this.http.get<Volunteer>(url).pipe(
        tap(volunteer => {
          localStorage.setItem('volunteer', JSON.stringify(volunteer));
        }),
        catchError(error => {
          console.error('Erreur:', error);
          throw error; // Propage l'erreur pour que le composant puisse la gérer
        })
      );
    }
  }
}



