import { Component, OnInit } from '@angular/core';
import { FurnitureService } from 'src/app/furniture.service';

@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.css']
})
export class FurnitureListComponent implements OnInit {

  public furnitures = [];

  constructor(private _furnitureService: FurnitureService) { }

  

  ngOnInit() {
    this.furnitures=this._furnitureService.getFurniture();
  }

}
