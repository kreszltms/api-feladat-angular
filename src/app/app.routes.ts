import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'weather', component: WeatherComponent }, 
  { path: '**', redirectTo: '' },
  { path: 'countries/:id', component: CountryDetailComponent }
];