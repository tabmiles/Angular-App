import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query: string;
  pets: any;

  showPet(item: { name: string; }) {
    this.query = item.name;
  }

  constructor() {
    this.query = '';
    this.pets = [
      {
        "name": "Coconut",
        "breed": "Chihuahua",
        "age": "6"
      },
      {
        "name": "Ollie",
        "breed": "Boxer",
        "age": "8"
      },
      {
        "name": "Sofie",
        "breed": "Dachshund",
        "age": "9"
      }
    ];
  }
}