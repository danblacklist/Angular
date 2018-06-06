import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IFurniture } from './furniture';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  private _url:string ="/assets/data/furniture.json";

  constructor(private http: HttpClient) { }

  public getFurniture(): Observable<IFurniture[]>{
    return this.http.get<IFurniture[]>(this._url)
                    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }
}
