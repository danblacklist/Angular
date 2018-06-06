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
  public errorMsg;

  ngOnInit() {
    this._furnitureService.getFurniture()
        .subscribe(data => this.furnitures = data,
                   error => this.errorMsg = error); 
  }
}