import { Component, OnInit } from '@angular/core';
import { FurnitureService } from 'src/app/furniture.service';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {

  constructor(private _furnitureService: FurnitureService) { }

  public furnitures = [];

  ngOnInit() {
    this.furnitures=this._furnitureService.getFurniture();
  }

}