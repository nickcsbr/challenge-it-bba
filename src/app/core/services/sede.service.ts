import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { IBusiness } from '../models/i-business';

@Injectable({
  providedIn: 'root'
})
export class SedeService {
  private apiUrl = environment.apiHost;

  constructor(private http: HttpClient) { }

  getSedes(): Observable<IBusiness[]> {
    return this.http.get<IBusiness[]>(this.apiUrl);
  }

  getSede(sedeId: string): Observable<IBusiness> {
    return this.http.get<IBusiness>(this.apiUrl + '/' + sedeId);
  }
}