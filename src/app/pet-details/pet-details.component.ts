import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  @Input() pet:any;

  constructor() { }

  ngOnInit(): void {
  }

}
