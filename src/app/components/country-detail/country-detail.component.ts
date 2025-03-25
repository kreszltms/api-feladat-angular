import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  country: any;
  loading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.loadCountry();
  }

  private loadCountry(): void {
    const countryCode = this.route.snapshot.paramMap.get('id');
    if (!countryCode) return;

    this.loading = true;
    this.countryService.getCountryByCode(countryCode).subscribe({
      next: (data) => {
        this.country = data[0];
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Hiba az ország adatainak betöltésekor';
        this.loading = false;
      }
    });
  }

  getLanguages(): string {
    if (!this.country?.languages) return 'Nincs adat';
    return Object.values(this.country.languages).join(', ');
  }
}