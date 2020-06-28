import { Injectable } from '@angular/core';
import { Country } from '../models/country';

const countries: Country[] = [
  { id: 1, name: 'Australia' },
  { id: 2, name: 'Brazil' },
  { id: 3, name: 'Denmark' },
  { id: 4, name: 'India' },
  { id: 5, name: 'Italy' },
  { id: 6, name: 'Japan' },
  { id: 7, name: 'Russia' },
  { id: 8, name: 'Spain' },
  { id: 9, name: 'Turkey' },
  { id: 10, name: 'United States' }
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  fetchCountries() {
    return countries;
  }

}