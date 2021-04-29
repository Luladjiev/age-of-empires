import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Civilization } from '../models/civilization';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiResponse {
  civilizations: Array<Civilization>;
}

@Injectable({
  providedIn: 'root',
})
export class AgeOfEmpiresClientService {
  private url = '/api';

  constructor(private http: HttpClient) {}

  getCivilizations(): Observable<Array<Civilization>> {
    return this.http
      .get<ApiResponse>(`${this.url}/civilizations`)
      .pipe(map((value) => value.civilizations));
  }

  getCivilization(id: number): Observable<any> {
    return this.http.get(`${this.url}/civilization/${id}`);
  }
}
