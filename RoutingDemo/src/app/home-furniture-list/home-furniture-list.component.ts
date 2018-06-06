import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-furniture-list',
  template: `
    <ul>  
      <li (click)="onSelect(hf)" *ngFor="let hf of homeFurniture">
        <span>{{hf.id}}</span>{{hf.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class HomeFurnitureListComponent implements OnInit {

  public homeFurniture = [
    {"id":1,"name":"Wardrobe","price":20000,"dimensions":[45,52,20]},
    {"id":2,"name":"Bed","price":18000,"dimensions":[120,60,40]},
    {"id":3,"name":"Chair","price":5000,"dimensions":[20,30,60]},
    {"id":4,"name":"Dining Table","price":35000,"dimensions":[30,40,50]}
];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(hf) {
    this.router.navigate(['/home',hf.id]);

  }

}
