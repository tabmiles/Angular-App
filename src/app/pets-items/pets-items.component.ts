import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pets-items',
  templateUrl: './pets-items.component.html',
  styleUrls: ['./pets-items.component.css']
})
export class PetsItemsComponent implements OnInit {
  @Input() pet:any;

  constructor() { }

  ngOnInit(): void {
  }

}
