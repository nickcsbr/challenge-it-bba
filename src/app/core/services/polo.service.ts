import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IBusiness } from '../models/i-business';

@Injectable({
  providedIn: 'root'
})
export class PoloService {
  private apiUrl = environment.apiHost;

  constructor(private http: HttpClient) { }

  getPolos(): Observable<IBusiness[]> {
    return this.http.get<IBusiness[]>(this.apiUrl);
  }

  getPolo(poloId: string): Observable<IBusiness> {
    return this.http.get<IBusiness>(this.apiUrl + '/' + poloId);
  }

  setPolo(poloId: string, payload: any): Observable<IBusiness> {
    // This is a fake PUT
    return new Observable((observer) => {
      console.log("PUT - /polos/" + poloId, payload);
      setTimeout(()=> {
        observer.next(payload);
        observer.complete();
      }, 3000);
    });
  }
}