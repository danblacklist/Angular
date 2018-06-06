import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeFurnitureListComponent} from './home-furniture-list/home-furniture-list.component';
import { OfficeFurnitureListComponent } from './office-furniture-list/office-furniture-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeFurnitureDetailsComponent } from './home-furniture-details/home-furniture-details.component';

const routes: Routes = [
  {"path":"", redirectTo:'/home', pathMatch:"full"},
  {"path":"home", component: HomeFurnitureListComponent},
  {"path":"home/:id", component: HomeFurnitureDetailsComponent},
  {"path":"office", component: OfficeFurnitureListComponent},
  {"path":"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ HomeFurnitureListComponent, 
                                  OfficeFurnitureListComponent, 
                                  PageNotFoundComponent, 
                                  HomeFurnitureDetailsComponent ]