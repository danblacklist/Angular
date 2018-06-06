import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFurniture } from './furniture';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  private _url:string ="/assets/data/furniture.json";

  constructor(private http: HttpClient) { }

  public getFurniture(): Observable<IFurniture[]>{
    return this.http.get<IFurniture[]>(this._url);
  }
}
