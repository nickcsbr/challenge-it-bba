import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ICep } from '../models/i-cep';

const BASE_URL = 'https://viacep.com.br/ws/';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  getData(cep: string | number) {
    return this.http.get<ICep>(BASE_URL + cep + '/json');
  }
}
