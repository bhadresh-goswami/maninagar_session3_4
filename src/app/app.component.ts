import { Component } from '@angular/core';
import { Person } from './helper/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appTest';

  a = 100;
  b = 20;
  tab = 1;

  isOk = false;

  names = [
    "bhavini", "hitesh", "satish", "bhadresh"
  ];

  persons: Person[] = [
    {
      name: "bhadresh",
      country: "IN"
    },
    {
      name: "hitesh",
      country: "USA"
    },
    {
      name: "bhavesh",
      country: "IN"
    },
    {
      name: "hiren",
      country: "USA"
    },
    {
      name: "bhavik",
      country: "CA"
    },
    {
      name: "saroj",
      country: "AUS"
    },
    {
      name: "bhavika",
      country: "CA"
    },
    {
      name: "asish",
      country: "AUS"
    },
    {
      name: "asish",
      country: "BNG"
    }
  ]
  bdate = new Date(1988, 3, 15);

  personDetails:Object = {
    name:'bhadresh gosai',
    address:{
      country:'India',
      state:'Gujrat',
      city:'Ahmedabad',
      line1:'Xyz',
      line2:'abc'
    },
    gender:'Male',
    tech:'Angular'
  }
  greeting: Promise<string>|null = null;
  arrived: boolean = false;
 
  private resolve: Function|null = null;

  constructor(){
    this.reset();
  }
  
  reset() {
    this.arrived = false;
    this.greeting = new Promise<string>((resolve, reject) => { this.resolve = resolve; });
  }
 
  clicked() {
    if (this.arrived) {
      this.reset();
    } else {
      this.resolve !('hi there!');
      this.arrived = true;
    }
  }

  onclick() {
    if (this.isOk) {
      this.isOk = false;
    }
    else {
      this.isOk = true;
    }
  }

  getColor(country: string): string {
    var color: string = "red";
    switch (country) {
      case "IN":
        color = "Green";
        break;

      case "USA":
        color = "Gray";
        break;

      case "CA":
        color = "Black";
        break;

      case "AUS":
        color = "Silver";
        break;

      default:
        color = "red";
        break;
    }
    return color;
  }



}
