import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FurnitureListComponent } from './furniture-list/furniture-list.component';
import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
import { FurnitureService } from './furniture.service';
import { HttpClientModule } from '@angular/common/http';

import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';



@NgModule({
  declarations: [
    AppComponent,
    FurnitureListComponent,
    FurnitureDetailsComponent
  ],
  imports: [
    BrowserModule,DataViewModule,PanelModule,HttpClientModule
  ],
  providers: [FurnitureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
