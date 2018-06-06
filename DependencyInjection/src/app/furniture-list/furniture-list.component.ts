import { Component, OnInit } from '@angular/core';
import { FurnitureService } from 'src/app/furniture.service';
import {PanelModule} from 'primeng/panel';


@Component({
  selector: 'app-furniture-list',
  templateUrl: './furniture-list.component.html',
  styleUrls: ['./furniture-list.component.css']
})
export class FurnitureListComponent implements OnInit {

  public furnitures = [];

  constructor(private _furnitureService: FurnitureService) { }

  

  ngOnInit() {
    this._furnitureService.getFurniture()
        .subscribe(data => this.furnitures = data);
  }

}
