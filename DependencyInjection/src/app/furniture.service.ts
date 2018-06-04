import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor() { }

  public getFurniture(){
    return [
      {"name":"Wardrobe","price":20000,"dimensions":[45,52,20]},
      {"name":"Bed","price":18000,"dimensions":[120,60,40]},
      {"name":"Chair","price":20000,"dimensions":[20,30,60]}
    ];
  }
}
