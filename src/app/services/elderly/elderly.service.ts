import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Elderly } from '../../models/elderly.model';

@Injectable({
  providedIn: 'root'
})
export class ElderlyService {
  private apiUrl = 'http://localhost:8080/api/elderlies'; 

  constructor(private http: HttpClient) {}

  getAllElderlies(): Observable<Elderly[]> {
    return this.http.get<Elderly[]>(`${this.apiUrl}/getAllElderlies`);
  }

  getElderlyById(id: string): Observable<Elderly> {
    return this.http.get<Elderly>(`${this.apiUrl}/getElderlyById/${id}`);
  }
}
