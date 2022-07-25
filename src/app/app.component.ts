import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  query: string;
  pets: any;
  currentPet: any;

  showPet(item: any) {
    this.query = item.name;
    item.highlight = !item.highlight;
    this.currentPet = item;
  }

  constructor(private http: HttpClient ) {
    this.query = '';
  }

  ngOnInit(): void {
      this.http.get<Object>('../assets/data.json').subscribe(data => {this.pets = data;});
  }
}