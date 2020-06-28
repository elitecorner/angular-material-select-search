import { Component,OnInit } from '@angular/core';
import { Country } from "./models/country";
import { DataService } from "./services/data.service";

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-material-select-search';
  countryList: Country[] = [];
  filteredCountries: Observable<Country[]>;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private dataService: DataService) {

  }
  ngOnInit() {
    this.countryList = this.dataService.fetchCountries();

    this.form = this.formBuilder.group({
      country: []
    });

    this.filteredCountries = this.form.get('country').valueChanges.pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.name),
      map(name => name ? this._filter(name) : this.countryList.slice())
    );
  }

  private _filter(value: string): Country[] {
    console.log(value);
    const filterValue = value.toLowerCase();
    return this.countryList.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }


  displayFn(country: Country): string {
    return country && country.name ? country.name : '';
  }
}
