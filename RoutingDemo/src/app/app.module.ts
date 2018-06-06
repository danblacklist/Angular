import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeFurnitureDetailsComponent } from './home-furniture-details/home-furniture-details.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeFurnitureDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
