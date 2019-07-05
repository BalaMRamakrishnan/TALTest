import { Component } from '@angular/core';
import { IOccupation, IOccupationRating } from "./types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  customerName: string = 'bala';
  age: number =25;
  dateOfBirth: Date = new Date();
  _occupation: IOccupation;
  _occupationRating : IOccupationRating;    
  sumAssure:number=5000;
  premium:number=0;
  
  get occupation():IOccupation{
      return this._occupation;
  };
  set occupation(value : IOccupation){
      this._occupation = value;
      this._occupationRating =  this.occupationRating.filter(
          r=> r.occupationRating.toLowerCase()== value.occupationRating.toLowerCase())[0];

      this.premium = (this.sumAssure * this._occupationRating.occupationFactor * this.age)/1000*12;
  };
  occupations: IOccupation[]=[
      {occupationName:'Cleaner',occupationRating :'Light Manual'},
      {occupationName:"Doctor",occupationRating:"Professional"},
      {occupationName:'Auther',occupationRating :'White collar'},
      {occupationName:"Farmer",occupationRating:'Heavy Manual'},
      {occupationName:'Mechanic',occupationRating :'Heavy Manual'},
      {occupationName:"Florist",occupationRating:'Light Manual'},
  ];
  occupationRating : IOccupationRating[]=[
      {occupationRating:'Light Manual', occupationFactor:1.5},
      {occupationRating:'Professional', occupationFactor:1.0},
      {occupationRating:'Heavy Manual', occupationFactor:1.75},
      {occupationRating:'White collar', occupationFactor:1.25}      
  ];
}
