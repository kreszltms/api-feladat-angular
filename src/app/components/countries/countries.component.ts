import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  countries: any[] = [];
  filteredCountries: any[] = [];
  loading = false;
  errorMessage = '';
  countriesLoaded = false;

  constructor(private countryService: CountryService) {}

  loadCountries(): void {
    if (this.loading) return;

    this.loading = true;
    this.errorMessage = '';
    this.countries = [];
    this.filteredCountries = [];

    this.countryService.getAllCountries().subscribe({
      next: (data: any[]) => {
        this.countries = data;
        this.filteredCountries = data.slice(0, 12);
        this.countriesLoaded = true;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Hiba az országok betöltése közben!';
        this.loading = false;
        this.countriesLoaded = false;
      }
    });
  }
}