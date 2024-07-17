import { Injectable } from '@angular/core';
import { Outing } from '../../models/outing.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Elderly } from '../../models/elderly.model';

@Injectable({
  providedIn: 'root',
})
export class OutingService {
  private apiUrl = 'http://localhost:8080/api/outings';

  constructor(private http: HttpClient) {}


  ////////////////////////////////// 🟡 COORDINATOR PART 🟡 ///////////////////////////////
  // ✅ CREATE NEW OUTING
  createNewOuting(outing: Outing): Observable<Outing> {
    return this.http.post<Outing>(`${this.apiUrl}/createNewOuting`, outing);
  }

  // ✅ GET ALL OUTINGS
  getAllOutings(selectedElderly: Elderly | null): Observable<Outing[]> {
  return this.http.get<Outing[]>(`${this.apiUrl}/getAllOutings`);
}

  // // ALL OUTINGS BY ELDERLY ID
  // getOutingsByElderlyId(elderlyId: string): Observable<Outing[]> {
  //   return this.http.get<Outing[]>(
  //     `${this.apiUrl}/getOutingsByElderlyId/${elderlyId}`
  //   );
  // }

  // // ONE OUTING BY ELDERLY ID
  // getOutingByElderlyIdAndOutingId(
  //   elderlyId: string,
  //   outingId: string
  // ): Observable<Outing> {
  //   return this.http.get<Outing>(
  //     `${this.apiUrl}/getOutingByElderlyId/${elderlyId}/outing/${outingId}`
  //   );
  // }

  // ✅ UPDATE OUTING BY ELDERLY ID
  updateOutingByElderlyId(
    elderlyId: string,
    outingId: string,
    updatedOuting: Outing
  ): Observable<Outing> {
    return this.http.put<Outing>(
      `${this.apiUrl}/updateOutingByElderlyId/${elderlyId}/outing/${outingId}`,
      updatedOuting
    );
  }

  // ✅ DELETE ONE OUTING BY ELDERLY ID
  deleteOutingByElderlyId(elderlyId: string, outingId: string): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/deleteOutingByElderlyId/${elderlyId}/outing/${outingId}`,
      { responseType: 'text' } 
      // type text because of error:
      // {error: SyntaxError: Unexpected token 'T', "The outing"... is not valid JSON at JSON.parse (<anonymous>…, text: 'The outing705beab7-b1fa-44de-906a-782892250990of t…6d7-55e8f180cc44has been successfully deleted 🧽 '}
    );
  }
}
