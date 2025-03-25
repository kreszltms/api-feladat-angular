import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private BASE_URL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/all`);
  }

  searchCountries(name: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/name/${name}`);
  }

  getCountryByCode(code: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/alpha/${code}`);
  }
}