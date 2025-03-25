import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private API_KEY = '1754fd095e714e384ef2884e0ee61065'; // 
  private BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    return this.http.get(`${this.BASE_URL}?q=${city}&appid=${this.API_KEY}&units=metric`);
  }
}