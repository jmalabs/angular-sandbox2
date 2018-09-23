import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  onlyCountries = false;
  countries = ['PH', 'TH', 'SG', 'US']
  stateOrCities = ['MNL', 'WI', 'FL', 'CA']
  value:number = 20;
}
